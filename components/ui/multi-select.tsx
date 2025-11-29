import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface MultiSelectOption {
    value: string | number;
    label: string;
}

interface MultiSelectProps {
    options: MultiSelectOption[];
    value?: (string | number)[];
    onChange: (value: (string | number)[]) => void;
    className?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
    options,
    value = [],
    onChange,
    className
}) => {
    // Ensure value is always an array to prevent runtime crashes
    const safeValue = Array.isArray(value) ? value : [];

    const toggleOption = (optionValue: string | number) => {
        const newValue = safeValue.includes(optionValue)
            ? safeValue.filter(v => v !== optionValue)
            : [...safeValue, optionValue];
        onChange(newValue);
    };

    return (
        <div className={cn("space-y-2", className)}>
            {options.map((option) => {
                const isSelected = safeValue.includes(option.value);
                return (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => toggleOption(option.value)}
                        className={cn(
                            "w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 text-left flex items-center gap-3",
                            isSelected
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-slate-200 hover:border-primary/50 hover:bg-slate-50 text-slate-700"
                        )}
                    >
                        <div
                            className={cn(
                                "w-5 h-5 rounded border-2 flex items-center justify-center transition-all",
                                isSelected
                                    ? "border-primary bg-primary"
                                    : "border-slate-300"
                            )}
                        >
                            {isSelected && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="flex-1">{option.label}</span>
                    </button>
                );
            })}
        </div>
    );
};
