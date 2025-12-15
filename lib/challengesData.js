export const CHALLENGES = [
    {
        id: 'focus_flow_builder_2',
        title: 'Focus Flow Builder 2.0',
        duration: 30,
        category: 'Focus',
        group: 'focus', // Group 2: Build Focus
        description: 'A 30-day research-backed gamification challenge to boost focus, motivation, and follow-through.',
        tags: ['ADHD', 'Focus', 'Habits'],
        phases: [
            {
                id: 1,
                title: 'Awareness & Set-Up',
                days: [1, 7],
                description: 'Create safe focus environment and improve task awareness.'
            },
            {
                id: 2,
                title: 'Daily Dopamine Wins',
                days: [8, 15],
                description: 'Build short tasks into enjoyable rituals.'
            },
            {
                id: 3,
                title: 'Flow Extension',
                days: [16, 23],
                description: 'Increase focus duration, double sessions.'
            },
            {
                id: 4,
                title: 'Integration',
                days: [24, 30],
                description: 'Link focus habits to broader life goals.'
            }
        ],
        tasks: {
            1: { title: 'Notice Distractions', description: 'Notice distractions and write them down.', xp: 10, type: 'journal' },
            2: { title: 'Focus Space', description: 'Choose one focus-friendly space.', xp: 15, type: 'action' },
            3: { title: 'Satisfying Task', description: 'Identify your most satisfying task.', xp: 20, type: 'journal' },
            4: { title: '5-Min Timer', description: 'Set focus timer to 5 minutes, reflect after.', xp: 25, type: 'timer', duration: 5 },
            5: { title: '5-Min Timer (Again)', description: 'Set focus timer to 5 minutes, reflect after.', xp: 25, type: 'timer', duration: 5 },
            6: { title: 'Best Focus Time', description: 'Journal your best focus time of day.', xp: 15, type: 'journal' },
            7: {
                title: 'Reward Reflection',
                description: 'Reflect on your first week.',
                xp: 50,
                type: 'reflection',
                badge: 'self_aware_starter',
                content: "**Week 1 Reflection: Awareness**\n\nYou've spent a week observing your focus patterns. Data is power.\n\n**Reflection Questions:**\n1.  **Distractions:** What was the most common distraction you logged? (Phone, noise, internal thoughts?)\n2.  **Best Time:** Did you find a 'Golden Hour' where focus felt easier?\n3.  **Environment:** Does your chosen 'Focus Space' actually help? Do you need to change it?\n\n**Action:**\nAdjust your plan for Week 2 based on this data."
            },

            8: { title: '10-Min Joy Task', description: 'Do a 10-minute task you enjoy.', xp: 25, type: 'timer', duration: 10 },
            9: { title: '10-Min Joy Task', description: 'Do a 10-minute task you enjoy.', xp: 25, type: 'timer', duration: 10 },
            10: { title: '10-Min Joy Task', description: 'Do a 10-minute task you enjoy.', xp: 25, type: 'timer', duration: 10 },
            11: { title: 'Habit Stack', description: 'Stack a new habit onto an existing one.', xp: 30, type: 'action' },
            12: { title: 'Visual Tracker', description: 'Create a visual tracker for progress.', xp: 30, type: 'action' },
            13: { title: 'Double Focus', description: 'Complete two focus sessions today.', xp: 40, type: 'timer_multi', count: 2 },
            14: { title: 'Double Focus', description: 'Complete two focus sessions today.', xp: 40, type: 'timer_multi', count: 2 },
            15: {
                title: 'Celebration Checkpoint',
                description: 'Celebrate your momentum!',
                xp: 100,
                type: 'celebration',
                badge: 'momentum_maker',
                content: "**Week 2 Celebration: The Dopamine Feedback Loop**\n\nYou've completed two weeks! By focusing on specific 'Joy Tasks', you are training your brain that *doing things* feels good.\n\n**The Science:**\nADHD brains often have a 'Reward Deficiency'. We starve for dopamine. By deliberately celebrating small wins, you are manually pumping dopamine into your system.\n\n**Mission:**\nCelebrate today. Do something purely for fun. You earned it.\n\n**Check-in:**\nHow does it feel to *complete* things?"
            },

            16: { title: 'Mindful Break', description: 'Practice one mindful break (stretch or breathe).', xp: 20, type: 'action' },
            17: { title: '15-Min x2', description: 'Two 15-minute focus sessions.', xp: 50, type: 'timer_multi', count: 2, duration: 15 },
            18: { title: '15-Min x2', description: 'Two 15-minute focus sessions.', xp: 50, type: 'timer_multi', count: 2, duration: 15 },
            19: { title: 'Share Progress', description: 'Share your progress with a buddy.', xp: 75, type: 'social' },
            20: { title: 'Accountability Tool', description: 'Introduce an accountability tool (timer, AI coach).', xp: 60, type: 'action' },
            21: { title: 'Accountability Tool', description: 'Use your accountability tool.', xp: 60, type: 'action' },
            22: { title: 'Accountability Tool', description: 'Use your accountability tool.', xp: 60, type: 'action' },
            23: {
                title: 'Reflection Session',
                description: 'Reflect on your flow extension.',
                xp: 80,
                type: 'reflection',
                badge: 'resilient_focuser',
                content: "**Week 3 Review: Stretching the Muscle**\n\nThis week was about increasing duration. It's like adding weight at the gym.\n\n**Observations:**\n*   Did 15 minutes feel too long? Too short?\n*   Did the accountability tool (or buddy) help?\n\n**Course Correction:**\nIf 15 minutes is painful, scale back to 10 for a few days. Consistency > Intensity."
            },

            24: { title: 'Plan Weekly Goals', description: 'Plan your goals for the upcoming week.', xp: 50, type: 'planning' },
            25: { title: 'Focus + Mindfulness', description: 'Combine focus session with a mindfulness check-in.', xp: 75, type: 'action' },
            26: { title: 'Focus + Mindfulness', description: 'Combine focus session with a mindfulness check-in.', xp: 75, type: 'action' },
            27: { title: 'Achievement Playlist', description: 'Create a personal achievement music playlist.', xp: 100, type: 'creative' },
            28: { title: 'Listen to Playlist', description: 'Use your playlist during a task.', xp: 100, type: 'action' },
            29: { title: 'Invite a Friend', description: 'Invite a friend to join a challenge.', xp: 150, type: 'social' },
            30: {
                title: 'Grand Celebration',
                description: 'You did it! Celebrate your 30-day journey.',
                xp: 500,
                type: 'celebration',
                badge: 'flow_master',
                content: "**30-Day Completion: Master of Flow**\n\nCONGRATULATIONS!\n\nYou have completed the Focus Flow Builder. You didn't just 'do tasks'; you rewired your relationship with work.\n\n**The Journey:**\n*   **Awareness:** You learned what distracts you.\n*   **Dopamine:** You learned to enjoy the process.\n*   **Extension:** You built stamina.\n*   **Integration:** You made it a lifestyle.\n\n**Next Steps:**\nKeep the habits that worked. Discard the ones that didn't. You are now the architect of your own attention."
            }
        }
    },
    // 1. Physiology First (5 Days) - Active Tool Acquisition
    {
        id: 'physiology_first',
        title: 'Physiology First',
        duration: 5,
        category: 'Well-Being',
        group: 'balance', // Group 1: Restore Balance
        description: 'Master the "Big Three" biological foundations: Sleep, Diet, and Movement.',
        tags: ['Health', 'Sleep', 'Energy'],
        phases: [
            { id: 1, title: 'The Foundation', days: [1, 5], description: 'Build your biological base.' }
        ],
        tasks: {
            1: {
                title: 'Sleep Audit',
                description: 'Track your sleep quality vs. quantity tonight.',
                xp: 20,
                type: 'journal',
                content: "**Sleep Audit**\n\nQuality sleep is the foundation of cognitive function and emotional regulation. Tonight, you aren't just sleeping; you're gathering data.\n\n**Instructions:**\n1.  **Record Bedtime:** What time did you actually turn off the lights?\n2.  **Estimate Onset:** How long did it take to fall asleep?\n3.  **Wake-ups:** Did you wake up during the night?\n4.  **Wake Time:** What time did you wake up?\n5.  **Quality Rating:** Rate your sleep quality from 1-10.\n\nUse your journal to track these metrics."
            },
            2: {
                title: 'Hydration Boost',
                description: 'Drink a glass of water first thing in the morning.',
                xp: 20,
                type: 'action',
                content: "**Hydration Boost**\n\nYour brain is 73% water. Even mild dehydration can impair attention and memory.\n\n**Mission:**\nBefore coffee, before checking your phone, drink one full glass of water (approx 8-12oz).\n\n**Why:**\nRehydrating immediately jumpstarts your metabolism and cognitive processes after 8 hours of fasting during sleep."
            },
            3: { title: 'Movement Snack', description: 'Do 5 minutes of movement (walk, stretch, dance).', xp: 20, type: 'action', content: "**Movement Snack**\n\nExercise doesn't have to be a marathon. Short bursts of movement increase dopamine and norepinephrine.\n\n**Mission:**\nMove your body for 5 minutes. Walk, stretch, do jumping jacks, or dance.\n\n**Goal:**\nRaise your heart rate slightly and wake up your nervous system." },
            4: { title: 'Fiber Fuel', description: 'Eat one serving of fruit or vegetables today.', xp: 20, type: 'action', content: "**Fiber Fuel**\n\nGut health affects brain health via the gut-brain axis.\n\n**Mission:**\nInclude at least one serving of fiber-rich fruit or vegetable in your meals today.\n\n**Tip:**\nAn apple, a handful of carrots, or a side salad counts." },
            5: { title: 'Foundation Review', description: 'Reflect on how your body feels after 5 days.', xp: 50, type: 'reflection', badge: 'physiology_first', content: "**Foundation Review**\n\nYou've focused on sleep, hydration, movement, and nutrition.\n\n**Reflection:**\n*   Which of these 'Big Three' (Sleep, Diet, Movement) is your strongest area?\n*   Which is your weakest?\n*   How did focusing on these basics affect your energy levels this week?" }
        }
    },
    // 2. Crisis Control (5 Days) - Active Tool Acquisition
    {
        id: 'crisis_control',
        title: 'Crisis Control',
        duration: 5,
        category: 'Emotional Regulation',
        group: 'balance', // Group 1: Restore Balance
        description: 'Master the "Emergency Brake" for overwhelming emotions using TIPP and STOP.',
        tags: ['Emotion', 'Crisis', 'Grounding'],
        phases: [
            { id: 1, title: 'Emergency Tools', days: [1, 5], description: 'Learn to stop the spiral.' }
        ],
        tasks: {
            1: {
                title: 'Learn TIPP',
                description: 'Read the TIPP protocol (Temperature, Intense Exercise, Paced Breathing, Paired Muscle Relaxation).',
                xp: 20,
                type: 'reading',
                content: "**TIPP Skills for Crisis Survival**\n\nTIPP is a DBT skill designed to rapidly change your body's chemistry when you are in high emotional distress.\n\n**T - Temperature:**\nSplash cold water on your face or hold an ice cube. This triggers the 'mammalian dive reflex', slowing your heart rate.\n\n**I - Intense Exercise:**\nEngage in intense aerobic activity for a short burst (e.g., jumping jacks, running in place) to burn off stress hormones.\n\n**P - Paced Breathing:**\nSlow your breathing. Breathe in for 4 counts, hold for 2, out for 6. Extending the exhale activates the parasympathetic nervous system.\n\n**P - Paired Muscle Relaxation:**\nTense muscle groups while breathing in, relax them while breathing out."
            },
            2: { title: 'Practice Temperature', description: 'Splash cold water on your face or hold an ice cube.', xp: 20, type: 'action', content: "**Practice: Temperature**\n\nTest the 'Dive Reflex'.\n\n**Action:**\nSplash cold water on your face (eyes and cheeks specifically) or hold a cold pack to your eyes for 30 seconds while holding your breath.\n\n**Observe:**\nNotice the immediate shift in your physiological state." },
            3: { title: 'Practice Paced Breathing', description: 'Breathe in for 4, out for 6. Do this for 1 minute.', xp: 20, type: 'timer', duration: 1, content: "**Practice: Paced Breathing**\n\nControl your breath to control your brain.\n\n**Action:**\nSet a timer for 1 minute.\nInhale deeply through your nose for a count of 4.\nExhale slowly through pursed lips for a count of 6 or 8.\n\n**Goal:**\nSignal safety to your brain." },
            4: { title: 'Learn STOP', description: 'Read the STOP skill (Stop, Take step back, Observe, Proceed).', xp: 20, type: 'reading', content: "**The STOP Skill**\n\nWhen you feel an impulse to act destructively:\n\n**S - Stop:** Do not move a muscle. Freeze.\n**T - Take a Step Back:** Physically or mentally detach from the situation.\n**O - Observe:** Notice what is happening inside and outside of you.\n**P - Proceed Mindfully:** Act with awareness of your goals." },
            5: { title: 'Crisis Plan', description: 'Write down your personal Crisis Plan using these tools.', xp: 50, type: 'journal', badge: 'crisis_controller', content: "**My Crisis Plan**\n\nWhen the storm hits, you won't remember the skills unless you have a plan.\n\n**Create Your Plan:**\n1.  **Warning Signs:** How do I know I'm entering a crisis?\n2.  **My Go-To TIPP Skill:** Which one works best for me?\n3.  **My Safe Person:** Who can I call?\n4.  **Self-Soothing:** What sensory input calms me?" }
        }
    },
    // 3. The Thought Detective (5 Days) - Active Tool Acquisition
    {
        id: 'thought_detective',
        title: 'The Thought Detective',
        duration: 5,
        category: 'CBT / Mindset',
        group: 'identity', // Group 3: Find Yourself
        description: 'Catch and reframe "Ants" (Automatic Negative Thoughts) using CBT.',
        tags: ['CBT', 'Mindset', 'Anxiety'],
        phases: [
            { id: 1, title: 'Catching ANTs', days: [1, 5], description: 'Identify and challenge negative thoughts.' }
        ],
        tasks: {
            1: {
                title: 'Spot the ANT',
                description: 'Identify one Automatic Negative Thought today.',
                xp: 20,
                type: 'journal',
                content: "**Spotting ANTs (Automatic Negative Thoughts)**\n\nANTs are those cynical, gloomy, or complaining thoughts that seem to crawl into your mind uninvited.\n\n**Examples:**\n*   'I'll never get this done.'\n*   'They probably think I'm stupid.'\n*   'This is going to be a disaster.'\n\n**Mission:**\nCatch just ONE ANT today. Write it down. Don't judge it, just spot it."
            },
            2: { title: 'Name the Distortion', description: 'Is it "All-or-Nothing" or "Catastrophizing"?', xp: 20, type: 'journal', content: "**Name the Distortion**\n\nCommon Cognitive Distortions:\n\n*   **All-or-Nothing:** Seeing things in black and white categories.\n*   **Catastrophizing:** Expecting the worst-case scenario.\n*   **Mind Reading:** Believing you know what others are thinking.\n\n**Mission:**\nTake the ANT you found yesterday. Which distortion is it wearing?" },
            3: { title: 'The Courtroom', description: 'Write down evidence FOR and AGAINST the thought.', xp: 30, type: 'journal', content: "**The Courtroom Technique**\n\nPut your thought on trial.\n\n**The Thought:** [Insert your ANT]\n\n**Prosecution (Evidence FOR):**\nWhat facts support this thought? (Be strictly factual!)\n\n**Defense (Evidence AGAINST):**\nWhat facts contradict this thought? Are there other explanations?" },
            4: { title: 'Reframe It', description: 'Rewrite the thought in a more balanced way.', xp: 30, type: 'journal', content: "**The Reframe**\n\nBased on the evidence from 'The Courtroom', write a more accurate, balanced thought.\n\n**Old Thought:** 'I'm a failure because I was late.'\n**Reframe:** 'I was late today, which is frustrating, but I am usually on time and I am good at my job.'" },
            5: { title: 'Detective Badge', description: 'Reflect on a thought you successfully reframed.', xp: 50, type: 'reflection', badge: 'thought_detective', content: "**Detective Review**\n\nYou have learned to Catch, Check, and Change your thoughts.\n\n**Reflection:**\nHow did reframing a thought change your emotional reaction to it?" }
        }
    },
    // 4. The CEO Brain (5 Days) - Active Tool Acquisition
    {
        id: 'ceo_brain',
        title: 'The CEO Brain',
        duration: 5,
        category: 'Executive Function',
        group: 'focus', // Group 2: Build Focus
        description: 'Tools to externalize memory and manage time blindness.',
        tags: ['Productivity', 'Planning', 'Focus'],
        phases: [
            { id: 1, title: 'Externalizing', days: [1, 5], description: 'Get it out of your head.' }
        ],
        tasks: {
            1: {
                title: 'Brain Dump',
                description: 'Write down EVERYTHING currently in your working memory.',
                xp: 20,
                type: 'journal',
                content: "**The Brain Dump**\n\nYour working memory is a small bucket. When it overflows with 'to-dos', you get overwhelmed.\n\n**Mission:**\nSet a timer for 10 minutes. Write down EVERYTHING on your mind: tasks, worries, ideas, errands. Get it all onto paper or a digital list.\n\n**Goal:**\nClear your mental RAM."
            },
            2: { title: 'Visual Timer', description: 'Use a visual timer for one task today.', xp: 20, type: 'action', content: "**Visual Timer**\n\nTime blindness makes it hard to 'feel' how much time is passing.\n\n**Mission:**\nUse a visual timer (like a Time Timer or an app/clock) for one task today. See the time vanishing.\n\n**Observation:**\nDid seeing the time pass help you stay on task?" },
            3: { title: 'The Launchpad', description: 'Set up a "Launchpad" by the door for keys/wallet.', xp: 20, type: 'action', content: "**The Launchpad**\n\nStop the morning scramble.\n\n**Mission:**\nDesignate one specific spot near the door as your 'Launchpad'. Put a bowl or tray there.\n\n**Action:**\nPlace your keys, wallet, and essentials there immediately upon entering the house today." },
            4: { title: 'Rule of 3', description: 'Pick only 3 "Must Do" tasks for today.', xp: 20, type: 'planning', content: "**The Rule of 3**\n\nOver-planning leads to paralysis.\n\n**Mission:**\nLook at your Brain Dump. Pick only 3 tasks that MUST happen today. Everything else is a 'maybe'.\n\n**Focus:**\nDirect your energy only to your Top 3." },
            5: { title: 'CEO Review', description: 'Review your week. What tool helped most?', xp: 50, type: 'reflection', badge: 'ceo_brain', content: "**CEO Review**\n\nYou've acted as the CEO of your own brain this week.\n\n**Reflection:**\n*   Which tool worked best? (Brain Dump, Visual Timer, Launchpad, Rule of 3)\n*   How can you make that tool a permanent habit?" }
        }
    },
    // 5. Social Navigator (3 Days) - Active Tool Acquisition
    {
        id: 'social_navigator',
        title: 'Social Navigator',
        duration: 3,
        category: 'Relationships',
        group: 'identity', // Group 3: Find Yourself
        description: 'Protect relationships with Boundaries and "I" Statements.',
        tags: ['Relationships', 'Communication', 'Boundaries'],
        phases: [
            { id: 1, title: 'Connection Tools', days: [1, 3], description: 'Communicate clearly and safely.' }
        ],
        tasks: {
            1: {
                title: 'The "I" Statement',
                description: 'Practice writing an "I feel X when Y" statement.',
                xp: 20,
                type: 'journal',
                content: "**The 'I' Statement**\n\nConflict often starts with 'You' statements ('You always...', 'You never...'). 'I' statements express your reality without blaming.\n\n**Formula:**\n'I feel [Emotion] when [Specific Behavior] because [Impact/Need].'\n\n**Practice:**\nDraft an 'I' statement for a current frustration."
            },
            2: { title: 'Boundary Check', description: 'Identify one place you need better boundaries.', xp: 20, type: 'journal', content: "**Boundary Check**\n\nWhere are you saying 'yes' when you mean 'no'?\n\n**Reflection:**\nIdentify one relationship or situation where you feel resentful or drained. This is usually a sign of a crossed boundary.\n\n**Action:**\nWhat limit do you need to set there?" },
            3: { title: 'Navigator Badge', description: 'Commit to using one "I" statement this week.', xp: 50, type: 'action', badge: 'social_navigator', content: "**Navigator Challenge**\n\nTheory into practice.\n\n**Mission:**\nUse an 'I' statement in a real conversation this week. Or, set one small boundary you identified yesterday.\n\n**Report:**\nHow did the other person respond? How did you feel?" }
        }
    },
    // 6. Authentic Self (5 Days) - Active Tool Acquisition
    {
        id: 'authentic_self',
        title: 'Authentic Self',
        duration: 5,
        category: 'Identity',
        group: 'identity', // Group 3: Find Yourself
        description: 'Unmasking, Strengths, and Self-Advocacy.',
        tags: ['Identity', 'Neurodiversity', 'Self-Esteem'],
        phases: [
            { id: 1, title: 'Unmasking', days: [1, 5], description: 'Discover your true operating manual.' }
        ],
        tasks: {
            1: {
                title: 'Strengths Inventory',
                description: 'List 3 things your ADHD brain does well.',
                xp: 20,
                type: 'journal',
                content: "**Strengths Inventory**\n\nWe often focus on deficits. Today, we hunt for strengths.\n\n**Mission:**\nList 3 things your brain does well. Examples: Creativity in crisis, hyperfocus, empathy, finding patterns, enthusiasm.\n\n**Reflection:**\nHow have these strengths helped you recently?"
            },
            2: { title: 'Sensory Audit', description: 'What sensory inputs drain you? What soothes you?', xp: 20, type: 'journal', content: "**Sensory Audit**\n\nYour environment impacts your energy.\n\n**Journal:**\n1.  **Drainers:** What sounds, lights, or textures annoy or drain you? (e.g., ticking clock, fluorescent lights, tight clothes)\n2.  **Soothers:** What sensory inputs calm you? (e.g., weighted blanket, soft music, dim lighting)" },
            3: { title: 'Stimming Permission', description: 'Allow yourself to stim (fidget, pace, hum) freely for 5 mins.', xp: 20, type: 'action', content: "**Stimming Permission**\n\n'Stimming' (self-stimulatory behavior) regulates the nervous system. Masking this urges consumes energy.\n\n**Mission:**\nFor 5 minutes, let yourself move however you want. Pace, fidget, hum, rock. Do it without shame.\n\n**Result:**\nDid you feel more regulated afterwards?" },
            4: { title: 'Masking Check', description: 'Notice one time you "masked" today. How did it feel?', xp: 20, type: 'journal', content: "**Masking Check**\n\nMasking is hiding your neurodivergent traits to fit in.\n\n**Observation:**\nNotice one time today you faked eye contact, hid a fidget, or suppressed an enthusiastic reaction.\n\n**Cost:**\nHow much energy did that take?" },
            5: { title: 'Authenticity Pledge', description: 'Write a permission slip to be yourself.', xp: 50, type: 'reflection', badge: 'authentic_self', content: "**Authenticity Pledge**\n\nYou are allowed to take up space.\n\n**Mission:**\nWrite a permission slip to yourself.\n\n'I, [Name], give myself permission to [unmasking behavior] because [reason].'\nExample: 'I give myself permission to leave the party early because my battery is drained.'" }
        }
    },
    // 7. ADHD Foundations (30 Days) - Theory Deep Dive
    {
        id: 'foundations_theory',
        title: 'ADHD Foundations',
        duration: 30,
        category: 'Mastery', // Renamed from Education
        group: 'focus', // Group 2: Build Focus
        description: 'Deep dive into the neuroscience of ADHD: Physiology, Executive Function, and the "Ferrari Brain".',
        tags: ['Education', 'Neuroscience', 'Theory'],
        phases: [
            { id: 1, title: 'Neurobiology 101', days: [1, 7], description: 'Understanding the hardware.' },
            { id: 2, title: 'Executive Functions', days: [8, 14], description: 'The CEO of the brain.' },
            { id: 3, title: 'The Dopamine Link', days: [15, 21], description: 'Motivation and chemistry.' },
            { id: 4, title: 'Building the Base', days: [22, 30], description: 'Sleep, Diet, and Movement theory.' }
        ],
        tasks: {
            1: {
                title: 'The Ferrari Brain',
                description: 'Read about the Prefrontal Cortex vs. Amygdala and the Ferrari Engine metaphor.',
                xp: 30,
                type: 'reading',
                content: "**The Ferrari Engine with Bicycle Brakes**\n\nDr. Ned Hallowell, a renowned ADHD expert, describes the ADHD brain as having a 'Ferrari engine with bicycle brakes'.\n\n**The Engine (High Performance):**\nYour brain is constantly racing, full of ideas, energy, and creativity. It processes information faster and deeper than neurotypical brains. This is your superpower—the ability to hyperfocus, innovate, and make rapid connections.\n\n**The Brakes (Executive Function):**\nThe problem isn't the engine; it's the braking system. Executive functions—like inhibition, working memory, and emotional regulation—are the brakes. When you have bicycle brakes on a Ferrari, it's hard to stop, slow down, or steer around corners.\n\n**The Result:**\nYou might crash (burnout), go off-road (distraction), or spin out (emotional overwhelm).\n\n**The Goal:**\nWe aren't trying to downgrade the engine. We want to upgrade the brakes. Through this course, you will learn to strengthen your executive functions so you can steer your Ferrari where YOU want it to go."
            },
            7: {
                title: 'Week 1 Review',
                description: 'Summarize your key takeaways.',
                xp: 50,
                type: 'reflection',
                content: "**Week 1 Review: The Hardware**\n\nYou've learned about the Ferrari Engine and the bicycle brakes.\n\n**Reflection:**\n1.  **Validation:** Does knowing that your challenges are biological (not character flaws) change how you see yourself?\n2.  **The Engine:** What is ONE specific example of your 'Ferrari Engine' working well (a time you were creative, hyperfocused, or energetic)?\n3.  **The Brakes:** Which specific executive function (brake) do you struggle with most? (Impulse control, starting tasks, emotional regulation?)"
            },
            10: {
                title: 'The Executive Board',
                description: 'Meet the key players: Working Memory, Inhibition, and Flexibility.',
                xp: 30,
                type: 'reading',
                content: "**The Executive Board**\n\nIf your brain is a company, Executive Functions are the board of directors.\n\n**1. Working Memory (The Whiteboard):**\nThe ability to hold information in your mind while using it. ADHD brains often have a 'slippery' whiteboard—data erases quickly.\n\n**2. Inhibition (The Pause Button):**\nThe ability to stop an automatic reaction. Without this, we interrupt, impulse buy, or rage quit.\n\n**3. Cognitive Flexibility (The Gear Shift):**\nThe ability to switch tasks or change plans. ADHD brains often get stuck in one gear (hyperfocus) or can't get into gear at all (paralysis)."
            },
            15: {
                title: 'Read: Dopamine',
                description: 'Understand the "Reward Deficiency Syndrome".',
                xp: 30,
                type: 'reading',
                content: "**The Dopamine Link**\n\nDopamine is the brain's neurotransmitter for motivation, reward, and focus. It says 'Do that again!'\n\n**Reward Deficiency Syndrome:**\nADHD brains tend to have fewer dopamine receptors or faster dopamine transport. This means we have a lower baseline of stimulation.\n\n**The Consequence:**\nWe constantly 'hunt' for stimulation. This looks like:\n*   Scrolling social media for hours.\n*   Starting conflict for a rush.\n*   Eating sugar/carbs.\n*   Impulse spending.\n\n**The Fix:**\nWe don't need *less* stimulation; we need *healthy* stimulation. Exercise, cold showers, gamification, and interesting challenges all provide dopamine without the crash."
            },
            22: {
                title: 'Bio-Hacking for Focus',
                description: 'Why sleep and movement are non-negotiable for ADHD.',
                xp: 30,
                type: 'reading',
                content: "**Bio-Hacking Your Brain**\n\n**1. Sleep & The Glymphatic System:**\nDuring deep sleep, your brain creates a sewage system to wash away neurotoxins. One bad night reduces executive function to the level of intoxication.\n\n**2. Exercise & BDNF:**\nCardio exercise releases BDNF (Brain-Derived Neurotrophic Factor). It's literally Miracle-Gro for your neurons, improving memory and focus for 2-3 hours post-exercise.\n\n**3. Protein & Dopamine:**\nDopamine is made from amino acids found in protein. A high-protein breakfast provides the raw materials your brain needs to function."
            },
            30: {
                title: 'Foundations Exam',
                description: 'Complete the Foundations knowledge check.',
                xp: 100,
                type: 'quiz',
                badge: 'foundations_scholar',
                content: "**Foundations Knowledge Check**\n\nTest your understanding of the ADHD brain.\n\n**1. The 'Brakes' of the brain are technically called:**\nA) The Parietal Lobe\nB) Executive Functions\nC) The Motor Cortex\n\n**2. 'Reward Deficiency Syndrome' involves low levels of which neurotransmitter?**\nA) Serotonin\nB) Dopamine\nC) Cortisol\n\n**3. The most effective way to manage ADHD is:**\nA) Trying harder\nB) Just using a planner\nC) Improving the 'brakes' (executive functions) through biological support and skill-building.\n\n*(Self-Grade: B, B, C)*"
            }
        }
    },
    // 8. Emotional Mastery (30 Days) - Theory Deep Dive
    {
        id: 'emotional_mastery',
        title: 'Emotional Mastery',
        duration: 30,
        category: 'Mastery', // Renamed from Education
        group: 'balance', // Group 1: Restore Balance
        description: 'Deep dive into Emotional Regulation, RSD, Anxiety, and Identity.',
        tags: ['Emotion', 'RSD', 'Psychology'],
        phases: [
            { id: 1, title: 'Emotional Dysregulation', days: [1, 7], description: 'Why feelings are so big.' },
            { id: 2, title: 'Understanding RSD', days: [8, 14], description: 'The pain of rejection.' },
            { id: 3, title: 'Anxiety vs. ADHD', days: [15, 21], description: 'Untangling the overlap.' },
            { id: 4, title: 'Identity & Unmasking', days: [22, 30], description: 'Living authentically.' }
        ],
        tasks: {
            1: {
                title: 'Understanding Codependency & Shame',
                description: 'Codependency involves losing your sense of self. Today we explore its roots.',
                xp: 30,
                type: 'reading',
                content: "**What is Codependency?**\nCodependency is a pattern of excessive emotional or psychological reliance on another person, typically characterized by a loss of independent identity.\n\n**Key Topics:**\n* Codependency involves losing your sense of self in relationships.\n* Core characteristics: Low self-esteem, people-pleasing, poor boundaries, excessive caretaking.\n* Often develops in childhood with emotionally unavailable, addicted, or abusive parents.\n* Different from healthy interdependence which maintains individual identity and mutual support.\n\n**Key Points:**\n* Your mood and self-worth depend on others' feelings and behaviors.\n* You feel overly responsible for others' happiness and problems.\n* You neglect your own needs to care for or fix others.\n* You have difficulty identifying and expressing your own feelings.\n\n**Understanding Shame & Its Impact:**\nShame is one of the most powerful emotions driving codependent behavior. Understanding shame is essential to breaking free.\n* Shame says 'I am bad' - Guilt says 'I did something bad'.\n* Shame fuels codependency by making you feel fundamentally unworthy.\n* Empathy is the most powerful antidote to shame."
            },
            8: {
                title: 'Inner Child Work',
                description: 'Understanding how childhood experiences shape adult patterns.',
                xp: 30,
                type: 'reading',
                content: "**Inner Child Theory**\nUnderstanding how childhood experiences shape adult patterns is crucial for healing.\n\n**Key Topics:**\n* Developmental trauma and its effects.\n* The Inner Child concept: The part that holds childhood experiences and unmet needs.\n* Recognizing childhood wounds in adult behavior.\n* Reparenting yourself as an adult.\n\n**Key Points:**\n* Your inner child holds unmet needs from childhood.\n* Codependent patterns often stem from childhood adaptations.\n* Healing requires acknowledging and meeting those needs.\n* You can provide yourself what you didn't receive.\n\n**Reparenting Yourself:**\nLearn to give yourself what you needed but didn't receive.\n* Self-soothing techniques.\n* Setting healthy internal boundaries.\n* Providing validation and comfort.\n* Building secure attachment with yourself."
            },
            15: {
                title: 'Advanced DBT Skills',
                description: 'Radical Acceptance, Dialectics, and Opposite Action.',
                xp: 30,
                type: 'reading',
                content: "**Radical Acceptance**\nAccepting reality as it is, without approval.\n\n**Key Topics:**\n* What radical acceptance is (and isn't).\n* Accepting vs approving.\n* Pain vs suffering.\n* Turning the mind toward acceptance.\n\n**Key Points:**\n* Fighting reality creates suffering.\n* Acceptance doesn't mean you like it.\n* Frees energy for effective action.\n* It is a practice, not a one-time decision.\n\n**Walking the Middle Path (Dialectics):**\nHolding two truths simultaneously.\n* Both/and thinking vs either/or.\n* Dialectics in relationships to validate opposing perspectives.\n* Essential for healthy relationships and reducing black-and-white thinking.\n\n**Opposite Action:**\nActing opposite to emotional urges to change emotions.\n* Urge to isolate → reach out.\n* Urge to attack → approach gently.\n* Changes emotion by changing behavior.\n* Breaks automatic patterns."
            },
            30: {
                title: 'Final Integration',
                description: 'Reflect on your emotional journey and plan your future.',
                xp: 100,
                type: 'reflection',
                badge: 'emotional_master',
                content: "**Transformation Review & Integration**\nThis final day is about documenting your change and planning your future path.\n\n**Your Transformation Evidence:**\n* Compare who you were 30 days ago to who you are now.\n* Acknowledge the skills you've developed and the relationships that have changed.\n* Recognize that growth is real even if imperfect.\n\n**Legacy & Mission:**\n* Integrate your learning into a personal theory for your life.\n* Define your long-term vision and life mission.\n* Create a 90-day action plan to sustain your growth.\n\n**Gratitude:**\n* Honor your courage and the hard work you have done.\n* Acknowledge the support you have received.\n* Be proud of your journey."
            }
        }
    },
    // 9. Neurodiversity Advantage Training (7 Days) - Identity & Strengths
    {
        id: 'neurodiversity_advantage_7_day',
        title: 'Neurodiversity Advantage Training',
        duration: 7,
        category: 'Identity',
        group: 'identity', // Group 3: Find Yourself
        description: 'A 7-day intensive journey exploring how autistic people benefit the world, focusing on strengths and positive contributions.',
        tags: ['Autism', 'Neurodiversity', 'Strengths', 'Identity'],
        phases: [
            { id: 1, title: 'Strengths & Perspectives', days: [1, 7], description: 'Discovering the power of neurodivergent thinking.' }
        ],
        tasks: {
            1: {
                title: 'Day 1: Foundations',
                description: 'Unique Strengths & Perspectives.',
                xp: 100,
                type: 'reading',
                content: "Autistic individuals often possess a unique cognitive profile characterized by attention to detail, strong pattern recognition, and deep focus.\n\nThese traits are not deficits but rather distinctive ways of processing information that can lead to exceptional contributions in fields requiring precision, analysis, and innovation."
            },
            2: {
                title: 'Day 2: Logical Thinking',
                description: 'Deep Dive into Logical Thinking & Problem-Solving.',
                xp: 100,
                type: 'reading',
                content: "Logical thinking in autism often involves a systematic, bottom-up processing style. This allows for unbiased analysis and the ability to spot errors or inconsistencies that others might miss.\n\nIn problem-solving, this translates to novel solutions derived from first principles rather than social convention."
            },
            3: {
                title: 'Day 3: Authenticity',
                description: 'Authenticity & Integrity in Action.',
                xp: 100,
                type: 'reading',
                content: "Many neurodivergent individuals place a high value on truth and authenticity. This 'integrity by default' can be a powerful asset in building trust and maintaining ethical standards within organizations and communities.\n\nLiving authentically also reduces variable cognitive load associated with masking."
            },
            4: {
                title: 'Day 4: Empathy',
                description: 'Empathy & Connection (Reimagined).',
                xp: 100,
                type: 'reading',
                content: "Contrary to stereotypes, autistic people often experience intense empathy. It may be expressed differently—through action or deep emotional resonance—rather than typical social signals.\n\nUnderstanding the 'Double Empathy Problem' reveals that communication breakdowns are often mutual, not one-sided."
            },
            5: {
                title: 'Day 5: Creativity',
                description: 'Creativity & Special Interests as Superpowers.',
                xp: 100,
                type: 'reading',
                content: "Special interests are fuel for expertise and flow states. When passionate about a topic, neurodivergent minds can absorb vast amounts of information and visualize complex systems.\n\nThis 'monotropic' focus is the engine of specialization and often leads to creative breakthroughs."
            },
            6: {
                title: 'Day 6: Workplace & Community',
                description: 'Contributions to Workplace & Community.',
                xp: 100,
                type: 'reading',
                content: "Neurodiverse teams are proven to be more innovative. By embracing different thinking styles, workplaces can avoid groupthink and tackle challenges from multiple angles.\n\nAccommodations that help autistic employees often improve the work environment for everyone."
            },
            7: {
                title: 'Day 7: Integration',
                description: 'A Neurodiverse Future.',
                xp: 100,
                type: 'reflection',
                badge: 'neurodiversity_advocate',
                content: "As we conclude this 7-day journey, reflect on how you can integrate these perspectives into your daily life.\n\nWhether it's reframing your own traits or advocating for others, you are part of building a future where every mind is valued for its unique contribution."
            }
        }
    },
    // 10. Mindfulness Journey (7 Days)
    {
        id: 'mindfulness_journey_7_day',
        title: '7-Day Mindfulness Journey',
        duration: 7,
        category: 'Mindfulness',
        group: 'balance',
        description: 'Build present-moment awareness through daily meditation practices. Perfect for beginners.',
        tags: ['Mindfulness', 'Meditation', 'Stress Relief'],
        phases: [
            { id: 1, title: 'Awakening', days: [1, 7], description: 'Introduction to basic mindfulness techniques.' }
        ],
        tasks: {
            1: {
                title: 'Introduction to Mindfulness',
                description: 'Set aside 5 minutes in your day for quiet observation.',
                xp: 50,
                type: 'action',
                content: "**Day 1: Introduction**\n\n**Prompt:** What do you notice about your breath right now?\n\n**Task:** Set aside 5 minutes for quiet observation.\n\n**Journal:** How did it feel to slow down?"
            },
            2: {
                title: 'Body Scan Meditation',
                description: 'Perform a body scan when you wake up or before bed.',
                xp: 50,
                type: 'action',
                content: "**Day 2: Body Scan**\n\n**Prompt:** Starting from your toes, notice any sensations without judgment.\n\n**Task:** Perform a body scan (10 mins).\n\n**Journal:** Which parts of your body hold the most tension?"
            },
            3: {
                title: 'Mindful Breathing',
                description: 'Practice 3 rounds of box breathing.',
                xp: 50,
                type: 'timer',
                duration: 5,
                content: "**Day 3: The Breath**\n\n**Prompt:** Focus only on the breath - in for 4, hold for 4, out for 4, hold for 4.\n\n**Task:** Practice 3 rounds of box breathing."
            },
            4: {
                title: 'Walking Meditation',
                description: 'Walk slowly for 10 minutes, focusing on physical sensations.',
                xp: 50,
                type: 'action',
                content: "**Day 4: Moving Mindfulness**\n\n**Prompt:** Notice each step - heel, ball, toe. Feel the ground beneath you.\n\n**Task:** 10-minute mindful walk."
            },
            5: {
                title: 'Mindful Eating',
                description: 'Eat one meal without screens or distractions.',
                xp: 50,
                type: 'action',
                content: "**Day 5: Mindful Eating**\n\n**Prompt:** Notice colors, textures, tastes, and the experience of chewing.\n\n**Task:** Eat without screens today."
            },
            6: {
                title: 'Loving-Kindness',
                description: 'Practice extending kindness to yourself and loved ones.',
                xp: 50,
                type: 'action',
                content: "**Day 6: Loving-Kindness**\n\n**Prompt:** May I be happy, may I be healthy, may I be at peace.\n\n**Task:** 5-minute Loving-Kindness meditation."
            },
            7: {
                title: 'Reflection & Integration',
                description: 'Create a personal mindfulness routine.',
                xp: 100,
                type: 'reflection',
                badge: 'mindfulness_starter',
                content: "**Day 7: Integration**\n\n**Prompt:** What practices resonated most? Which will you continue?\n\n**Task:** Create a plan for next week."
            }
        }
    },
    // 11. Building Healthy Communication (7 Days)
    {
        id: 'communication_journey_7_day',
        title: 'Building Healthy Communication',
        duration: 7,
        category: 'Relationships',
        group: 'identity',
        description: 'Improve relationship skills, conflict resolution, and active listening.',
        tags: ['Relationships', 'Communication', 'Empathy'],
        phases: [
            { id: 1, title: 'Listening & Expression', days: [1, 7], description: 'Core skills for better connection.' }
        ],
        tasks: {
            1: {
                title: 'Active Listening',
                description: 'Have a conversation where you only listen to understand.',
                xp: 50,
                type: 'action',
                content: "**Day 1: Active Listening**\n\n**Prompt:** Listen to understand, not to respond.\n\n**Task:** Have a 10-minute conversation where you focus entirely on the other person."
            },
            2: {
                title: 'The "I" Statement',
                description: 'Practice expressing feelings without blame.',
                xp: 50,
                type: 'journal',
                content: "**Day 2: I Statements**\n\n**Task:** Write an 'I' statement: 'I feel [emotion] when [situation] because [impact].'"
            },
            3: {
                title: 'Validating Emotions',
                description: 'Validate someone else\'s feeling today.',
                xp: 50,
                type: 'action',
                content: "**Day 3: Validation**\n\n**Task:** Instead of fixing a problem, say 'That sounds really hard' or 'It makes sense you feel that way'."
            },
            4: {
                title: 'Identifying Triggers',
                description: 'What sets you off in conversations?',
                xp: 50,
                type: 'journal',
                content: "**Day 4: Triggers**\n\n**Task:** Identify one topic or tone that triggers a defensive reaction in you."
            },
            5: {
                title: 'The Pause',
                description: 'Take a breath before responding to conflict.',
                xp: 50,
                type: 'action',
                content: "**Day 5: The Pause**\n\n**Task:** In a moment of tension, take one full breath before speaking."
            },
            6: {
                title: 'Expressing Gratitude',
                description: 'Tell someone why you appreciate them.',
                xp: 50,
                type: 'action',
                content: "**Day 6: Appreciation**\n\n**Task:** Send a text or tell someone specific things you value about them."
            },
            7: {
                title: 'Communication Goal',
                description: 'Set a relationship goal for the month.',
                xp: 100,
                type: 'reflection',
                badge: 'communication_builder',
                content: "**Day 7: Moving Forward**\n\n**Task:** Set one concrete communication goal for your most important relationship."
            }
        }
    }
];
