import React from 'react';
import { cn } from '@/lib/utils';

interface TextAreaInputProps {
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    maxLength?: number;
}

export const TextAreaInput: React.FC<TextAreaInputProps> = ({
    value = '',
    onChange,
    placeholder = "Share your thoughts...",
    className,
    maxLength = 1000
}) => {
    return (
        <div className={cn("space-y-2", className)}>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                maxLength={maxLength}
                rows={6}
                className={cn(
                    "w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 resize-none",
                    "border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    "placeholder:text-slate-400 text-slate-700",
                    "focus:outline-none"
                )}
            />
            <div className="flex justify-between text-sm text-slate-500">
                <span>Optional - This will be included in your report for your therapist</span>
                <span>{value.length} / {maxLength}</span>
            </div>
        </div>
    );
};
