import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Compass, Shield, ArrowLeft } from 'lucide-react';

export default function AuDHDLandingPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <header className="p-6 border-b bg-white">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-xl text-primary">
                        <Brain className="w-8 h-8" />
                        <span>AuDHD Explorer</span>
                    </div>
                    <nav>
                        <Link href="/">
                            <Button variant="ghost" className="gap-2">
                                <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                            </Button>
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-16 flex flex-col items-center text-center max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8">
                    <Compass className="w-4 h-4" />
                    <span>Mapping the Neurodivergent Landscape</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                    Understanding Your <span className="text-primary">AuDHD</span> Mind
                </h1>

                <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
                    A comprehensive, gamified impact assessment for adults diagnosed with Autism and ADHD.
                    Discover your unique profile, identify functional impacts, and create an actionable plan for growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link href="/assessments/audhd/start">
                        <Button size="lg" className="w-full sm:w-auto gap-2 text-lg h-14 px-8 btn-primary">
                            Start Your Journey <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-24 text-left">
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Safe & Private</h3>
                        <p className="text-slate-600">
                            Your data never leaves your device. Progress is saved locally in your browser.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                            <Brain className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Comprehensive</h3>
                        <p className="text-slate-600">
                            Covers 8 key domains including Emotional Regulation, Sensory Processing, and Executive Function.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                            <Compass className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Actionable</h3>
                        <p className="text-slate-600">
                            Generate a detailed PDF report for your therapist with specific insights and strategies.
                        </p>
                    </div>
                </div>
            </main>

            <footer className="py-8 text-center text-slate-500 text-sm border-t bg-white">
                <p>© 2024 AuDHD Explorer. For educational purposes only. Not a medical diagnosis.</p>
            </footer>
        </div>
    );
}
