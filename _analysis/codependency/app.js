// Course Data
const courseData = {
  title: "7-Day Codependency Recovery Intensive",
  subtitle: "Break Free from Codependency, Blame, and Shame",
  days: [
    {
      day: 1,
      title: "Understanding Codependency & Shame",
      theme: "Awareness & Recognition",
      color: "#FF6B6B",
      modules: [
        {
          id: "d1m1",
          name: "What is Codependency?",
          duration: "45 min",
          points: 100,
          content: {
            intro: "Codependency is a pattern of excessive emotional or psychological reliance on another person, typically characterized by a loss of independent identity.",
            topics: [
              "Codependency involves losing your sense of self in relationships",
              "Core characteristics: Low self-esteem, people-pleasing, poor boundaries, excessive caretaking",
              "Often develops in childhood with emotionally unavailable, addicted, or abusive parents",
              "Different from healthy interdependence which maintains individual identity and mutual support"
            ],
            keyPoints: [
              "Your mood and self-worth depend on others' feelings and behaviors",
              "You feel overly responsible for others' happiness and problems",
              "You neglect your own needs to care for or fix others",
              "You have difficulty identifying and expressing your own feelings"
            ]
          },
          quiz: [
            {
              question: "What is the main difference between codependency and healthy interdependence?",
              options: [
                "Codependency maintains individual identity, interdependence doesn't",
                "Codependency involves loss of self, interdependence maintains sense of self",
                "There is no difference between them",
                "Interdependence is always unhealthy"
              ],
              correct: 1,
              explanation: "In codependency, you lose your sense of self and identity, while healthy interdependence allows you to maintain your individual identity while being connected to others."
            },
            {
              question: "Which of these is a core characteristic of codependency?",
              options: [
                "High self-esteem and confidence",
                "Strong, healthy boundaries",
                "People-pleasing behaviors",
                "Healthy self-care practices"
              ],
              correct: 2,
              explanation: "People-pleasing is a hallmark of codependency, where you prioritize others' needs over your own to gain approval and avoid conflict."
            },
            {
              question: "Codependency often develops from:",
              options: [
                "Having perfect childhood",
                "Being too independent",
                "Growing up with emotionally unavailable or addicted parents",
                "Having strong boundaries"
              ],
              correct: 2,
              explanation: "Codependency often has roots in childhood experiences with caregivers who were emotionally unavailable, addicted, abusive, or whose needs took precedence over the child's."
            }
          ],
          exercise: {
            title: "Codependency Self-Assessment",
            type: "checklist",
            instructions: "Check all statements that apply to you:",
            items: [
              "I feel responsible for other people's feelings and happiness",
              "I have difficulty saying no without feeling guilty",
              "I feel anxious or worried when others are upset",
              "I often neglect my own needs to help or please others",
              "I feel unworthy of love unless I'm helping someone",
              "I stay in unhealthy relationships longer than I should",
              "I have difficulty identifying my own feelings and needs",
              "I constantly seek approval and validation from others"
            ]
          }
        },
        {
          id: "d1m2",
          name: "Understanding Shame & Its Impact",
          duration: "45 min",
          points: 100,
          content: {
            intro: "Shame is one of the most powerful emotions driving codependent behavior. Understanding shame is essential to breaking free.",
            topics: [
              "Shame says 'I am bad' - Guilt says 'I did something bad'",
              "Shame fuels codependency by making you feel fundamentally unworthy",
              "Physical symptoms: heat in face/neck, nausea, tunnel vision, shaking, dry mouth",
              "Shame grows in secrecy, silence, and judgment - it shrinks with empathy"
            ],
            keyPoints: [
              "Shame attacks your core identity making you feel flawed",
              "It drives you to prove your worth through caretaking and people-pleasing",
              "Empathy is the most powerful antidote to shame",
              "Speaking shame out loud reduces its power over you"
            ]
          },
          quiz: [
            {
              question: "What is the key difference between shame and guilt?",
              options: [
                "Shame is about behavior, guilt is about identity",
                "Shame is about identity ('I am bad'), guilt is about behavior ('I did something bad')",
                "There is no real difference",
                "Guilt is always worse than shame"
              ],
              correct: 1,
              explanation: "Shame attacks your core identity making you feel you ARE bad, while guilt is about specific actions you took. Guilt can be productive; shame is destructive."
            },
            {
              question: "According to research, what is the antidote to shame?",
              options: [
                "Ignoring it",
                "Empathy and connection",
                "Blame and criticism",
                "Isolation"
              ],
              correct: 1,
              explanation: "Brené Brown's research shows that empathy - being seen and understood - is the most powerful antidote to shame."
            }
          ],
          exercise: {
            title: "Shame Trigger Mapping",
            type: "journal",
            instructions: "Take time to reflect and write your answers:",
            prompts: [
              "I feel most ashamed when...",
              "Physical sensations I notice when feeling shame:",
              "Situations or topics that trigger my shame:",
              "Messages I received as a child about my worth:"
            ]
          }
        },
        {
          id: "d1m3",
          name: "The Codependency-Shame Connection",
          duration: "45 min",
          points: 100,
          content: {
            intro: "Shame and codependency feed each other in a vicious cycle. Breaking this connection is key to recovery.",
            topics: [
              "Shame creates belief: 'I'm not good enough' → Codependent behavior: 'I must prove my worth'",
              "Codependents try to earn love through caretaking because shame says they're unworthy",
              "Toxic shame from childhood creates adult codependent patterns",
              "Breaking the cycle requires recognizing the connection and developing shame resilience"
            ],
            keyPoints: [
              "Shame convinces you that you must earn love and belonging",
              "Codependent behaviors are attempts to manage shame",
              "You can't fix someone else to fix your shame",
              "Healing shame is essential to overcoming codependency"
            ]
          },
          quiz: [
            {
              question: "How does shame drive codependent behavior?",
              options: [
                "It doesn't - they're unrelated",
                "Shame makes you feel unworthy, so you try to prove worth through caretaking",
                "Shame makes you too confident",
                "Shame helps you set boundaries"
              ],
              correct: 1,
              explanation: "Shame creates feelings of unworthiness, which drives codependents to prove their value through excessive caretaking and people-pleasing."
            }
          ],
          exercise: {
            title: "Breaking the Connection",
            type: "reflection",
            instructions: "Reflect on these questions:",
            prompts: [
              "How have I tried to prove my worth in relationships?",
              "What am I afraid will happen if I stop caretaking?",
              "What would it feel like to be worthy just as I am?"
            ]
          }
        }
      ],
      dailyChallenge: {
        title: "Day 1 Challenge: Awareness",
        description: "Complete your shame trigger journal with detailed responses. Identify and write down 3 specific codependent patterns you notice in your relationships.",
        points: 200
      }
    },
    {
      day: 2,
      title: "Blame, Shifting Blame & Cognitive Distortions",
      theme: "Thought Patterns",
      color: "#4ECDC4",
      modules: [
        {
          id: "d2m1",
          name: "Understanding Blame in Codependency",
          duration: "50 min",
          points: 100,
          content: {
            intro: "Blaming is a cognitive distortion that keeps you stuck in codependent patterns.",
            topics: [
              "Blaming: holding others responsible for your emotional state or vice versa",
              "Codependents often accept false blame from partners ('It's your fault I drink')",
              "Blame-shifting prevents both parties from taking appropriate responsibility",
              "True responsibility vs accepting inappropriate blame for others' choices"
            ],
            keyPoints: [
              "No one can MAKE you feel a certain way - you own your feelings",
              "You are NOT responsible for others' choices or behaviors",
              "Accepting false blame enables dysfunction and prevents change",
              "Setting boundaries means refusing to accept blame for others' behavior"
            ]
          },
          quiz: [
            {
              question: "When a partner says 'You made me so angry I had to yell,' this is an example of:",
              options: [
                "Taking healthy responsibility",
                "Blame-shifting to avoid accountability",
                "Assertive communication",
                "Setting appropriate boundaries"
              ],
              correct: 1,
              explanation: "This is blame-shifting. Each person is responsible for their own emotional responses and behavioral choices. No one can MAKE another person yell."
            },
            {
              question: "Which statement reflects appropriate responsibility?",
              options: [
                "I'm responsible for my partner's happiness",
                "I'm responsible for my own reactions and behaviors",
                "I'm responsible for preventing my partner's relapse",
                "I caused my partner's problems"
              ],
              correct: 1,
              explanation: "You are responsible for your own thoughts, feelings, and behaviors - not for managing others' emotions or choices."
            }
          ],
          exercise: {
            title: "Blame Pattern Recognition",
            type: "sorting",
            instructions: "For each item, decide: Is this MY responsibility or NOT MY responsibility?",
            items: [
              { item: "My partner's drinking or drug use", category: "not" },
              { item: "My own emotional reactions", category: "mine" },
              { item: "How I communicate my needs", category: "mine" },
              { item: "My partner's happiness", category: "not" },
              { item: "Setting my own boundaries", category: "mine" },
              { item: "Fixing my partner's problems", category: "not" },
              { item: "My partner's anger issues", category: "not" },
              { item: "My self-care practices", category: "mine" }
            ]
          }
        },
        {
          id: "d2m2",
          name: "Recognizing Cognitive Distortions",
          duration: "50 min",
          points: 100,
          content: {
            intro: "Cognitive distortions are thinking errors that maintain codependent patterns.",
            topics: [
              "All-or-nothing thinking: 'If I'm not perfect, I'm a complete failure'",
              "Mind reading: 'They must think I'm terrible'",
              "Should statements: 'I should always put others first'",
              "Personalization: 'Everything is my fault'"
            ],
            keyPoints: [
              "These thought patterns feel true but are inaccurate",
              "Challenging distortions is a key CBT skill",
              "You can learn to think more realistically",
              "Changing thoughts changes feelings and behaviors"
            ]
          },
          quiz: [
            {
              question: "Which is an example of all-or-nothing thinking?",
              options: [
                "Sometimes I make mistakes and that's okay",
                "If I'm not perfect at helping, I'm worthless",
                "I did my best in that situation",
                "I can improve with practice"
              ],
              correct: 1,
              explanation: "All-or-nothing thinking sees everything in black and white extremes with no middle ground."
            }
          ],
          exercise: {
            title: "Thought Challenging",
            type: "cbt-record",
            instructions: "Practice identifying and challenging a distorted thought",
            prompts: [
              "Situation that triggered negative thought:",
              "Automatic thought (what went through your mind):",
              "Type of distortion (blaming, all-or-nothing, mind-reading, should, etc.):",
              "Evidence FOR this thought:",
              "Evidence AGAINST this thought:",
              "More balanced, realistic thought:"
            ]
          }
        }
      ],
      dailyChallenge: {
        title: "Day 2 Challenge: Thought Tracking",
        description: "Throughout today, catch and write down 5 cognitive distortions you notice in your thinking. For each one, challenge it with a more balanced thought.",
        points: 200
      }
    },
    // Days 3-7 with simplified module structure
    {
      day: 3,
      title: "Building Boundaries & Self-Identity",
      theme: "Establishing Self",
      color: "#95E1D3",
      modules: [
        {
          id: "d3m1",
          name: "Understanding Healthy Boundaries",
          duration: "50 min",
          points: 100,
          content: {
            intro: "Boundaries are essential for healthy relationships and recovering from codependency.",
            topics: [
              "Physical boundaries: personal space, touch, privacy",
              "Emotional boundaries: not taking on others' feelings",
              "Mental boundaries: your thoughts and values are your own",
              "Time/energy boundaries: how you spend your resources"
            ],
            keyPoints: [
              "Boundaries protect your sense of self",
              "Saying 'no' is not selfish - it's self-care",
              "You can't control others' reactions to your boundaries",
              "Boundaries require practice and consistency"
            ]
          },
          quiz: [
            {
              question: "Healthy boundaries mean:",
              options: [
                "Never helping anyone",
                "Protecting yourself while maintaining connection",
                "Building walls to keep people out",
                "Always saying yes to avoid conflict"
              ],
              correct: 1,
              explanation: "Healthy boundaries allow you to protect your well-being while still maintaining meaningful connections with others."
            }
          ],
          exercise: {
            title: "Boundary Assessment",
            type: "checklist",
            instructions: "Identify areas where you need stronger boundaries:",
            items: [
              "I have difficulty saying 'no' to requests",
              "I allow people to speak to me disrespectfully",
              "I share too much personal information too quickly",
              "I feel guilty when I prioritize my own needs",
              "I let others make decisions for me",
              "I tolerate behavior that makes me uncomfortable"
            ]
          }
        },
        {
          id: "d3m2",
          name: "Setting and Maintaining Boundaries",
          duration: "50 min",
          points: 100,
          content: {
            intro: "Learning to set and maintain boundaries is a critical skill for recovery.",
            topics: [
              "Be clear and direct about your boundaries",
              "Use 'I' statements: 'I need', 'I feel', 'I will'",
              "Prepare for pushback - it's normal",
              "Follow through with consequences"
            ],
            keyPoints: [
              "Start with small, manageable boundaries",
              "You don't need to justify or explain extensively",
              "It's okay if others are disappointed",
              "Your needs matter as much as anyone else's"
            ]
          },
          quiz: [
            {
              question: "When setting a boundary, it's best to:",
              options: [
                "Apologize extensively and hope they understand",
                "Be clear, direct, and calm",
                "Explain for 30 minutes why you need it",
                "Wait until you're extremely angry"
              ],
              correct: 1,
              explanation: "Clear, direct, and calm communication is most effective for setting boundaries."
            }
          ],
          exercise: {
            title: "Boundary Scripts",
            type: "journal",
            instructions: "Write boundary statements for these scenarios:",
            prompts: [
              "Someone asks for money you can't afford to give:",
              "A family member criticizes your life choices:",
              "A friend calls late at night regularly:",
              "Someone expects you to drop everything for them:"
            ]
          }
        }
      ],
      dailyChallenge: {
        title: "Day 3 Challenge: Boundary Practice",
        description: "Set and communicate one new boundary today. Document: What boundary did you set? How did you communicate it? What happened? How did you feel?",
        points: 200
      }
    },
    {
      day: 4,
      title: "Shame Resilience & Self-Compassion",
      theme: "Building Resilience",
      color: "#F38181",
      modules: [
        {
          id: "d4m1",
          name: "Developing Shame Resilience",
          duration: "50 min",
          points: 100,
          content: {
            intro: "Shame resilience is the ability to recognize shame and move through it constructively.",
            topics: [
              "Recognize when you're in shame (physical and emotional signs)",
              "Reality check: What's the story shame is telling you?",
              "Reach out: Connect with someone you trust",
              "Speak shame: Sharing shame with empathy kills its power"
            ],
            keyPoints: [
              "Shame thrives in secrecy and silence",
              "You are not alone in your struggles",
              "Vulnerability is courage, not weakness",
              "Empathy and connection heal shame"
            ]
          },
          quiz: [
            {
              question: "The most effective way to combat shame is:",
              options: [
                "Hide it and hope it goes away",
                "Share it with someone who can offer empathy",
                "Criticize yourself more",
                "Isolate until you feel better"
              ],
              correct: 1,
              explanation: "Research shows that sharing shame with someone who responds with empathy is the most powerful way to reduce shame's impact."
            }
          ],
          exercise: {
            title: "Shame Resilience Practice",
            type: "journal",
            instructions: "Work through a recent shame experience:",
            prompts: [
              "Describe a recent shame experience:",
              "What physical sensations did you notice?",
              "What story was shame telling you about yourself?",
              "Who could you reach out to for empathy and support?"
            ]
          }
        },
        {
          id: "d4m2",
          name: "Practicing Self-Compassion",
          duration: "50 min",
          points: 100,
          content: {
            intro: "Self-compassion means treating yourself with the same kindness you'd offer a good friend.",
            topics: [
              "Self-kindness vs self-judgment",
              "Common humanity: You're not alone in struggling",
              "Mindfulness: Observe your pain without over-identifying",
              "Self-compassion is not self-pity or self-indulgence"
            ],
            keyPoints: [
              "Talk to yourself like you'd talk to a friend",
              "Your imperfections make you human, not unworthy",
              "Self-compassion increases resilience and motivation",
              "You deserve your own kindness"
            ]
          },
          quiz: [
            {
              question: "Self-compassion means:",
              options: [
                "Never holding yourself accountable",
                "Being kind to yourself while acknowledging struggles",
                "Making excuses for everything",
                "Never trying to improve"
              ],
              correct: 1,
              explanation: "Self-compassion involves being kind to yourself while still taking responsibility and working toward growth."
            }
          ],
          exercise: {
            title: "Self-Compassion Letter",
            type: "journal",
            instructions: "Write a compassionate letter to yourself:",
            prompts: [
              "What are you struggling with right now?",
              "What would a compassionate friend say to you?",
              "Write yourself a letter of kindness and understanding:"
            ]
          }
        }
      ],
      dailyChallenge: {
        title: "Day 4 Challenge: Compassion & Connection",
        description: "Practice self-compassion 5 times today when you notice self-criticism. Share one shame story with a trusted person and notice what happens to the shame.",
        points: 200
      }
    },
    {
      day: 5,
      title: "Emotional Regulation & Distress Tolerance",
      theme: "Managing Emotions",
      color: "#AA96DA",
      modules: [
        {
          id: "d5m1",
          name: "Understanding Your Emotions",
          duration: "50 min",
          points: 100,
          content: {
            intro: "Learning to identify and regulate emotions is crucial for recovery.",
            topics: [
              "Emotions are messengers - they provide information",
              "All emotions are valid, even uncomfortable ones",
              "You can't control emotions, but you can manage responses",
              "Emotional awareness is the first step to regulation"
            ],
            keyPoints: [
              "Name the emotion to tame it",
              "Emotions come in waves - they rise and fall",
              "Avoiding emotions makes them stronger",
              "You can feel emotions without acting on them"
            ]
          },
          quiz: [
            {
              question: "The healthiest approach to difficult emotions is:",
              options: [
                "Suppress them and move on",
                "Acknowledge, allow, and manage them skillfully",
                "Act on them immediately",
                "Blame others for causing them"
              ],
              correct: 1,
              explanation: "Acknowledging emotions, allowing yourself to feel them, and using healthy coping skills is the most effective approach."
            }
          ],
          exercise: {
            title: "Emotion Wheel Exploration",
            type: "journal",
            instructions: "Explore your current emotional state:",
            prompts: [
              "What emotion am I feeling right now?",
              "What more specific word describes this feeling?",
              "What triggered this emotion?",
              "What is this emotion telling me I need?"
            ]
          }
        },
        {
          id: "d5m2",
          name: "Distress Tolerance Skills",
          duration: "50 min",
          points: 100,
          content: {
            intro: "Distress tolerance skills help you cope with difficult emotions without making things worse.",
            topics: [
              "STOP Skill: Stop, Take a breath, Observe, Proceed mindfully",
              "Self-soothing with five senses",
              "TIPP: Temperature, Intense exercise, Paced breathing, Progressive relaxation",
              "Radical acceptance: Accepting reality as it is"
            ],
            keyPoints: [
              "You can tolerate more than you think",
              "Distress tolerance prevents impulsive reactions",
              "These skills get easier with practice",
              "Having a toolkit ready helps in crisis moments"
            ]
          },
          quiz: [
            {
              question: "The STOP skill helps you:",
              options: [
                "Eliminate all negative emotions",
                "Pause and respond mindfully instead of reacting",
                "Avoid all difficult situations",
                "Blame others for your distress"
              ],
              correct: 1,
              explanation: "STOP creates a pause between stimulus and response, allowing you to choose a skillful response rather than reacting impulsively."
            }
          ],
          exercise: {
            title: "Create Your Self-Soothing Toolkit",
            type: "checklist",
            instructions: "Identify self-soothing activities for each sense:",
            items: [
              "Sight: Beautiful images, nature, art",
              "Sound: Calming music, nature sounds",
              "Smell: Essential oils, favorite scents",
              "Taste: Tea, comfort foods in moderation",
              "Touch: Soft blanket, warm bath, pet"
            ]
          }
        }
      ],
      dailyChallenge: {
        title: "Day 5 Challenge: Skills Practice",
        description: "Use 3 different distress tolerance skills today. Track your emotional patterns every 2 hours using the emotion wheel.",
        points: 200
      }
    },
    {
      day: 6,
      title: "Effective Communication & Relationship Skills",
      theme: "Communication Mastery",
      color: "#FCBAD3",
      modules: [
        {
          id: "d6m1",
          name: "Assertive Communication",
          duration: "50 min",
          points: 100,
          content: {
            intro: "Assertive communication allows you to express your needs while respecting others.",
            topics: [
              "Passive: Ignoring your own needs",
              "Aggressive: Disregarding others' needs",
              "Passive-aggressive: Indirect hostility",
              "Assertive: Direct, honest, respectful"
            ],
            keyPoints: [
              "Use 'I' statements: 'I feel', 'I need', 'I think'",
              "Be clear and specific about your needs",
              "Maintain calm, confident body language",
              "You have a right to express yourself"
            ]
          },
          quiz: [
            {
              question: "An example of assertive communication is:",
              options: [
                "'You always do this!' (accusatory)",
                "'I feel hurt when plans change without notice. I need advance warning.'",
                "'Whatever you want is fine.' (dismissive of own needs)",
                "Silent treatment"
              ],
              correct: 1,
              explanation: "This uses an 'I' statement, expresses feelings clearly, and states needs directly and respectfully."
            }
          ],
          exercise: {
            title: "Assertiveness Practice",
            type: "journal",
            instructions: "Convert these scenarios to assertive statements:",
            prompts: [
              "Passive: 'I guess it's okay if you cancel again.' → Assertive:",
              "Aggressive: 'You never listen to me!' → Assertive:",
              "Passive-aggressive: 'Fine, do whatever you want.' → Assertive:"
            ]
          }
        },
        {
          id: "d6m2",
          name: "The DEAR MAN Skill",
          duration: "50 min",
          points: 100,
          content: {
            intro: "DEAR MAN is a structured approach to asking for what you need or saying no.",
            topics: [
              "Describe the situation objectively",
              "Express your feelings and opinions",
              "Assert what you want clearly",
              "Reinforce the benefits",
              "Stay Mindful, Appear confident, Negotiate"
            ],
            keyPoints: [
              "Prepare what you'll say in advance",
              "Stay focused on your goal",
              "Don't apologize for having needs",
              "Be willing to compromise when appropriate"
            ]
          },
          quiz: [
            {
              question: "In DEAR MAN, 'Assert' means:",
              options: [
                "Being aggressive and demanding",
                "Clearly stating what you want or need",
                "Giving up on your needs",
                "Manipulating the other person"
              ],
              correct: 1,
              explanation: "Assert means clearly and directly stating your request or boundary in a respectful way."
            }
          ],
          exercise: {
            title: "DEAR MAN Practice",
            type: "journal",
            instructions: "Use DEAR MAN for a situation in your life:",
            prompts: [
              "Describe: What is the situation?",
              "Express: How do you feel about it?",
              "Assert: What do you want or need?",
              "Reinforce: What are the positive outcomes?"
            ]
          }
        }
      ],
      dailyChallenge: {
        title: "Day 6 Challenge: DEAR MAN in Action",
        description: "Practice the DEAR MAN skill in a real situation to make a request or set a boundary. Identify 3 relationship patterns you want to change.",
        points: 200
      }
    },
    {
      day: 7,
      title: "Integration & Moving Forward",
      theme: "Your Recovery Plan",
      color: "#FFFFD2",
      modules: [
        {
          id: "d7m1",
          name: "Creating Your Recovery Roadmap",
          duration: "60 min",
          points: 100,
          content: {
            intro: "Your recovery journey continues beyond this course. Create a sustainable plan for ongoing growth.",
            topics: [
              "Identify your core values and priorities",
              "Set specific, measurable recovery goals",
              "Build your support system",
              "Plan for challenges and setbacks"
            ],
            keyPoints: [
              "Recovery is a journey, not a destination",
              "Progress isn't linear - expect ups and downs",
              "Self-awareness and practice are key",
              "You have the tools you need"
            ]
          },
          quiz: [
            {
              question: "Sustainable recovery requires:",
              options: [
                "Being perfect and never struggling",
                "Ongoing practice, self-compassion, and support",
                "Isolating to avoid triggers",
                "Never needing help again"
              ],
              correct: 1,
              explanation: "Recovery is an ongoing practice that requires continued effort, self-compassion, and connection with supportive others."
            }
          ],
          exercise: {
            title: "90-Day Action Plan",
            type: "journal",
            instructions: "Create your personal recovery action plan:",
            prompts: [
              "Three main goals for the next 90 days:",
              "Daily practices I'll commit to:",
              "Weekly check-ins with myself or others:",
              "Warning signs I'm slipping into old patterns:",
              "Support resources I can access when struggling:"
            ]
          }
        },
        {
          id: "d7m2",
          name: "Celebrating Your Progress",
          duration: "30 min",
          points: 100,
          content: {
            intro: "Take time to acknowledge how far you've come and integrate what you've learned.",
            topics: [
              "Review key insights from each day",
              "Recognize patterns you've identified",
              "Acknowledge skills you've developed",
              "Commit to continued growth"
            ],
            keyPoints: [
              "You've taken courageous steps",
              "Knowledge is power - you now understand yourself better",
              "Skills improve with practice and time",
              "You are worthy of healthy, fulfilling relationships"
            ]
          },
          quiz: [
            {
              question: "The most important thing you've learned is:",
              options: [
                "You are responsible for everyone's happiness",
                "You are worthy of love and healthy boundaries",
                "You should never need anyone",
                "Change happens overnight"
              ],
              correct: 1,
              explanation: "You are inherently worthy of love, respect, and healthy relationships. Boundaries and self-care are essential, not selfish."
            }
          ],
          exercise: {
            title: "Reflection & Commitment",
            type: "journal",
            instructions: "Reflect on your journey:",
            prompts: [
              "What have I learned about myself?",
              "What skills will I continue practicing?",
              "How am I different from when I started?",
              "My commitment to myself going forward:"
            ]
          }
        }
      ],
      dailyChallenge: {
        title: "Day 7 Final Challenge: Recovery Roadmap",
        description: "Complete your comprehensive personal recovery roadmap and create your 90-day action plan with specific, measurable goals.",
        points: 300
      }
    }
  ],
  badges: [
    { name: "First Steps", requirement: "Complete Day 1", icon: "🎯", key: "day1" },
    { name: "Pattern Breaker", requirement: "Complete Day 2", icon: "🔓", key: "day2" },
    { name: "Boundary Builder", requirement: "Complete Day 3", icon: "🛡️", key: "day3" },
    { name: "Shame Warrior", requirement: "Complete Day 4", icon: "⚔️", key: "day4" },
    { name: "Emotion Master", requirement: "Complete Day 5", icon: "🧘", key: "day5" },
    { name: "Communication Pro", requirement: "Complete Day 6", icon: "💬", key: "day6" },
    { name: "Recovery Champion", requirement: "Complete all 7 days", icon: "🏆", key: "allDays" },
    { name: "Streak Master", requirement: "Complete 7 consecutive days", icon: "🔥", key: "streak7" },
    { name: "Quiz Master", requirement: "Score 90%+ on all quizzes", icon: "🧠", key: "quizMaster" },
    { name: "Challenge Crusher", requirement: "Complete all daily challenges", icon: "💪", key: "allChallenges" }
  ],
  levels: [
    { level: 1, name: "Awakening", minPoints: 0 },
    { level: 2, name: "Aware", minPoints: 500 },
    { level: 3, name: "Learning", minPoints: 1000 },
    { level: 4, name: "Practicing", minPoints: 1500 },
    { level: 5, name: "Growing", minPoints: 2000 },
    { level: 6, name: "Transforming", minPoints: 2500 },
    { level: 7, name: "Thriving", minPoints: 3000 },
    { level: 8, name: "Master", minPoints: 3500 }
  ],
  motivationalQuotes: [
    "You are worthy of love and respect, just as you are.",
    "Setting boundaries is self-care, not selfishness.",
    "Your needs matter as much as anyone else's.",
    "Healing is not linear, and that's okay.",
    "You cannot pour from an empty cup.",
    "Codependency is learned - it can be unlearned.",
    "Shame cannot survive being spoken.",
    "You are responsible FOR yourself, not TO everyone else."
  ]
};

