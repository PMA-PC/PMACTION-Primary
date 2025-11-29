'use client';

import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Trophy, Map, Battery } from 'lucide-react';

interface GamificationOverlayProps {
    progress: number;
    currentLevel: string;
    streak?: number;
}

export const GamificationOverlay: React.FC<GamificationOverlayProps> = ({
    progress,
    currentLevel,
    streak = 1,
}) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t p-4 shadow-lg z-50 md:static md:border-none md:shadow-none md:bg-transparent md:mb-8">
            <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-4">
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="p-2 bg-primary/10 rounded-full">
                        <Map className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground">Current Rank</p>
                        <h3 className="font-bold text-lg text-primary">{currentLevel}</h3>
                    </div>
                </div>

                <div className="flex-1 w-full flex flex-col gap-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Exploration Progress</span>
                        <span className="font-medium">{Math.round(progress)}%</span>
                    </div>
                    <div className="progress-container">
                        <div
                            className="progress-bar progress-bar-animated"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                        <Trophy className="w-4 h-4" />
                        <span>Streak: {streak} Days</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        <Battery className="w-4 h-4" />
                        <span>Energy: High</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
