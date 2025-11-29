import { Question } from './types';

export const executiveFunctionQuestions: Question[] = [
    // Executive Function Deep Dive
    {
        id: 'ef_1',
        text: 'I have trouble getting started on tasks, even when they are important.',
        category: 'Executive Function',
        subcategory: 'Task Initiation',
        type: 'likert',
        section: 5,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'ef_2',
        text: 'I struggle to keep track of multiple steps in a process.',
        category: 'Executive Function',
        subcategory: 'Working Memory',
        type: 'likert',
        section: 5,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'ef_3',
        text: 'I find it difficult to estimate how long a task will take.',
        category: 'Executive Function',
        subcategory: 'Planning/Time Management',
        type: 'likert',
        section: 5,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'ef_4',
        text: 'I get overwhelmed when I have too many choices.',
        category: 'Executive Function',
        subcategory: 'Decision Making',
        type: 'likert',
        section: 5,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'ef_5',
        text: 'I have trouble switching gears from one activity to another.',
        category: 'Executive Function',
        subcategory: 'Cognitive Flexibility',
        type: 'likert',
        section: 5,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'ef_6',
        text: 'I forget what I was doing in the middle of a task.',
        category: 'Executive Function',
        subcategory: 'Working Memory',
        type: 'likert',
        section: 5,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'ef_7',
        text: 'I struggle to keep my workspace organized.',
        category: 'Executive Function',
        subcategory: 'Organization',
        type: 'likert',
        section: 5,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'ef_8',
        text: 'I have difficulty controlling my impulses.',
        category: 'Executive Function',
        subcategory: 'Inhibition',
        type: 'likert',
        section: 5,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'ef_9',
        text: 'I find it hard to monitor my own progress on a task.',
        category: 'Executive Function',
        subcategory: 'Self-Monitoring',
        type: 'likert',
        section: 5,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'ef_10',
        text: 'I struggle to regulate my emotions when I am frustrated.',
        category: 'Executive Function',
        subcategory: 'Emotional Control',
        type: 'likert',
        section: 5,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'ef_11',
        text: 'Which of the following executive function challenges do you experience most often? (Select all that apply)',
        category: 'Executive Function',
        subcategory: 'Challenges',
        type: 'multi-select',
        section: 5,
        options: [
            { value: 'initiation', label: 'Getting started on tasks' },
            { value: 'focus', label: 'Staying focused' },
            { value: 'memory', label: 'Remembering instructions' },
            { value: 'planning', label: 'Planning and prioritizing' },
            { value: 'organization', label: 'Keeping things organized' },
            { value: 'emotion', label: 'Managing emotions' },
            { value: 'impulse', label: 'Controlling impulses' },
            { value: 'shifting', label: 'Switching between tasks' }
        ]
    },
    {
        id: 'ef_12',
        text: 'What strategies have you found helpful for managing executive function challenges? (Select all that apply)',
        category: 'Executive Function',
        subcategory: 'Strategies',
        type: 'multi-select',
        section: 5,
        options: [
            { value: 'lists', label: 'To-do lists' },
            { value: 'reminders', label: 'Alarms and reminders' },
            { value: 'routines', label: 'Sticking to a routine' },
            { value: 'breaking_down', label: 'Breaking tasks into smaller steps' },
            { value: 'body_doubling', label: 'Working with others (body doubling)' },
            { value: 'medication', label: 'Medication' },
            { value: 'therapy', label: 'Therapy/Coaching' },
            { value: 'none', label: 'I haven\'t found anything that works yet' }
        ]
    },

    // Open Reflections
    {
        id: 'reflect_1',
        text: 'What is the biggest challenge you face in your daily life related to neurodivergence?',
        category: 'Reflections',
        subcategory: 'Challenges',
        type: 'text',
        section: 5
    },
    {
        id: 'reflect_2',
        text: 'What are your greatest strengths or "superpowers"?',
        category: 'Reflections',
        subcategory: 'Strengths',
        type: 'text',
        section: 5
    },
    {
        id: 'reflect_3',
        text: 'Is there anything else you would like to share about your experience?',
        category: 'Reflections',
        subcategory: 'Other',
        type: 'text',
        section: 5
    }
];
