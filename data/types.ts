export type QuestionType = 'likert' | 'binary' | 'text' | 'multi-select' | 'dropdown';

export type QuestionOption = {
    value: number | string;
    label: string;
};

export type Question = {
    id: string;
    text: string;
    category: string;
    subcategory?: string;
    definition?: string;
    example?: string;
    type: QuestionType;
    options?: QuestionOption[]; // For multi-select and dropdown
    section?: number; // 1-5 for the 5-part structure
};