// State Management
let state = {
  currentDay: 0,
  currentModule: null,
  points: 0,
  level: 1,
  earnedBadges: [],
  completedModules: [],
  completedDays: [],
  completedChallenges: [],
  quizScores: {},
  streak: 0,
  currentScreen: 'welcome'
};

// Initialize App
function init() {
  showScreen('welcome-screen');
}

// Start Course
function startCourse() {
  state.currentDay = 1;
  state.streak = 1;
  showDashboard();
  document.getElementById('navbar').style.display = 'block';
}

// Screen Management
function showScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  window.scrollTo(0, 0);
}

// Dashboard
function showDashboard() {
  showScreen('dashboard-screen');
  updateNavStats();
  
  // Update stats
  document.getElementById('total-points').textContent = state.points;
  document.getElementById('current-level').textContent = getCurrentLevel().name;
  document.getElementById('badge-count').textContent = `${state.earnedBadges.length}/10`;
  document.getElementById('streak-count').textContent = state.streak;
  
  // Motivational quote
  const quote = courseData.motivationalQuotes[Math.floor(Math.random() * courseData.motivationalQuotes.length)];
  document.getElementById('motivational-quote').textContent = `"${quote}"`;
  
  // Overall progress
  const totalModules = courseData.days.reduce((sum, day) => sum + day.modules.length, 0);
  const completedPercent = Math.round((state.completedModules.length / totalModules) * 100);
  document.getElementById('overall-progress-bar').style.width = `${completedPercent}%`;
  document.getElementById('overall-progress-text').textContent = `${completedPercent}% Complete`;
  
  // Level progress
  updateLevelProgress();
  
  // Days list
  renderDaysList();
}

