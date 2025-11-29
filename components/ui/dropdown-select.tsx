import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface DropdownOption {
    value: string | number;
    label: string;
}

interface DropdownSelectProps {
    options: DropdownOption[];
    value?: string | number;
    onChange: (value: string | number) => void;
    placeholder?: string;
    className?: string;
}

export const DropdownSelect: React.FC<DropdownSelectProps> = ({
    options,
    value,
    onChange,
    placeholder = "Select an option...",
    className
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div className={cn("relative", className)}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 text-left flex items-center justify-between",
                    value
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-slate-200 hover:border-primary/50 hover:bg-slate-50 text-slate-500"
                )}
            >
                <span>{selectedOption?.label || placeholder}</span>
                <ChevronDown className={cn(
                    "w-5 h-5 transition-transform",
                    isOpen && "rotate-180"
                )} />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute z-20 w-full mt-2 bg-white border-2 border-slate-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={cn(
                                    "w-full px-4 py-3 text-left transition-colors hover:bg-slate-50",
                                    value === option.value && "bg-primary/5 text-primary font-medium"
                                )}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
