'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BinaryToggle } from '@/components/ui/binary-toggle';
import { MultiSelect } from '@/components/ui/multi-select';
import { DropdownSelect } from '@/components/ui/dropdown-select';
import { TextAreaInput } from '@/components/ui/text-area-input';
import { questions } from '@/data/all-questions';
import { type Question } from '@/data/types';
import { GamificationOverlay } from '@/components/GamificationOverlay';
import { MindfulnessBreak } from '@/components/MindfulnessBreak';
import { ArrowRight, ArrowLeft, Save } from 'lucide-react';
import { useRouter } from 'next/navigation';

type AnswerValue = number | boolean | string | (string | number)[];

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean, error: Error | null }> {
    constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("AssessmentEngine Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 text-center">
                    <h2 className="text-xl font-bold text-red-600 mb-4">Something went wrong.</h2>
                    <p className="text-slate-600 mb-4">
                        We encountered an unexpected error. Your progress has been saved.
                    </p>
                    <p className="text-xs text-slate-400 mb-6 font-mono bg-slate-100 p-2 rounded">
                        {this.state.error?.message}
                    </p>
                    <Button onClick={() => window.location.reload()} className="btn-primary">
                        Reload Assessment
                    </Button>
                </div>
            );
        }

        return this.props.children;
    }
}