function getCurrentLevel() {
  let currentLevel = courseData.levels[0];
  for (let i = courseData.levels.length - 1; i >= 0; i--) {
    if (state.points >= courseData.levels[i].minPoints) {
      currentLevel = courseData.levels[i];
      break;
    }
  }
  return currentLevel;
}

function updateLevelProgress() {
  const currentLevel = getCurrentLevel();
  const currentLevelIndex = courseData.levels.findIndex(l => l.level === currentLevel.level);
  const nextLevel = courseData.levels[currentLevelIndex + 1];
  
  document.getElementById('current-level-name').textContent = `Level ${currentLevel.level}: ${currentLevel.name}`;
  
  if (nextLevel) {
    const pointsInLevel = state.points - currentLevel.minPoints;
    const pointsNeeded = nextLevel.minPoints - currentLevel.minPoints;
    const progress = Math.min((pointsInLevel / pointsNeeded) * 100, 100);
    document.getElementById('level-progress-bar').style.width = `${progress}%`;
    document.getElementById('next-level-info').textContent = `Next: ${nextLevel.name} at ${nextLevel.minPoints} points`;
  } else {
    document.getElementById('level-progress-bar').style.width = '100%';
    document.getElementById('next-level-info').textContent = 'Maximum level achieved!';
  }
}

