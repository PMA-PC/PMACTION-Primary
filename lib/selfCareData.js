export const SELF_CARE_CATEGORIES = {
    TYPE: ['Physical', 'Emotional', 'Social', 'Practical', 'Spiritual'],
    COST: ['Free', 'Low', 'Medium', 'High'],
    TIME: ['< 10 min', '10-30 min', '30-60 min', '1+ hour']
};

export const SELF_CARE_ACTIVITIES = [
    // Physical
    { id: 'sc_walk', label: 'Take a 15-minute walk', category: 'Physical', cost: 'Free', time: '10-30 min', xp: 15 },
    { id: 'sc_water', label: 'Drink a glass of water', category: 'Physical', cost: 'Free', time: '< 10 min', xp: 5 },
    { id: 'sc_stretch', label: 'Full body stretch', category: 'Physical', cost: 'Free', time: '< 10 min', xp: 10 },
    { id: 'sc_bath', label: 'Take a warm bath', category: 'Physical', cost: 'Low', time: '30-60 min', xp: 20 },
    { id: 'sc_yoga', label: 'Yoga session', category: 'Physical', cost: 'Free', time: '30-60 min', xp: 25 },

    // Emotional
    { id: 'sc_journal', label: 'Journal your feelings', category: 'Emotional', cost: 'Free', time: '10-30 min', xp: 15 },
    { id: 'sc_music', label: 'Listen to favorite music', category: 'Emotional', cost: 'Free', time: '10-30 min', xp: 10 },
    { id: 'sc_cry', label: 'Have a good cry', category: 'Emotional', cost: 'Free', time: '10-30 min', xp: 10 },
    { id: 'sc_laugh', label: 'Watch a funny video', category: 'Emotional', cost: 'Free', time: '< 10 min', xp: 5 },

    // Social
    { id: 'sc_call', label: 'Call a friend', category: 'Social', cost: 'Free', time: '10-30 min', xp: 20 },
    { id: 'sc_text', label: 'Text someone you miss', category: 'Social', cost: 'Free', time: '< 10 min', xp: 10 },
    { id: 'sc_hug', label: 'Hug a loved one/pet', category: 'Social', cost: 'Free', time: '< 10 min', xp: 10 },
    { id: 'sc_coffee', label: 'Coffee with a friend', category: 'Social', cost: 'Low', time: '30-60 min', xp: 25 },

    // Practical
    { id: 'sc_tidy', label: 'Tidy one small area', category: 'Practical', cost: 'Free', time: '10-30 min', xp: 15 },
    { id: 'sc_plan', label: 'Plan your day', category: 'Practical', cost: 'Free', time: '< 10 min', xp: 10 },
    { id: 'sc_budget', label: 'Review budget', category: 'Practical', cost: 'Free', time: '10-30 min', xp: 15 },
    { id: 'sc_mealprep', label: 'Prep a healthy meal', category: 'Practical', cost: 'Low', time: '30-60 min', xp: 20 },

    // Spiritual
    { id: 'sc_meditate', label: 'Meditate', category: 'Spiritual', cost: 'Free', time: '10-30 min', xp: 20 },
    { id: 'sc_nature', label: 'Spend time in nature', category: 'Spiritual', cost: 'Free', time: '30-60 min', xp: 20 },
    { id: 'sc_gratitude', label: 'List 3 things grateful for', category: 'Spiritual', cost: 'Free', time: '< 10 min', xp: 10 },
    { id: 'sc_disconnect', label: 'Unplug from tech', category: 'Spiritual', cost: 'Free', time: '1+ hour', xp: 30 },
];
