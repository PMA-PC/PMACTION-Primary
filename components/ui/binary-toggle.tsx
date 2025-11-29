import React from 'react';
import { cn } from '@/lib/utils';

interface BinaryToggleProps {
    value?: boolean;
    onChange: (value: boolean) => void;
    className?: string;
}

export const BinaryToggle: React.FC<BinaryToggleProps> = ({
    value,
    onChange,
    className
}) => {
    return (
        <div className={cn("flex gap-3", className)}>
            <button
                type="button"
                onClick={() => onChange(true)}
                className={cn(
                    "flex-1 px-6 py-4 rounded-xl border-2 transition-all duration-200 font-medium",
                    value === true
                        ? "border-primary bg-primary/5 ring-2 ring-primary ring-offset-2 text-primary"
                        : "border-slate-200 hover:border-primary/50 hover:bg-slate-50 text-slate-700"
                )}
            >
                Yes
            </button>
            <button
                type="button"
                onClick={() => onChange(false)}
                className={cn(
                    "flex-1 px-6 py-4 rounded-xl border-2 transition-all duration-200 font-medium",
                    value === false
                        ? "border-primary bg-primary/5 ring-2 ring-primary ring-offset-2 text-primary"
                        : "border-slate-200 hover:border-primary/50 hover:bg-slate-50 text-slate-700"
                )}
            >
                No
            </button>
        </div>
    );
};