function renderDaysList() {
  const daysList = document.getElementById('days-list');
  daysList.innerHTML = '';
  
  courseData.days.forEach((day, index) => {
    const dayNum = index + 1;
    const isLocked = dayNum > state.currentDay;
    const isCompleted = state.completedDays.includes(dayNum);
    const isCurrent = dayNum === state.currentDay;
    
    const dayCard = document.createElement('div');
    dayCard.className = `day-card ${isLocked ? 'day-locked' : ''} ${isCompleted ? 'day-completed' : ''} ${isCurrent ? 'day-current' : ''}`;
    
    if (!isLocked) {
      dayCard.onclick = () => showDayOverview(dayNum);
    }
    
    let statusIcon = '🔒';
    if (isCompleted) statusIcon = '✅';
    else if (isCurrent) statusIcon = '▶️';
    
    const completedModulesCount = day.modules.filter(m => state.completedModules.includes(m.id)).length;
    const totalModules = day.modules.length;
    
    dayCard.innerHTML = `
      <div class="day-header">
        <div class="day-number">Day ${dayNum}</div>
        <div class="day-status">${statusIcon}</div>
      </div>
      <div class="day-title">${day.title}</div>
      <div class="day-theme">${day.theme}</div>
      <div class="day-progress">${completedModulesCount}/${totalModules} modules completed</div>
    `;
    
    daysList.appendChild(dayCard);
  });
}

