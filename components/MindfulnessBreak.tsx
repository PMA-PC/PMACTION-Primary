import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Wind, ArrowRight } from 'lucide-react';

interface MindfulnessBreakProps {
    onComplete: () => void;
    duration?: number; // Duration in seconds before "Continue" becomes active (optional)
}

export const MindfulnessBreak: React.FC<MindfulnessBreakProps> = ({ onComplete, duration = 5 }) => {
    const [canContinue, setCanContinue] = useState(false);
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setCanContinue(true);
        }
    }, [timeLeft]);

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 animate-fadeIn">
            <Card className="max-w-md w-full glass border-none shadow-lg text-center relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

                <CardContent className="pt-12 pb-8 space-y-8">
                    <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
                        {/* Breathing Animation Circles */}
                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
                        <div className="absolute inset-4 bg-primary/30 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                        <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center shadow-sm z-10">
                            <Wind className="w-8 h-8 text-primary animate-float" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold gradient-text">Take a Deep Breath</h2>
                        <p className="text-slate-600">
                            You've completed a significant section. Let's pause for a moment to reset before continuing.
                        </p>
                    </div>

                    <div className="p-4 bg-white/50 rounded-xl border border-white/60">
                        <p className="text-sm font-medium text-primary/80 italic">
                            "Inhale deeply... hold... and exhale slowly."
                        </p>
                    </div>

                    <div className="pt-4">
                        <Button
                            onClick={onComplete}
                            disabled={!canContinue}
                            className={`w-full gap-2 transition-all duration-500 ${canContinue ? 'btn-primary' : 'opacity-50 cursor-not-allowed'}`}
                        >
                            {canContinue ? (
                                <>Continue Journey <ArrowRight className="w-4 h-4" /></>
                            ) : (
                                <span className="text-xs">Resuming in {timeLeft}s...</span>
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
