import { Question } from './types';

export const amenQuestions: Question[] = [
    // Type 1: Classic ADD
    {
        id: 'amen_classic_1',
        text: 'I have a short attention span and am easily distracted.',
        category: 'ADHD Types',
        subcategory: 'Classic ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_classic_2',
        text: 'I am disorganized and have trouble planning ahead.',
        category: 'ADHD Types',
        subcategory: 'Classic ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_classic_3',
        text: 'I am restless and fidgety.',
        category: 'ADHD Types',
        subcategory: 'Classic ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_classic_4',
        text: 'I have trouble following through on instructions.',
        category: 'ADHD Types',
        subcategory: 'Classic ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_classic_5',
        text: 'I am impulsive and act without thinking.',
        category: 'ADHD Types',
        subcategory: 'Classic ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },

    // Type 2: Inattentive ADD
    {
        id: 'amen_inattentive_1',
        text: 'I daydream excessively.',
        category: 'ADHD Types',
        subcategory: 'Inattentive ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_inattentive_2',
        text: 'I complain of being bored.',
        category: 'ADHD Types',
        subcategory: 'Inattentive ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_inattentive_3',
        text: 'I appear unmotivated or apathetic.',
        category: 'ADHD Types',
        subcategory: 'Inattentive ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_inattentive_4',
        text: 'I am tired, sluggish, or slow-moving.',
        category: 'ADHD Types',
        subcategory: 'Inattentive ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_inattentive_5',
        text: 'I seem "spacey" or preoccupied.',
        category: 'ADHD Types',
        subcategory: 'Inattentive ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },

    // Type 3: Overfocused ADD
    {
        id: 'amen_overfocused_1',
        text: 'I worry excessively or needlessly.',
        category: 'ADHD Types',
        subcategory: 'Overfocused ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_overfocused_2',
        text: 'I have trouble shifting attention from one thing to another.',
        category: 'ADHD Types',
        subcategory: 'Overfocused ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_overfocused_3',
        text: 'I tend to hold grudges.',
        category: 'ADHD Types',
        subcategory: 'Overfocused ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_overfocused_4',
        text: 'I have to have things my own way.',
        category: 'ADHD Types',
        subcategory: 'Overfocused ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_overfocused_5',
        text: 'I tend to be argumentative or oppositional.',
        category: 'ADHD Types',
        subcategory: 'Overfocused ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },

    // Type 4: Temporal Lobe ADD
    {
        id: 'amen_temporal_1',
        text: 'I have a short fuse or periods of extreme irritability.',
        category: 'ADHD Types',
        subcategory: 'Temporal Lobe ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_temporal_2',
        text: 'I have periods of misinterpreting comments as negative when they are not.',
        category: 'ADHD Types',
        subcategory: 'Temporal Lobe ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_temporal_3',
        text: 'I have periods of deja vu.',
        category: 'ADHD Types',
        subcategory: 'Temporal Lobe ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_temporal_4',
        text: 'I have headaches or abdominal pain of uncertain origin.',
        category: 'ADHD Types',
        subcategory: 'Temporal Lobe ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_temporal_5a',
        text: 'I have a history of head injury.',
        category: 'ADHD Types',
        subcategory: 'Temporal Lobe ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_temporal_5b',
        text: 'I have a family history of temper problems.',
        category: 'ADHD Types',
        subcategory: 'Temporal Lobe ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },

    // Type 5: Limbic ADD
    {
        id: 'amen_limbic_1',
        text: 'I tend to be moody or sad.',
        category: 'ADHD Types',
        subcategory: 'Limbic ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_limbic_2',
        text: 'I have low energy.',
        category: 'ADHD Types',
        subcategory: 'Limbic ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_limbic_3',
        text: 'I tend to be socially isolated.',
        category: 'ADHD Types',
        subcategory: 'Limbic ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_limbic_4',
        text: 'I have frequent feelings of hopelessness or worthlessness.',
        category: 'ADHD Types',
        subcategory: 'Limbic ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_limbic_5',
        text: 'I have sleep problems (too much or too little).',
        category: 'ADHD Types',
        subcategory: 'Limbic ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },

    // Type 6: Ring of Fire ADD
    {
        id: 'amen_ring_1',
        text: 'I am overly sensitive to noise, light, clothes, or touch.',
        category: 'ADHD Types',
        subcategory: 'Ring of Fire ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_ring_2',
        text: 'I have cyclic mood changes (highs and lows).',
        category: 'ADHD Types',
        subcategory: 'Ring of Fire ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_ring_3',
        text: 'I have inflexible thinking.',
        category: 'ADHD Types',
        subcategory: 'Ring of Fire ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_ring_4',
        text: 'I talk fast and have racing thoughts.',
        category: 'ADHD Types',
        subcategory: 'Ring of Fire ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_ring_5',
        text: 'I tend to be anxious or fearful.',
        category: 'ADHD Types',
        subcategory: 'Ring of Fire ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },

    // Type 7: Anxious ADD
    {
        id: 'amen_anxious_1',
        text: 'I frequently feel anxious or nervous.',
        category: 'ADHD Types',
        subcategory: 'Anxious ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_anxious_2',
        text: 'I have physical symptoms of anxiety (muscle tension, headaches).',
        category: 'ADHD Types',
        subcategory: 'Anxious ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_anxious_3',
        text: 'I tend to predict the worst.',
        category: 'ADHD Types',
        subcategory: 'Anxious ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_anxious_4',
        text: 'I freeze in social situations.',
        category: 'ADHD Types',
        subcategory: 'Anxious ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    },
    {
        id: 'amen_anxious_5',
        text: 'I am easily startled.',
        category: 'ADHD Types',
        subcategory: 'Anxious ADD',
        type: 'likert',
        section: 2,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Frequently' },
            { value: 4, label: 'Very Frequently' }
        ]
    }
];