function continueCurrentDay() {
  if (state.currentDay > 0 && state.currentDay <= courseData.days.length) {
    showDayOverview(state.currentDay);
  }
}

// Day Overview
function showDayOverview(dayNum) {
  const day = courseData.days[dayNum - 1];
  if (!day) return;
  
  const screen = document.getElementById('day-overview-screen');
  
  let modulesHTML = day.modules.map((module, index) => {
    const isCompleted = state.completedModules.includes(module.id);
    return `
      <div class="content-card" style="border-left: 4px solid ${day.color}">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 16px;">
          <div>
            <h3>Module ${index + 1}: ${module.name}</h3>
            <p style="color: var(--color-text-secondary); margin: 8px 0 0 0;">${module.duration} • ${module.points} points</p>
          </div>
          <div style="font-size: 32px;">${isCompleted ? '✅' : '⭕'}</div>
        </div>
        <button class="btn btn-primary" onclick="startModule(${dayNum}, ${index})">
          ${isCompleted ? 'Review Module' : 'Start Module'}
        </button>
      </div>
    `;
  }).join('');
  
  const challengeCompleted = state.completedChallenges.includes(dayNum);
  
  screen.innerHTML = `
    <div class="container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>Day ${dayNum}: ${day.title}</h1>
        <p style="font-size: var(--font-size-lg); color: var(--color-text-secondary); margin-top: 8px;">${day.theme}</p>
      </div>
      
      <h2 style="margin-bottom: 16px;">Modules</h2>
      ${modulesHTML}
      
      <div class="content-card" style="border-left: 4px solid ${day.color}; background-color: var(--color-bg-6);">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 16px;">
          <div>
            <h3>📋 ${day.dailyChallenge.title}</h3>
            <p style="margin: 12px 0;">${day.dailyChallenge.description}</p>
            <p style="color: var(--color-text-secondary); font-weight: bold;">${day.dailyChallenge.points} points</p>
          </div>
          <div style="font-size: 32px;">${challengeCompleted ? '✅' : '⭕'}</div>
        </div>
        <button class="btn btn-success" onclick="completeChallenge(${dayNum})" ${challengeCompleted ? 'disabled' : ''}>
          ${challengeCompleted ? 'Challenge Completed' : 'Mark Challenge as Complete'}
        </button>
      </div>
      
      <button class="btn btn-secondary" onclick="showDashboard()">Back to Dashboard</button>
    </div>
  `;
  
  showScreen('day-overview-screen');
}

