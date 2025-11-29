import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Activity, BookOpen, LayoutDashboard, Settings, User } from 'lucide-react';

export default function PMActionDashboard() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Top Navigation */}
            <header className="bg-white border-b sticky top-0 z-10">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-xl text-primary">
                        <LayoutDashboard className="w-6 h-6" />
                        <span>PMAction Platform</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                            <Settings className="w-5 h-5 text-slate-500" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <User className="w-5 h-5 text-slate-500" />
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">Welcome back, User</h1>
                    <p className="text-slate-500 mt-1">Here is your personal growth dashboard.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Assessments Module */}
                    <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2 text-primary">
                                <Brain className="w-6 h-6" />
                            </div>
                            <CardTitle>Assessments</CardTitle>
                            <CardDescription>Discover your neurodivergent profile.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="p-3 bg-slate-50 rounded-lg border">
                                    <h4 className="font-semibold text-sm mb-1">AuDHD Impact Assessment</h4>
                                    <p className="text-xs text-slate-500 mb-3">Comprehensive screening for Autism & ADHD traits.</p>
                                    <Link href="/assessments/audhd">
                                        <Button size="sm" className="w-full btn-primary">Start Assessment</Button>
                                    </Link>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-lg border opacity-60">
                                    <h4 className="font-semibold text-sm mb-1">Executive Function (Coming Soon)</h4>
                                    <p className="text-xs text-slate-500">Deep dive into daily management skills.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Journal Module (Placeholder) */}
                    <Card className="shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2 text-blue-600">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <CardTitle>Journal</CardTitle>
                            <CardDescription>Track your mood and daily experiences.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-center h-32 bg-slate-50 rounded-lg border border-dashed">
                                <span className="text-sm text-slate-400">Module Coming Soon</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Habits Module (Placeholder) */}
                    <Card className="shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2 text-green-600">
                                <Activity className="w-6 h-6" />
                            </div>
                            <CardTitle>Habits</CardTitle>
                            <CardDescription>Build and maintain healthy routines.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-center h-32 bg-slate-50 rounded-lg border border-dashed">
                                <span className="text-sm text-slate-400">Module Coming Soon</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
