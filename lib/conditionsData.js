
export const CONDITIONS = [
    {
        id: 'adhd',
        title: 'ADHD',
        fullTitle: 'Attention-Deficit/Hyperactivity Disorder',
        overview: "ADHD (Attention-Deficit/Hyperactivity Disorder) is a neurodevelopmental condition that affects focus, impulse control, and activity levels. It's one of the most common childhood disorders but can continue into adulthood. ADHD is a real medical condition, not a character flaw or lack of discipline.",

        symptoms: {
            children: [
                { category: 'Inattention', items: ['Difficulty following instructions', 'Trouble organizing tasks', 'Easily distracted', 'Forgets daily activities', 'Loses things frequently'] },
                { category: 'Hyperactivity', items: ['Fidgets or squirms in seat', "Can't stay seated when expected", 'Runs or climbs excessively', "Can't play quietly", 'Talks excessively'] },
                { category: 'Impulsivity', items: ['Blurts out answers', "Can't wait their turn", 'Interrupts others'] }
            ],
            teens: [
                { category: 'Inattention', items: ['Procrastination with schoolwork', 'Difficulty managing time', 'Loses track of deadlines', 'Trouble sustaining focus in lectures', 'Forgets appointments'] },
                { category: 'Hyperactivity', items: ['Feeling restless', 'Internal sense of being "on"', 'Difficulty with quiet activities', 'Prefers constant stimulation'] },
                { category: 'Impulsivity', items: ['Risk-taking behaviors', 'Impulsive spending', 'Quick to anger', 'Difficulty in relationships'] }
            ],
            adults: [
                { category: 'Inattention', items: ['Chronic disorganization', 'Poor time management', 'Difficulty completing projects', 'Frequent job changes', 'Relationship challenges'] },
                { category: 'Hyperactivity', items: ['Choosing high-energy jobs', 'Feeling bored easily', 'Need for constant activity', 'Difficulty relaxing'] },
                { category: 'Impulsivity', items: ['Interrupting in meetings', 'Making hasty decisions', 'Impatience with processes', 'Difficulty maintaining relationships'] }
            ],
            seniors: [
                { category: 'Key Considerations', items: ['Often misdiagnosed as dementia or normal aging', 'ADHD symptoms present since childhood', 'Stable pattern vs. progressive decline', 'Memory issues from inattention, not loss', 'Responds to ADHD treatment'] },
                { category: 'Common Presentations', items: ['Increased forgetfulness', 'Difficulty with complex tasks', 'Medication management issues', 'Social withdrawal'] }
            ]
        },

        causes: {
            description: "ADHD is largely genetic and biological. It is NOT caused by poor parenting or screen time.",
            factors: ['Genetics (74% heritable)', 'Brain structure differences', 'Neurotransmitter imbalances', 'Prenatal factors', 'Environmental toxins'],
            myths: ['Poor parenting', 'Too much screen time', 'Sugar intake', 'Laziness']
        },

        diagnosis: {
            process: ['Comprehensive evaluation', 'Symptom assessment (DSM-5)', 'Rule out other conditions', 'Assessment of impairment'],
            professionals: ['Psychiatrists', 'Psychologists', 'Pediatricians', 'Psychiatric Nurse Practitioners'],
            criteria: ['6+ symptoms (children) or 5+ (adults)', 'Present before age 12', 'Impairment in multiple settings']
        },

        treatment: {
            medication: {
                title: 'Medication',
                description: 'First-line treatment for many. Stimulants (Ritalin, Adderall) are effective for 70-80% of people. Non-stimulants (Strattera) are also available.',
                notes: ['Not addictive when used as prescribed', 'Regular monitoring required']
            },
            therapy: {
                title: 'Therapy & Counseling',
                methods: [
                    { name: 'CBT', description: 'Improves organization, time management, and addresses negative thoughts.' },
                    { name: 'Behavioral Therapy', description: 'Parent training and classroom interventions for children.' },
                    { name: 'Skills Training', description: 'Focuses on practical skills like planning and social interaction.' }
                ]
            },
            lifestyle: {
                title: 'Lifestyle Strategies',
                items: ['Structured routines', 'External reminders (alarms, apps)', 'Breaking tasks into steps', 'Regular exercise (30+ min)', 'Adequate sleep', 'Mindfulness']
            }
        },

        self_help: [
            { title: 'Track Your Symptoms', description: 'Keep a log for 2-4 weeks to note patterns and triggers.' },
            { title: 'Use External Brains', description: 'Phone alarms, sticky notes, and planners are essential tools, not crutches.' },
            { title: 'Body Doubling', description: 'Work alongside someone else to help maintain focus on boring tasks.' },
            { title: 'Pomodoro Technique', description: 'Work for 25 minutes, break for 5. Short bursts help the ADHD brain.' }
        ],

        living_with: {
            daily: ['Morning routines that stick', 'Medication consistency', 'Organization systems', 'Workplace accommodations'],
            success: "Many successful people (Michael Phelps, Simone Biles) have ADHD. It comes with challenges but also strengths like creativity and energy.",
            outlook: "60% of children continue to have symptoms in adulthood. However, with treatment and adaptation, most people with ADHD thrive."
        },

        supporters: {
            parents: ['Maintain consistent routines', 'Use positive reinforcement', 'Break instructions into steps', 'Collaborate with teachers'],
            partners: ['Learn about ADHD', "Don't take forgetfulness personally", 'Divide tasks by strength', 'Patience with latching on/off tasks'],
            friends: ['Offer gentle reminders', 'Be patient with lateness', 'Celebrate their strengths/creativity']
        },

        faqs: [
            { q: "Is ADHD a mental illness?", a: "It is a neurodevelopmental disorder affecting brain development. The label matters less than the support." },
            { q: "Is it genetic?", a: "Yes, highly genetic (74% heritable)." },
            { q: "Do people outgrow it?", a: "About 60% continue to have symptoms in adulthood. Hyperactivity often decreases, but inattention persists." },
            { q: "Is it a disability?", a: "Yes, under the ADA, meaning you are entitled to reasonable accommodations." }
        ],

        resources: [
            { name: "CHADD (Children and Adults with ADHD)", url: "https://chadd.org" },
            { name: "ADDitude Magazine", url: "https://www.additudemag.com" },
            { name: "How to ADHD (YouTube)", url: "https://www.youtube.com/c/HowtoADHD" }
        ],

        statistics: {
            prevalence: ['Children: 9.8% (6 million in US)', 'Adults: 4.4% (10 million in US)', 'Boys diagnosed 2-3x more than girls'],
            impact: ['Higher accident rates', 'Financial impact: $143-266 billion/year'],
            effectiveness: ['Medication: 70-80% improvement', 'Therapy: 50-60% benefit']
        },

        latest_research: {
            focus: ['Brain imaging structural differences', 'Genetic risk identification', 'Adult ADHD protocols'],
            findings: ['ADHD is often not "outgrown" - brain differences persist', 'Early intervention improves long-term outcomes', 'Females present differently (often inattentive)']
        },

        related_ids: ['anxiety', 'depression', 'autism']
    }
];