// Module
function startModule(dayNum, moduleIndex) {
  const day = courseData.days[dayNum - 1];
  const module = day.modules[moduleIndex];
  state.currentModule = { dayNum, moduleIndex, module };
  
  renderModuleContent();
}

function renderModuleContent() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];
  
  const screen = document.getElementById('module-screen');
  
  let topicsHTML = module.content.topics.map(topic => `<li>${topic}</li>`).join('');
  let keyPointsHTML = module.content.keyPoints.map(point => `<li>${point}</li>`).join('');
  
  screen.innerHTML = `
    <div class="module-container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>${module.name}</h1>
        <div class="module-meta">
          <span>⏱️ ${module.duration}</span>
          <span>⭐ ${module.points} points</span>
        </div>
      </div>
      
      <div class="content-card">
        <h2>Introduction</h2>
        <p>${module.content.intro}</p>
        
        <h3 style="margin-top: 24px;">Key Concepts</h3>
        <ul>
          ${topicsHTML}
        </ul>
        
        <div class="key-points">
          <h3>💡 Key Takeaways</h3>
          <ul>
            ${keyPointsHTML}
          </ul>
        </div>
      </div>
      
      <div style="display: flex; gap: 12px;">
        <button class="btn btn-secondary" onclick="showDayOverview(${dayNum})">Back to Day ${dayNum}</button>
        <button class="btn btn-primary" onclick="startQuiz()">Continue to Quiz</button>
      </div>
    </div>
  `;
  
  showScreen('module-screen');
}

