import { Question } from './types';

export const adhdEmotionalQuestions: Question[] = [
    // Rejection Sensitive Dysphoria (RSD)
    {
        id: 'adhd_emo_1',
        text: 'I experience intense emotional pain when I perceive rejection or criticism.',
        category: 'ADHD Emotional',
        subcategory: 'RSD',
        type: 'likert',
        section: 2,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'adhd_emo_2',
        text: 'I am a people pleaser because I am afraid of disappointing others.',
        category: 'ADHD Emotional',
        subcategory: 'RSD',
        type: 'likert',
        section: 2,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'adhd_emo_3',
        text: 'I avoid trying new things because I am afraid of failing.',
        category: 'ADHD Emotional',
        subcategory: 'RSD',
        type: 'likert',
        section: 2,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },

    // Time Blindness
    {
        id: 'adhd_emo_4',
        text: 'I have "time blindness" - I don\'t sense the passing of time.',
        category: 'ADHD Emotional',
        subcategory: 'Time Blindness',
        type: 'likert',
        section: 2,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'adhd_emo_5',
        text: 'I am chronically late, even when I try to be on time.',
        category: 'ADHD Emotional',
        subcategory: 'Time Blindness',
        type: 'likert',
        section: 2,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },

    // Shame
    {
        id: 'adhd_emo_6',
        text: 'I feel a deep sense of shame about my inability to "get things done".',
        category: 'ADHD Emotional',
        subcategory: 'Shame',
        type: 'likert',
        section: 2,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'adhd_emo_7',
        text: 'I hide my struggles from others because I am embarrassed.',
        category: 'ADHD Emotional',
        subcategory: 'Shame',
        type: 'likert',
        section: 2,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },

    // Hyperfocus Whiplash
    {
        id: 'adhd_emo_8',
        text: 'I get irritable when I am interrupted while hyperfocusing.',
        category: 'ADHD Emotional',
        subcategory: 'Hyperfocus',
        type: 'likert',
        section: 2,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'adhd_emo_9',
        text: 'I feel exhausted or "hungover" after a period of intense hyperfocus.',
        category: 'ADHD Emotional',
        subcategory: 'Hyperfocus',
        type: 'likert',
        section: 2,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },

    // Emotional Regulation
    {
        id: 'adhd_emo_10',
        text: 'My emotions feel very intense and overwhelming.',
        category: 'ADHD Emotional',
        subcategory: 'Regulation',
        type: 'likert',
        section: 2,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'adhd_emo_11',
        text: 'I have trouble calming down once I get upset.',
        category: 'ADHD Emotional',
        subcategory: 'Regulation',
        type: 'likert',
        section: 2,
        options: [
            { value: 1, label: 'Never' },
            { value: 2, label: 'Rarely' },
            { value: 3, label: 'Sometimes' },
            { value: 4, label: 'Often' },
            { value: 5, label: 'Very Often' }
        ]
    },
    {
        id: 'adhd_emo_12',
        text: 'Which of these emotional experiences resonates most with you? (Select all that apply)',
        category: 'ADHD Emotional',
        subcategory: 'Experiences',
        type: 'multi-select',
        section: 2,
        options: [
            { value: 'rsd', label: 'Intense fear of rejection (RSD)' },
            { value: 'shame', label: 'Chronic shame or feeling "broken"' },
            { value: 'overwhelm', label: 'Emotional overwhelm/meltdowns' },
            { value: 'numbness', label: 'Emotional numbness or shutdown' },
            { value: 'impulsivity', label: 'Impulsive emotional reactions' },
            { value: 'mood_swings', label: 'Rapid mood swings' }
        ]
    }
];