const AssessmentEngineContent = () => {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
    const [isClient, setIsClient] = useState(false);
    const [showSectionIntro, setShowSectionIntro] = useState(true);
    const [showMindfulness, setShowMindfulness] = useState(false);
    const [isNavigating, setIsNavigating] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const saved = localStorage.getItem('audhd-assessment-progress');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed && typeof parsed === 'object') {
                    const { index, answers: savedAnswers } = parsed;

                    if (typeof index === 'number' && index >= 0 && index < questions.length) {
                        setCurrentIndex(index);

                        // Only restore answers if they are a valid object
                        if (savedAnswers && typeof savedAnswers === 'object' && !Array.isArray(savedAnswers)) {
                            setAnswers(savedAnswers);
                        }

                        // If resuming, don't show intro unless it's the very start of a section
                        const currentQ = questions[index];
                        const prevQ = index > 0 ? questions[index - 1] : null;
                        if (prevQ && currentQ && currentQ.section !== prevQ.section) {
                            setShowSectionIntro(true);
                        } else {
                            setShowSectionIntro(false);
                        }
                    }
                }
            } catch (e) {
                console.error("Failed to load progress:", e);
                localStorage.removeItem('audhd-assessment-progress');
            }
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            localStorage.setItem(
                'audhd-assessment-progress',
                JSON.stringify({ index: currentIndex, answers })
            );
        }
    }, [currentIndex, answers, isClient]);

    const currentQuestion = questions[currentIndex];

    if (!questions || questions.length === 0) {
        return <div className="p-8 text-center">No questions available. Please check the data configuration.</div>;
    }

    if (!currentQuestion) {
        // Fallback if index is out of bounds, reset to 0
        if (currentIndex >= questions.length) {
            setCurrentIndex(0);
            return <div className="p-8 text-center">Resetting assessment state...</div>;
        }
        return <div className="p-8 text-center">Loading question...</div>;
    }

    const totalQuestions = questions.length;
    const progress = ((currentIndex + 1) / totalQuestions) * 100;

    // Section definitions
    const sections = {
        1: { title: 'Part 1: Clinical Baseline', description: 'Standard screenings for ADHD and Autism traits.' },
        2: { title: 'Part 2: ADHD Deep Dive', description: 'Exploring specific ADHD subtypes and emotional impacts.' },
        3: { title: 'Part 3: Autism & Functional Impact', description: 'Detailed look at sensory, social, and communication experiences.' },
        4: { title: 'Part 4: Masking & Camouflaging', description: 'Understanding how you adapt to social expectations.' },
        5: { title: 'Part 5: Executive Function & Insights', description: 'Reviewing daily management skills and personal reflections.' }
    };

    const currentSectionInfo = sections[currentQuestion.section as keyof typeof sections] || sections[1];

    const handleAnswer = (value: AnswerValue) => {
        setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
    };

    const handleNext = () => {
        if (isNavigating) return;

        if (currentIndex < questions.length - 1) {
            setIsNavigating(true);
            const nextIndex = currentIndex + 1;
            const nextQuestion = questions[nextIndex];

            if (!nextQuestion) {
                console.error("Next question is undefined at index", nextIndex);
                return;
            }

            // Check if we are entering a new section
            if (nextQuestion.section !== currentQuestion.section) {
                setShowMindfulness(true);
                setShowSectionIntro(true);
            }

            setTimeout(() => {
                setCurrentIndex(nextIndex);
                setIsNavigating(false);
            }, 300);
        } else {
            router.push('/assessments/audhd/report');
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            const prevQuestion = questions[prevIndex];

            // Check if we are going back to a previous section
            if (prevQuestion.section !== currentQuestion.section) {
                setShowSectionIntro(true);
            }

            setCurrentIndex(prevIndex);
        }
    };

    const getLevel = (prog: number) => {
        if (prog < 20) return 'Novice Explorer';
        if (prog < 40) return 'Curious Cartographer';
        if (prog < 60) return 'Pattern Seeker';
        if (prog < 80) return 'Deep Diver';
        return 'Master of Mind';
    };

    const renderQuestionInput = () => {
        const currentAnswer = answers[currentQuestion.id];

        switch (currentQuestion.type) {
            case 'likert':
                const options = currentQuestion.options || [
                    { value: 1, label: 'Not at all' },
                    { value: 2, label: 'Rarely' },
                    { value: 3, label: 'Sometimes' },
                    { value: 4, label: 'Often' },
                    { value: 5, label: 'Very Often' }
                ];

                return (
                    <div className={`grid grid-cols-1 md:grid-cols-${options.length} gap-3 mt-8`}>
                        {options.map((opt) => (
                            <button
                                key={opt.value}
                                disabled={isNavigating}
                                onClick={() => {
                                    handleAnswer(opt.value);
                                    handleNext();
                                }}
                                className={`
                                    p-4 rounded-xl border-2 transition-all duration-200 text-left md:text-center
                                    ${answers[currentQuestion.id] === opt.value
                                        ? 'border-primary bg-primary/5 ring-2 ring-primary ring-offset-2'
                                        : 'border-slate-200 hover:border-primary/50 hover:bg-slate-50'
                                    }
                                    ${isNavigating ? 'opacity-50 cursor-not-allowed' : ''}
                                `}
                            >
                                <div className="font-bold text-lg mb-1">{opt.value}</div>
                                <div className="text-xs text-muted-foreground">
                                    {opt.label}
                                </div>
                            </button>
                        ))}
                    </div>
                );

            case 'binary':
                return (
                    <BinaryToggle
                        value={currentAnswer as boolean}
                        onChange={(value) => {
                            handleAnswer(value);
                            handleNext();
                        }}
                    />
                );

            case 'multi-select':
                return (
                    <MultiSelect
                        options={currentQuestion.options || []}
                        value={currentAnswer as (string | number)[]}
                        onChange={handleAnswer}
                    />
                );

            case 'dropdown':
                return (
                    <DropdownSelect
                        options={currentQuestion.options || []}
                        value={currentAnswer as string | number}
                        onChange={handleAnswer}
                    />
                );

            case 'text':
                return (
                    <TextAreaInput
                        value={currentAnswer as string}
                        onChange={handleAnswer}
                        placeholder="Share your thoughts, experiences, or examples..."
                    />
                );

            default:
                return null;
        }
    };

    const canProceed = () => {
        const answer = answers[currentQuestion.id];
        if (currentQuestion.type === 'text') return true; // Text is optional
        if (currentQuestion.type === 'multi-select') return Array.isArray(answer) && answer.length > 0;
        return answer !== undefined && answer !== null;
    };

    if (!isClient) return <div className="p-8 text-center">Loading your journey...</div>;

    if (showMindfulness) {
        return <MindfulnessBreak onComplete={() => setShowMindfulness(false)} />;
    }

    if (showSectionIntro) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 animate-fadeIn">
                <Card className="max-w-2xl w-full shadow-xl border-primary/20">
                    <CardHeader className="text-center pb-2">
                        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl font-bold text-primary">{currentQuestion.section}</span>
                        </div>
                        <CardTitle className="text-3xl">{currentSectionInfo.title}</CardTitle>
                        <CardDescription className="text-xl mt-2">{currentSectionInfo.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-6 pt-6">
                        <p className="text-slate-600">
                            This section contains questions designed to explore specific aspects of your neurodivergent experience.
                            Take your time and answer as honestly as possible.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" onClick={() => setShowSectionIntro(false)} className="gap-2 btn-primary">
                                Start Section <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-24 md:pb-0">
            <GamificationOverlay progress={progress} currentLevel={getLevel(progress)} />

            <main className="container mx-auto max-w-3xl p-4 md:p-8">
                <div className="mb-8 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                        {currentSectionInfo.title}
                    </span>
                    <div className="flex justify-center gap-2 mt-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                            {currentQuestion.category}
                        </span>
                        {currentQuestion.subcategory && (
                            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                                {currentQuestion.subcategory}
                            </span>
                        )}
                    </div>
                </div>

                <Card className="border-2 border-primary/10 shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl leading-tight">
                            {currentQuestion.text}
                        </CardTitle>
                        {currentQuestion.definition && (
                            <CardDescription className="text-lg mt-4">
                                {currentQuestion.definition}
                            </CardDescription>
                        )}
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {currentQuestion.example && (
                            <div className="bg-slate-100 p-4 rounded-lg border-l-4 border-primary">
                                <p className="italic text-slate-700">
                                    <span className="font-semibold not-italic block mb-1 text-primary">Example:</span>
                                    "{currentQuestion.example}"
                                </p>
                            </div>
                        )}

                        {renderQuestionInput()}
                    </CardContent>
                    <CardFooter className="flex justify-between border-t bg-slate-50/50 p-6">
                        <Button
                            variant="ghost"
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                            className="gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" /> Previous
                        </Button>
                        <div className="text-sm text-muted-foreground">
                            Question {currentIndex + 1} of {totalQuestions}
                        </div>
                        {(currentQuestion.type === 'multi-select' || currentQuestion.type === 'dropdown' || currentQuestion.type === 'text') && (
                            <Button
                                onClick={handleNext}
                                disabled={!canProceed()}
                                className="gap-2 btn-primary"
                            >
                                Next <ArrowRight className="w-4 h-4" />
                            </Button>
                        )}
                    </CardFooter>
                </Card>

                <div className="mt-8 flex justify-center gap-4">
                    <Button variant="outline" className="gap-2" onClick={() => {
                        localStorage.setItem('audhd-assessment-progress', JSON.stringify({ index: currentIndex, answers }));
                        alert('Progress saved!');
                    }}>
                        <Save className="w-4 h-4" /> Save for Later
                    </Button>
                </div>

                <footer className="mt-12 text-center text-sm text-muted-foreground">
                    <p>PMAction AuDHD Assessment v1.1.0</p>
                    <p>&copy; {new Date().getFullYear()} PMAction. All rights reserved.</p>
                </footer>
            </main>
        </div>
    );
};

export const AssessmentEngine = () => {
    return (
        <ErrorBoundary>
            <AssessmentEngineContent />
        </ErrorBoundary>
    );
};
