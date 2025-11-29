import { Question } from './types';

// PART 1: Clinical Baseline (ASRS + RAADS-R)
export const clinicalQuestions: Question[] = [
    // ASRS-v1.1 (Adult ADHD Self-Report Scale) - 18 questions
    {
        id: 'asrs_1',
        text: 'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
        category: 'ASRS',
        subcategory: 'Inattention',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_2',
        text: 'How often do you have difficulty getting things in order when you have to do a task that requires organization?',
        category: 'ASRS',
        subcategory: 'Inattention',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_3',
        text: 'How often do you have problems remembering appointments or obligations?',
        category: 'ASRS',
        subcategory: 'Inattention',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_4',
        text: 'When you have a task that requires a lot of thought, how often do you avoid or delay getting started?',
        category: 'ASRS',
        subcategory: 'Inattention',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_5',
        text: 'How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?',
        category: 'ASRS',
        subcategory: 'Hyperactivity',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_6',
        text: 'How often do you feel overly active and compelled to do things, like you were driven by a motor?',
        category: 'ASRS',
        subcategory: 'Hyperactivity',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_7',
        text: 'How often do you make careless mistakes when you have to work on a boring or difficult project?',
        category: 'ASRS',
        subcategory: 'Inattention',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_8',
        text: 'How often do you have difficulty keeping your attention when you are doing boring or repetitive work?',
        category: 'ASRS',
        subcategory: 'Inattention',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_9',
        text: 'How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?',
        category: 'ASRS',
        subcategory: 'Inattention',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_10',
        text: 'How often do you misplace or have difficulty finding things at home or at work?',
        category: 'ASRS',
        subcategory: 'Inattention',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_11',
        text: 'How often are you distracted by activity or noise around you?',
        category: 'ASRS',
        subcategory: 'Inattention',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_12',
        text: 'How often do you leave your seat in meetings or other situations in which you are expected to remain seated?',
        category: 'ASRS',
        subcategory: 'Hyperactivity',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_13',
        text: 'How often do you feel restless or fidgety?',
        category: 'ASRS',
        subcategory: 'Hyperactivity',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_14',
        text: 'How often do you have difficulty unwinding and relaxing when you have time to yourself?',
        category: 'ASRS',
        subcategory: 'Hyperactivity',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_15',
        text: 'How often do you find yourself talking too much when you are in social situations?',
        category: 'ASRS',
        subcategory: 'Hyperactivity',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_16',
        text: 'When you\'re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?',
        category: 'ASRS',
        subcategory: 'Impulsivity',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_17',
        text: 'How often do you have difficulty waiting your turn in situations when turn taking is required?',
        category: 'ASRS',
        subcategory: 'Impulsivity',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    },
    {
        id: 'asrs_18',
        text: 'How often do you interrupt others when they are busy?',
        category: 'ASRS',
        subcategory: 'Impulsivity',
        type: 'dropdown',
        section: 1,
        options: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Often' },
            { value: 4, label: 'Very Often' }
        ]
    }
];