// Quiz
function startQuiz() {
  const { module } = state.currentModule;
  state.currentQuizIndex = 0;
  state.currentQuizAnswers = [];
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];
  const questionData = module.quiz[state.currentQuizIndex];
  
  const screen = document.getElementById('quiz-screen');
  
  let optionsHTML = questionData.options.map((option, index) => `
    <div class="quiz-option" onclick="selectQuizOption(${index})" id="option-${index}">
      ${option}
    </div>
  `).join('');
  
  screen.innerHTML = `
    <div class="container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>Quiz: ${module.name}</h1>
        <p style="margin-top: 8px;">Question ${state.currentQuizIndex + 1} of ${module.quiz.length}</p>
      </div>
      
      <div class="quiz-question">
        <div class="question-text">${questionData.question}</div>
        <div class="quiz-options">
          ${optionsHTML}
        </div>
        <div id="quiz-feedback"></div>
        <div class="quiz-actions" id="quiz-actions" style="display: none;">
          <button class="btn btn-primary" onclick="nextQuizQuestion()">Next Question</button>
        </div>
      </div>
    </div>
  `;
  
  showScreen('quiz-screen');
}

function selectQuizOption(selectedIndex) {
  const { module } = state.currentModule;
  const questionData = module.quiz[state.currentQuizIndex];
  const isCorrect = selectedIndex === questionData.correct;
  
  // Mark answer
  state.currentQuizAnswers.push(isCorrect);
  
  // Show feedback
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(option => option.style.pointerEvents = 'none');
  
  const selectedOption = document.getElementById(`option-${selectedIndex}`);
  const correctOption = document.getElementById(`option-${questionData.correct}`);
  
  selectedOption.classList.add(isCorrect ? 'correct' : 'incorrect');
  if (!isCorrect) {
    correctOption.classList.add('correct');
  }
  
  const feedbackDiv = document.getElementById('quiz-feedback');
  feedbackDiv.innerHTML = `
    <div class="quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}">
      <strong>${isCorrect ? '✅ Correct!' : '❌ Not quite.'}</strong><br>
      ${questionData.explanation}
    </div>
  `;
  
  document.getElementById('quiz-actions').style.display = 'flex';
}

function nextQuizQuestion() {
  state.currentQuizIndex++;
  
  const { module } = state.currentModule;
  if (state.currentQuizIndex < module.quiz.length) {
    renderQuizQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const { module } = state.currentModule;
  const correctAnswers = state.currentQuizAnswers.filter(a => a).length;
  const totalQuestions = module.quiz.length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  // Award points
  let points = module.points;
  if (percentage === 100) {
    points += 25; // Bonus for perfect score
  }
  
  awardPoints(points);
  
  // Store quiz score
  state.quizScores[module.id] = percentage;
  
  // Check for Quiz Master badge
  checkQuizMasterBadge();
  
  // Show exercise
  startExercise();
}

// Exercise
function startExercise() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];
  const exercise = module.exercise;
  
  const screen = document.getElementById('exercise-screen');
  
  let exerciseContentHTML = '';
  
  if (exercise.type === 'checklist') {
    exerciseContentHTML = exercise.items.map((item, index) => `
      <div class="checklist-item">
        <input type="checkbox" id="check-${index}">
        <label for="check-${index}">${item}</label>
      </div>
    `).join('');
  } else if (exercise.type === 'journal' || exercise.type === 'reflection' || exercise.type === 'cbt-record') {
    exerciseContentHTML = exercise.prompts.map((prompt, index) => `
      <div class="journal-prompt">
        <label for="prompt-${index}">${prompt}</label>
        <textarea id="prompt-${index}" rows="4"></textarea>
      </div>
    `).join('');
  } else if (exercise.type === 'sorting') {
    exerciseContentHTML = `<div class="sorting-container">${exercise.items.map((item, index) => `
      <div class="sorting-item" id="sort-${index}">
        <div class="sorting-item-text">${item.item}</div>
        <div class="sorting-buttons">
          <button class="sorting-btn" onclick="sortItem(${index}, 'mine')" id="sort-${index}-mine">My Responsibility</button>
          <button class="sorting-btn" onclick="sortItem(${index}, 'not')" id="sort-${index}-not">Not My Responsibility</button>
        </div>
      </div>
    `).join('')}</div>`;
  }
  
  screen.innerHTML = `
    <div class="container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>Exercise: ${module.name}</h1>
      </div>
      
      <div class="exercise-card">
        <h2>${exercise.title}</h2>
        <p class="exercise-instructions">${exercise.instructions}</p>
        ${exerciseContentHTML}
      </div>
      
      <button class="btn btn-success btn-large btn-full" onclick="completeExercise()">Complete Exercise</button>
    </div>
  `;
  
  showScreen('exercise-screen');
}

function sortItem(index, choice) {
  document.getElementById(`sort-${index}-mine`).classList.remove('selected');
  document.getElementById(`sort-${index}-not`).classList.remove('selected');
  document.getElementById(`sort-${index}-${choice}`).classList.add('selected');
}

function completeExercise() {
  const { dayNum, moduleIndex, module } = state.currentModule;
  
  // Award points for exercise
  awardPoints(50);
  
  // Mark module as completed
  if (!state.completedModules.includes(module.id)) {
    state.completedModules.push(module.id);
  }
  
  // Check if day is complete
  const day = courseData.days[dayNum - 1];
  const allModulesComplete = day.modules.every(m => state.completedModules.includes(m.id));
  
  if (allModulesComplete && !state.completedDays.includes(dayNum)) {
    completeDay(dayNum);
  } else {
    showDayOverview(dayNum);
  }
}

// Challenge
function completeChallenge(dayNum) {
  const day = courseData.days[dayNum - 1];
  
  if (!state.completedChallenges.includes(dayNum)) {
    state.completedChallenges.push(dayNum);
    awardPoints(day.dailyChallenge.points);
    
    // Check for Challenge Crusher badge
    if (state.completedChallenges.length === courseData.days.length) {
      awardBadge('allChallenges');
    }
    
    showDayOverview(dayNum);
  }
}

