'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { questions } from '@/data/all-questions';
import { type Question } from '@/data/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Printer, Download, ArrowLeft, Brain, Sparkles } from 'lucide-react';
import Link from 'next/link';

type CategoryScore = {
    category: string;
    score: number;
    total: number;
    percentage: number;
    traits: { id: string; score: number; text: string }[];
};

type ScoredQuestion = Question & { score: number };

export default function ReportPage() {
    const [scores, setScores] = useState<CategoryScore[]>([]);
    const [adhdScores, setAdhdScores] = useState<CategoryScore[]>([]);
    const [topTraits, setTopTraits] = useState<ScoredQuestion[]>([]);
    const [isClient, setIsClient] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: 'AuDHD-Impact-Assessment-Report',
    });

    useEffect(() => {
        setIsClient(true);
        const saved = localStorage.getItem('audhd-assessment-progress');
        if (saved) {
            const { answers } = JSON.parse(saved);
            calculateScores(answers);
        }
    }, []);

    const getNumericScore = (value: any): number => {
        if (typeof value === 'number') return value;
        if (typeof value === 'boolean') return value ? 1 : 0;
        if (Array.isArray(value)) return value.length;
        return 0;
    };

    const calculateScores = (answers: Record<string, any>) => {
        const categoryMap = new Map<string, { sum: number; count: number; traits: any[] }>();
        const adhdMap = new Map<string, { sum: number; count: number; traits: any[] }>();
        const allTraits: any[] = [];

        questions.forEach((q: Question) => {
            const rawValue = answers[q.id];
            const score = getNumericScore(rawValue);
            if (score > 0) {
                allTraits.push({ ...q, score });
            }

            if (q.category === 'ADHD Type') {
                const key = q.subcategory || 'General';
                const current = adhdMap.get(key) || { sum: 0, count: 0, traits: [] };
                current.sum += score;
                current.count += 1;
                current.traits.push({ id: q.id, score, text: q.text });
                adhdMap.set(key, current);
            } else {
                const key = q.category;
                const current = categoryMap.get(key) || { sum: 0, count: 0, traits: [] };
                current.sum += score;
                current.count += 1;
                current.traits.push({ id: q.id, score, text: q.text });
                categoryMap.set(key, current);
            }
        });

        const processedScores = Array.from(categoryMap.entries()).map(([category, data]) => ({
            category,
            score: data.sum,
            total: data.count * 4,
            percentage: Math.round((data.sum / (data.count * 4)) * 100),
            traits: data.traits.sort((a: any, b: any) => b.score - a.score),
        }));

        const processedAdhdScores = Array.from(adhdMap.entries()).map(([category, data]) => ({
            category,
            score: data.sum,
            total: data.count * 4,
            percentage: Math.round((data.sum / (data.count * 4)) * 100),
            traits: data.traits.sort((a: any, b: any) => b.score - a.score),
        }));

        setScores(processedScores);
        setAdhdScores(processedAdhdScores);
        setTopTraits(allTraits.sort((a: any, b: any) => b.score - a.score).slice(0, 5));
    };

    if (!isClient) return <div className="p-8 text-center">Generating your insights...</div>;

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 no-print">
                    <Link href="/">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Button>
                    </Link>
                    <div className="flex gap-2">
                        <Button onClick={() => handlePrint()} className="gap-2">
                            <Printer className="w-4 h-4" /> Print / Save as PDF
                        </Button>
                    </div>
                </div>

                <div ref={componentRef} className="bg-white p-8 md:p-12 rounded-xl shadow-lg print:shadow-none print:p-0">
                    <header className="text-center mb-12 border-b pb-8">
                        <div className="flex items-center justify-center gap-3 text-primary mb-4">
                            <Brain className="w-10 h-10" />
                            <span className="text-2xl font-bold">AuDHD Explorer</span>
                        </div>
                        <h1 className="text-4xl font-bold text-slate-900 mb-2">Impact Assessment Report</h1>
                        <p className="text-slate-500">Generated on {new Date().toLocaleDateString()}</p>
                        <div className="mt-4 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm inline-block max-w-2xl">
                            <strong>Note for Therapists:</strong> This report reflects the individual's self-reported experience of functional impact across 8 neurodivergent domains and 7 ADHD subtypes. It is intended to guide support planning, not to diagnose.
                        </div>
                    </header>

                    <div className="grid md:grid-cols-2 gap-12 mb-12 page-break">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Sparkles className="w-6 h-6 text-purple-500" />
                                Autism / Impact Profile
                            </h2>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={scores}>
                                        <PolarGrid />
                                        <PolarAngleAxis dataKey="category" tick={{ fontSize: 12 }} />
                                        <PolarRadiusAxis angle={30} domain={[0, 100]} />
                                        <Radar
                                            name="Impact"
                                            dataKey="percentage"
                                            stroke="#16a34a"
                                            fill="#16a34a"
                                            fillOpacity={0.5}
                                        />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Brain className="w-6 h-6 text-orange-500" />
                                ADHD Type Profile
                            </h2>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={adhdScores} layout="vertical" margin={{ left: 40 }}>
                                        <XAxis type="number" domain={[0, 100]} hide />
                                        <YAxis dataKey="category" type="category" width={100} tick={{ fontSize: 12 }} />
                                        <Tooltip />
                                        <Bar dataKey="percentage" fill="#f97316" radius={[0, 4, 4, 0]} barSize={20} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Top Impact Areas</h2>
                        <div className="grid gap-4">
                            {topTraits.map((trait, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border">
                                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{trait.text}</h3>
                                        <p className="text-slate-600 text-sm mb-2">{trait.definition}</p>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <span className="px-2 py-0.5 bg-white border rounded text-xs uppercase tracking-wider">
                                                {trait.category}
                                            </span>
                                            <span>Impact Score: {trait.score}/5</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12 page-break">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Detailed Category Breakdown</h2>
                        <div className="grid gap-8">
                            {scores.map((cat) => (
                                <Card key={cat.category} className="break-inside-avoid">
                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-center">
                                            <CardTitle>{cat.category}</CardTitle>
                                            <span className="text-2xl font-bold text-primary">{cat.percentage}%</span>
                                        </div>
                                        <Progress value={cat.percentage} className="h-2" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Highest Impact</h4>
                                                <ul className="space-y-1 text-sm">
                                                    {cat.traits.slice(0, 3).map((t) => (
                                                        <li key={t.id} className="flex justify-between">
                                                            <span>{t.text}</span>
                                                            <span className="font-medium">{t.score}/5</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Lowest Impact</h4>
                                                <ul className="space-y-1 text-sm">
                                                    {cat.traits.slice(-3).reverse().map((t) => (
                                                        <li key={t.id} className="flex justify-between text-slate-500">
                                                            <span>{t.text}</span>
                                                            <span className="font-medium">{t.score}/5</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="bg-primary/5 p-8 rounded-xl border border-primary/20 break-inside-avoid">
                        <h2 className="text-2xl font-bold mb-4 text-primary">Therapist Action Plan</h2>
                        <p className="mb-6 text-slate-700">
                            Based on the high-impact areas identified, consider the following focus areas for therapy and personal growth:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <h3 className="font-bold">Immediate Support</h3>
                                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                                    <li>Review "Top Impact Areas" to identify immediate stressors.</li>
                                    <li>Develop sensory regulation strategies for high-scoring Sensory domains.</li>
                                    <li>Create "safe scripts" for high-anxiety Communication scenarios.</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold">Long-term Growth</h3>
                                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                                    <li>Work on self-advocacy skills related to identified needs.</li>
                                    <li>Explore "unmasking" in safe environments to reduce exhaustion.</li>
                                    <li>Build executive function scaffolds (visual timers, body doubling) for specific deficits.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