// Day Completion
function completeDay(dayNum) {
  if (!state.completedDays.includes(dayNum)) {
    state.completedDays.push(dayNum);
    
    // Award day badge
    awardBadge(`day${dayNum}`);
    
    // Unlock next day
    if (dayNum < courseData.days.length) {
      state.currentDay = dayNum + 1;
      state.streak++;
    }
    
    // Check for completion badges
    if (state.completedDays.length === courseData.days.length) {
      awardBadge('allDays');
      if (state.streak === 7) {
        awardBadge('streak7');
      }
      showCourseComplete();
    } else {
      showDayComplete(dayNum);
    }
  }
}

function showDayComplete(dayNum) {
  const day = courseData.days[dayNum - 1];
  const modal = document.getElementById('achievement-modal');
  document.getElementById('achievement-icon').textContent = '🎉';
  document.getElementById('achievement-title').textContent = `Day ${dayNum} Complete!`;
  document.getElementById('achievement-description').textContent = `Congratulations! You've completed ${day.title}. Keep up the amazing work!`;
  modal.classList.add('active');
}

function showCourseComplete() {
  const modal = document.getElementById('achievement-modal');
  document.getElementById('achievement-icon').textContent = '🏆';
  document.getElementById('achievement-title').textContent = 'Course Complete!';
  document.getElementById('achievement-description').textContent = `You did it! You've completed all 7 days of the Codependency Recovery Intensive. You've earned ${state.points} points and ${state.earnedBadges.length} badges. Your journey to recovery continues!`;
  modal.classList.add('active');
}

function closeAchievementModal() {
  document.getElementById('achievement-modal').classList.remove('active');
  showDashboard();
}

// Points & Badges
function awardPoints(points) {
  const oldLevel = getCurrentLevel();
  state.points += points;
  const newLevel = getCurrentLevel();
  
  // Show points animation
  const popup = document.getElementById('points-popup');
  popup.textContent = `+${points}`;
  popup.classList.add('show');
  setTimeout(() => popup.classList.remove('show'), 600);
  
  // Check for level up
  if (newLevel.level > oldLevel.level) {
    setTimeout(() => {
      const modal = document.getElementById('achievement-modal');
      document.getElementById('achievement-icon').textContent = '⬆️';
      document.getElementById('achievement-title').textContent = 'Level Up!';
      document.getElementById('achievement-description').textContent = `You've reached Level ${newLevel.level}: ${newLevel.name}!`;
      modal.classList.add('active');
    }, 700);
  }
  
  updateNavStats();
}

function awardBadge(badgeKey) {
  if (!state.earnedBadges.includes(badgeKey)) {
    state.earnedBadges.push(badgeKey);
    const badge = courseData.badges.find(b => b.key === badgeKey);
    
    if (badge) {
      setTimeout(() => {
        const modal = document.getElementById('achievement-modal');
        document.getElementById('achievement-icon').textContent = badge.icon;
        document.getElementById('achievement-title').textContent = `Badge Earned: ${badge.name}`;
        document.getElementById('achievement-description').textContent = badge.requirement;
        modal.classList.add('active');
      }, 1000);
    }
  }
}

function checkQuizMasterBadge() {
  const allQuizzes = Object.values(state.quizScores);
  if (allQuizzes.length >= 10 && allQuizzes.every(score => score >= 90)) {
    awardBadge('quizMaster');
  }
}

function updateNavStats() {
  document.getElementById('nav-level').textContent = getCurrentLevel().name;
  document.getElementById('nav-points').textContent = state.points;
}

// Progress Screen
function showProgress() {
  const screen = document.getElementById('progress-screen');
  const details = document.getElementById('progress-details');
  
  const totalModules = courseData.days.reduce((sum, day) => sum + day.modules.length, 0);
  const completedPercent = Math.round((state.completedModules.length / totalModules) * 100);
  
  details.innerHTML = `
    <div class="content-card">
      <h2>Course Progress</h2>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${completedPercent}%"></div>
      </div>
      <p class="progress-text">${completedPercent}% Complete</p>
      <ul style="list-style: none; margin-top: 24px;">
        <li style="padding: 12px; background: var(--color-bg-1); margin-bottom: 8px; border-radius: var(--radius-base);">✅ Modules Completed: ${state.completedModules.length}/${totalModules}</li>
        <li style="padding: 12px; background: var(--color-bg-1); margin-bottom: 8px; border-radius: var(--radius-base);">📅 Days Completed: ${state.completedDays.length}/7</li>
        <li style="padding: 12px; background: var(--color-bg-1); margin-bottom: 8px; border-radius: var(--radius-base);">🎯 Challenges Completed: ${state.completedChallenges.length}/7</li>
        <li style="padding: 12px; background: var(--color-bg-1); margin-bottom: 8px; border-radius: var(--radius-base);">⭐ Total Points: ${state.points}</li>
        <li style="padding: 12px; background: var(--color-bg-1); margin-bottom: 8px; border-radius: var(--radius-base);">🎯 Current Level: ${getCurrentLevel().name}</li>
        <li style="padding: 12px; background: var(--color-bg-1); margin-bottom: 8px; border-radius: var(--radius-base);">🏆 Badges Earned: ${state.earnedBadges.length}/10</li>
        <li style="padding: 12px; background: var(--color-bg-1); margin-bottom: 8px; border-radius: var(--radius-base);">🔥 Current Streak: ${state.streak} days</li>
      </ul>
    </div>
  `;
  
  showScreen('progress-screen');
}

// Badges Screen
function showBadges() {
  const screen = document.getElementById('badges-screen');
  const showcase = document.getElementById('badges-showcase');
  
  showcase.innerHTML = courseData.badges.map(badge => {
    const earned = state.earnedBadges.includes(badge.key);
    return `
      <div class="badge-card ${earned ? 'earned' : 'locked'}">
        <div class="badge-icon">${earned ? badge.icon : '🔒'}</div>
        <div class="badge-name">${badge.name}</div>
        <div class="badge-requirement">${badge.requirement}</div>
      </div>
    `;
  }).join('');
  
  showScreen('badges-screen');
}

// Initialize on load
init();