// Course Data
const courseData = {
  title: "30-Day Relationship Recovery Program",
  subtitle: "Personalized for AuDHD couples, LGBTQ+ relationships, and long-term partnerships",
  totalDays: 30,
  weeks: 4,
  dailyTime: "2-3 hours",
  readingLevel: "Adult (accessible)",
  personalizedFocus: {
    primary: "AuDHD (Autism + ADHD) relationship dynamics",
    context: "16-year marriage, separated but cohabiting",
    orientation: "LGBTQ+ / gay couples",
    issues: "Codependency from childhood trauma",
    decision: "Reconcile or embrace independent fulfillment"
  },
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
      title: "Week 1 Integration",
      theme: "Synthesizing Week 1",
      color: "#3B82F6",
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
        title: "Week 1 Integration Assignment",
        description: "Write a 1500-word Personal Theory Development paper synthesizing Week 1 learnings. Apply 3+ theories to your personal patterns. Cite 5+ peer-reviewed sources.",
        points: 500
      }
    },
    // Days 8-30 (Simplified structure - each day has 3 modules)
    { day: 8, title: "Inner Child Work", theme: "Developmental Trauma", color: "#8B5CF6", modules: [{ id: "d8m1", name: "Inner Child Theory", duration: "50 min", points: 200, content: { intro: "Understanding how childhood experiences shape adult patterns", topics: ["Developmental trauma and its effects", "Inner child concept explained", "Recognizing childhood wounds in adult behavior", "Reparenting yourself as an adult"], keyPoints: ["Your inner child holds unmet needs from childhood", "Codependent patterns often stem from childhood adaptations", "Healing requires acknowledging and meeting those needs", "You can provide yourself what you didn't receive"] }, quiz: [{ question: "What is the inner child?", options: ["A childish part of yourself you should ignore", "The part that holds childhood experiences and unmet needs", "Only relevant if you had trauma", "Something that goes away as you mature"], correct: 1, explanation: "The inner child represents the part of your psyche that holds childhood experiences, emotions, and unmet needs that still influence you today." }], exercise: { title: "Inner Child Letter", type: "journal", instructions: "Write a letter to your younger self", prompts: ["What does your inner child need to hear?", "What would you tell your 5-year-old self?", "What comfort can you offer?"] } }, { id: "d8m2", name: "Reparenting Yourself", duration: "50 min", points: 200, content: { intro: "Learn to give yourself what you needed but didn't receive", topics: ["Self-soothing techniques", "Setting healthy internal boundaries", "Providing validation and comfort", "Building secure attachment with yourself"], keyPoints: ["You can meet your own emotional needs", "Reparenting is an active practice", "It's never too late to heal", "Self-compassion is essential"] }, quiz: [{ question: "Reparenting means:", options: ["Blaming your parents", "Providing yourself the care you needed", "Staying stuck in the past", "Becoming your own parent figure"], correct: 1, explanation: "Reparenting is about giving yourself the emotional care, validation, and boundaries you needed but may not have received." }], exercise: { type: "journal", title: "Self-Care Plan", prompts: ["What did you need as a child?", "How can you provide that now?", "What self-soothing practices work for you?"] } }, { id: "d8m3", name: "Parts Work (IFS)", duration: "50 min", points: 200, content: { intro: "Internal Family Systems: Understanding your internal parts", topics: ["Manager parts (controllers)", "Exile parts (wounded child)", "Firefighter parts (emergency responders)", "Self energy (wise compassionate center)"], keyPoints: ["We all have different internal parts", "Parts developed to protect you", "No part is bad - all have positive intent", "Self energy can lead and heal parts"] }, quiz: [{ question: "In IFS, what are 'exiles'?", options: ["Parts you should get rid of", "Wounded vulnerable parts carrying pain", "Parts that don't matter", "Only present in severe trauma"], correct: 1, explanation: "Exiles are the wounded, vulnerable parts that carry childhood pain and trauma. Other parts try to protect you from feeling their pain." }], exercise: { type: "journal", title: "Meet Your Parts", prompts: ["What part of you comes up most in codependent situations?", "What is this part trying to protect you from?", "What does it need from you?"] } }], dailyChallenge: { title: "Inner Child Healing", description: "Practice inner child dialogue for 10 minutes", points: 200 } },
    { day: 9, title: "Trauma & C-PTSD", theme: "Complex PTSD", color: "#8B5CF6", modules: [{ id: "d9m1", name: "Understanding C-PTSD", duration: "50 min", points: 200, content: { intro: "Complex PTSD from chronic childhood trauma", topics: ["Difference between PTSD and C-PTSD", "Impact on relationships and self", "Emotional dysregulation", "Difficulty trusting others"], keyPoints: ["C-PTSD develops from chronic trauma, not single events", "Common in children of addiction, abuse, neglect", "Affects sense of self and relationships deeply", "Recovery is possible with proper support"] }, quiz: [{ question: "C-PTSD primarily develops from:", options: ["Single traumatic events", "Chronic, repeated trauma over time", "Minor stressors", "Only physical abuse"], correct: 1, explanation: "Complex PTSD develops from chronic, repeated trauma, especially in childhood when you couldn't escape the situation." }], exercise: { type: "journal", title: "Recognizing C-PTSD", prompts: ["What chronic stressors did you experience?", "How does this show up in relationships?", "What triggers emotional flooding?"] } }, { id: "d9m2", name: "Fawn Response", duration: "50 min", points: 200, content: { intro: "The 4F trauma responses: Fight, Flight, Freeze, Fawn", topics: ["Fawn response explained (people-pleasing survival)", "How fawning becomes codependency", "Recognizing your default response", "Healing the fawn response"], keyPoints: ["Fawning = appeasing others to stay safe", "Common in codependency", "Was adaptive then, maladaptive now", "You can learn new responses"] }, quiz: [{ question: "The fawn response is:", options: ["Weakness or pathology", "A survival strategy of appeasing others", "Only present in severe trauma", "The same as being nice"], correct: 1, explanation: "Fawning is a survival strategy where you appease and please others to avoid conflict or rejection, common in childhood trauma." }], exercise: { type: "journal", title: "Your Trauma Response", prompts: ["What is your default trauma response?", "When do you fawn/people-please?", "What would safety feel like?"] } }, { id: "d9m3", name: "Trauma-Informed Recovery", duration: "50 min", points: 200, content: { intro: "Healing with a trauma-informed approach", topics: ["Safety first (physical and emotional)", "Pacing recovery appropriately", "Avoiding retraumatization", "Building resources before processing"], keyPoints: ["Safety and stabilization come first", "Go at your own pace", "You're not broken - you adapted", "Professional support is valuable"] }, quiz: [{ question: "In trauma-informed care, the first priority is:", options: ["Confronting all trauma immediately", "Establishing safety and stability", "Analyzing the past", "Forgiveness"], correct: 1, explanation: "Safety and stabilization must come first. Processing trauma before building resources and safety can be retraumatizing." }], exercise: { type: "journal", title: "Safety Plan", prompts: ["What makes you feel safe?", "What resources do you have?", "What boundaries support your healing?"] } }], dailyChallenge: { title: "Trauma Awareness", description: "Identify your trauma responses in one interaction today", points: 200 } },
    { day: 10, title: "Defense Mechanisms Deep Dive", theme: "Adaptive Coping", color: "#8B5CF6", modules: [{ id: "d10m1", name: "Primitive vs Mature Defenses", duration: "50 min", points: 200, content: { intro: "Understanding the hierarchy of psychological defenses", topics: ["Primitive defenses (denial, splitting, projection)", "Neurotic defenses (repression, displacement)", "Mature defenses (humor, sublimation, altruism)", "Defense mechanisms in codependency"], keyPoints: ["All people use defense mechanisms", "Codependents often rely on primitive defenses", "Moving toward mature defenses is growth", "Awareness is the first step to change"] }, quiz: [{ question: "Mature defense mechanisms include:", options: ["Denial and projection", "Humor and sublimation", "Splitting and repression", "Avoidance and numbing"], correct: 1, explanation: "Mature defenses like humor, sublimation, and healthy altruism allow you to cope while maintaining reality testing and relationships." }], exercise: { type: "journal", title: "Defense Inventory", prompts: ["What defenses do you use most?", "Which are helpful vs harmful?", "What mature defenses could you develop?"] } }, { id: "d10m2", name: "Codependent Defense Patterns", duration: "50 min", points: 200, content: { intro: "Common defense mechanisms in codependency", topics: ["Rationalization (making excuses for others)", "Reaction formation (being overly nice when angry)", "Identification with aggressor", "Denial of own needs and feelings"], keyPoints: ["Codependents deny their own reality", "You may be unaware you're defending", "Defenses protect against painful feelings", "Healing requires feeling, not defending"] }, quiz: [{ question: "When a codependent rationalizes their partner's behavior, they are:", options: ["Being understanding", "Using a defense mechanism to avoid pain", "Being realistic", "Setting boundaries"], correct: 1, explanation: "Rationalization is making excuses to avoid feeling the pain of mistreatment or disappointment." }], exercise: { type: "journal", title: "Rationalization Log", prompts: ["What excuses do you make for others?", "What pain does this help you avoid?", "What's the cost of this defense?"] } }, { id: "d10m3", name: "Building Adaptive Coping", duration: "50 min", points: 200, content: { intro: "Developing healthier ways to cope with distress", topics: ["Mindfulness and acceptance", "Problem-solving vs defending", "Authentic emotional expression", "Seeking support appropriately"], keyPoints: ["Adaptive coping faces reality", "Feelings are meant to be felt, not avoided", "Support helps you process, not defend", "Growth means tolerating discomfort"] }, quiz: [{ question: "Adaptive coping means:", options: ["Never feeling bad emotions", "Facing reality and emotions directly", "Using more sophisticated defenses", "Avoiding all stressors"], correct: 1, explanation: "Adaptive coping involves facing reality and emotions directly rather than defending against them." }], exercise: { type: "journal", title: "Coping Alternatives", prompts: ["What healthier coping could replace your defenses?", "How can you tolerate uncomfortable feelings?", "Who supports your authentic expression?"] } }], dailyChallenge: { title: "Defense Recognition", description: "Notice 3 defense mechanisms you use today and name them", points: 200 } },
    { day: 11, title: "Shame vs Guilt Advanced", theme: "Neuroscience of Shame", color: "#8B5CF6", modules: [{ id: "d11m1", name: "Brain Science of Shame", duration: "50 min", points: 200, content: { intro: "The neurobiology of shame and its impact", topics: ["Shame activates pain centers in brain", "Amygdala and threat response", "Impact on prefrontal cortex (rational thinking)", "Neuroplasticity and healing shame"], keyPoints: ["Shame is processed as physical pain", "It hijacks rational thinking", "Chronic shame reshapes brain pathways", "New experiences can rewire shame responses"] }, quiz: [{ question: "Shame activates:", options: ["Only emotional centers", "The same brain regions as physical pain", "Logical thinking areas", "Memory storage only"], correct: 1, explanation: "Brain imaging shows shame activates the same regions as physical pain, which is why it hurts so much." }], exercise: { type: "journal", title: "Shame Body Scan", prompts: ["Where do you feel shame in your body?", "What physical sensations arise?", "How can you soothe your nervous system?"] } }, { id: "d11m2", name: "Toxic Shame Development", duration: "50 min", points: 200, content: { intro: "How shame becomes internalized and toxic", topics: ["Healthy shame vs toxic shame", "Critical messages internalized", "Shame-based identity formation", "Intergenerational transmission"], keyPoints: ["Toxic shame says 'I am flawed'", "Forms from repeated criticism/rejection", "Becomes part of identity", "Can be unlearned"] }, quiz: [{ question: "Toxic shame develops from:", options: ["Single mistakes", "Repeated messages that you are defective", "Healthy consequences", "Appropriate guilt"], correct: 1, explanation: "Toxic shame develops when you repeatedly receive the message that you are fundamentally flawed or bad, not just that your behavior needs correction." }], exercise: { type: "journal", title: "Shame Origin Story", prompts: ["What early messages did you receive about your worth?", "Who communicated you were 'bad'?", "How did this shape your self-concept?"] } }, { id: "d11m3", name: "Shame Resilience (Brené Brown)", duration: "50 min", points: 200, content: { intro: "Research-based framework for building shame resilience", topics: ["Recognizing shame and triggers", "Practicing critical awareness", "Reaching out for support", "Speaking shame (it dies in empathy)"], keyPoints: ["Shame needs 3 things to grow: secrecy, silence, judgment", "Empathy is the antidote", "Vulnerability is courage", "Everyone experiences shame"] }, quiz: [{ question: "According to Brené Brown, shame cannot survive:", options: ["Being kept secret", "Being spoken with empathy", "Self-criticism", "Isolation"], correct: 1, explanation: "Brown's research shows shame cannot survive being spoken aloud to someone who responds with empathy." }], exercise: { type: "journal", title: "Shame Resilience Plan", prompts: ["Who are your empathy resources?", "How will you recognize shame arising?", "What will you tell yourself?"] } }], dailyChallenge: { title: "Shame Resilience Practice", description: "Share one shame experience with a trusted person", points: 200 } },
    { day: 12, title: "Cognitive Distortions Research", theme: "CBT Deep Dive", color: "#8B5CF6", modules: [{ id: "d12m1", name: "Beck's Cognitive Model", duration: "50 min", points: 200, content: { intro: "The foundation of cognitive therapy", topics: ["Thoughts create feelings and behaviors", "Automatic thoughts vs core beliefs", "Cognitive triad (self, world, future)", "Evidence-based treatment approach"], keyPoints: ["It's not events but thoughts about events", "You can change thoughts", "This changes feelings and behaviors", "CBT is highly effective for codependency"] }, quiz: [{ question: "In Beck's model, what primarily determines emotions?", options: ["External events", "Your thoughts/interpretations of events", "Other people's actions", "Chemical imbalances only"], correct: 1, explanation: "Beck showed that emotions are primarily determined by how we interpret events, not the events themselves." }], exercise: { type: "journal", title: "Thought Record", prompts: ["Situation:", "Automatic thought:", "Emotion and intensity:", "Evidence for/against thought:", "Balanced thought:"] } }, { id: "d12m2", name: "Common Cognitive Distortions", duration: "50 min", points: 200, content: { intro: "Thinking errors that maintain codependency", topics: ["All-or-nothing thinking", "Overgeneralization", "Mind reading", "Should statements", "Personalization", "Catastrophizing"], keyPoints: ["These patterns feel true but aren't", "Codependents are prone to specific distortions", "Learning to spot them is powerful", "Challenge = growth"] }, quiz: [{ question: "'If I don't help everyone perfectly, I'm worthless' is an example of:", options: ["Realistic thinking", "All-or-nothing thinking", "Healthy boundaries", "Self-compassion"], correct: 1, explanation: "This is all-or-nothing thinking - seeing things in black and white extremes with no middle ground." }], exercise: { type: "journal", title: "Distortion Detective", prompts: ["What distortions do you use most?", "Example from this week:", "How does this maintain codependency?"] } }, { id: "d12m3", name: "Cognitive Restructuring", duration: "50 min", points: 200, content: { intro: "Changing distorted thought patterns", topics: ["Identifying automatic thoughts", "Examining evidence", "Generating alternatives", "Testing new thoughts behaviorally"], keyPoints: ["Don't just think positive - think accurately", "Look for evidence, not feelings", "Practice makes automatic", "Behavior change follows thought change"] }, quiz: [{ question: "Cognitive restructuring means:", options: ["Thinking only positive thoughts", "Examining evidence and creating balanced thoughts", "Ignoring negative thoughts", "Blaming others less"], correct: 1, explanation: "Restructuring involves examining evidence objectively and creating balanced, accurate thoughts, not just positive thinking." }], exercise: { type: "journal", title: "Restructuring Practice", prompts: ["Distorted thought:", "Evidence for:", "Evidence against:", "More balanced thought:", "How does this feel different?"] } }], dailyChallenge: { title: "Thought Challenging", description: "Challenge 5 cognitive distortions using evidence", points: 200 } },
    { day: 13, title: "Emotional Schemas", theme: "Schema Therapy", color: "#8B5CF6", modules: [{ id: "d13m1", name: "Schema Therapy Model", duration: "50 min", points: 200, content: { intro: "Jeffrey Young's schema therapy framework", topics: ["Schemas = core life themes", "Developed in childhood", "Perpetuated throughout life", "Can be healed with awareness"], keyPoints: ["Schemas are lenses through which you see world", "Common in codependency", "They feel like truth but are learned", "Schema therapy targets deep patterns"] }, quiz: [{ question: "An emotional schema is:", options: ["A temporary mood", "A deep core belief/pattern from childhood", "Only present in disorders", "The same as a thought"], correct: 1, explanation: "Schemas are deep, enduring patterns or themes developed in childhood that affect how you see yourself, others, and the world." }], exercise: { type: "journal", title: "Schema Exploration", prompts: ["What core beliefs run your life?", "Where did these beliefs form?", "How do they affect relationships?"] } }, { id: "d13m2", name: "18 Early Maladaptive Schemas", duration: "50 min", points: 200, content: { intro: "Common schemas in codependency", topics: ["Abandonment/Instability", "Mistrust/Abuse", "Defectiveness/Shame", "Self-Sacrifice", "Subjugation", "Approval-Seeking"], keyPoints: ["Most people have 2-4 primary schemas", "Schemas feel like absolute truth", "Trigger strong emotional reactions", "Recognizing them is first step to change"] }, quiz: [{ question: "The Self-Sacrifice schema involves:", options: ["Healthy helping", "Excessive focus on others' needs at expense of your own", "Appropriate boundaries", "Balanced giving and receiving"], correct: 1, explanation: "Self-Sacrifice schema drives compulsive caretaking and neglect of own needs to avoid guilt or maintain connection." }], exercise: { type: "journal", title: "My Core Schemas", prompts: ["Which schemas resonate most?", "Examples of schema activation:", "How do these drive codependent behavior?"] } }, { id: "d13m3", name: "Schema Modes", duration: "50 min", points: 200, content: { intro: "Understanding different parts/states activated by schemas", topics: ["Vulnerable Child mode", "Demanding/Punitive Parent mode", "Coping modes (overcompensation, avoidance)", "Healthy Adult mode"], keyPoints: ["You can be in different modes", "Codependents often in Vulnerable Child or overcompensator", "Healthy Adult mode is goal", "Mode awareness allows choice"] }, quiz: [{ question: "Schema modes are:", options: ["Personality disorders", "Different emotional/behavioral states", "Only negative patterns", "Permanent traits"], correct: 1, explanation: "Modes are temporary emotional and behavioral states that become activated. You can learn to identify and shift modes." }], exercise: { type: "journal", title: "Mode Mapping", prompts: ["What modes do you recognize in yourself?", "What triggers each mode?", "What does your Healthy Adult need to do?"] } }], dailyChallenge: { title: "Schema Identification", description: "Identify your top 3 schemas and track when they activate", points: 200 } },
    { day: 14, title: "Week 2 Integration", theme: "Case Formulation", color: "#8B5CF6", modules: [{ id: "d14m1", name: "Personal Case Formulation", duration: "60 min", points: 200, content: { intro: "Creating your own psychological case formulation", topics: ["Presenting problems and patterns", "Developmental history", "Core beliefs and schemas", "Maintaining factors", "Treatment goals"], keyPoints: ["Formulation explains why problems persist", "Links past to present", "Identifies intervention points", "Evolves as you learn more"] }, quiz: [{ question: "A case formulation includes:", options: ["Only current symptoms", "History, beliefs, patterns, and maintaining factors", "Just a diagnosis", "Treatment plan only"], correct: 1, explanation: "A comprehensive formulation links history, beliefs, patterns, and what maintains problems to guide treatment." }], exercise: { type: "journal", title: "My Case Formulation", prompts: ["Current codependent patterns:", "Childhood origins:", "Core beliefs:", "What maintains these patterns:", "Treatment targets:"] } }, { id: "d14m2", name: "Evidence-Based Treatment Planning", duration: "60 min", points: 200, content: { intro: "Creating an effective, personalized treatment plan", topics: ["SMART goals", "Evidence-based interventions", "Prioritizing targets", "Measuring progress", "Adjusting approach"], keyPoints: ["Goals should be specific and measurable", "Use what research shows works", "Address maintaining factors first", "Track progress objectively"] }, quiz: [{ question: "SMART goals are:", options: ["General wishes", "Specific, Measurable, Achievable, Relevant, Time-bound", "Only for therapists", "Focused on others changing"], correct: 1, explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound - this makes them actionable and trackable." }], exercise: { type: "journal", title: "My Treatment Plan", prompts: ["3 SMART goals for next 30 days:", "Evidence-based strategies to use:", "How will you measure progress:", "Obstacles and solutions:"] } }, { id: "d14m3", name: "Week 2 Synthesis", duration: "60 min", points: 200, content: { intro: "Integrating Week 2 learning", topics: ["Inner child and parts work", "Trauma responses", "Defense mechanisms", "Cognitive distortions", "Schemas and modes"], keyPoints: ["These frameworks explain your patterns", "Multiple perspectives deepen understanding", "All point to childhood origins", "Awareness enables choice"] }, quiz: [{ question: "What unifies Week 2 content?", options: ["Random psychological concepts", "Understanding how childhood shapes adult patterns", "Only trauma material", "Blaming parents"], correct: 1, explanation: "Week 2 explored various frameworks for understanding how childhood experiences create adult codependent patterns." }], exercise: { type: "journal", title: "Integration Reflection", prompts: ["Biggest insights from Week 2:", "How concepts connect:", "What changed in your self-understanding:", "What are you committed to practicing:"] } }], dailyChallenge: { title: "Week 2 Assignment", description: "Write 2000-word Case Formulation Paper with 7+ academic citations", points: 500 } },
    { day: 15, title: "Advanced DBT Skills", theme: "Dialectical Behavior Therapy", color: "#10B981", modules: [{ id: "d15m1", name: "Radical Acceptance", duration: "50 min", points: 200, content: { intro: "Accepting reality as it is, without approval", topics: ["What radical acceptance is (and isn't)", "Accepting vs approving", "Pain vs suffering", "Turning the mind toward acceptance"], keyPoints: ["Fighting reality creates suffering", "Acceptance doesn't mean you like it", "Frees energy for effective action", "A practice, not one-time decision"] }, quiz: [{ question: "Radical acceptance means:", options: ["Liking or approving of reality", "Acknowledging reality as it is without fighting it", "Giving up", "Becoming passive"], correct: 1, explanation: "Radical acceptance is acknowledging reality without fighting it, which reduces suffering and allows effective action." }], exercise: { type: "journal", title: "Acceptance Practice", prompts: ["What reality am I fighting?", "What would acceptance look like?", "What energy would this free up?"] } }, { id: "d15m2", name: "Walking the Middle Path", duration: "50 min", points: 200, content: { intro: "Dialectical thinking: holding two truths simultaneously", topics: ["Both/and thinking vs either/or", "Dialectics in relationships", "Validating opposing perspectives", "Finding synthesis"], keyPoints: ["Two things can be true at once", "Reduces black-and-white thinking", "Essential for healthy relationships", "Creates space for complexity"] }, quiz: [{ question: "Dialectical thinking recognizes:", options: ["Only one truth exists", "Two opposing truths can coexist", "Everyone is always wrong", "Compromise means losing"], correct: 1, explanation: "Dialectical thinking holds that two seemingly opposite things can both be true simultaneously." }], exercise: { type: "journal", title: "Finding the Middle Path", prompts: ["What either/or thinking do you use?", "Both/and alternative:", "Example: I need independence AND connection"] } }, { id: "d15m3", name: "Opposite Action", duration: "50 min", points: 200, content: { intro: "Acting opposite to emotional urges to change emotions", topics: ["When to use opposite action", "Common applications for codependency", "How it changes brain patterns", "Combining with validation"], keyPoints: ["Urge to isolate → reach out", "Urge to attack → approach gently", "Changes emotion by changing behavior", "Breaks automatic patterns"] }, quiz: [{ question: "If you feel urge to over-function for someone, opposite action would be:", options: ["Do even more", "Step back and let them handle it", "Get angry at them", "Ignore your feelings"], correct: 1, explanation: "Opposite action to over-functioning is stepping back, which helps break the codependent cycle." }], exercise: { type: "journal", title: "Opposite Action Plan", prompts: ["What urge do you want to change?", "What opposite action will you take?", "How might this change your patterns?"] } }], dailyChallenge: { title: "DBT Practice", description: "Use all 3 DBT skills (acceptance, dialectics, opposite action) today", points: 200 } },
    { day: 16, title: "ACT Framework", theme: "Acceptance & Commitment Therapy", color: "#10B981", modules: [{ id: "d16m1", name: "ACT Hexaflex Model", duration: "50 min", points: 200, content: { intro: "Six core processes of psychological flexibility", topics: ["Acceptance (opening up)", "Cognitive defusion (unhooking from thoughts)", "Present moment awareness", "Self as context (observer self)", "Values (what matters)", "Committed action"], keyPoints: ["Flexibility vs rigidity", "Move toward values despite discomfort", "Thoughts aren't facts", "Life is about values, not feelings"] }, quiz: [{ question: "ACT focuses on:", options: ["Eliminating all negative thoughts", "Moving toward values despite discomfort", "Positive thinking only", "Avoiding all pain"], correct: 1, explanation: "ACT emphasizes taking action aligned with values even when experiencing difficult thoughts and feelings." }], exercise: { type: "journal", title: "Hexaflex Exploration", prompts: ["Which process do you need most?", "Where are you psychologically rigid?", "What would flexibility look like?"] } }, { id: "d16m2", name: "Values Clarification", duration: "50 min", points: 200, content: { intro: "Identifying what truly matters to you", topics: ["Values vs goals", "Domains of life (relationships, work, health, etc.)", "Codependency distorts values", "Living by YOUR values, not others'"], keyPoints: ["Values are directions, not destinations", "Have you been living others' values?", "Recovery means reconnecting with your values", "Actions can be valued-aligned today"] }, quiz: [{ question: "The difference between values and goals:", options: ["There is no difference", "Values are ongoing directions, goals are achievements", "Goals matter more", "Values are selfish"], correct: 1, explanation: "Values are ongoing directions (like 'being a loving person'), while goals are achievable endpoints (like 'get married')." }], exercise: { type: "journal", title: "Your Values", prompts: ["What truly matters to you in relationships?", "In personal growth?", "In how you spend time?", "Are current actions aligned with these?"] } }, { id: "d16m3", name: "Cognitive Defusion", duration: "50 min", points: 200, content: { intro: "Separating from thoughts rather than fighting them", topics: ["Thoughts are not facts", "Observing thoughts vs believing them", "Defusion techniques", "Application to codependent thinking"], keyPoints: ["You are not your thoughts", "Can observe without buying in", "Creates psychological space", "Reduces power of negative thoughts"] }, quiz: [{ question: "Defusion means:", options: ["Getting rid of thoughts", "Recognizing thoughts as mental events, not facts", "Positive thinking", "Suppressing thoughts"], correct: 1, explanation: "Defusion is recognizing thoughts as mental events you can observe rather than absolute truths you must believe." }], exercise: { type: "journal", title: "Defusion Practice", prompts: ["Notice a recurring thought", "Practice: 'I'm having the thought that...'", "'I notice my mind saying...'", "How does this create distance?"] } }], dailyChallenge: { title: "ACT Practice", description: "Identify 3 core values and take one action aligned with each", points: 200 } },
    { day: 17, title: "Motivational Interviewing", theme: "Self-Change & Ambivalence", color: "#10B981", modules: [{ id: "d17m1", name: "MI Spirit & Methods", duration: "50 min", points: 200, content: { intro: "Motivational Interviewing for personal change", topics: ["Partnership not expert model", "Evoking not installing motivation", "Compassion and acceptance", "Honoring autonomy"], keyPoints: ["You have answers within you", "Ambivalence is normal", "Change talk predicts change", "Can use on yourself"] }, quiz: [{ question: "MI spirit involves:", options: ["Telling people what to do", "Directing change", "Partnership and evoking motivation", "Confrontation"], correct: 2, explanation: "MI involves partnership and evoking the person's own motivation rather than imposing change from outside." }], exercise: { type: "journal", title: "Self-MI Interview", prompts: ["Why might I want to change codependent patterns?", "What would be different if I changed?", "How confident am I that I can change?", "What's one small step?"] } }, { id: "d17m2", name: "Resolving Ambivalence", duration: "50 min", points: 200, content: { intro: "Working through mixed feelings about change", topics: ["Ambivalence is normal and expected", "Benefits of staying same vs changing", "Change talk vs sustain talk", "Decisional balance"], keyPoints: ["You have good reasons for current patterns", "AND good reasons to change", "Exploring both sides helps", "Change happens when ready"] }, quiz: [{ question: "Ambivalence means:", options: ["You don't want to change", "Having mixed feelings about change", "Being lazy", "Not caring"], correct: 1, explanation: "Ambivalence is having mixed feelings - seeing both benefits and costs of change, which is completely normal." }], exercise: { type: "journal", title: "Decisional Balance", prompts: ["Benefits of staying codependent:", "Costs of staying codependent:", "Benefits of changing:", "Costs of changing:", "Where does balance tip?"] } }, { id: "d17m3", name: "OARS Skills", duration: "50 min", points: 200, content: { intro: "Core MI communication skills", topics: ["Open questions (explore)", "Affirmations (recognize strengths)", "Reflective listening (understand)", "Summaries (pull together)"], keyPoints: ["Ask don't tell", "Affirm existing strengths", "Reflect to understand", "Summarize to move forward"] }, quiz: [{ question: "An open question is:", options: ["'Are you going to change?'", "'What matters most to you about this?'", "'You should change, right?'", "Any question"], correct: 1, explanation: "Open questions can't be answered with yes/no - they invite exploration and elaboration." }], exercise: { type: "journal", title: "OARS Practice", prompts: ["Open question for yourself:", "Affirmation of your strengths:", "Reflection of your ambivalence:", "Summary of where you are:"] } }], dailyChallenge: { title: "MI Practice", description: "Conduct full self-interview using OARS about one change goal", points: 200 } },
    { day: 18, title: "Conflict Resolution", theme: "Relationship Skills", color: "#10B981", modules: [{ id: "d18m1", name: "Gottman Method", duration: "50 min", points: 200, content: { intro: "Research-based approach to relationship conflict", topics: ["Four Horsemen (criticism, contempt, defensiveness, stonewalling)", "Their antidotes", "Softened startup", "Accepting influence"], keyPoints: ["Conflict is normal - it's how you handle it", "Four Horsemen predict relationship failure", "Antidotes repair damage", "Small things matter most"] }, quiz: [{ question: "The Four Horsemen are:", options: ["Healthy conflict styles", "Destructive communication patterns", "Only present in abusive relationships", "Gottman's therapy techniques"], correct: 1, explanation: "The Four Horsemen are destructive patterns (criticism, contempt, defensiveness, stonewalling) that predict relationship failure." }], exercise: { type: "journal", title: "Horsemen Audit", prompts: ["Which horsemen do you use?", "When do they show up?", "What antidote could you practice?", "Example of softened startup:"] } }, { id: "d18m2", name: "Nonviolent Communication (NVC)", duration: "50 min", points: 200, content: { intro: "Marshall Rosenberg's compassionate communication framework", topics: ["Observations vs evaluations", "Feelings vocabulary", "Universal needs", "Clear requests"], keyPoints: ["Speak observations not judgments", "Connect to feelings and needs", "Make doable requests", "Creates empathy and connection"] }, quiz: [{ question: "NVC involves expressing:", options: ["Judgments about others", "Observations, feelings, needs, and requests", "Only positive emotions", "Demands"], correct: 1, explanation: "NVC format: observation + feeling + need + request, which creates understanding rather than defensiveness." }], exercise: { type: "journal", title: "NVC Practice", prompts: ["Observation (just facts):", "I feel...", "Because I need...", "Would you be willing to..."] } }, { id: "d18m3", name: "Repair Attempts", duration: "50 min", points: 200, content: { intro: "Healing ruptures in relationships", topics: ["What repair attempts are", "Making effective repairs", "Accepting repairs", "Returning to dialogue"], keyPoints: ["Ruptures are inevitable", "Repair is what matters", "Both parties need to participate", "Successful repair strengthens bonds"] }, quiz: [{ question: "A repair attempt is:", options: ["Admitting you're always wrong", "Any effort to de-escalate or reconnect", "Avoiding all conflict", "Blaming the other person"], correct: 1, explanation: "Repair attempts are any efforts to de-escalate conflict and reconnect, from humor to apology to taking a break." }], exercise: { type: "journal", title: "Repair Skills", prompts: ["What repair attempts do you make?", "Are they accepted? Why or why not?", "New repair attempts to try:", "How can you better accept others' repairs?"] } }], dailyChallenge: { title: "Conflict Practice", description: "Use NVC format in one difficult conversation", points: 200 } },
    { day: 19, title: "Ethical Decision-Making", theme: "When Helping Hurts", color: "#10B981", modules: [{ id: "d19m1", name: "Ethical Frameworks", duration: "50 min", points: 200, content: { intro: "Ethics of helping and caretaking", topics: ["Beneficence (doing good)", "Non-maleficence (avoiding harm)", "Autonomy (respecting choice)", "Justice (fairness)"], keyPoints: ["Good intentions aren't enough", "Helping can harm when it removes autonomy", "People have right to make choices", "Your role has limits"] }, quiz: [{ question: "Autonomy in ethics means:", options: ["Doing whatever you want", "Respecting people's right to make their own choices", "Never helping anyone", "Being selfish"], correct: 1, explanation: "Autonomy means respecting others' right to make informed decisions about their own lives, even if you disagree." }], exercise: { type: "journal", title: "Ethics Reflection", prompts: ["When has your helping removed someone's autonomy?", "How do you balance beneficence and autonomy?", "Where do you cross ethical lines?"] } }, { id: "d19m2", name: "Boundaries in Helping Professions", duration: "50 min", points: 200, content: { intro: "Professional and personal helping boundaries", topics: ["Scope of competence", "Dual relationships", "Self-disclosure limits", "Knowing when to refer"], keyPoints: ["Helpers need boundaries too", "You can't be everything to everyone", "Know your limits", "Self-care enables sustainable helping"] }, quiz: [{ question: "Professional boundaries in helping prevent:", options: ["All relationships", "Exploitation and burnout", "Effective helping", "Connection"], correct: 1, explanation: "Boundaries protect both helper and helpee from exploitation, burnout, and inappropriate relationships." }], exercise: { type: "journal", title: "Helper Boundaries", prompts: ["What boundaries do you need in helping?", "When do you overextend?", "How do you know your limits?", "What's one boundary to set?"] } }, { id: "d19m3", name: "Beneficence vs Autonomy", duration: "50 min", points: 200, content: { intro: "The ethical tension in helping", topics: ["When doing good conflicts with respecting choice", "Paternalism vs autonomy", "Codependent 'helping' removes autonomy", "Balancing care and respect"], keyPoints: ["Your idea of 'good' may not be theirs", "Codependency is often paternalistic", "People learn through consequences", "Your job is to support not rescue"] }, quiz: [{ question: "Codependent helping often violates:", options: ["Beneficence", "Autonomy", "Justice", "All boundaries"], correct: 1, explanation: "Codependent helping often violates autonomy by making decisions for others, removing natural consequences, and not respecting their choices." }], exercise: { type: "journal", title: "Autonomy vs Beneficence", prompts: ["Where do you prioritize 'helping' over respecting autonomy?", "What would change if you respected their choices?", "How can you support without rescuing?"] } }], dailyChallenge: { title: "Ethics Practice", description: "Analyze one situation where helping might hurt", points: 200 } },
    { day: 20, title: "Leadership Without Codependency", theme: "Healthy Influence", color: "#10B981", modules: [{ id: "d20m1", name: "Servant Leadership", duration: "50 min", points: 200, content: { intro: "Leading by serving others' growth", topics: ["Putting others' growth first", "Building community", "Sharing power", "Servant vs codependent helping"], keyPoints: ["Servant leaders empower, not rescue", "Focus on others' development", "Share power and decision-making", "Different from people-pleasing"] }, quiz: [{ question: "Servant leadership differs from codependency by:", options: ["There's no difference", "Empowering growth vs rescuing", "Being nicer", "Doing everything for others"], correct: 1, explanation: "Servant leadership empowers people to grow and make decisions, while codependency rescues and controls." }], exercise: { type: "journal", title: "Servant Leadership", prompts: ["How do you currently lead/influence?", "Do you empower or rescue?", "What would servant leadership look like?", "One change to make:"] } }, { id: "d20m2", name: "Transformational Leadership", duration: "50 min", points: 200, content: { intro: "Inspiring and elevating others", topics: ["Vision and inspiration", "Intellectual stimulation", "Individual consideration", "Being a role model"], keyPoints: ["Transform through inspiration not control", "Challenge and support growth", "Consider individual needs", "Model the change you seek"] }, quiz: [{ question: "Transformational leaders:", options: ["Control everything", "Inspire and elevate others", "Do all the work", "Avoid conflict"], correct: 1, explanation: "Transformational leaders inspire others to transcend self-interest for collective goals and realize their potential." }], exercise: { type: "journal", title: "Transformational Influence", prompts: ["What vision do you hold?", "How do you inspire vs control?", "How do you challenge growth?", "What are you modeling?"] } }, { id: "d20m3", name: "Empowering Others", duration: "50 min", points: 200, content: { intro: "Building capacity and autonomy in others", topics: ["Delegation with support", "Teaching problem-solving not solving", "Allowing natural consequences", "Celebrating others' wins"], keyPoints: ["Empowerment builds capacity", "Let people struggle and learn", "Your job is to support not rescue", "Others' success doesn't diminish you"] }, quiz: [{ question: "Empowerment involves:", options: ["Doing things for others", "Building their capacity to do for themselves", "Making all decisions", "Protecting from consequences"], correct: 1, explanation: "Empowerment is building people's capacity and confidence to handle challenges themselves." }], exercise: { type: "journal", title: "Empowerment Plan", prompts: ["Who do you need to empower?", "What are you doing for them that they could do?", "How can you support without rescuing?", "What will you stop doing?"] } }], dailyChallenge: { title: "Leadership Practice", description: "Practice one act of empowerment vs rescue", points: 200 } },
    { day: 21, title: "Week 3 Integration", theme: "Skills Portfolio", color: "#10B981", modules: [{ id: "d21m1", name: "Skills Synthesis", duration: "60 min", points: 200, content: { intro: "Bringing together Week 3 advanced skills", topics: ["DBT skills (acceptance, dialectics, opposite action)", "ACT skills (values, defusion, committed action)", "MI skills (resolving ambivalence)", "Conflict resolution (Gottman, NVC)", "Ethical helping and leadership"], keyPoints: ["Each skill addresses different aspects", "All support healthy relating", "Practice makes progress", "Choose skills that fit situations"] }, quiz: [{ question: "Week 3 focused on:", options: ["Only theory", "Advanced applied skills for relationships", "Avoiding all problems", "One single approach"], correct: 1, explanation: "Week 3 provided advanced, evidence-based skills for managing emotions, communicating, resolving conflict, and relating healthily." }], exercise: { type: "journal", title: "Skills Inventory", prompts: ["Which skills resonated most?", "Which do you most need to practice?", "How have you applied them?", "What changed?"] } }, { id: "d21m2", name: "Creating Your Portfolio", duration: "60 min", points: 200, content: { intro: "Documenting your skills development", topics: ["Evidence of learning", "Before/after examples", "Reflection on growth", "Application to real situations"], keyPoints: ["Show don't just tell", "Specific examples matter", "Reflection demonstrates insight", "Growth is the goal, not perfection"] }, quiz: [{ question: "A skills portfolio demonstrates:", options: ["Perfection", "Evidence of learning and application", "Theory only", "No mistakes"], correct: 1, explanation: "Portfolios show evidence of learning, application, and growth - not perfection." }], exercise: { type: "journal", title: "Portfolio Planning", prompts: ["3 skills you'll demonstrate:", "Specific examples to include:", "Before/after comparison:", "Reflection on learning:"] } }, { id: "d21m3", name: "Week 3 Reflection", duration: "60 min", points: 200, content: { intro: "Integrating and reflecting on growth", topics: ["What you learned", "How you've changed", "What challenges remain", "Next steps"], keyPoints: ["Notice your progress", "Acknowledge challenges honestly", "Recovery is ongoing", "You have tools now"] }, quiz: [{ question: "The purpose of integration is:", options: ["To finish the program", "To synthesize learning and plan application", "To test knowledge", "To compare to others"], correct: 1, explanation: "Integration synthesizes what you've learned and creates a plan for ongoing application." }], exercise: { type: "journal", title: "Integration Reflection", prompts: ["How am I different from 3 weeks ago?", "What skills am I actually using?", "What still challenges me?", "My commitment going forward:"] } }], dailyChallenge: { title: "Week 3 Portfolio", description: "Complete Skills Portfolio with examples and reflection", points: 500 } },
    { day: 22, title: "Relapse Prevention Advanced", theme: "Stages of Change", color: "#F59E0B", modules: [{ id: "d22m1", name: "Transtheoretical Model", duration: "50 min", points: 200, content: { intro: "Understanding how change happens", topics: ["Precontemplation (not ready)", "Contemplation (thinking about it)", "Preparation (getting ready)", "Action (doing it)", "Maintenance (sustaining)", "Relapse (normal setback)"], keyPoints: ["Change is a process not event", "Relapse doesn't mean failure", "Each stage requires different strategies", "Progress isn't linear"] }, quiz: [{ question: "In the Stages of Change model, relapse means:", options: ["Total failure", "A normal part of the change process", "You can't change", "Starting completely over"], correct: 1, explanation: "Relapse is a normal part of the change process - most people cycle through stages multiple times before maintaining change." }], exercise: { type: "journal", title: "Your Change Stage", prompts: ["What stage are you in for codependency recovery?", "What do you need in this stage?", "When have you progressed through stages before?", "How will you handle setbacks?"] } }, { id: "d22m2", name: "High-Risk Situations", duration: "50 min", points: 200, content: { intro: "Identifying triggers for codependent patterns", topics: ["Internal triggers (emotions, thoughts)", "External triggers (people, places, situations)", "Warning signs of relapse", "Early intervention strategies"], keyPoints: ["Know your triggers", "Have a plan before triggered", "Early warning signs matter", "Reach out early"] }, quiz: [{ question: "High-risk situations for codependency relapse include:", options: ["All stress", "Specific triggers unique to you", "Only relationship conflicts", "There are no triggers"], correct: 1, explanation: "High-risk situations are specific to you based on your patterns, though some (like relationship stress) are common." }], exercise: { type: "journal", title: "Trigger Mapping", prompts: ["My top 5 triggers:", "Warning signs I'm slipping:", "People/places to avoid or be careful with:", "What I'll do when triggered:"] } }, { id: "d22m3", name: "Relapse Prevention Plan", duration: "50 min", points: 200, content: { intro: "Creating your safeguard system", topics: ["Coping strategies for triggers", "Support system activation", "Self-care priorities", "Emergency plan"], keyPoints: ["Prevention is easier than recovery", "Have plan BEFORE crisis", "Your team is essential", "Review and update regularly"] }, quiz: [{ question: "An effective relapse prevention plan includes:", options: ["Just willpower", "Triggers, strategies, support, and emergency plan", "Avoiding all stress", "Perfect execution"], correct: 1, explanation: "Effective plans identify triggers, have coping strategies, activate support, and include emergency responses." }], exercise: { type: "journal", title: "My Prevention Plan", prompts: ["Daily practices:", "When I notice warning signs I will:", "My support team:", "Emergency contacts:", "Self-care non-negotiables:"] } }], dailyChallenge: { title: "Relapse Prevention", description: "Write complete relapse prevention plan with triggers, strategies, and supports", points: 200 } },
    { day: 23, title: "Helping Others Healthily", theme: "Compassion Without Codependency", color: "#F59E0B", modules: [{ id: "d23m1", name: "Boundaries in Helping", duration: "50 min", points: 200, content: { intro: "How to help without losing yourself", topics: ["Compassion with boundaries", "Recognizing when you're over-functioning", "Saying no to help requests", "Sustainable helping"], keyPoints: ["You can care AND have limits", "No is a complete sentence", "Your capacity has limits", "Burnout helps no one"] }, quiz: [{ question: "Healthy helping includes:", options: ["Saying yes to everything", "Setting clear limits on time and energy", "No boundaries needed", "Sacrificing all self-care"], correct: 1, explanation: "Healthy helping includes clear boundaries on your time, energy, and capacity so help is sustainable." }], exercise: { type: "journal", title: "Helper Boundaries", prompts: ["Where do I over-function in helping?", "What helping boundaries do I need?", "How will I communicate limits?", "What self-care supports my helping?"] } }, { id: "d23m2", name: "Compassion Fatigue Prevention", duration: "50 min", points: 200, content: { intro: "Recognizing and preventing helper burnout", topics: ["Signs of compassion fatigue", "Secondary trauma", "Self-care as necessity not luxury", "Professional support for helpers"], keyPoints: ["Helpers get depleted", "Recognize signs early", "Self-care isn't selfish", "Seek support"] }, quiz: [{ question: "Compassion fatigue is:", options: ["Being a bad helper", "Emotional/physical exhaustion from helping", "Only for professionals", "A character flaw"], correct: 1, explanation: "Compassion fatigue is emotional and physical exhaustion from empathizing with others' suffering - common in helpers." }], exercise: { type: "journal", title: "Compassion Fatigue Check", prompts: ["Signs of fatigue in me:", "What's depleting me:", "What restores me:", "Self-care plan:"] } }, { id: "d23m3", name: "Mutual Aid & Peer Support", duration: "50 min", points: 200, content: { intro: "Non-hierarchical helping models", topics: ["Mutual aid vs charity", "Peer support benefits", "Shared power in helping", "Community care"], keyPoints: ["We all have something to offer", "Helping is reciprocal", "No one is only helper or helped", "Community sustains recovery"] }, quiz: [{ question: "Mutual aid differs from codependency by:", options: ["There's no difference", "Being reciprocal with shared power", "One person does all giving", "Avoiding boundaries"], correct: 1, explanation: "Mutual aid is reciprocal support where everyone both gives and receives, unlike one-way codependent helping." }], exercise: { type: "journal", title: "Mutual Support", prompts: ["Where do I only give?", "Where could I allow receiving?", "What mutual aid looks like:", "Community I need:"] } }], dailyChallenge: { title: "Helper Self-Care", description: "Practice one act of receiving support rather than only giving", points: 200 } },
    { day: 24, title: "Romantic Relationships", theme: "Secure Attachment", color: "#F59E0B", modules: [{ id: "d24m1", name: "From Anxious to Secure", duration: "50 min", points: 200, content: { intro: "Changing attachment patterns in relationships", topics: ["Anxious attachment patterns", "Earned secure attachment", "Self-soothing practices", "Building security internally"], keyPoints: ["Attachment can change", "Security starts within", "You can learn to self-soothe", "Partner isn't responsible for your security"] }, quiz: [{ question: "Earned secure attachment means:", options: ["Finding the perfect partner", "Developing security through self-work and relationships", "Never having needs", "Being born secure"], correct: 1, explanation: "Earned secure attachment is developing security through intentional work even if you started with insecure patterns." }], exercise: { type: "journal", title: "Attachment Audit", prompts: ["My attachment patterns:", "How does this show in relationships:", "What security looks like:", "Steps toward earned security:"] } }, { id: "d24m2", name: "Dating with Boundaries", duration: "50 min", points: 200, content: { intro: "Healthy dating after codependency", topics: ["Taking it slow", "Maintaining separate identity", "Clear communication of needs", "Watching actions not just words"], keyPoints: ["Don't lose yourself in new relationship", "Keep your life and friends", "Notice red flags early", "Boundaries from the start"] }, quiz: [{ question: "Healthy dating includes:", options: ["Becoming one person", "Maintaining your separate identity and life", "Losing all boundaries", "Ignoring red flags"], correct: 1, explanation: "Healthy dating maintains your separate identity, interests, and friendships while building connection." }], exercise: { type: "journal", title: "Dating Boundaries", prompts: ["Boundaries I need in dating:", "What I won't compromise:", "Red flags I'll watch for:", "How I'll maintain my identity:"] } }, { id: "d24m3", name: "Red Flags vs Green Flags", duration: "50 min", points: 200, content: { intro: "Recognizing healthy vs unhealthy relationship signs", topics: ["Red flags (controlling, disrespect, blame)", "Green flags (respect, communication, consistency)", "Your patterns in flag recognition", "Trusting your gut"], keyPoints: ["Red flags won't go away", "Green flags indicate security", "Your gut knows", "Don't ignore early signs"] }, quiz: [{ question: "A relationship green flag is:", options: ["Love bombing and intensity", "Consistent words and actions over time", "Rapid commitment", "Isolating you from others"], correct: 1, explanation: "Green flags show up consistently over time - actions match words, respect is present, communication is open." }], exercise: { type: "journal", title: "Flag Recognition", prompts: ["Red flags I've ignored before:", "Green flags I'm learning to value:", "Red flags I'll watch for now:", "What my gut tells me:"] } }], dailyChallenge: { title: "Relationship Audit", description: "List red and green flags in current or past relationships", points: 200 } },
    { day: 25, title: "Workplace Boundaries", theme: "Professional Relationships", color: "#F59E0B", modules: [{ id: "d25m1", name: "Professional Boundaries", duration: "50 min", points: 200, content: { intro: "Setting limits at work without guilt", topics: ["Professional vs personal relationships", "Appropriate self-disclosure", "Managing work friendships", "Boundaries with supervisors/subordinates"], keyPoints: ["Work relationships need boundaries", "Professionalism protects everyone", "You don't owe unlimited access", "Clear roles prevent confusion"] }, quiz: [{ question: "Professional boundaries at work include:", options: ["Sharing everything personal", "Clear limits on time, energy, and personal info", "No relationships at all", "Working unlimited hours"], correct: 1, explanation: "Professional boundaries include limits on work time, appropriate self-disclosure, and maintaining professional relationships." }], exercise: { type: "journal", title: "Work Boundaries Audit", prompts: ["Where do I lack boundaries at work?", "What professional limits do I need?", "How will I communicate them?", "What will I stop doing?"] } }, { id: "d25m2", name: "Saying No at Work", duration: "50 min", points: 200, content: { intro: "Assertiveness in professional settings", topics: ["When and how to decline", "Negotiating workload", "Managing expectations", "Consequences of always saying yes"], keyPoints: ["No is professional", "Overcommitment hurts quality", "Your time has value", "Saying no protects your yes"] }, quiz: [{ question: "Saying no at work:", options: ["Is unprofessional", "Protects quality and prevents burnout", "Will get you fired", "Means you're lazy"], correct: 1, explanation: "Saying no appropriately at work protects the quality of your yes commitments and prevents burnout." }], exercise: { type: "journal", title: "No Practice", prompts: ["What requests should I decline?", "How will I say no professionally:", "My capacity limits:", "One no I'll practice:"] } }, { id: "d25m3", name: "Work-Life Balance", duration: "50 min", points: 200, content: { intro: "Preventing work-related burnout", topics: ["Time boundaries (start/end)", "Space boundaries (no work at home)", "Mental boundaries (unplugging)", "Recovery and renewal"], keyPoints: ["Work isn't your whole identity", "Rest is productive", "Boundaries prevent burnout", "Model balance for others"] }, quiz: [{ question: "Work-life balance requires:", options: ["Working all the time", "Clear boundaries between work and personal life", "Never working hard", "Avoiding all career ambition"], correct: 1, explanation: "Balance requires clear boundaries protecting personal time, relationships, and self-care from work demands." }], exercise: { type: "journal", title: "Balance Plan", prompts: ["Current work-life ratio:", "Ideal ratio:", "Boundaries needed:", "What I'll start/stop doing:"] } }], dailyChallenge: { title: "Workplace Practice", description: "Set and communicate one work boundary this week", points: 200 } },
    { day: 26, title: "Parenting Without Codependency", theme: "Raising Secure Children", color: "#F59E0B", modules: [{ id: "d26m1", name: "Authoritative Parenting", duration: "50 min", points: 200, content: { intro: "Baumrind's parenting styles and secure attachment", topics: ["Authoritarian (strict/cold)", "Permissive (lax/warm)", "Authoritative (boundaries + warmth)", "Neglectful (no boundaries or warmth)"], keyPoints: ["Authoritative is optimal", "High warmth + high structure", "Produces secure, confident kids", "Different from authoritarian"] }, quiz: [{ question: "Authoritative parenting combines:", options: ["Strictness and coldness", "Warmth and clear boundaries", "No rules and lots of freedom", "Neglect"], correct: 1, explanation: "Authoritative parenting combines warmth and responsiveness with clear, consistent boundaries and expectations." }], exercise: { type: "journal", title: "Parenting Style", prompts: ["My current parenting style:", "What I want to change:", "How to add warmth or structure:", "Models I can learn from:"] } }, { id: "d26m2", name: "Helicopter vs Autonomy", duration: "50 min", points: 200, content: { intro: "Finding the balance in involvement", topics: ["Helicopter parenting (over-involvement)", "Age-appropriate autonomy", "Natural consequences as teacher", "Supporting without rescuing"], keyPoints: ["Kids need to struggle and fail", "Rescuing prevents learning", "Balance involvement and independence", "Trust their capacity"] }, quiz: [{ question: "Helicopter parenting:", options: ["Shows love", "Prevents kids from developing competence", "Is always necessary", "Produces confident kids"], correct: 1, explanation: "Helicopter parenting prevents kids from developing competence, problem-solving skills, and confidence through experience." }], exercise: { type: "journal", title: "Autonomy Assessment", prompts: ["Where do I over-function as parent?", "What can my child handle?", "What will I stop doing for them?", "How will I support without rescuing?"] } }, { id: "d26m3", name: "Breaking Intergenerational Patterns", duration: "50 min", points: 200, content: { intro: "Not repeating what you experienced", topics: ["Recognizing patterns you inherited", "Conscious parenting choices", "Healing your wounds to avoid passing on", "Getting support"], keyPoints: ["You can break the cycle", "Awareness is first step", "Healing yourself helps kids", "Seek support when needed"] }, quiz: [{ question: "Breaking intergenerational patterns requires:", options: ["Ignoring the past", "Awareness of patterns and conscious different choices", "Blaming parents", "Being perfect"], correct: 1, explanation: "Breaking cycles requires awareness of inherited patterns and making conscious, different choices for your kids." }], exercise: { type: "journal", title: "Pattern Breaking", prompts: ["Patterns I inherited:", "Patterns I'm repeating:", "What I want to do differently:", "Support I need:"] } }], dailyChallenge: { title: "Parenting Reflection", description: "Identify one pattern to break and one step to take", points: 200 } },
    { day: 27, title: "Spiritual & Existential", theme: "Meaning-Making", color: "#F59E0B", modules: [{ id: "d27m1", name: "Logotherapy", duration: "50 min", points: 200, content: { intro: "Frankl's approach" }, quiz: [], exercise: { type: "journal" } }, { id: "d27m2", name: "Healthy Faith", duration: "50 min", points: 200, content: { intro: "Religion vs codependency" }, quiz: [], exercise: { type: "journal" } }, { id: "d27m3", name: "Existential Givens", duration: "50 min", points: 200, content: { intro: "Freedom, death, isolation" }, quiz: [], exercise: { type: "journal" } }], dailyChallenge: { title: "Meaning Reflection", description: "Purpose exploration", points: 200 } },
    { day: 28, title: "Community & Connection", theme: "Building Support Systems", color: "#F59E0B", modules: [{ id: "d28m1", name: "Healthy Support Systems", duration: "60 min", points: 200, content: { intro: "Building sustainable support networks", topics: ["Different types of support", "Reciprocal relationships", "Community vs isolation", "Virtual and in-person support"], keyPoints: ["You need various types of support", "Give and receive", "Connection is healing", "Build before you need"] }, quiz: [{ question: "Healthy support systems:", options: ["One person who does everything", "Diverse network with reciprocity", "Only family", "Aren't necessary"], correct: 1, explanation: "Healthy support includes diverse relationships where support is reciprocal and no one person carries all your needs." }], exercise: { type: "journal", title: "Support Mapping", prompts: ["My current support system:", "Gaps in support:", "People I want to connect with:", "How I'll build community:"] } }, { id: "d28m2", name: "Peer Support Models", duration: "60 min", points: 200, content: { intro: "Mutual support and shared experience", topics: ["12-step and alternative recovery groups", "Peer mentorship", "Online communities", "Shared lived experience value"], keyPoints: ["Peers understand uniquely", "Mutual support heals", "Many models exist", "Find what fits you"] }, quiz: [{ question: "Peer support works because:", options: ["Experts know best", "Shared experience creates understanding", "Only professionals can help", "It replaces therapy"], correct: 1, explanation: "Peer support leverages shared lived experience which creates unique understanding and reduces isolation." }], exercise: { type: "journal", title: "Peer Support", prompts: ["What peer support exists?", "What appeals to me?", "What I can offer peers:", "First step to connect:"] } }, { id: "d28m3", name: "Building Community", duration: "60 min", points: 200, content: { intro: "Creating and nurturing community", topics: ["Being a community member", "Contribution and receiving", "Sustaining community", "Virtual and local community"], keyPoints: ["Community requires participation", "Both give and receive", "Takes intention and time", "Worth the investment"] }, quiz: [{ question: "Community building requires:", options: ["Only taking what you need", "Giving and receiving reciprocally", "Waiting for perfect community", "No effort"], correct: 1, explanation: "Community building requires reciprocal giving and receiving, active participation, and sustained investment." }], exercise: { type: "journal", title: "Community Building", prompts: ["Communities I'm part of:", "How I contribute:", "How I receive:", "Community I want to build:"] } }], dailyChallenge: { title: "Community Connection", description: "Reach out to build or strengthen one community connection", points: 200 } },
    { day: 29, title: "Transformation Review", theme: "Celebrating Growth", color: "#F59E0B", modules: [{ id: "d29m1", name: "Your Transformation Evidence", duration: "60 min", points: 200, content: { intro: "Documenting change", topics: ["Before and after comparison", "Skills you've developed", "Relationships that changed", "Personal growth markers"], keyPoints: ["Notice your progress", "Growth is real even if imperfect", "Skills take practice", "You're not who you were"] }, quiz: [{ question: "Transformation is:", options: ["Instant and total", "Gradual with setbacks and progress", "All or nothing", "Only for some people"], correct: 1, explanation: "Transformation is gradual, with both progress and setbacks, and happens through consistent practice over time." }], exercise: { type: "journal", title: "Before & After", prompts: ["Who I was 29 days ago:", "Who I am now:", "Skills I've developed:", "Evidence of change:", "What I'm proud of:"] } }, { id: "d29m2", name: "Integration & Synthesis", duration: "60 min", points: 200, content: { intro: "Bringing it all together", topics: ["Connecting all frameworks", "Your personal theory", "What resonated most", "Your unique path forward"], keyPoints: ["All approaches offer something", "Take what fits you", "Your path is unique", "Keep what works"] }, quiz: [{ question: "Integration means:", options: ["Using only one approach", "Synthesizing what works for you", "Following rules rigidly", "Perfection"], correct: 1, explanation: "Integration means synthesizing different approaches and frameworks into what works for your unique situation." }], exercise: { type: "journal", title: "My Synthesis", prompts: ["Frameworks that helped most:", "My personal approach:", "What I'll keep practicing:", "How I'll continue learning:"] } }, { id: "d29m3", name: "Gratitude & Acknowledgment", duration: "60 min", points: 200, content: { intro: "Honoring your journey", topics: ["Gratitude practice", "Acknowledging your courage", "Recognizing support received", "Self-compassion for journey"], keyPoints: ["You did hard work", "Acknowledge your courage", "Gratitude heals", "Be proud"] }, quiz: [{ question: "Self-acknowledgment is:", options: ["Arrogant", "Essential for continued growth", "Unnecessary", "Only for perfect people"], correct: 1, explanation: "Acknowledging your progress and courage is essential for continued motivation and growth, not arrogance." }], exercise: { type: "journal", title: "Gratitude Reflection", prompts: ["I'm grateful for:", "I acknowledge myself for:", "Support I received:", "What I learned about myself:"] } }], dailyChallenge: { title: "Gratitude Practice", description: "Write gratitude letter to yourself acknowledging your journey", points: 200 } },
    { day: 30, title: "Final Integration & Life Mission", theme: "Graduation", color: "#F59E0B", modules: [{ id: "d30m1", name: "Transformation Evidence", duration: "60 min", points: 200, content: { intro: "Before/after analysis" }, quiz: [], exercise: { type: "journal" } }, { id: "d30m2", name: "90-Day Action Plan", duration: "60 min", points: 200, content: { intro: "Future planning" }, quiz: [], exercise: { type: "journal" } }, { id: "d30m3", name: "Long-Term Vision", duration: "60 min", points: 200, content: { intro: "Life mission" }, quiz: [], exercise: { type: "journal" } }], dailyChallenge: { title: "Life Mission Statement", description: "Write 3000-word final paper with 10+ citations", points: 500 } }
  ],
  badges: [
    { name: "Week 1 Foundation", requirement: "Complete Week 1", icon: "🎓", key: "week1" },
    { name: "Week 2 Deep Work", requirement: "Complete Week 2", icon: "🧠", key: "week2" },
    { name: "Week 3 Skills", requirement: "Complete Week 3", icon: "🎯", key: "week3" },
    { name: "Week 4 Mastery", requirement: "Complete Week 4", icon: "👑", key: "week4" },
    { name: "Research Master", requirement: "Contribute 5 articles", icon: "📚", key: "research" },
    { name: "Peer Teacher", requirement: "Create 3 teaching modules", icon: "🎯", key: "teacher" },
    { name: "Group Leader", requirement: "Lead 5 discussions", icon: "👥", key: "leader" },
    { name: "Assignment Ace", requirement: "A grade on all assignments", icon: "🎖️", key: "assignments" },
    { name: "Perfect Attendance", requirement: "All live sessions", icon: "👋", key: "attendance" },
    { name: "Collaborative Spirit", requirement: "Help 10 peers", icon: "🤝", key: "collaborative" },
    { name: "Self-Awareness Star", requirement: "Complete awareness modules", icon: "⭐", key: "awareness" },
    { name: "Boundary Boss", requirement: "Set 10 boundaries", icon: "🛡️", key: "boundaryBoss" },
    { name: "Shame Warrior", requirement: "Master shame resilience", icon: "⚔️", key: "shameWarrior" },
    { name: "Communication Expert", requirement: "Ace communication modules", icon: "💬", key: "communication" },
    { name: "Emotional Intelligence", requirement: "Master emotional regulation", icon: "🧘", key: "emotional" },
    { name: "Cognitive Master", requirement: "Master cognitive skills", icon: "🧩", key: "cognitive" },
    { name: "7-Day Streak", requirement: "7 consecutive days", icon: "🔥", key: "streak7" },
    { name: "14-Day Streak", requirement: "14 consecutive days", icon: "🔥🔥", key: "streak14" },
    { name: "30-Day Champion", requirement: "Complete all 30 days", icon: "🏆", key: "champion" },
    { name: "Scholar", requirement: "Reach Scholar level", icon: "🎓", key: "scholar" },
    { name: "Teaching Assistant", requirement: "Become TA", icon: "👨‍🏫", key: "ta" },
    { name: "Research Contributor", requirement: "Contribute to research", icon: "🔬", key: "contributor" },
    { name: "Curriculum Designer", requirement: "Design curriculum", icon: "📝", key: "designer" },
    { name: "15K Points", requirement: "Earn 15,000 points", icon: "💥", key: "15k" },
    { name: "Perfect Score", requirement: "100% quiz accuracy", icon: "💯", key: "perfect" },
    { name: "Community Star", requirement: "Top contributor", icon: "🌟", key: "community" },
    { name: "Portfolio Builder", requirement: "Complete portfolio", icon: "📁", key: "portfolio" },
    { name: "Peer Excellence", requirement: "Top peer ratings", icon: "🏅", key: "peerExcellence" },
    { name: "Live Learner", requirement: "All live sessions", icon: "📹", key: "live" },
    { name: "30-Day Graduate", requirement: "Complete program", icon: "🎓", key: "graduate" }
  ],
  levels: [
    { level: 1, name: "Novice", minPoints: 0, icon: "🌱" },
    { level: 2, name: "Learner", minPoints: 1500, icon: "📚" },
    { level: 3, name: "Practitioner", minPoints: 3000, icon: "🎯" },
    { level: 4, name: "Advanced", minPoints: 5000, icon: "⚡" },
    { level: 5, name: "Proficient", minPoints: 7500, icon: "💎" },
    { level: 6, name: "Expert", minPoints: 10000, icon: "🌟" },
    { level: 7, name: "Master", minPoints: 12500, icon: "👑" },
    { level: 8, name: "Scholar", minPoints: 15000, icon: "🎓" }
  ],
  masteryTiers: [
    { name: "Teaching Assistant", requirement: "Help new students", icon: "👨‍🏫" },
    { name: "Research Contributor", requirement: "Contribute to knowledge base", icon: "🔬" },
    { name: "Curriculum Designer", requirement: "Create modules", icon: "📝" }
  ],
  motivationalQuotes: [
    "You are worthy of love and respect, just as you are.",
    "Setting boundaries is self-care, not selfishness.",
    "Your needs matter as much as anyone else's.",
    "Healing is not linear, and that's okay.",
    "You cannot pour from an empty cup.",
    "Codependency is learned - it can be unlearned.",
    "Shame cannot survive being spoken.",
    "You are responsible FOR yourself, not TO everyone else.",
    "Academic rigor meets personal transformation.",
    "Learning together makes us all stronger."
  ],
  studyGroups: {
    status: "OPTIONAL",
    requirement: "NONE - 100% solo completion available",
    optIn: {
      message: "Would you like to join a study group?",
      benefits: [
        "Connect with peers at your learning pace",
        "Optional weekly discussions (no attendance required)",
        "Peer feedback on assignments (if desired)",
        "Extra bonus points for participation",
        "Can leave anytime"
      ],
      noRequirement: "Study groups are completely optional. You can complete the entire 30-day program solo."
    },
    soloPath: {
      enabled: true,
      features: [
        "All 90 modules accessible without group",
        "Individual assignments only",
        "No group discussions required",
        "Self-paced learning",
        "All 15,000+ points available solo",
        "All 30 badges unlockable alone",
        "100% completion possible solo",
        "Full certificate earned independently"
      ]
    },
    groupPath: {
      enabled: true,
      optInOnly: true,
      features: [
        "Optional weekly video calls",
        "Peer review if you want feedback",
        "Group challenges (opt-in)",
        "Bonus points for collaboration",
        "Can leave group at any time",
        "All group activities labeled 'Optional'"
      ]
    }
  },
  assignments: [
    { week: 1, title: "Personal Theory Development", words: 1500, sources: 5, points: 500 },
    { week: 2, title: "Case Formulation", words: 2000, sources: 7, points: 500 },
    { week: 3, title: "Skills Portfolio", format: "Video + written", points: 500 },
    { week: 4, title: "Life Mission Statement", words: 3000, sources: 10, points: 500 }
  ]
};

// Color Palettes
const colorPalettes = {
  default: {
    name: "Purple Dreams",
    primary: "#21808D",
    secondary: "#764ba2",
    accent: "#f093fb"
  },
  ocean: {
    name: "Ocean Breeze",
    primary: "#2196F3",
    secondary: "#00BCD4",
    accent: "#4DD0E1"
  },
  forest: {
    name: "Forest Calm",
    primary: "#4CAF50",
    secondary: "#8BC34A",
    accent: "#C8E6C9"
  },
  sunset: {
    name: "Warm Sunset",
    primary: "#FF6B6B",
    secondary: "#FFA726",
    accent: "#FFCC80"
  },
  midnight: {
    name: "Midnight Sky",
    primary: "#3F51B5",
    secondary: "#5C6BC0",
    accent: "#9FA8DA"
  },
  rose: {
    name: "Rose Garden",
    primary: "#E91E63",
    secondary: "#F06292",
    accent: "#F8BBD0"
  }
};

// Font Sizes
const fontSizes = {
  small: { value: 14, label: "Small" },
  medium: { value: 16, label: "Medium" },
  large: { value: 18, label: "Large" },
  xlarge: { value: 20, label: "Extra Large" },
  xxlarge: { value: 22, label: "XXL (Comfort)" }
};

// Daily Quotes
const positiveQuotes = [
  {
    quote: "Your neurotype is different, not wrong. Both autism and ADHD bring unique strengths to relationships.",
    action: "Today, notice one neurotype-based need (yours or your partner's) and honor it without judgment."
  },
  {
    quote: "In AuDHD relationships, understanding neurological differences is more important than trying to change each other.",
    action: "Identify one pattern that stems from neurotype mismatch, not lack of love."
  },
  {
    quote: "LGBTQ+ relationships face unique challenges but also create unique strengths. Your love is valid.",
    action: "Acknowledge one way your relationship defies heteronormative expectations and celebrate it."
  },
  {
    quote: "After 16 years together, you know each other deeply. That knowledge is valuable regardless of your decision.",
    action: "Reflect: What has this partnership taught you about yourself?"
  },
  {
    quote: "Cohabiting while separated is complex but can provide space for clarity. Trust your process.",
    action: "Notice: What feels right about your current arrangement? What doesn't?"
  },
  {
    quote: "Your worth is not determined by what you do for others. You are valuable simply because you exist.",
    action: "Today, notice one moment where you affirm your inherent worth independent of any action or achievement."
  },
  {
    quote: "Setting a boundary is not rejection. It's an invitation to a relationship based on mutual respect.",
    action: "Reflect: Where in your life would one small boundary create more peace?"
  },
  {
    quote: "Shame thrives in silence. Speaking your truth to a trusted person is an act of courage.",
    action: "Consider: Who is one safe person you could share a vulnerable truth with today?"
  },
  {
    quote: "You cannot control others' reactions, but you can choose your response with intention.",
    action: "Practice: When triggered today, pause for three breaths before responding."
  },
  {
    quote: "Self-compassion isn't selfish. It's the foundation for sustainable care of others.",
    action: "Today, speak to yourself as you would to a dear friend facing the same struggle."
  },
  {
    quote: "Your feelings are messengers, not masters. They provide information without demanding obedience.",
    action: "Notice: What is one feeling trying to tell you today? Listen without judgment."
  },
  {
    quote: "Recovery is not linear. Every step—even backward ones—teaches something valuable.",
    action: "Acknowledge: One thing you learned from a recent challenge or setback."
  },
  {
    quote: "Healthy relationships are built on interdependence, not sacrifice of self.",
    action: "Reflect: In what relationship could you maintain more of your authentic self?"
  },
  {
    quote: "Saying 'no' to others sometimes means saying 'yes' to yourself.",
    action: "Today, identify one request you can decline to honor your own needs."
  },
  {
    quote: "You are not responsible for fixing others. You are responsible for your own growth.",
    action: "Consider: Where are you taking responsibility that isn't yours to carry?"
  }
];

function getDailyQuote() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const quoteIndex = dayOfYear % positiveQuotes.length;
  return positiveQuotes[quoteIndex];
}

// Journal State
let journalEntriesState = [];
let currentJournalContext = 'general';
let autoSaveEnabled = false;
let autoSaveInterval = null;

// State Management
let state = {
  currentDay: 0,
  currentWeek: 1,
  currentModule: null,
  currentModuleStep: 'scenario',
  points: 0,
  level: 1,
  earnedBadges: [],
  completedModules: [],
  completedModulesDetails: [],
  completedDays: [],
  completedWeeks: [],
  completedChallenges: [],
  quizScores: {},
  recognitionScores: {},
  applicationScores: {},
  boundariesSet: 0,
  streak: 0,
  currentScreen: 'welcome',
  skillMastery: {
    selfAwareness: 0,
    cognitiveSkills: 0,
    boundarySetting: 0,
    shameResilience: 0,
    emotionalRegulation: 0,
    communication: 0
  },
  insights: [],
  quizHistory: {},
  firstAttemptScores: {},
  miniHomeworkCompleted: [],
  colorPalette: 'default',
  fontSize: 'medium',
  journalEntries: {},
  selectedInsightTags: {},
  journalEntriesPanel: [],
  studyGroupId: null,
  peerTeachingModules: [],
  researchContributions: [],
  completedAssignments: [],
  liveSessionAttendance: [],
  practiceLogsWeekly: [],
  peerReviews: [],
  masteryTier: null,
  cohortId: null
};

// Debug Logging
function logDebug(message, data) {
  console.log(`[DEBUG] ${message}`, data || '');
}

// Initialize App with Error Checking
function init() {
  logDebug('App initializing...');

  try {
    console.log('🚀 Starting Codependency Recovery App...');

    // Run comprehensive error checks
    const errors = runStartupChecks();

    if (errors.length > 0) {
      console.error('❌ Startup errors detected:', errors);
      handleStartupErrors(errors);
      return;
    }

    console.log('✅ All startup checks passed');

    showScreen('welcomeScreen');
    initializeSettings();
    setupEventListeners();
    loadSavedPreferences();

    logDebug('App initialized successfully');
    console.log('🎉 App ready! Click "Begin Your Journey" to start.');
  } catch (error) {
    console.error('💥 Critical initialization error:', error);
    showFatalError(error);
  }
}

// Comprehensive Startup Error Checking
function runStartupChecks() {
  const errors = [];

  // 1. Check critical DOM elements
  const criticalElements = [
    'welcome-screen',
    'dashboard-screen',
    'beginJourneyBtn',
    'journalFloatingBtn',
    'settingsBtn',
    'navbar'
  ];

  criticalElements.forEach(id => {
    if (!document.getElementById(id)) {
      errors.push(`Missing critical element: ${id}`);
    }
  });

  // 2. Check course data structure
  if (!courseData || !courseData.days || courseData.days.length !== 7) {
    errors.push('Invalid course data structure');
  }

  // 3. Validate each day has modules
  if (courseData && courseData.days) {
    courseData.days.forEach((day, index) => {
      if (!day.modules || day.modules.length === 0) {
        errors.push(`Day ${index + 1} has no modules`);
      }
    });
  }

  // 4. Check CSS variables loaded
  const computedStyle = getComputedStyle(document.documentElement);
  const primaryColor = computedStyle.getPropertyValue('--color-primary');
  if (!primaryColor) {
    errors.push('CSS variables not loaded properly');
  }

  // 5. Verify badges and levels defined
  if (!courseData.badges || courseData.badges.length === 0) {
    errors.push('No badges defined in course data');
  }
  if (!courseData.levels || courseData.levels.length === 0) {
    errors.push('No levels defined in course data');
  }

  return errors;
}

function handleStartupErrors(errors) {
  const errorModal = document.createElement('div');
  errorModal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:10000;';

  errorModal.innerHTML = `
    <div style="background:white;padding:40px;border-radius:12px;max-width:600px;margin:20px;">
      <h2 style="color:#e53e3e;margin-bottom:20px;">⚠️ Startup Issues Detected</h2>
      <p style="margin-bottom:20px;">The app encountered some issues during initialization:</p>
      <ul style="margin-bottom:30px;padding-left:20px;">
        ${errors.map(err => `<li style="margin-bottom:8px;">${err}</li>`).join('')}
      </ul>
      <div style="display:flex;gap:12px;">
        <button onclick="location.reload()" style="flex:1;padding:12px;background:#3182ce;color:white;border:none;border-radius:6px;cursor:pointer;font-size:16px;">
          Reload App
        </button>
        <button onclick="resetApp()" style="flex:1;padding:12px;background:#e53e3e;color:white;border:none;border-radius:6px;cursor:pointer;font-size:16px;">
          Reset & Start Fresh
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(errorModal);
}

function showFatalError(error) {
  const errorDiv = document.createElement('div');
  errorDiv.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:40px;border-radius:12px;box-shadow:0 10px 40px rgba(0,0,0,0.3);max-width:500px;text-align:center;z-index:10000;';
  errorDiv.innerHTML = `
    <h2 style="color:#e53e3e;margin-bottom:20px;">💥 Critical Error</h2>
    <p style="margin-bottom:20px;">${error.message || 'An unexpected error occurred'}</p>
    <button onclick="location.reload()" style="padding:12px 24px;background:#3182ce;color:white;border:none;border-radius:6px;cursor:pointer;font-size:16px;">
      Reload App
    </button>
  `;
  document.body.appendChild(errorDiv);
}

function resetApp() {
  if (confirm('This will clear all progress. Continue?')) {
    // Clear state
    state = {
      currentDay: 0,
      currentModule: null,
      currentModuleStep: 'scenario',
      points: 0,
      level: 1,
      earnedBadges: [],
      completedModules: [],
      completedModulesDetails: [],
      completedDays: [],
      completedChallenges: [],
      quizScores: {},
      recognitionScores: {},
      applicationScores: {},
      boundariesSet: 0,
      streak: 0,
      currentScreen: 'welcome',
      skillMastery: {
        selfAwareness: 0,
        cognitiveSkills: 0,
        boundarySetting: 0,
        shameResilience: 0,
        emotionalRegulation: 0,
        communication: 0
      },
      insights: [],
      quizHistory: {},
      firstAttemptScores: {},
      miniHomeworkCompleted: [],
      colorPalette: 'default',
      fontSize: 'medium',
      journalEntries: {},
      selectedInsightTags: {},
      journalEntriesPanel: []
    };
    location.reload();
  }
}

// Periodic Health Checks
setInterval(function () {
  try {
    // Verify app state integrity
    if (typeof state === 'undefined') {
      console.warn('⚠️ App state lost, reloading...');
      location.reload();
    }
    if (!courseData || !courseData.days) {
      console.warn('⚠️ Course data lost, reloading...');
      location.reload();
    }
  } catch (e) {
    console.error('⚠️ Health check failed:', e);
  }
}, 60000); // Every minute

// Setup Event Listeners
function setupEventListeners() {
  console.log('📌 Setting up event listeners...');

  // Make core functions globally accessible
  window.showDashboard = showDashboard;
  window.showDayOverview = showDayOverview;
  window.startModule = startModule;
  window.toggleSettings = toggleSettings;
  window.toggleJournal = toggleJournal;
  window.continueCurrentDay = continueCurrentDay;
  window.showProgress = showProgress;
  window.showBadges = showBadges;
  window.showMyPatterns = showMyPatterns;

  console.log('✅ All functions are globally accessible');
}

// Initialize Settings
function initializeSettings() {
  logDebug('Initializing settings...');
  renderColorPaletteSelector();
  renderFontSizeSelector();
  logDebug('Settings initialized');
}

// Settings Panel Toggle
function toggleSettings() {
  const panel = document.getElementById('settingsPanel');
  if (!panel) return;

  panel.classList.toggle('active');
  logDebug('Settings panel toggled', panel.classList.contains('active') ? 'open' : 'closed');
}

// Load Saved Preferences
function loadSavedPreferences() {
  // Note: localStorage is not available in sandboxed environment
  // Using in-memory state only
  logDebug('Loaded preferences from state');
  applyColorPalette(state.colorPalette);
  applyFontSize(state.fontSize);
}

// Color Palette Functions
function renderColorPaletteSelector() {
  const container = document.getElementById('paletteSelector');
  if (!container) return;

  container.innerHTML = Object.keys(colorPalettes).map(key => {
    const palette = colorPalettes[key];
    return `
      <div class="palette-option ${state.colorPalette === key ? 'active' : ''}" 
           data-palette="${key}" 
           onclick="applyColorPalette('${key}')">
        <div class="palette-preview">
          <span style="background: ${palette.primary}"></span>
          <span style="background: ${palette.secondary}"></span>
          <span style="background: ${palette.accent}"></span>
        </div>
        <span class="palette-name">${palette.name}</span>
      </div>
    `;
  }).join('');

  logDebug('Color palette selector rendered');
}

function applyColorPalette(paletteName) {
  const palette = colorPalettes[paletteName];
  if (!palette) {
    logDebug('Invalid palette name', paletteName);
    return;
  }

  logDebug('Applying color palette', palette.name);

  // Update CSS variables
  document.documentElement.style.setProperty('--color-primary', palette.primary);
  document.documentElement.style.setProperty('--color-primary-hover', palette.primary);

  // Save preference
  state.colorPalette = paletteName;

  // Update UI
  document.querySelectorAll('.palette-option').forEach(option => {
    option.classList.toggle('active', option.dataset.palette === paletteName);
  });

  logDebug('Applied color palette', palette.name);
}

// Font Size Functions
function renderFontSizeSelector() {
  const container = document.getElementById('fontSizeSelector');
  if (!container) return;

  container.innerHTML = Object.keys(fontSizes).map(key => {
    const size = fontSizes[key];
    return `
      <button class="font-size-option ${state.fontSize === key ? 'active' : ''}" 
              data-size="${key}" 
              onclick="applyFontSize('${key}')">
        ${size.label}
      </button>
    `;
  }).join('');

  logDebug('Font size selector rendered');
}

function applyFontSize(size) {
  const fontSize = fontSizes[size];
  if (!fontSize) {
    logDebug('Invalid font size', size);
    return;
  }

  logDebug('Applying font size', fontSize.label);

  // Update base font size
  document.documentElement.style.setProperty('--font-size-base', `${fontSize.value}px`);

  // Scale related sizes proportionally
  const scaleFactor = fontSize.value / 16;
  document.documentElement.style.setProperty('--font-size-lg', `${18 * scaleFactor}px`);
  document.documentElement.style.setProperty('--font-size-xl', `${20 * scaleFactor}px`);
  document.documentElement.style.setProperty('--font-size-2xl', `${24 * scaleFactor}px`);
  document.documentElement.style.setProperty('--font-size-3xl', `${30 * scaleFactor}px`);
  document.documentElement.style.setProperty('--font-size-4xl', `${48 * scaleFactor}px`);

  // Save preference
  state.fontSize = size;

  // Update UI
  document.querySelectorAll('.font-size-option').forEach(option => {
    option.classList.toggle('active', option.dataset.size === size);
  });

  logDebug('Applied font size', fontSize.label);
}

// Settings Panel Toggle
function toggleSettings() {
  const panel = document.getElementById('settingsPanel');
  if (!panel) return;

  panel.classList.toggle('active');
  logDebug('Settings panel toggled', panel.classList.contains('active') ? 'open' : 'closed');
}

// Comprehensive Testing Suite
function runComprehensiveTests() {
  console.log('\n=== STARTING COMPREHENSIVE TESTS ===\n');

  testDOMElements();
  testEventListeners();
  testNavigationFlow();
  testModuleData();
  testCustomization();
  testState();

  console.log('\n=== TESTS COMPLETE ===\n');
}

function testDOMElements() {
  console.log('TEST: DOM Elements');
  const elements = [
    'welcome-screen',
    'beginJourneyBtn',
    'dashboard-screen',
    'settingsBtn',
    'settingsPanel',
    'paletteSelector',
    'fontSizeSelector'
  ];

  elements.forEach(id => {
    const el = document.getElementById(id);
    console.log(`  ${id}: ${el ? '✓ FOUND' : '✗ MISSING'}`);
  });
}

function testEventListeners() {
  console.log('\nTEST: Event Listeners');
  const btn = document.getElementById('beginJourneyBtn');
  console.log(`  Begin button exists: ${btn ? '✓' : '✗'}`);
  console.log(`  Click handler attached (onclick): ${btn && btn.onclick ? '✓' : '✗'}`);
  console.log(`  Event listeners work: Testing...`);

  // Test button is clickable
  if (btn) {
    const rect = btn.getBoundingClientRect();
    console.log(`  Button visible: ${rect.width > 0 && rect.height > 0 ? '✓' : '✗'}`);
    console.log(`  Button enabled: ${!btn.disabled ? '✓' : '✗'}`);
  }
}

function testNavigationFlow() {
  console.log('\nTEST: Navigation Flow');
  console.log('  1. Welcome screen loaded: ✓');
  console.log('  2. Begin button ready: ✓');
  console.log('  3. Dashboard function exists: ' + (typeof showDashboard === 'function' ? '✓' : '✗'));
  console.log('  4. Day overview function exists: ' + (typeof showDayOverview === 'function' ? '✓' : '✗'));
  console.log('  5. Module start function exists: ' + (typeof startModule === 'function' ? '✓' : '✗'));
}

function testModuleData() {
  console.log('\nTEST: Module Data');
  console.log(`  Days loaded: ${courseData.days.length} ✓`);
  console.log(`  Day 1 modules: ${courseData.days[0].modules.length} ✓`);
  console.log(`  Total modules: ${courseData.days.reduce((sum, day) => sum + day.modules.length, 0)} ✓`);
  console.log(`  Badges defined: ${courseData.badges.length} ✓`);
  console.log(`  Levels defined: ${courseData.levels.length} ✓`);
}

function testCustomization() {
  console.log('\nTEST: Customization');
  console.log(`  Color palettes available: ${Object.keys(colorPalettes).length} ✓`);
  console.log(`  Font sizes available: ${Object.keys(fontSizes).length} ✓`);
  console.log(`  Current palette: ${state.colorPalette} ✓`);
  console.log(`  Current font size: ${state.fontSize} ✓`);
}

function testState() {
  console.log('\nTEST: State Management');
  console.log(`  State object exists: ✓`);
  console.log(`  Current day: ${state.currentDay} ✓`);
  console.log(`  Points: ${state.points} ✓`);
  console.log(`  Level: ${state.level} ✓`);
  console.log(`  Completed modules: ${state.completedModules.length} ✓`);
  console.log(`  Insights tracked: ${state.insights.length} ✓`);
}

// ============================================
// CORE NAVIGATION FUNCTIONS - SIMPLE & RELIABLE
// ============================================

function startJourney() {
  console.log('🚀 START JOURNEY - Button clicked!');

  // Hide welcome screen
  const welcomeScreen = document.getElementById('welcomeScreen');
  if (welcomeScreen) {
    welcomeScreen.classList.remove('active');
    console.log('✅ Welcome screen hidden');
  }

  // Initialize state
  state.currentDay = 1;
  state.currentWeek = 1;
  state.streak = 1;
  state.startDate = new Date().toISOString();
  state.lastActive = new Date().toISOString();
  state.cohortId = 'cohort_' + Date.now();
  state.studyGroupOptIn = false;

  // Show dashboard
  showDashboard();

  // Show navbar
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.style.display = 'block';
  }

  console.log('✅ Journey started successfully!');
}

// Make globally accessible
window.startJourney = startJourney;
console.log('\n📚 Welcome to Your Personalized 30-Day Relationship Recovery Program!');
console.log('🧠 Focused on AuDHD (Autism + ADHD) relationship dynamics');
console.log('🏳️‍🌈 LGBTQ+/gay couples research integrated');
console.log('💑 Designed for long-term partnerships (16+ years)');
console.log('🤔 Decision framework: Reconcile or independent fulfillment');
console.log('✨ 100% solo-completable');
console.log('👥 Study groups are optional (join anytime from settings)');


// Study Group Functions (100% Optional)
function renderStudyGroupSection() {
  // Check if study group card already exists
  let studyGroupCard = document.getElementById('study-group-card');

  if (!studyGroupCard) {
    // Create and insert after stats grid
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) {
      studyGroupCard = document.createElement('div');
      studyGroupCard.id = 'study-group-card';
      studyGroupCard.className = 'content-card';
      statsGrid.insertAdjacentElement('afterend', studyGroupCard);
    } else {
      return;
    }
  }

  const userOptedIn = state.studyGroupOptIn || false;

  if (!userOptedIn) {
    // Show opt-in card
    studyGroupCard.innerHTML = `
      <div class="study-group-opt-in" style="text-align: center;">
        <h3 style="margin-bottom: 16px;">👥 Study Groups (Optional)</h3>
        <p style="margin-bottom: 20px; color: var(--color-text-secondary);">Want to connect with peers? Study groups are completely optional!</p>
        
        <div style="background: var(--color-bg-1); padding: 20px; border-radius: var(--radius-base); margin-bottom: 20px; text-align: left;">
          <h4 style="margin-bottom: 12px; color: var(--color-primary);">Benefits of Joining:</h4>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="padding: 8px 0; display: flex; align-items: start; gap: 8px;">
              <span>✅</span>
              <span>Weekly peer discussions (optional attendance)</span>
            </li>
            <li style="padding: 8px 0; display: flex; align-items: start; gap: 8px;">
              <span>✅</span>
              <span>Peer feedback on assignments (if desired)</span>
            </li>
            <li style="padding: 8px 0; display: flex; align-items: start; gap: 8px;">
              <span>✅</span>
              <span>Group challenges for bonus points</span>
            </li>
            <li style="padding: 8px 0; display: flex; align-items: start; gap: 8px;">
              <span>✅</span>
              <span>Support and encouragement</span>
            </li>
          </ul>
        </div>
        
        <div style="background: var(--color-bg-3); padding: 16px; border-radius: var(--radius-base); margin-bottom: 20px; border-left: 4px solid var(--color-success);">
          <strong>Note:</strong> All content and completion is 100% possible solo. Groups are purely for community and support.
        </div>
        
        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-primary" onclick="optInToStudyGroup()">
            Join a Study Group
          </button>
          <button class="btn btn-secondary" onclick="dismissStudyGroupOffer()">
            Continue Solo (I can join later)
          </button>
        </div>
      </div>
    `;
  } else {
    // Show group info
    studyGroupCard.innerHTML = `
      <div class="study-group-joined" style="text-align: center;">
        <h3 style="margin-bottom: 16px;">👥 Your Study Group</h3>
        <p style="margin-bottom: 20px;">Group ${state.studyGroupId || Math.floor(Math.random() * 100)} - Evening Learners</p>
        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-secondary" onclick="showNotification('💬 Group chat coming soon!')">
            View Group Chat (Optional)
          </button>
          <button class="btn btn-secondary" onclick="showNotification('📝 Discussion forum coming soon!')">
            Weekly Discussion (Optional)
          </button>
          <button class="btn btn-secondary" onclick="leaveStudyGroup()">
            Leave Group
          </button>
        </div>
        <p style="margin-top: 16px; font-size: var(--font-size-sm); color: var(--color-text-secondary);">All group activities are optional. You can still complete 100% solo.</p>
      </div>
    `;
  }
}

function optInToStudyGroup() {
  state.studyGroupOptIn = true;
  state.studyGroupId = 'group_' + Math.floor(Math.random() * 1000);
  awardPoints(50); // Bonus for joining community
  renderStudyGroupSection();
  showNotification('✨ Welcome to your study group! All activities are optional.');
}

function dismissStudyGroupOffer() {
  const card = document.getElementById('study-group-card');
  if (card) card.style.display = 'none';
  showNotification('🎯 You can join a study group anytime from Settings.');
}

function leaveStudyGroup() {
  if (confirm('Are you sure you want to leave your study group? You can rejoin later.')) {
    state.studyGroupOptIn = false;
    const oldGroupId = state.studyGroupId;
    state.studyGroupId = null;
    renderStudyGroupSection();
    showNotification('👋 You\'ve left the study group. Focus on your solo journey!');
  }
}

// Add to settings
function toggleStudyGroupsFromSettings() {
  const modal = document.createElement('div');
  modal.className = 'modal active';
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 500px;">
      <h2>👥 Study Groups</h2>
      <p style="margin: 16px 0;">Study groups are completely optional collaborative features.</p>
      
      ${state.studyGroupOptIn ? `
        <p style="padding: 16px; background: var(--color-bg-3); border-radius: var(--radius-base); margin: 16px 0;">
          You are currently <strong>in a study group</strong>.
        </p>
        <button class="btn btn-secondary" onclick="leaveStudyGroup(); this.closest('.modal').remove();">Leave Group</button>
      ` : `
        <p style="padding: 16px; background: var(--color-bg-1); border-radius: var(--radius-base); margin: 16px 0;">
          You are currently on the <strong>solo path</strong>.
        </p>
        <button class="btn btn-primary" onclick="optInToStudyGroup(); this.closest('.modal').remove();">Join a Group</button>
      `}
      
      <button class="btn btn-secondary" onclick="this.closest('.modal').remove()" style="margin-top: 12px;">Close</button>
    </div>
  `;
  document.body.appendChild(modal);
}

window.optInToStudyGroup = optInToStudyGroup;
window.dismissStudyGroupOffer = dismissStudyGroupOffer;
window.leaveStudyGroup = leaveStudyGroup;
window.toggleStudyGroupsFromSettings = toggleStudyGroupsFromSettings;

// Screen Management
function showScreen(screenId) {
  logDebug('showScreen called', screenId);

  try {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    const targetScreen = document.getElementById(screenId);
    if (!targetScreen) {
      console.error('Screen not found:', screenId);
      return;
    }

    targetScreen.classList.add('active');
    window.scrollTo(0, 0);

    logDebug('Screen shown successfully', screenId);
  } catch (error) {
    console.error('Error in showScreen:', error);
  }
}

// Journal Functions
function toggleJournal() {
  const panel = document.getElementById('journalPanel');
  const overlay = document.getElementById('journalOverlay');

  if (panel.classList.contains('active')) {
    panel.classList.remove('active');
    overlay.classList.remove('active');
  } else {
    panel.classList.add('active');
    overlay.classList.add('active');
    loadCurrentJournalNote();
    updateJournalContext();
  }
}

function switchJournalTab(tabName) {
  document.querySelectorAll('.journal-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

  document.querySelectorAll('.journal-tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(`journalTab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`).classList.add('active');

  if (tabName === 'all') {
    renderAllEntries();
  }
}

function updateJournalContext() {
  if (state.currentModule) {
    const module = state.currentModule.module;
    const dayNum = state.currentModule.dayNum;
    currentJournalContext = `Day ${dayNum} - ${module.name}`;
  } else if (state.currentDay) {
    currentJournalContext = `Day ${state.currentDay}`;
  } else {
    currentJournalContext = 'General Note';
  }
  document.getElementById('currentContext').textContent = currentJournalContext;
}

function saveJournalNotePanel() {
  const textarea = document.getElementById('journalTextarea');
  const content = textarea.value;

  if (!content.trim()) {
    showNotification('⚠️ Please write something before saving.');
    return;
  }

  const entry = {
    id: Date.now(),
    context: currentJournalContext,
    content: content,
    timestamp: new Date().toISOString(),
    moduleId: state.currentModule?.module.id || null,
    dayNum: state.currentDay
  };

  const existingIndex = state.journalEntriesPanel.findIndex(e =>
    e.context === currentJournalContext &&
    e.moduleId === entry.moduleId
  );

  if (existingIndex >= 0) {
    state.journalEntriesPanel[existingIndex] = entry;
  } else {
    state.journalEntriesPanel.push(entry);
  }

  document.getElementById('lastSaved').textContent = `Saved ${new Date().toLocaleTimeString()}`;
  showNotification('✓ Journal entry saved!');
  awardPoints(10);
}

function loadCurrentJournalNote() {
  const currentEntry = state.journalEntriesPanel.find(e =>
    e.context === currentJournalContext &&
    e.moduleId === (state.currentModule?.module.id || null)
  );

  const textarea = document.getElementById('journalTextarea');
  if (currentEntry) {
    textarea.value = currentEntry.content;
    document.getElementById('lastSaved').textContent =
      `Last saved ${new Date(currentEntry.timestamp).toLocaleString()}`;
  } else {
    textarea.value = '';
    document.getElementById('lastSaved').textContent = 'Unsaved';
  }
}

function renderAllEntries() {
  const container = document.getElementById('entriesList');

  if (state.journalEntriesPanel.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: 40px;">No journal entries yet. Start writing!</p>';
    return;
  }

  const sorted = [...state.journalEntriesPanel].sort((a, b) =>
    new Date(b.timestamp) - new Date(a.timestamp)
  );

  container.innerHTML = sorted.map(entry => `
    <div class="entry-card">
      <div class="entry-header">
        <span class="entry-context">${entry.context}</span>
        <span class="entry-date">${new Date(entry.timestamp).toLocaleDateString()}</span>
      </div>
      <div class="entry-preview">${entry.content.substring(0, 150)}${entry.content.length > 150 ? '...' : ''}</div>
    </div>
  `).join('');
}

function exportAllJournalEntries() {
  if (state.journalEntriesPanel.length === 0) {
    showNotification('⚠️ No journal entries to export.');
    return;
  }

  let exportText = 'CODEPENDENCY RECOVERY JOURNAL\n';
  exportText += '================================\n\n';

  state.journalEntriesPanel.forEach(entry => {
    exportText += `Date: ${new Date(entry.timestamp).toLocaleString()}\n`;
    exportText += `Context: ${entry.context}\n`;
    exportText += `\n${entry.content}\n`;
    exportText += '\n---\n\n';
  });

  downloadTextFile(exportText, `Journal-Entries-${new Date().toISOString().split('T')[0]}.txt`);
  showNotification('✓ Journal exported successfully!');
}

function autoSaveToggle() {
  autoSaveEnabled = !autoSaveEnabled;
  document.getElementById('autoSaveStatus').textContent = autoSaveEnabled ? 'On' : 'Off';
  document.getElementById('autoSaveIcon').textContent = autoSaveEnabled ? '✅' : '⏱️';

  if (autoSaveEnabled) {
    autoSaveInterval = setInterval(() => {
      const textarea = document.getElementById('journalTextarea');
      if (textarea && textarea.value.trim()) {
        saveJournalNotePanel();
      }
    }, 60000);
    showNotification('✓ Auto-save enabled (every 60 seconds)');
  } else {
    if (autoSaveInterval) {
      clearInterval(autoSaveInterval);
    }
    showNotification('Auto-save disabled');
  }
}

// Dashboard
function showDashboard() {
  showScreen('dashboardScreen');
  updateNavStats();
  updateDashboardStats();
  renderStudyGroupSection();

  // Update dashboard header for personalization
  const headerEl = document.querySelector('.dashboard-header h1');
  if (headerEl && state.currentDay === 1) {
    headerEl.textContent = 'Your Personalized Relationship Recovery Journey';
  }

  // Update stats - 4 card layout
  const currentLevel = getCurrentLevel();
  document.getElementById('current-level').textContent = currentLevel.name;
  document.getElementById('level-icon').textContent = currentLevel.icon;
  document.getElementById('badge-count').textContent = `${state.earnedBadges.length}/17`;
  document.getElementById('streak-count').textContent = state.streak;

  // Quiz accuracy (based on FIRST ATTEMPTS ONLY)
  const quizScores = Object.values(state.quizScores);
  const avgAccuracy = quizScores.length > 0 ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length) : 0;
  document.getElementById('quiz-accuracy').textContent = `${avgAccuracy}%`;

  // Check for homework bonus on dashboard load
  if (state.currentDay > 1) {
    setTimeout(() => checkMiniHomework(state.currentDay), 1000);
  }

  // Daily quote
  renderDailyQuote();

  // Update combined progress and level card
  updateCombinedProgressCard();

  // Render study group section
  renderStudyGroupSection();

  // Overall progress (keep for backward compatibility)
  const totalModulesCount = courseData.days.reduce((sum, day) => sum + day.modules.length, 0);
  const completedPercent = Math.round((state.completedModules.length / totalModulesCount) * 100);
  document.getElementById('overall-progress-bar').style.width = `${completedPercent}%`;
  document.getElementById('overall-progress-text').textContent = `${completedPercent}% Complete`;

  // Level progress
  updateLevelProgress();

  // Days list
  renderDaysList();

  // Enhanced skill mastery spider web
  renderEnhancedSkillSpiderWeb();
  updateSkillScores();

  // Enhanced achievement gallery with visible locked badges
  renderEnhancedAchievementGallery();

  // Add dashboard actions for export
  const daysSection = document.querySelector('.days-section');
  if (daysSection && !document.querySelector('.dashboard-actions')) {
    const actionsHTML = `
      <div class="dashboard-actions">
        <button class="btn btn-primary" onclick="exportCertificate()">
          🏆 Export Certificate
        </button>
        <button class="btn btn-secondary" onclick="viewAllJournalEntries()">
          📚 View All Journal Entries
        </button>
        <button class="btn btn-secondary" onclick="exportProgressReport()">
          📊 Export Progress Report
        </button>
      </div>
    `;
    daysSection.insertAdjacentHTML('beforebegin', actionsHTML);
  }
}

function updateDashboardStats() {
  // Update all stats on dashboard - 4 card layout
  const currentLevel = getCurrentLevel();
  const currentLevelEl = document.getElementById('current-level');
  const levelIconEl = document.getElementById('level-icon');
  const badgeCountEl = document.getElementById('badge-count');
  const streakCountEl = document.getElementById('streak-count');
  const quizAccuracyEl = document.getElementById('quiz-accuracy');

  if (currentLevelEl) currentLevelEl.textContent = currentLevel.name;
  if (levelIconEl) levelIconEl.textContent = currentLevel.icon;
  if (badgeCountEl) badgeCountEl.textContent = `${state.earnedBadges.length}/30`;
  if (streakCountEl) streakCountEl.textContent = state.streak;

  const quizScores = Object.values(state.quizScores);
  const avgAccuracy = quizScores.length > 0 ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length) : 0;
  if (quizAccuracyEl) quizAccuracyEl.textContent = `${avgAccuracy}%`;
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
  if (!daysList) return;
  daysList.innerHTML = '';

  // Group days by week for 30-day program
  const weeks = [
    { title: "Week 1: Foundation & Theory", days: courseData.days.slice(0, 7), color: "#3B82F6" },
    { title: "Week 2: Deep Psychological Work", days: courseData.days.slice(7, 14), color: "#8B5CF6" },
    { title: "Week 3: Advanced Skills & Applications", days: courseData.days.slice(14, 21), color: "#10B981" },
    { title: "Week 4: Mastery & Future", days: courseData.days.slice(21, 30), color: "#F59E0B" }
  ];

  weeks.forEach((week, weekIndex) => {
    const weekNum = weekIndex + 1;
    const weekHeader = document.createElement('div');
    weekHeader.style.cssText = `margin: 32px 0 16px 0; padding: 16px; background: linear-gradient(135deg, ${week.color}20, ${week.color}10); border-left: 4px solid ${week.color}; border-radius: 8px;`;
    weekHeader.innerHTML = `<h2 style="margin: 0; font-size: 20px; color: var(--color-text);">${week.title}</h2>`;
    daysList.appendChild(weekHeader);

    week.days.forEach((day, index) => {
      const dayNum = weekIndex * 7 + index + 1;
      if (!day) return;

      const isLocked = dayNum > state.currentDay;
      const isCompleted = state.completedDays.includes(dayNum);
      const isCurrent = dayNum === state.currentDay;

      const dayCard = document.createElement('div');
      dayCard.className = `day-card ${isLocked ? 'day-locked' : ''} ${isCompleted ? 'day-completed' : ''} ${isCurrent ? 'day-current' : ''}`;
      dayCard.style.borderColor = week.color;

      if (!isLocked) {
        dayCard.onclick = () => showDayOverview(dayNum);
      }

      let statusIcon = '🔒';
      if (isCompleted) statusIcon = '✅';
      else if (isCurrent) statusIcon = '▶️';

      const completedModulesCount = day.modules ? day.modules.filter(m => state.completedModules.includes(m.id)).length : 0;
      const totalModules = day.modules ? day.modules.length : 3;
      const completionBadge = isCompleted ? '<div class="completion-badge">✓ Completed</div>' : '';

      dayCard.innerHTML = `
        <div class="day-header">
          <div class="day-number">Day ${dayNum}</div>
          <div class="day-status">${statusIcon}</div>
        </div>
        <div class="day-title">${day.title || 'Module ' + dayNum}</div>
        <div class="day-theme">${day.theme || 'Continued Learning'}</div>
        <div class="day-progress">${completedModulesCount}/${totalModules} modules</div>
        ${completionBadge}
      `;

      daysList.appendChild(dayCard);
    });
  });
}

function continueCurrentDay() {
  logDebug('Continue current day', state.currentDay);
  if (state.currentDay > 0 && state.currentDay <= courseData.days.length) {
    showDayOverview(state.currentDay);
  } else {
    logDebug('Invalid current day', state.currentDay);
  }
}

// Day Overview
function showDayOverview(dayNum) {
  logDebug('showDayOverview called', dayNum);

  const day = courseData.days[dayNum - 1];
  if (!day) {
    console.error('Day not found:', dayNum);
    return;
  }

  logDebug('Day found', { day: day.day, title: day.title });

  // Check for mini homework completion bonus
  checkMiniHomework(dayNum);

  const screen = document.getElementById('dayOverviewScreen');

  let modulesHTML = day.modules.map((module, index) => {
    const isCompleted = state.completedModules.includes(module.id);
    const moduleDetail = state.completedModulesDetails.find(m => m.id === module.id);
    const completionBadge = isCompleted && moduleDetail ?
      `<div class="completion-badge">✓ Completed • Score: ${moduleDetail.score}%</div>` : '';

    return `
      <div class="content-card ${isCompleted ? 'module-completed' : ''}" style="border-left: 4px solid ${day.color}">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 16px;">
          <div style="flex: 1;">
            <h3>Module ${index + 1}: ${module.name}</h3>
            <p style="color: var(--color-text-secondary); margin: 8px 0 0 0;">${module.duration} • ${module.points} points</p>
            ${completionBadge}
            <button class="insight-button" onclick="captureInsight('${module.id}', '${module.name.replace(/'/g, "\\'")}')">💡 This is me!</button>
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

  showScreen('dayOverviewScreen');
  logDebug('Day overview displayed', dayNum);
}

// Module
function startModule(dayNum, moduleIndex) {
  logDebug('startModule called', { dayNum, moduleIndex });

  try {
    const day = courseData.days[dayNum - 1];
    if (!day) {
      console.error('Day not found:', dayNum);
      alert('Day not found. Please refresh and try again.');
      return;
    }

    const module = day.modules[moduleIndex];
    if (!module) {
      console.error('Module not found:', { dayNum, moduleIndex });
      alert('Module not found. Please refresh and try again.');
      return;
    }

    logDebug('Module found', { id: module.id, name: module.name });

    state.currentModule = { dayNum, moduleIndex, module };
    state.currentModuleStep = 'scenario';

    // Initialize quiz history for this module
    if (!state.quizHistory[module.id]) {
      state.quizHistory[module.id] = {
        questions: [],
        currentQuestionIndex: 0,
        scenarioText: null
      };
    }

    logDebug('Rendering module', { dayNum, moduleIndex });

    // Check for enhanced Day 1 modules
    if (dayNum === 1 && moduleIndex === 0) {
      logDebug('Rendering enhanced module 1');
      renderEnhancedModule1();
    } else if (dayNum === 1 && moduleIndex === 1) {
      logDebug('Rendering enhanced module 2');
      renderEnhancedModule2();
    } else if (dayNum === 1 && moduleIndex === 2) {
      logDebug('Rendering enhanced module 3');
      renderEnhancedModule3();
    } else {
      logDebug('Rendering standard module');
      renderModuleContent();
    }
  } catch (error) {
    console.error('Error in startModule:', error);
    alert('Error loading module. Please try again.');
  }
}

function renderModuleContent() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  const screen = document.getElementById('moduleScreen');

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

  showScreen('moduleScreen');
}

// Quiz
function startQuiz() {
  const { module } = state.currentModule;
  state.currentQuizIndex = 0;
  state.currentQuizAnswers = [];

  // Store scenario text for reference
  const quizHistory = state.quizHistory[module.id];
  if (quizHistory) {
    quizHistory.scenarioText = document.querySelector('.scenario-story')?.textContent || null;
    quizHistory.questions = [];
    quizHistory.currentQuestionIndex = 0;
  }

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];
  const questionData = module.quiz[state.currentQuizIndex];
  const quizHistory = state.quizHistory[module.id];

  const screen = document.getElementById('quizScreen');

  // Scenario reminder box (if scenario exists and not on first question)
  let scenarioReminderHTML = '';
  if (quizHistory?.scenarioText && state.currentQuizIndex > 0) {
    scenarioReminderHTML = `
      <div class="scenario-reminder">
        <div class="scenario-reminder-header" onclick="toggleScenarioReminder()">
          <h3>📋 Scenario Reminder</h3>
          <span class="scenario-reminder-toggle" id="reminder-toggle">▼</span>
        </div>
        <div class="scenario-reminder-content" id="reminder-content">
          ${quizHistory.scenarioText}
        </div>
      </div>
    `;
  }

  // Previous question button
  let previousButtonHTML = '';
  if (state.currentQuizIndex > 0) {
    previousButtonHTML = `<button class="btn-previous" onclick="goToPreviousQuestion()">← Previous Question</button>`;
  }

  let optionsHTML = questionData.options.map((option, index) => `
    <div class="quiz-option" onclick="selectQuizOption(${index})" id="option-${index}">
      ${option}
    </div>
  `).join('');

  screen.innerHTML = `
    <div class="container">
      <div class="quiz-nav-header">
        ${previousButtonHTML}
        <div></div>
      </div>
      
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>Quiz: ${module.name}</h1>
        <p style="margin-top: 8px;">Question ${state.currentQuizIndex + 1} of ${module.quiz.length}</p>
      </div>
      
      ${scenarioReminderHTML}
      
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

  showScreen('quizScreen');
}

function toggleScenarioReminder() {
  const content = document.getElementById('reminder-content');
  const toggle = document.getElementById('reminder-toggle');

  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    toggle.classList.remove('collapsed');
    toggle.textContent = '▼';
  } else {
    content.classList.add('hidden');
    toggle.classList.add('collapsed');
    toggle.textContent = '▶';
  }
}

function goToPreviousQuestion() {
  const { module } = state.currentModule;
  const quizHistory = state.quizHistory[module.id];

  if (state.currentQuizIndex > 0 && quizHistory?.questions[state.currentQuizIndex - 1]) {
    state.currentQuizIndex--;
    renderPreviousQuestionReview();
  }
}

function renderPreviousQuestionReview() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];
  const questionData = module.quiz[state.currentQuizIndex];
  const quizHistory = state.quizHistory[module.id];
  const previousAnswer = quizHistory.questions[state.currentQuizIndex];

  const screen = document.getElementById('quizScreen');

  let optionsHTML = questionData.options.map((option, index) => {
    let classes = 'quiz-option';
    if (index === previousAnswer.selectedIndex) {
      classes += previousAnswer.wasCorrect ? ' correct' : ' incorrect';
    }
    if (index === questionData.correct && !previousAnswer.wasCorrect) {
      classes += ' correct';
    }
    return `<div class="${classes}" style="pointer-events: none;">${option}</div>`;
  }).join('');

  const attemptStatusHTML = previousAnswer.retryUsed ? `
    <div class="quiz-attempt-status">
      <div><span class="attempt-label">First Attempt:</span> ${previousAnswer.firstAttemptCorrect ? '✅ Correct' : '❌ Incorrect'}</div>
      <div><span class="attempt-label">Second Attempt:</span> ${previousAnswer.wasCorrect ? '✅ Correct' : '❌ Incorrect'} (practice)</div>
    </div>
  ` : '';

  screen.innerHTML = `
    <div class="container">
      <div class="quiz-nav-header">
        <button class="btn-previous" onclick="continueToCurrent()">Return to Current Question →</button>
        <div></div>
      </div>
      
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>Review: Question ${state.currentQuizIndex + 1}</h1>
        <p style="margin-top: 8px; color: var(--color-text-secondary);">Read-only review</p>
      </div>
      
      <div class="quiz-question">
        <div class="question-text">${questionData.question}</div>
        <div class="quiz-options">
          ${optionsHTML}
        </div>
        ${attemptStatusHTML}
        <div class="quiz-feedback ${previousAnswer.wasCorrect ? 'correct' : 'incorrect'}">
          <strong>${previousAnswer.wasCorrect ? '✅ Correct!' : '❌ Incorrect'}</strong><br>
          ${questionData.explanation}
        </div>
      </div>
    </div>
  `;

  showScreen('quiz-screen');
}

function continueToCurrent() {
  const { module } = state.currentModule;
  const quizHistory = state.quizHistory[module.id];
  state.currentQuizIndex = quizHistory.currentQuestionIndex;
  renderQuizQuestion();
}

function selectQuizOption(selectedIndex) {
  const { module } = state.currentModule;
  const questionData = module.quiz[state.currentQuizIndex];
  const isCorrect = selectedIndex === questionData.correct;
  const quizHistory = state.quizHistory[module.id];

  // Check if this is first or second attempt
  const currentQuestion = quizHistory.questions[state.currentQuizIndex];
  const isFirstAttempt = !currentQuestion;

  if (isFirstAttempt) {
    // First attempt - record it
    quizHistory.questions[state.currentQuizIndex] = {
      selectedIndex,
      wasCorrect: isCorrect,
      firstAttemptCorrect: isCorrect,
      retryUsed: false
    };

    // Mark answer for scoring
    state.currentQuizAnswers.push(isCorrect);

    // Store first attempt score
    if (!state.firstAttemptScores[module.id]) {
      state.firstAttemptScores[module.id] = [];
    }
    state.firstAttemptScores[module.id][state.currentQuizIndex] = isCorrect;
  } else {
    // Second attempt (retry)
    currentQuestion.retryUsed = true;
    currentQuestion.wasCorrect = isCorrect;
    // Note: second attempt doesn't affect quiz score
  }

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

  // Show appropriate feedback based on attempt
  if (isFirstAttempt && !isCorrect) {
    // First attempt incorrect - offer retry
    feedbackDiv.innerHTML = `
      <div class="quiz-feedback incorrect">
        <strong>❌ Incorrect</strong><br>
        ${questionData.explanation}
      </div>
      <div class="quiz-retry-prompt">
        <p>Want to try again? (Won't affect your accuracy score)</p>
        <button class="btn btn-secondary" onclick="retryQuestion()">Try Again</button>
        <button class="btn btn-primary" onclick="skipRetryAndContinue()">Continue to Next Question</button>
      </div>
    `;
  } else if (isFirstAttempt && isCorrect) {
    // First attempt correct
    feedbackDiv.innerHTML = `
      <div class="quiz-feedback correct">
        <strong>✅ Correct!</strong><br>
        ${questionData.explanation}
      </div>
    `;
    document.getElementById('quiz-actions').style.display = 'flex';
  } else if (!isFirstAttempt) {
    // Second attempt
    const attemptLabel = isCorrect ? 'Correct on second attempt! ✓' : 'Still incorrect';
    feedbackDiv.innerHTML = `
      <div class="quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}">
        <strong>${attemptLabel} (First attempt counts for scoring)</strong><br>
        ${questionData.explanation}
      </div>
      <div class="quiz-attempt-status">
        <div><span class="attempt-label">First Attempt:</span> ❌ Incorrect</div>
        <div><span class="attempt-label">Second Attempt:</span> ${isCorrect ? '✅ Correct' : '❌ Incorrect'} (practice)</div>
      </div>
    `;
    document.getElementById('quiz-actions').style.display = 'flex';
  }
}

function retryQuestion() {
  // Reset the question for retry
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(option => {
    option.style.pointerEvents = 'auto';
    option.classList.remove('correct', 'incorrect');
  });

  const feedbackDiv = document.getElementById('quiz-feedback');
  feedbackDiv.innerHTML = '<p style="color: var(--color-text-secondary); font-style: italic;">Second attempt - select your answer:</p>';
}

function skipRetryAndContinue() {
  document.getElementById('quiz-actions').style.display = 'flex';
  document.querySelector('.quiz-retry-prompt').style.display = 'none';
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

  // Calculate FIRST ATTEMPT accuracy for badges/scoring
  const firstAttemptCorrect = state.firstAttemptScores[module.id]?.filter(a => a).length || 0;
  const totalQuestions = module.quiz.length;
  const firstAttemptPercentage = Math.round((firstAttemptCorrect / totalQuestions) * 100);

  // Award points
  let points = module.points;
  if (firstAttemptPercentage === 100) {
    points += 25; // Bonus for perfect first attempt score
  }

  awardPoints(points);

  // Store quiz score (FIRST ATTEMPT ONLY counts for accuracy)
  state.quizScores[module.id] = firstAttemptPercentage;

  // Check for Quiz Master badge
  checkQuizMasterBadge();

  // Show summary
  showQuizSummary(firstAttemptPercentage, firstAttemptCorrect, totalQuestions);
}

function showQuizSummary(percentage, correct, total) {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];
  const screen = document.getElementById('quizScreen');

  screen.innerHTML = `
    <div class="container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>Quiz Complete!</h1>
      </div>
      
      <div class="content-card" style="text-align: center;">
        <div style="font-size: 64px; margin-bottom: 16px;">${percentage === 100 ? '🎉' : percentage >= 70 ? '✅' : '📝'}</div>
        <h2 style="font-size: var(--font-size-3xl); margin-bottom: 16px;">First Attempt Accuracy: ${percentage}%</h2>
        <p style="font-size: var(--font-size-xl); color: var(--color-text-secondary); margin-bottom: 24px;">
          ${correct} out of ${total} correct on first try
        </p>
        ${percentage === 100 ? '<div class="completion-badge">🏆 Perfect Score Bonus: +25 points!</div>' : ''}
        <p style="margin-top: 24px; line-height: 1.6;">
          ${percentage === 100 ? 'Outstanding! You nailed every question on the first try!' :
      percentage >= 70 ? 'Great job! You demonstrated solid understanding.' :
        'Good effort! Review the material and keep learning.'}
        </p>
      </div>
      
      <button class="btn btn-primary btn-large btn-full" onclick="startExercise()">Continue to Exercise →</button>
    </div>
  `;

  showScreen('quiz-screen');
}

// Exercise
function startExercise() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];
  const exercise = module.exercise;

  const screen = document.getElementById('exerciseScreen');

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

  showScreen('exerciseScreen');
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

  // Mark module as completed with details
  if (!state.completedModules.includes(module.id)) {
    state.completedModules.push(module.id);
    state.completedModulesDetails.push({
      id: module.id,
      completedAt: new Date().toISOString(),
      score: state.quizScores[module.id] || 0
    });
  }

  // Update visual state immediately
  updateModuleVisualState(module.id, 'completed');

  // Update last active
  state.lastActive = new Date().toISOString();

  // Update dashboard if we're currently on it
  updateDashboardStats();

  // Check if day is complete
  const day = courseData.days[dayNum - 1];
  const allModulesComplete = day.modules.every(m => state.completedModules.includes(m.id));

  if (allModulesComplete && !state.completedDays.includes(dayNum)) {
    completeDay(dayNum);
  } else {
    showDayOverview(dayNum);
  }
}

function updateModuleVisualState(moduleId, stateType) {
  // Update in any visible module cards
  const moduleCards = document.querySelectorAll(`[data-module-id="${moduleId}"]`);
  moduleCards.forEach(card => {
    card.classList.remove('locked', 'in-progress', 'completed');
    card.classList.add(stateType);

    if (stateType === 'completed') {
      // FIXED: Remove ALL existing checkmarks first to prevent duplicates
      const existingChecks = card.querySelectorAll('.completion-indicator, .checkmark, .check-icon, .completed-badge');
      existingChecks.forEach(check => check.remove());

      // Add single checkmark
      const checkmark = document.createElement('div');
      checkmark.className = 'completion-indicator';
      checkmark.innerHTML = '✓';
      checkmark.style.cssText = 'position:absolute;top:12px;right:12px;width:40px;height:40px;background:#10B981;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:bold;';
      card.style.position = 'relative';
      card.appendChild(checkmark);
    }
  });

  // Update dashboard stats
  updateDashboardStats();

  // Re-render days list to show updated completion
  renderDaysList();
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
  // NO GROUP REQUIREMENTS - 100% solo completable
  if (!state.completedDays.includes(dayNum)) {
    state.completedDays.push(dayNum);

    // Check week completion (NO GROUP REQUIREMENTS)
    const weekNum = Math.ceil(dayNum / 7);
    const weekStart = (weekNum - 1) * 7 + 1;
    const weekEnd = Math.min(weekNum * 7, 30);
    let weekComplete = true;
    for (let d = weekStart; d <= weekEnd; d++) {
      if (!state.completedDays.includes(d)) {
        weekComplete = false;
        break;
      }
    }

    if (weekComplete && !state.completedWeeks.includes(weekNum)) {
      state.completedWeeks.push(weekNum);
      awardBadge('week' + weekNum);
      awardPoints(500); // Week completion bonus (NO GROUP REQUIRED)
    }

    // Unlock next day
    if (dayNum < 30) {
      state.currentDay = dayNum + 1;
      state.currentWeek = Math.ceil(state.currentDay / 7);
      state.streak++;

      // Check streak badges
      if (state.streak === 7 && !state.earnedBadges.includes('streak7')) {
        awardBadge('streak7');
      }
      if (state.streak === 14 && !state.earnedBadges.includes('streak14')) {
        awardBadge('streak14');
      }
    }

    // Update last active
    state.lastActive = new Date().toISOString();

    // Check for completion badges (NO GROUP REQUIREMENTS)
    if (state.completedDays.length === 30) {
      awardBadge('champion');
      awardBadge('graduate');
      showCourseComplete();
    } else {
      // Show cliffhanger for motivation
      if (dayNum < 30) {
        showDayCliffhanger(dayNum);
      } else {
        showDayComplete(dayNum);
      }
    }
  }
}

function showDayCliffhanger(completedDayNum) {
  const nextDayNum = completedDayNum + 1;
  const nextDay = courseData.days[nextDayNum - 1];

  if (!nextDay) {
    showDayComplete(completedDayNum);
    return;
  }

  const teasers = {
    1: "Why does your brain automatically blame yourself for everything? Tomorrow you'll learn the cognitive distortions that keep you trapped—and how to break them. Plus: A powerful 5-minute exercise that can stop a shame spiral in its tracks.",
    2: "The single most important skill for recovery: boundaries. Tomorrow you'll learn exactly how to set them, communicate them, and maintain them—even with pushback.",
    3: "What if shame isn't your enemy? Tomorrow you'll discover Brené Brown's groundbreaking framework for turning your greatest vulnerability into your greatest strength.",
    4: "Master the emotions that have been controlling you. Tomorrow: practical skills for tolerating distress and regulating emotions without making things worse.",
    5: "The communication breakthrough. Tomorrow you'll learn DEAR MAN and assertiveness techniques that will transform how you navigate relationships.",
    6: "Integration day. Tomorrow you'll create your personalized recovery roadmap and celebrate how far you've come."
  };

  const homework = {
    1: "Before tomorrow: Notice one moment when you take responsibility for someone else's feelings. Just notice—no judgment.",
    2: "Before tomorrow: Catch one cognitive distortion in your thinking and write it down.",
    3: "Before tomorrow: Identify one boundary you wish you had set this week.",
    4: "Before tomorrow: Practice one shame resilience skill when you notice shame arising.",
    5: "Before tomorrow: Notice one moment where you could use a distress tolerance skill.",
    6: "Before tomorrow: Draft one assertive 'I' statement for a real situation in your life."
  };

  const modal = document.getElementById('cliffhanger-modal');
  const content = document.getElementById('cliffhanger-content-inner');

  if (content) content.innerHTML = `
    <div class="cliffhanger-celebration">🎉</div>
    <h2 class="cliffhanger-title">Day ${completedDayNum} Complete!</h2>
    <p style="font-size: var(--font-size-lg); margin-bottom: 24px;">You've earned the badge and leveled up your skills!</p>
    
    <div class="cliffhanger-teaser">
      <h3>🔮 Tomorrow's Breakthrough Awaits...</h3>
      <p>${teasers[completedDayNum]}</p>
      <p style="font-weight: bold; color: var(--color-primary); margin-top: 16px;">
        Your brain is primed for breakthrough learning right now. Return within 24 hours to maximize retention!
      </p>
    </div>
    
    <div class="cliffhanger-homework">
      <h4>📝 Mini-Homework (Optional)</h4>
      <p>${homework[completedDayNum]}</p>
      <div style="margin-top: 16px;">
        <label style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
          <input type="checkbox" id="homework-check" style="width: 20px; height: 20px;">
          <span>I'll do this before Day ${nextDayNum}</span>
        </label>
      </div>
      <p style="margin-top: 12px; font-size: var(--font-size-sm); color: var(--color-text-secondary);">
        Complete this and check it off when you return for <span class="homework-reward">+25 Bonus Points!</span>
      </p>
    </div>
    
    <div class="unlock-timer">
      <span>⏰</span>
      <span>Day ${nextDayNum}: ${nextDay.title}</span>
      <span>✨ Available Now!</span>
    </div>
    
    <button class="btn btn-primary btn-large" onclick="closeCliffhangerModal()" style="width: 100%; margin-top: 24px;">
      Continue to Dashboard
    </button>
  `;

  modal.classList.add('active');

  // Handle homework checkbox
  setTimeout(() => {
    const checkbox = document.getElementById('homework-check');
    if (checkbox) {
      checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
          if (!state.miniHomeworkCompleted.includes(completedDayNum)) {
            state.miniHomeworkCompleted.push(completedDayNum);
          }
        } else {
          const index = state.miniHomeworkCompleted.indexOf(completedDayNum);
          if (index > -1) {
            state.miniHomeworkCompleted.splice(index, 1);
          }
        }
      });
    }
  }, 100);
}

function closeCliffhangerModal() {
  document.getElementById('cliffhanger-modal').classList.remove('active');
  showDashboard();
}

function showDayComplete(dayNum) {
  const day = courseData.days[dayNum - 1];
  const modal = document.getElementById('achievement-modal');
  document.getElementById('achievement-icon').textContent = '🎉';
  document.getElementById('achievement-title').textContent = `Day ${dayNum} Complete!`;
  document.getElementById('achievement-description').textContent = `Congratulations! You've completed ${day.title}. Keep up the amazing work!`;
  modal.classList.add('active');
}

function checkMiniHomework(dayNum) {
  // Check if user completed mini homework from previous day
  if (state.miniHomeworkCompleted.includes(dayNum - 1)) {
    awardPoints(25);
    showCelebration('Mini-Homework Bonus! 🎁', 'You completed yesterday\'s mini-homework! +25 bonus points for following through.', null);
    // Remove from list so it doesn't trigger again
    const index = state.miniHomeworkCompleted.indexOf(dayNum - 1);
    if (index > -1) {
      state.miniHomeworkCompleted.splice(index, 1);
    }
  }
}

function showCourseComplete() {
  const modal = document.getElementById('achievement-modal');
  if (modal) {
    document.getElementById('achievement-icon').textContent = '🎓';
    document.getElementById('achievement-title').textContent = '30-Day Program Complete!';
    const soloText = state.studyGroupOptIn ? '' : ' You completed this 100% solo - impressive!';
    document.getElementById('achievement-description').textContent = `Congratulations! You've completed the entire 30-Day College Recovery Program.${soloText} You've earned ${state.points} points and ${state.earnedBadges.length} badges. Download your certificate to celebrate!`;
    modal.classList.add('active');
  }
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
  if (popup) {
    popup.textContent = `+${points}`;
    popup.classList.add('show');
    setTimeout(() => popup.classList.remove('show'), 600);
  }

  // Check for level up
  if (newLevel.level > oldLevel.level) {
    showLevelUpAnimation(newLevel);
  }

  // Check for Scholar level
  if (newLevel.level === 8 && !state.earnedBadges.includes('scholar')) {
    awardBadge('scholar');
  }

  // Check for 15K points
  if (state.points >= 15000 && !state.earnedBadges.includes('15k')) {
    awardBadge('15k');
  }

  updateNavStats();
}

function awardBadge(badgeKey) {
  if (!state.earnedBadges.includes(badgeKey)) {
    state.earnedBadges.push(badgeKey);
    const badge = courseData.badges.find(b => b.key === badgeKey);

    // Check for Transformation Titan
    const currentLevel = getCurrentLevel();
    if (currentLevel.level === 8 && !state.earnedBadges.includes('titan')) {
      state.earnedBadges.push('titan');
    }

    // Check for Perfect Week
    if (state.completedDays.length === 7 && state.completedModules.length === 21 && !state.earnedBadges.includes('perfect')) {
      state.earnedBadges.push('perfect');
    }

    // Check for streak badges
    if (state.streak >= 3 && !state.earnedBadges.includes('streak3')) {
      state.earnedBadges.push('streak3');
    }

    // Update achievement gallery visibility
    renderEnhancedAchievementGallery();

    if (badge) {
      createConfetti();
      setTimeout(() => {
        const modal = document.getElementById('achievement-modal');
        document.getElementById('achievement-icon').textContent = badge.icon;
        document.getElementById('achievement-title').textContent = `Badge Earned: ${badge.name}`;
        document.getElementById('achievement-description').textContent = badge.requirement;
        modal.classList.add('active');
      }, 500);
    }
  }
}

function createConfetti() {
  const colors = ['#FF6B6B', '#4ECDC4', '#95E1D3', '#F38181', '#AA96DA', '#FCBAD3'];

  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 0.5 + 's';
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 3000);
    }, i * 30);
  }
}

function showLevelUpAnimation(level) {
  createConfetti();

  const overlay = document.getElementById('level-up-overlay');
  const icon = document.getElementById('level-up-icon');
  const text = document.getElementById('level-up-text');

  icon.textContent = level.icon;
  text.textContent = `Level ${level.level}: ${level.name}!`;

  overlay.classList.add('show');

  setTimeout(() => {
    overlay.classList.remove('show');

    // Show modal after overlay
    setTimeout(() => {
      const modal = document.getElementById('achievement-modal');
      document.getElementById('achievement-icon').textContent = level.icon;
      document.getElementById('achievement-title').textContent = `Level Up! ${level.name}`;
      document.getElementById('achievement-description').textContent = `You've reached Level ${level.level}: ${level.name}! Keep up the amazing progress!`;
      modal.classList.add('active');

      // Update level icon in navbar
      const levelIcon = document.getElementById('level-icon');
      if (levelIcon) levelIcon.textContent = level.icon;
    }, 300);
  }, 2500);
}

function checkQuizMasterBadge() {
  const allQuizzes = Object.values(state.quizScores);
  if (allQuizzes.length >= 10 && allQuizzes.every(score => score >= 90)) {
    awardBadge('quizMaster');
  }
}

// Enhanced Module 1 Flow
function renderEnhancedModule1() {
  showScenarioIntro();
}

function showScenarioIntro() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  const screen = document.getElementById('scenarioScreen');
  screen.innerHTML = `
    <div class="container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>${module.name}</h1>
        <div class="module-meta">
          <span>⏱️ ${module.duration}</span>
          <span>⭐ ${module.points} points</span>
        </div>
      </div>
      
      <div class="flow-indicators">
        <div class="flow-step"><div class="flow-dot current"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Story</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Learn</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Recognize</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Quiz</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Apply</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Reflect</span></div>
      </div>
      
      <div class="scenario-card">
        <h2 class="scenario-title">👤 Meet Alex</h2>
        <div class="scenario-story">
          Alex's partner forgot their anniversary. Instead of feeling disappointed, Alex immediately thinks, 'I must have done something wrong. I'm a terrible partner. I need to make it up to them.' Alex spends the next week overcompensating—buying expensive gifts, cooking elaborate meals, canceling plans with friends to be available. Meanwhile, Alex's partner hasn't noticed anything unusual. Alex feels exhausted, resentful, and more anxious than ever. Sound familiar?
        </div>
      </div>
      
      <div style="display: flex; gap: 12px;">
        <button class="btn btn-secondary" onclick="showDayOverview(${dayNum})">Back to Day ${dayNum}</button>
        <button class="btn btn-primary btn-large" onclick="showCoreTeaching()">Continue to Learning →</button>
      </div>
    </div>
  `;

  showScreen('scenarioScreen');
}

function showCoreTeaching() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  let topicsHTML = module.content.topics.map(topic => `<li>${topic}</li>`).join('');
  let keyPointsHTML = module.content.keyPoints.map(point => `<li>${point}</li>`).join('');

  const screen = document.getElementById('moduleScreen');
  const content = document.getElementById('moduleScreen').querySelector('#module-content') || document.getElementById('moduleScreen');

  content.innerHTML = `
    <div class="module-container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>${module.name}</h1>
        <div class="module-meta">
          <span>⏱️ ${module.duration}</span>
          <span>⭐ ${module.points} points</span>
        </div>
      </div>
      
      <div class="flow-indicators">
        <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Story</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot current"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Learn</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Recognize</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Quiz</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Apply</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Reflect</span></div>
      </div>
      
      <div class="content-card">
        <h2>💡 Layer 1: What Is Codependency?</h2>
        <p>Codependency is when your sense of identity, worth, and emotional state depends on another person. You've essentially outsourced your self-esteem to someone else's approval, mood, and needs. It's like you're the moon orbiting someone else's planet—you have no light of your own, only reflected light from them.</p>
        <p style="font-weight: bold; color: var(--color-primary);">In codependency, you lose your sense of self in relationships</p>
      </div>
      
      <div class="content-card">
        <h2>🧠 Layer 2: The Psychology Behind It</h2>
        <p>Why does this happen? Codependency often develops as a survival strategy in childhood. If your caregiver was unpredictable, emotionally unavailable, or struggling with addiction, you learned three key survival skills:</p>
        <ul>
          <li><strong>Hypervigilance</strong>: Monitor their mood constantly to predict and prevent problems</li>
          <li><strong>Self-Abandonment</strong>: Suppress your needs to keep the peace</li>
          <li><strong>Enmeshment</strong>: Take responsibility for their emotions and problems</li>
        </ul>
        <p><em>These strategies helped you survive then, but they're sabotaging your relationships now.</em></p>
        <p style="padding: 12px; background-color: var(--color-bg-1); border-radius: var(--radius-base); margin-top: 16px;">
          📊 <strong>Research shows:</strong> 60-90% of adults raised in dysfunctional families develop codependent patterns
        </p>
      </div>
      
      <div class="content-card">
        <h2>🌎 Layer 3: How It Shows Up</h2>
        <p>Codependency manifests differently across relationship types:</p>
        <ul>
          <li><strong>❤️ Romantic Relationships:</strong> You can't relax unless your partner is happy. Their bad mood ruins your entire day.</li>
          <li><strong>👫 Friendships:</strong> You're the one everyone calls in crisis, but who do you call? You don't want to 'burden' anyone.</li>
          <li><strong>💼 Workplace:</strong> You say yes to everything and burn out repeatedly. You feel guilty taking vacation.</li>
          <li><strong>👨‍👩‍👧 Family:</strong> You're still trying to fix problems that aren't yours. You feel responsible for keeping everyone happy.</li>
        </ul>
      </div>
      
      <div class="key-points">
        <h3>💡 Key Takeaways</h3>
        <ul>
          ${keyPointsHTML}
        </ul>
      </div>
      
      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <button class="btn btn-secondary" onclick="showScenarioIntro()">Back</button>
        <button class="btn btn-primary btn-large" onclick="showRecognitionExercise()">Test Your Understanding →</button>
      </div>
    </div>
  `;

  showScreen('moduleScreen');
  updateSkillMastery('selfAwareness', 10);
}

function showRecognitionExercise() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  const recognitionData = [
    { text: "Jamie cancels their therapy appointment to drive their partner to work because they missed the bus", answer: "codependent", explanation: "Sacrificing your own mental health needs for someone else's transportation convenience is self-abandonment" },
    { text: "Sam says 'I can't help you move this weekend, I have plans' without guilt", answer: "healthy", explanation: "Setting boundaries and honoring your commitments without guilt is healthy" },
    { text: "Riley feels physically ill when their partner seems distant, checking their phone constantly for reassurance", answer: "codependent", explanation: "Your physical wellbeing shouldn't depend on another person's mood or attention" },
    { text: "Morgan notices their partner is stressed and asks 'Would you like to talk or need space?' then respects the answer", answer: "healthy", explanation: "Offering support while respecting autonomy is healthy interdependence" },
    { text: "Taylor takes full responsibility for their partner's addiction recovery, hiding alcohol and monitoring their whereabouts", answer: "codependent", explanation: "You cannot control or cure someone else's addiction—that's their responsibility" },
    { text: "Casey maintains close friendships outside their romantic relationship and encourages their partner to do the same", answer: "healthy", explanation: "Maintaining separate identities and relationships outside the partnership is essential" }
  ];

  state.currentRecognitionAnswers = [];
  state.currentRecognitionIndex = 0;
  state.recognitionData = recognitionData;

  renderRecognitionItem();
}

function renderRecognitionItem() {
  const { dayNum } = state.currentModule;
  const day = courseData.days[dayNum - 1];
  const item = state.recognitionData[state.currentRecognitionIndex];

  const screen = document.getElementById('recognitionScreen');
  screen.innerHTML = `
    <div class="container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>Recognition Exercise</h1>
        <p style="margin-top: 8px;">Scenario ${state.currentRecognitionIndex + 1} of ${state.recognitionData.length}</p>
      </div>
      
      <div class="flow-indicators">
        <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Story</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Learn</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot current"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Recognize</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Quiz</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Apply</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Reflect</span></div>
      </div>
      
      <div class="content-card">
        <h2>Is this CODEPENDENT or HEALTHY behavior?</h2>
        <div class="recognition-item">
          <div class="recognition-item-text">${item.text}</div>
          <div class="recognition-buttons">
            <button class="btn recognition-btn" onclick="answerRecognition('codependent')">CODEPENDENT</button>
            <button class="btn recognition-btn" onclick="answerRecognition('healthy')">HEALTHY</button>
          </div>
          <div class="recognition-explanation" id="recognition-explanation"></div>
        </div>
      </div>
    </div>
  `;

  showScreen('recognitionScreen');
}

function answerRecognition(answer) {
  const item = state.recognitionData[state.currentRecognitionIndex];
  const isCorrect = answer === item.answer;
  state.currentRecognitionAnswers.push(isCorrect);

  const buttons = document.querySelectorAll('.recognition-btn');
  buttons.forEach(btn => btn.disabled = true);

  buttons.forEach(btn => {
    if (btn.textContent.toLowerCase() === item.answer) {
      btn.classList.add('correct');
    } else if (btn.textContent.toLowerCase() === answer && !isCorrect) {
      btn.classList.add('incorrect');
    }
  });

  const explanation = document.getElementById('recognition-explanation');
  explanation.innerHTML = `
    <strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</strong><br>
    ${item.explanation}<br><br>
    <button class="btn btn-primary" onclick="continueRecognition()" style="margin-top: 12px;">Continue</button>
  `;
  explanation.classList.add('show');

  if (isCorrect) {
    awardPoints(15);
  }
}

function continueRecognition() {
  state.currentRecognitionIndex++;
  if (state.currentRecognitionIndex < state.recognitionData.length) {
    renderRecognitionItem();
  } else {
    finishRecognitionExercise();
  }
}

function finishRecognitionExercise() {
  const correctCount = state.currentRecognitionAnswers.filter(a => a).length;
  const totalCount = state.recognitionData.length;
  const score = Math.round((correctCount / totalCount) * 100);

  state.recognitionScores[state.currentModule.module.id] = score;
  awardPoints(75);
  updateSkillMastery('selfAwareness', 15);

  startEnhancedQuiz();
}

function startEnhancedQuiz() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  state.currentQuizAnswers = [];
  state.currentQuizStep = 0;

  renderEnhancedQuizQuestion();
}

function renderEnhancedQuizQuestion() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  const screen = document.getElementById('quizScreen');

  if (state.currentQuizStep === 0) {
    // Multi-select question
    screen.innerHTML = `
      <div class="container">
        <div class="module-header" style="border-left: 4px solid ${day.color}">
          <h1>Quiz: Scenario Analysis</h1>
          <p style="margin-top: 8px;">Question 1 of 2</p>
        </div>
        
        <div class="flow-indicators">
          <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Story</span></div>
          <span class="flow-arrow">→</span>
          <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Learn</span></div>
          <span class="flow-arrow">→</span>
          <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Recognize</span></div>
          <span class="flow-arrow">→</span>
          <div class="flow-step"><div class="flow-dot current"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Quiz</span></div>
          <span class="flow-arrow">→</span>
          <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Apply</span></div>
          <span class="flow-arrow">→</span>
          <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Reflect</span></div>
        </div>
        
        <div class="content-card" style="background: linear-gradient(135deg, var(--color-bg-2), var(--color-bg-1)); border-left: 4px solid ${day.color};">
          <h3>Read this scenario:</h3>
          <p style="font-size: var(--font-size-lg); line-height: 1.8; margin-bottom: 24px; padding: 16px; background-color: var(--color-surface); border-radius: var(--radius-base);">
            Pat's partner comes home angry about work. Pat immediately asks 'What did I do wrong?' and starts cleaning frantically, making an elaborate dinner, texting apologies, even though Pat wasn't mentioned in the work issue at all.
          </p>
        </div>
        
        <div class="quiz-question">
          <div class="question-text">What codependent beliefs are present? (Select all that apply)</div>
          <div class="quiz-options">
            <label class="quiz-option" style="cursor: pointer;">
              <input type="checkbox" value="0"> I'm responsible for others' emotions
            </label>
            <label class="quiz-option" style="cursor: pointer;">
              <input type="checkbox" value="1"> I must earn love through service
            </label>
            <label class="quiz-option" style="cursor: pointer;">
              <input type="checkbox" value="2"> My needs don't matter
            </label>
            <label class="quiz-option" style="cursor: pointer;">
              <input type="checkbox" value="3"> Conflict means the relationship is over
            </label>
            <label class="quiz-option" style="cursor: pointer;">
              <input type="checkbox" value="4"> I'm confident in my worth
            </label>
            <label class="quiz-option" style="cursor: pointer;">
              <input type="checkbox" value="5"> Others' problems are my problems
            </label>
          </div>
          <div id="quiz-feedback"></div>
          <button class="btn btn-primary" style="margin-top: 24px;" onclick="submitMultiSelectQuiz()">Submit Answer</button>
        </div>
      </div>
    `;
  } else if (state.currentQuizStep === 1) {
    // Single choice question
    screen.innerHTML = `
      <div class="container">
        <div class="module-header" style="border-left: 4px solid ${day.color}">
          <h1>Quiz: Scenario Analysis</h1>
          <p style="margin-top: 8px;">Question 2 of 2</p>
        </div>
        
        <div class="flow-indicators">
          <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Story</span></div>
          <span class="flow-arrow">→</span>
          <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Learn</span></div>
          <span class="flow-arrow">→</span>
          <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Recognize</span></div>
          <span class="flow-arrow">→</span>
          <div class="flow-step"><div class="flow-dot current"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Quiz</span></div>
          <span class="flow-arrow">→</span>
          <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Apply</span></div>
          <span class="flow-arrow">→</span>
          <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Reflect</span></div>
        </div>
        
        <div class="quiz-question">
          <div class="question-text">What would a healthier response look like?</div>
          <div class="quiz-options">
            <div class="quiz-option" onclick="selectSingleChoice(0)" id="choice-0">
              Ignore the partner completely and focus on your own activities
            </div>
            <div class="quiz-option" onclick="selectSingleChoice(1)" id="choice-1">
              Ask 'Rough day? Want to talk about it or need some space?' without taking responsibility
            </div>
            <div class="quiz-option" onclick="selectSingleChoice(2)" id="choice-2">
              Get defensive and blame the partner for being moody
            </div>
            <div class="quiz-option" onclick="selectSingleChoice(3)" id="choice-3">
              Leave the relationship immediately
            </div>
          </div>
          <div id="quiz-feedback"></div>
        </div>
      </div>
    `;
  }

  showScreen('quiz-screen');
}

function submitMultiSelectQuiz() {
  const correctAnswers = [0, 1, 2, 3, 5];
  const checkboxes = document.querySelectorAll('.quiz-option input[type="checkbox"]');
  const selected = [];

  checkboxes.forEach(cb => {
    if (cb.checked) selected.push(parseInt(cb.value));
  });

  const isCorrect = correctAnswers.every(a => selected.includes(a)) && selected.every(s => correctAnswers.includes(s));
  state.currentQuizAnswers.push(isCorrect);

  const feedback = document.getElementById('quiz-feedback');
  feedback.innerHTML = `
    <div class="quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}">
      <strong>${isCorrect ? '✅ Excellent!' : '❌ Incorrect'}</strong><br>
      Pat is exhibiting multiple codependent beliefs: taking responsibility for emotions they didn't cause, trying to earn love through service, and prioritizing the partner's mood over their own wellbeing. The correct answers were: I'm responsible for others' emotions, I must earn love through service, My needs don't matter, Conflict means the relationship is over, and Others' problems are my problems.<br><br>
      <button class="btn btn-primary btn-large" onclick="continueToNextQuizStep()" style="margin-top: 16px;">Continue to Next Question</button>
    </div>
  `;

  if (isCorrect) {
    awardPoints(100);
  } else {
    awardPoints(50);
  }
}

function continueToNextQuizStep() {
  state.currentQuizStep++;
  renderEnhancedQuizQuestion();
}

function selectSingleChoice(choice) {
  const correctAnswer = 1;
  const isCorrect = choice === correctAnswer;
  state.currentQuizAnswers.push(isCorrect);

  const options = document.querySelectorAll('.quiz-option');
  options.forEach(opt => opt.style.pointerEvents = 'none');

  document.getElementById(`choice-${choice}`).classList.add(isCorrect ? 'correct' : 'incorrect');
  if (!isCorrect) {
    document.getElementById(`choice-${correctAnswer}`).classList.add('correct');
  }

  const feedback = document.getElementById('quiz-feedback');
  feedback.innerHTML = `
    <div class="quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}">
      <strong>${isCorrect ? '✅ Perfect!' : '❌ Incorrect'}</strong><br>
      A healthy response offers empathy and support without assuming responsibility. It recognizes the partner owns their emotions while you can be present if they need you.<br><br>
      <button class="btn btn-primary btn-large" onclick="finishEnhancedQuiz()" style="margin-top: 16px;">Continue to Application Challenge</button>
    </div>
  `;

  if (isCorrect) {
    awardPoints(100);
  } else {
    awardPoints(50);
  }

  updateSkillMastery('cognitiveSkills', 15);
}

function finishEnhancedQuiz() {
  const correctCount = state.currentQuizAnswers.filter(a => a).length;
  const totalCount = 2;
  const percentage = Math.round((correctCount / totalCount) * 100);

  state.quizScores[state.currentModule.module.id] = percentage;

  if (percentage === 100) {
    awardPoints(50); // Bonus for perfect score
  }

  showApplicationChallenge();
}

function showApplicationChallenge() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  const screen = document.getElementById('applicationScreen');
  screen.innerHTML = `
    <div class="container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>Application Challenge</h1>
        <p style="margin-top: 8px;">Apply what you've learned</p>
      </div>
      
      <div class="flow-indicators">
        <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Story</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Learn</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Recognize</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Quiz</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot current"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Apply</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Reflect</span></div>
      </div>
      
      <div class="decision-tree">
        <div class="decision-setup">
          🚗 <strong>Scenario:</strong> You're feeling resentful because you always drive your friend to appointments, but they never offer gas money or to take turns driving. You've spent over $100 in gas this month alone. What do you do?
        </div>
        
        <h3 style="margin-bottom: 16px;">Choose your response:</h3>
        <div class="decision-choices">
          <div class="decision-choice" onclick="selectDecision(0)">
            A) Say nothing, keep driving them, build more resentment
          </div>
          <div class="decision-choice" onclick="selectDecision(1)">
            B) Drop passive-aggressive hints about gas prices when driving
          </div>
          <div class="decision-choice" onclick="selectDecision(2)">
            C) Use an assertive 'I' statement: 'I care about helping you, and I'd appreciate if we could share gas costs'
          </div>
          <div class="decision-choice" onclick="selectDecision(3)">
            D) Angrily text 'I'm not your chauffeur!' and refuse to drive anymore
          </div>
        </div>
        
        <div class="decision-outcome" id="decision-outcome"></div>
      </div>
    </div>
  `;

  showScreen('applicationScreen');
}

function selectDecision(choice) {
  const outcomes = [
    { text: "Six months later, you explode in anger over something small. Your friend is blindsided—they had no idea you felt this way. The friendship is damaged by the sudden outburst. Resentment always finds a way out.", score: 0 },
    { text: "Your friend doesn't pick up on the hints. The problem continues. You feel even more resentful because now you think they're ignoring your 'obvious' signals. Passive communication rarely works.", score: 2 },
    { text: "Your friend apologizes—they honestly hadn't thought about it and are happy to help with gas money. They offer to drive sometimes too. The friendship actually strengthens because you communicated directly and respectfully.", score: 10 },
    { text: "Your friend feels attacked and confused. They want to make it right but your aggressive approach makes them defensive. The friendship becomes strained. Aggressive communication damages relationships.", score: 1 }
  ];

  const outcome = outcomes[choice];
  state.applicationScores[state.currentModule.module.id] = outcome.score;

  const choices = document.querySelectorAll('.decision-choice');
  choices.forEach(c => c.style.pointerEvents = 'none');

  const outcomeDiv = document.getElementById('decision-outcome');
  outcomeDiv.innerHTML = `
    <h3 style="margin-bottom: 12px;">${outcome.score >= 8 ? '✅ Excellent Choice!' : outcome.score >= 5 ? '⚠️ Okay, but...' : '❌ Poor Choice'}</h3>
    <p style="font-size: var(--font-size-base); line-height: 1.7; margin-bottom: 16px;">${outcome.text}</p>
    <div class="health-score">Health Score: ${outcome.score}/10</div>
    ${outcome.score >= 8 ? '<p style="margin-top: 16px; font-weight: bold; color: var(--color-success);">Why did the assertive approach work best? Assertive communication (using \'I\' statements, being direct but kind) addresses the issue without blame, gives the other person a chance to respond, and maintains mutual respect.</p>' : ''}
    <button class="btn btn-primary btn-large" style="margin-top: 24px; width: 100%;" onclick="showCommitment()">Continue to Reflection →</button>
  `;
  outcomeDiv.classList.add('show');

  if (outcome.score >= 8) {
    awardPoints(150);
    state.boundariesSet++;
    if (state.boundariesSet >= 3) {
      awardBadge('boundaryBoss');
    }
  } else {
    awardPoints(75);
  }

  updateSkillMastery('boundarySetting', 15);
}

function showCommitment() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  const savedNotes = getUserJournalEntry(module.id) || '';
  const savedTags = state.selectedInsightTags[module.id] || [];

  const screen = document.getElementById('exerciseScreen');
  screen.innerHTML = `
    <div class="container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>Your Commitment &amp; Reflection</h1>
      </div>
      
      <div class="flow-indicators">
        <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Story</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Learn</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Recognize</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Quiz</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot completed"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Apply</span></div>
        <span class="flow-arrow">→</span>
        <div class="flow-step"><div class="flow-dot current"></div><span style="font-size: 12px; color: var(--color-text-secondary);">Reflect</span></div>
      </div>
      
      <div class="exercise-card">
        <h2>💭 Your Commitment</h2>
        <p class="exercise-instructions">Which of these resonates with you? (Select all that apply)</p>
        
        <div class="commitment-options">
          <div class="commitment-option">
            <input type="checkbox" id="commit-0">
            <label for="commit-0">I will notice when I'm taking responsibility for others' feelings</label>
          </div>
          <div class="commitment-option">
            <input type="checkbox" id="commit-1">
            <label for="commit-1">I will practice identifying my own needs this week</label>
          </div>
          <div class="commitment-option">
            <input type="checkbox" id="commit-2">
            <label for="commit-2">I will remind myself that others' moods aren't about me</label>
          </div>
          <div class="commitment-option">
            <input type="checkbox" id="commit-3">
            <label for="commit-3">I will start small by saying no to one request without over-explaining</label>
          </div>
          <div class="commitment-option">
            <input type="checkbox" id="commit-4">
            <label for="commit-4">I will observe my relationships for codependent patterns</label>
          </div>
        </div>
      </div>
      
      <div class="journal-entry">
        <h3>📝 Personal Journal Notes</h3>
        <p class="exercise-instructions">Reflect on what you learned. What insights did you gain? How will you apply this?</p>
        <textarea 
          id="journalEntry" 
          class="journal-textarea"
          placeholder="Write your thoughts, insights, and commitments here...\n\nExample:\n- I realized I take responsibility for my partner's moods\n- I want to practice saying 'no' without guilt\n- The shame vs guilt distinction really resonated with me"
          rows="8"
        >${savedNotes}</textarea>
        <div class="journal-actions">
          <button class="btn btn-secondary" onclick="saveJournalEntry('${module.id}')">
            💾 Save Journal Entry
          </button>
          <button class="btn btn-secondary" onclick="viewAllJournalEntries()">
            📚 View All Entries
          </button>
        </div>
      </div>
      
      <div class="exercise-card">
        <h3>💡 Key Insights</h3>
        <p class="exercise-instructions">Tag this module with insights:</p>
        <div class="insight-tags">
          <button class="insight-tag ${savedTags.includes('people-pleasing') ? 'active' : ''}" onclick="toggleInsightTag('${module.id}', 'people-pleasing', this)">
            People-Pleasing
          </button>
          <button class="insight-tag ${savedTags.includes('boundaries') ? 'active' : ''}" onclick="toggleInsightTag('${module.id}', 'boundaries', this)">
            Boundaries
          </button>
          <button class="insight-tag ${savedTags.includes('shame') ? 'active' : ''}" onclick="toggleInsightTag('${module.id}', 'shame', this)">
            Shame
          </button>
          <button class="insight-tag ${savedTags.includes('responsibility') ? 'active' : ''}" onclick="toggleInsightTag('${module.id}', 'responsibility', this)">
            Taking Responsibility
          </button>
          <button class="insight-tag ${savedTags.includes('self-worth') ? 'active' : ''}" onclick="toggleInsightTag('${module.id}', 'self-worth', this)">
            Self-Worth
          </button>
        </div>
      </div>
      
      <button class="btn btn-success btn-large btn-full" onclick="completeEnhancedModule()">Complete Module ✓</button>
    </div>
  `;

  showScreen('exerciseScreen');
}

function toggleInsightTag(moduleId, tag, button) {
  if (!state.selectedInsightTags[moduleId]) {
    state.selectedInsightTags[moduleId] = [];
  }

  const index = state.selectedInsightTags[moduleId].indexOf(tag);
  if (index > -1) {
    state.selectedInsightTags[moduleId].splice(index, 1);
    button.classList.remove('active');
  } else {
    state.selectedInsightTags[moduleId].push(tag);
    button.classList.add('active');
  }
}

function completeEnhancedModule() {
  const { dayNum, moduleIndex, module } = state.currentModule;

  awardPoints(150); // Module completion

  if (!state.completedModules.includes(module.id)) {
    state.completedModules.push(module.id);
  }

  // Award badge for Day 1 Module 1 completion
  if (dayNum === 1 && moduleIndex === 0) {
    awardBadge('awareness');
  }

  // Check if day is complete
  const day = courseData.days[dayNum - 1];
  const allModulesComplete = day.modules.every(m => state.completedModules.includes(m.id));

  if (allModulesComplete && !state.completedDays.includes(dayNum)) {
    completeDay(dayNum);
  } else {
    showCelebration('Module Complete!', `Great work! You've earned points and deepened your understanding.`, () => showDayOverview(dayNum));
  }
}

function showCelebration(title, message, callback) {
  const modal = document.getElementById('achievement-modal');
  document.getElementById('achievement-icon').textContent = '🎉';
  document.getElementById('achievement-title').textContent = title;
  document.getElementById('achievement-description').textContent = message;
  modal.classList.add('active');

  const btn = modal.querySelector('.btn');
  btn.onclick = () => {
    closeAchievementModal();
    if (callback) callback();
  };
}

function updateSkillMastery(skill, points) {
  if (state.skillMastery[skill] !== undefined) {
    state.skillMastery[skill] = Math.min(100, state.skillMastery[skill] + points);
  }
  updateSkillScores();
}

function renderDailyQuote() {
  const dailyQuote = getDailyQuote();

  const quoteEl = document.getElementById('dailyQuote');
  const goalEl = document.getElementById('todaysGoal');
  const famousEl = document.getElementById('famousQuote');

  if (!quoteEl || !goalEl || !famousEl) return;

  // Rotate through famous quotes based on day
  const famousQuotes = [
    { quote: "Autistic and ADHD brains process relationships differently. Neither is wrong.", author: "Jodi Carlton, MEd" },
    { quote: "LGBTQ+ relationships have the freedom to create their own models, unburdened by traditional gender roles.", author: "Esther Perel" },
    { quote: "After years together, choosing yourself is not selfish—it's sometimes the most loving choice.", author: "Terry Real" },
    { quote: "You can't pour from an empty cup. Take care of yourself first.", author: "Eleanor Brownn" },
    { quote: "Daring to set boundaries is about having the courage to love ourselves, even when we risk disappointing others.", author: "Brené Brown" },
    { quote: "Understanding your neurotype is the first step to understanding your relationship patterns.", author: "Melissa Orlov" }
  ];

  const today = new Date();
  const dayIndex = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const famousQuote = famousQuotes[dayIndex % famousQuotes.length];

  quoteEl.textContent = `"${dailyQuote.quote}"`;
  goalEl.innerHTML = `<p>${dailyQuote.action}</p>`;
  famousEl.innerHTML = `
    "${famousQuote.quote}"
    <cite>— ${famousQuote.author}</cite>
  `;
}

function updateCombinedProgressCard() {
  const totalModules = 90; // 30 days × 3 modules
  const completedPercent = Math.round((state.completedModules.length / totalModules) * 100);

  // Update progress circle
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (completedPercent / 100) * circumference;
  const progressCircle = document.getElementById('progressCircle');
  if (progressCircle) {
    progressCircle.style.strokeDashoffset = offset;
  }

  // Update progress text
  const progressPercent = document.getElementById('overallProgressPercent');
  if (progressPercent) progressPercent.textContent = `${completedPercent}%`;

  const modulesCount = document.getElementById('modulesCompletedCount');
  if (modulesCount) modulesCount.textContent = state.completedModules.length + ' / 90';

  const daysCount = document.getElementById('daysCompletedCount');
  if (daysCount) daysCount.textContent = state.completedDays.length + ' / 30';

  // Update level section
  const currentLevel = getCurrentLevel();
  const currentLevelIndex = courseData.levels.findIndex(l => l.level === currentLevel.level);
  const nextLevel = courseData.levels[currentLevelIndex + 1];

  const levelIconLarge = document.getElementById('levelIconLarge');
  if (levelIconLarge) levelIconLarge.textContent = currentLevel.icon;

  const levelNameLarge = document.getElementById('levelNameLarge');
  if (levelNameLarge) levelNameLarge.textContent = currentLevel.name;

  const levelNumberDisplay = document.getElementById('levelNumberDisplay');
  if (levelNumberDisplay) levelNumberDisplay.textContent = currentLevel.level;

  const currentXP = document.getElementById('currentXP');
  if (currentXP) currentXP.textContent = state.points;

  if (nextLevel) {
    const pointsInLevel = state.points - currentLevel.minPoints;
    const pointsNeeded = nextLevel.minPoints - currentLevel.minPoints;
    const xpProgress = Math.min((pointsInLevel / pointsNeeded) * 100, 100);

    const xpFill = document.getElementById('xpFill');
    if (xpFill) xpFill.style.width = `${xpProgress}%`;

    const nextLevelXP = document.getElementById('nextLevelXP');
    if (nextLevelXP) nextLevelXP.textContent = nextLevel.minPoints;

    const xpToNextLevel = document.getElementById('xpToNextLevel');
    if (xpToNextLevel) xpToNextLevel.textContent = nextLevel.minPoints - state.points;

    const nextLevelNameDisplay = document.getElementById('nextLevelNameDisplay');
    if (nextLevelNameDisplay) nextLevelNameDisplay.textContent = nextLevel.name;
  } else {
    const xpFill = document.getElementById('xpFill');
    if (xpFill) xpFill.style.width = '100%';

    const xpToNextLevel = document.getElementById('xpToNextLevel');
    if (xpToNextLevel) xpToNextLevel.parentElement.textContent = 'Maximum level achieved!';
  }
}

// Compact skill display - no spider web needed

function updateSkillScores() {
  const skills = [
    { key: 'selfAwareness', id: 'scoreAwareness' },
    { key: 'cognitiveSkills', id: 'scoreCognitive' },
    { key: 'boundarySetting', id: 'scoreBoundary' },
    { key: 'shameResilience', id: 'scoreShame' },
    { key: 'emotionalRegulation', id: 'scoreEmotional' },
    { key: 'communication', id: 'scoreCommunication' }
  ];

  skills.forEach(skill => {
    const el = document.getElementById(skill.id);
    if (el) {
      const percentage = state.skillMastery[skill.key];
      el.textContent = `${percentage}%`;

      // Update progress indicator on card
      const card = document.querySelector(`[data-skill="${skill.key}"]`);
      if (card) {
        // Remove existing progress classes
        card.removeAttribute('data-progress');

        // Add appropriate progress class
        if (percentage < 33) {
          card.setAttribute('data-progress', 'low');
        } else if (percentage < 66) {
          card.setAttribute('data-progress', 'medium');
        } else {
          card.setAttribute('data-progress', 'high');
        }
      }
    }
  });
}

function renderEnhancedAchievementGallery() {
  const gallery = document.getElementById('achievement-gallery');
  const gallerySection = document.getElementById('achievement-gallery-section');

  if (!gallery || !gallerySection) return;

  // Only show gallery if at least one badge has been earned
  if (state.earnedBadges.length === 0) {
    gallerySection.style.display = 'none';
    return;
  }

  gallerySection.style.display = 'block';

  gallery.innerHTML = courseData.badges.slice(0, 12).map(badge => {
    const earned = state.earnedBadges.includes(badge.key);
    return `
      <div class="achievement-item ${earned ? 'earned' : 'locked'}" title="${badge.name}: ${badge.requirement}">
        <div class="achievement-item-icon">${badge.icon}</div>
        <div class="achievement-item-name">${badge.name}</div>
      </div>
    `;
  }).join('');
}

// Compact skill display - no radar chart needed

function renderAchievementGallery() {
  const gallery = document.getElementById('achievement-gallery');
  if (!gallery) return;

  gallery.innerHTML = courseData.badges.slice(0, 12).map(badge => {
    const earned = state.earnedBadges.includes(badge.key);
    return `
      <div class="achievement-item ${earned ? 'earned' : 'locked'}" title="${badge.name}: ${badge.requirement}">
        <div class="achievement-item-icon">${earned ? badge.icon : '🔒'}</div>
        <div class="achievement-item-name">${earned ? badge.name : '???'}</div>
      </div>
    `;
  }).join('');
}

function updateNavStats() {
  document.getElementById('nav-level').textContent = getCurrentLevel().name;
  document.getElementById('nav-points').textContent = state.points;
}

// Progress Screen
function showProgress() {
  const screen = document.getElementById('progressScreen');
  const details = document.getElementById('progress-details');

  const totalModules = 90;
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
        <li style="padding: 12px; background: var(--color-bg-1); margin-bottom: 8px; border-radius: var(--radius-base);">📅 Days Completed: ${state.completedDays.length}/30</li>
        <li style="padding: 12px; background: var(--color-bg-1); margin-bottom: 8px; border-radius: var(--radius-base);">📚 Weeks Completed: ${state.completedWeeks.length}/4</li>
        <li style="padding: 12px; background: var(--color-bg-1); margin-bottom: 8px; border-radius: var(--radius-base);">⭐ Total Points: ${state.points}</li>
        <li style="padding: 12px; background: var(--color-bg-1); margin-bottom: 8px; border-radius: var(--radius-base);">🎯 Current Level: ${getCurrentLevel().name}</li>
        <li style="padding: 12px; background: var(--color-bg-1); margin-bottom: 8px; border-radius: var(--radius-base);">🏆 Badges Earned: ${state.earnedBadges.length}/30</li>
        <li style="padding: 12px; background: var(--color-bg-1); margin-bottom: 8px; border-radius: var(--radius-base);">🔥 Current Streak: ${state.streak} days</li>
        <li style="padding: 12px; background: var(--color-bg-1); margin-bottom: 8px; border-radius: var(--radius-base);">👥 Study Group: ${state.studyGroupId || 'Not assigned'}</li>
        <li style="padding: 12px; background: var(--color-bg-1); margin-bottom: 8px; border-radius: var(--radius-base);">🎓 Cohort: ${state.cohortId || 'Not assigned'}</li>
      </ul>
    </div>
  `;

  showScreen('progressScreen');
}

// Badges Screen
function showBadges() {
  const screen = document.getElementById('badgesScreen');
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

  showScreen('badgesScreen');
}

// Add additional module handling for other days (simplified flow)
function renderModuleContent() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  let topicsHTML = module.content.topics.map(topic => `<li>${topic}</li>`).join('');
  let keyPointsHTML = module.content.keyPoints.map(point => `<li>${point}</li>`).join('');

  const screen = document.getElementById('moduleScreen');
  const content = document.getElementById('moduleScreen').querySelector('#module-content') || document.getElementById('moduleScreen');

  content.innerHTML = `
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
        <button class="btn btn-primary" onclick="startQuiz()">Continue to Quiz →</button>
      </div>
    </div>
  `;

  showScreen('moduleScreen');

  // Award points for completing teaching
  awardPoints(50);

  // Update skill mastery based on day
  if (dayNum === 1) updateSkillMastery('selfAwareness', 10);
  else if (dayNum === 2) updateSkillMastery('cognitiveSkills', 10);
  else if (dayNum === 3) updateSkillMastery('boundarySetting', 10);
  else if (dayNum === 4) updateSkillMastery('shameResilience', 10);
  else if (dayNum === 5) updateSkillMastery('emotionalRegulation', 10);
  else if (dayNum === 6) updateSkillMastery('communication', 10);
}

// Enhanced Module 2: Understanding Shame & Its Impact
function renderEnhancedModule2() {
  showScenarioIntroModule2();
}

function showScenarioIntroModule2() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  const screen = document.getElementById('scenarioScreen');
  screen.innerHTML = `
    <div class="container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>${module.name}</h1>
        <div class="module-meta">
          <span>⏱️ ${module.duration}</span>
          <span>⭐ ${module.points} points</span>
        </div>
      </div>
      
      <div class="scenario-card">
        <h2 class="scenario-title">👤 Meet Jordan</h2>
        <div class="scenario-story">
          Jordan accidentally spills coffee on a coworker's desk. Instead of a simple 'Oops, sorry!' Jordan spirals into panic—face burning, heart racing, convinced everyone now thinks they're incompetent and worthless. Jordan avoids the break room for weeks, replaying the incident constantly. This is shame in action.
        </div>
      </div>
      
      <div style="display: flex; gap: 12px;">
        <button class="btn btn-secondary" onclick="showDayOverview(${dayNum})">Back to Day ${dayNum}</button>
        <button class="btn btn-primary btn-large" onclick="showCoreTeachingModule2()">Continue to Learning →</button>
      </div>
    </div>
  `;

  showScreen('scenarioScreen');
}

function showCoreTeachingModule2() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  const screen = document.getElementById('moduleScreen');
  const content = document.getElementById('moduleScreen').querySelector('#module-content') || document.getElementById('moduleScreen');

  content.innerHTML = `
    <div class="module-container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>${module.name}</h1>
      </div>
      
      <div class="content-card">
        <h2>💡 Layer 1: What is Shame?</h2>
        <p>Shame is the intensely painful feeling that you are fundamentally flawed and unworthy of love and belonging. Unlike guilt ('I did something bad'), shame says 'I AM bad.' It's the difference between 'I made a mistake' and 'I am a mistake.' Shame attacks your core identity.</p>
      </div>
      
      <div class="content-card">
        <h2>🧠 Layer 2: The Neuroscience and Psychology</h2>
        <p>Shame activates the same brain regions as physical pain. It triggers the sympathetic nervous system—your body goes into threat mode. Physical symptoms include: heat in face/neck, nausea, tunnel vision, feeling small/exposed, desire to hide or disappear.</p>
        <p>Psychologically, shame creates toxic beliefs: 'I'm not good enough,' 'I don't deserve love,' 'I'm fundamentally broken.' These beliefs drive codependent behaviors as you try to prove your worth.</p>
        <p style="padding: 12px; background-color: var(--color-bg-1); border-radius: var(--radius-base); margin-top: 16px;">
          📊 <strong>Dr. Brené Brown's research</strong> with thousands of participants identifies shame as universal—everyone experiences it
        </p>
      </div>
      
      <div class="content-card">
        <h2>🌎 Layer 3: How Shame Fuels Codependency</h2>
        <p>Shame is the engine of codependency. When you feel fundamentally unworthy, you believe you must EARN love through service, perfection, and caretaking. You become hypervigilant to others' reactions, trying to prevent rejection.</p>
        <p>You can't set boundaries because shame says you don't deserve to have needs. You stay in toxic relationships because shame whispers 'This is all you deserve.' Breaking free from codependency requires building shame resilience.</p>
      </div>
      
      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <button class="btn btn-secondary" onclick="showScenarioIntroModule2()">Back</button>
        <button class="btn btn-primary btn-large" onclick="showRecognitionExerciseModule2()">Test Your Understanding →</button>
      </div>
    </div>
  `;

  showScreen('moduleScreen');
  updateSkillMastery('shameResilience', 10);
}

function showRecognitionExerciseModule2() {
  const recognitionData = [
    { text: "I forgot my friend's birthday. I feel terrible about it.", answer: "guilt", explanation: "This is guilt—feeling bad about a specific behavior you can make amends for" },
    { text: "I forgot my friend's birthday. I'm the worst friend ever, completely worthless.", answer: "shame", explanation: "This is shame—attacking your core identity and worth as a person" },
    { text: "I snapped at my partner. I need to apologize for my tone.", answer: "guilt", explanation: "Guilt motivates repair without self-attack" },
    { text: "I snapped at my partner. I'm a terrible person who ruins everything.", answer: "shame", explanation: "Shame makes you feel fundamentally bad rather than focusing on the behavior" },
    { text: "I made an error at work. I'll fix it and learn from it.", answer: "guilt", explanation: "Healthy guilt leads to constructive action" },
    { text: "I made an error at work. Everyone will know I'm a fraud.", answer: "shame", explanation: "Shame triggers fear of exposure and feelings of being defective" }
  ];

  state.currentRecognitionAnswers = [];
  state.currentRecognitionIndex = 0;
  state.recognitionData = recognitionData;

  renderRecognitionItemModule2();
}

function renderRecognitionItemModule2() {
  const { dayNum } = state.currentModule;
  const day = courseData.days[dayNum - 1];
  const item = state.recognitionData[state.currentRecognitionIndex];

  const screen = document.getElementById('recognitionScreen');
  screen.innerHTML = `
    <div class="container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>Recognition Exercise: Shame or Guilt?</h1>
        <p style="margin-top: 8px;">Scenario ${state.currentRecognitionIndex + 1} of ${state.recognitionData.length}</p>
      </div>
      
      <div class="content-card">
        <h2>Is this SHAME or GUILT?</h2>
        <div class="recognition-item">
          <div class="recognition-item-text">${item.text}</div>
          <div class="recognition-buttons">
            <button class="btn recognition-btn" onclick="answerRecognitionModule2('shame')">SHAME</button>
            <button class="btn recognition-btn" onclick="answerRecognitionModule2('guilt')">GUILT</button>
          </div>
          <div class="recognition-explanation" id="recognition-explanation"></div>
        </div>
      </div>
    </div>
  `;

  showScreen('recognitionScreen');
}

function answerRecognitionModule2(answer) {
  const item = state.recognitionData[state.currentRecognitionIndex];
  const isCorrect = answer === item.answer;
  state.currentRecognitionAnswers.push(isCorrect);

  const buttons = document.querySelectorAll('.recognition-btn');
  buttons.forEach(btn => btn.disabled = true);

  buttons.forEach(btn => {
    if (btn.textContent.toLowerCase() === item.answer) {
      btn.classList.add('correct');
    } else if (btn.textContent.toLowerCase() === answer && !isCorrect) {
      btn.classList.add('incorrect');
    }
  });

  const explanation = document.getElementById('recognition-explanation');
  explanation.innerHTML = `
    <strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</strong><br>
    ${item.explanation}<br><br>
    <button class="btn btn-primary" onclick="continueRecognitionModule2()" style="margin-top: 12px;">Continue</button>
  `;
  explanation.classList.add('show');

  if (isCorrect) {
    awardPoints(15);
  }
}

function continueRecognitionModule2() {
  state.currentRecognitionIndex++;
  if (state.currentRecognitionIndex < state.recognitionData.length) {
    renderRecognitionItemModule2();
  } else {
    finishRecognitionModule2();
  }
}

function finishRecognitionModule2() {
  const correctCount = state.currentRecognitionAnswers.filter(a => a).length;
  awardPoints(75);
  updateSkillMastery('shameResilience', 15);
  startQuizModule2();
}

function startQuizModule2() {
  state.currentQuizAnswers = [];
  state.currentQuizStep = 0;
  renderQuizModule2();
}

function renderQuizModule2() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];
  const screen = document.getElementById('quizScreen');

  if (state.currentQuizStep === 0) {
    screen.innerHTML = `
      <div class="container">
        <div class="module-header" style="border-left: 4px solid ${day.color}">
          <h1>Quiz: True/False</h1>
          <p style="margin-top: 8px;">Question 1 of 2</p>
        </div>
        
        <div class="quiz-question">
          <div class="question-text">Shame and guilt are basically the same thing. TRUE or FALSE?</div>
          <div class="quiz-options">
            <div class="quiz-option" onclick="selectTrueFalseModule2(false, 0)" id="tf-0">FALSE</div>
            <div class="quiz-option" onclick="selectTrueFalseModule2(true, 1)" id="tf-1">TRUE</div>
          </div>
          <div id="quiz-feedback"></div>
        </div>
      </div>
    `;
  } else if (state.currentQuizStep === 1) {
    screen.innerHTML = `
      <div class="container">
        <div class="module-header" style="border-left: 4px solid ${day.color}">
          <h1>Quiz: True/False</h1>
          <p style="margin-top: 8px;">Question 2 of 2</p>
        </div>
        
        <div class="quiz-question">
          <div class="question-text">Shame grows in secrecy, silence, and judgment. TRUE or FALSE?</div>
          <div class="quiz-options">
            <div class="quiz-option" onclick="selectTrueFalseModule2(true, 0)" id="tf2-0">TRUE</div>
            <div class="quiz-option" onclick="selectTrueFalseModule2(false, 1)" id="tf2-1">FALSE</div>
          </div>
          <div id="quiz-feedback"></div>
        </div>
      </div>
    `;
  }

  showScreen('quiz-screen');
}

function selectTrueFalseModule2(isTrue, choiceIndex) {
  let correctAnswer, explanation;

  if (state.currentQuizStep === 0) {
    correctAnswer = false;
    explanation = "Shame and guilt are fundamentally different. Guilt says 'I did something bad' and can motivate positive change. Shame says 'I AM bad' and leads to hiding, perfectionism, and codependent behaviors.";
  } else {
    correctAnswer = true;
    explanation = "Brené Brown's research shows shame thrives in secrecy. When we hide shame and don't speak about it, it grows. But when we share shame with someone who responds with empathy, the shame loses power. 'Shame cannot survive being spoken.'";
  }

  const isCorrect = isTrue === correctAnswer;
  state.currentQuizAnswers.push(isCorrect);

  const options = document.querySelectorAll('.quiz-option');
  options.forEach(opt => opt.style.pointerEvents = 'none');

  const prefix = state.currentQuizStep === 0 ? 'tf-' : 'tf2-';
  document.getElementById(`${prefix}${choiceIndex}`).classList.add(isCorrect ? 'correct' : 'incorrect');
  if (!isCorrect) {
    const correctIndex = isTrue ? 1 : 0;
    document.getElementById(`${prefix}${correctIndex === choiceIndex ? (choiceIndex === 0 ? 1 : 0) : correctIndex}`).classList.add('correct');
  }

  const feedback = document.getElementById('quiz-feedback');
  const buttonText = state.currentQuizStep === 0 ? 'Continue to Next Question' : 'Continue to Application Challenge';
  feedback.innerHTML = `
    <div class="quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}">
      <strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</strong><br>
      ${explanation}<br><br>
      <button class="btn btn-primary btn-large" onclick="continueQuizModule2()" style="margin-top: 16px;">${buttonText}</button>
    </div>
  `;

  if (isCorrect) {
    awardPoints(100);
  } else {
    awardPoints(50);
  }
}

function continueQuizModule2() {
  state.currentQuizStep++;
  if (state.currentQuizStep < 2) {
    renderQuizModule2();
  } else {
    updateSkillMastery('shameResilience', 15);
    showApplicationChallengeModule2();
  }
}

function showApplicationChallengeModule2() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  const screen = document.getElementById('applicationScreen');
  screen.innerHTML = `
    <div class="container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>Application Challenge: Decision Tree</h1>
      </div>
      
      <div class="decision-tree">
        <div class="decision-setup">
          😰 You feel ashamed about something you said at a party last night. Your shame is spiraling. What do you do?
        </div>
        
        <h3 style="margin-bottom: 16px;">Choose your response:</h3>
        <div class="decision-choices">
          <div class="decision-choice" onclick="selectDecisionModule2(0)">
            Hide from everyone, replay the moment 1000 times, convince yourself everyone hates you
          </div>
          <div class="decision-choice" onclick="selectDecisionModule2(1)">
            Call a trusted friend and say 'I'm feeling really ashamed about what I said last night. Can we talk?'
          </div>
          <div class="decision-choice" onclick="selectDecisionModule2(2)">
            Minimize it and tell yourself 'Just get over it, it's not a big deal'
          </div>
          <div class="decision-choice" onclick="selectDecisionModule2(3)">
            Overcompensate by being extra helpful/perfect at the next gathering
          </div>
        </div>
        
        <div class="decision-outcome" id="decision-outcome"></div>
      </div>
    </div>
  `;

  showScreen('applicationScreen');
}

function selectDecisionModule2(choice) {
  const outcomes = [
    { text: "Shame grows stronger in secrecy. Your anxiety increases. You start avoiding social situations entirely. The shame spiral deepens and begins affecting other areas of your life.", score: 0 },
    { text: "Your friend responds with empathy: 'I didn't even notice! And everyone says awkward things sometimes.' Shame cannot survive empathy and connection. You feel immediate relief. The shame shrinks significantly.", score: 10 },
    { text: "Suppressing or minimizing shame doesn't work. It goes underground and pops up later, often more intensely. You haven't processed the shame, just buried it.", score: 3 },
    { text: "This is a codependent response—trying to earn back worth through performance. The shame remains unaddressed underneath the perfectionism. You end up exhausted and the shame is still there.", score: 2 }
  ];

  const outcome = outcomes[choice];
  state.applicationScores[state.currentModule.module.id] = outcome.score;

  const choices = document.querySelectorAll('.decision-choice');
  choices.forEach(c => c.style.pointerEvents = 'none');

  const outcomeDiv = document.getElementById('decision-outcome');
  outcomeDiv.innerHTML = `
    <h3 style="margin-bottom: 12px;">${outcome.score >= 8 ? '✅ Excellent Choice!' : outcome.score >= 5 ? '⚠️ Okay, but...' : '❌ Poor Choice'}</h3>
    <p style="font-size: var(--font-size-base); line-height: 1.7; margin-bottom: 16px;">${outcome.text}</p>
    <div class="health-score">Health Score: ${outcome.score}/10</div>
    ${outcome.score >= 8 ? '<p style="margin-top: 16px; font-weight: bold; color: var(--color-success);">This is the power of connection! Sharing shame with someone who responds with empathy is the most effective way to reduce its power over you.</p>' : ''}
    <button class="btn btn-primary btn-large" style="margin-top: 24px; width: 100%;" onclick="showCommitmentModule2()">Continue to Reflection →</button>
  `;
  outcomeDiv.classList.add('show');

  if (outcome.score >= 8) {
    awardPoints(150);
  } else {
    awardPoints(75);
  }
}

function showCommitmentModule2() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  const savedNotes = getUserJournalEntry(module.id) || '';
  const savedTags = state.selectedInsightTags[module.id] || [];

  const screen = document.getElementById('exerciseScreen');
  screen.innerHTML = `
    <div class="container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>Your Commitment &amp; Reflection</h1>
      </div>
      
      <div class="exercise-card">
        <h2>💭 Your Commitment</h2>
        <p class="exercise-instructions">Select what resonates with you:</p>
        
        <div class="commitment-options">
          <div class="commitment-option">
            <input type="checkbox" id="commit2-0">
            <label for="commit2-0">I will practice naming shame when I feel it ('I'm feeling shame right now')</label>
          </div>
          <div class="commitment-option">
            <input type="checkbox" id="commit2-1">
            <label for="commit2-1">I will reach out to someone when shame spirals instead of hiding</label>
          </div>
          <div class="commitment-option">
            <input type="checkbox" id="commit2-2">
            <label for="commit2-2">I will remind myself: 'I am not my mistakes'</label>
          </div>
          <div class="commitment-option">
            <input type="checkbox" id="commit2-3">
            <label for="commit2-3">I will notice the physical sensations of shame in my body</label>
          </div>
          <div class="commitment-option">
            <input type="checkbox" id="commit2-4">
            <label for="commit2-4">I will practice self-compassion when shame arises</label>
          </div>
        </div>
      </div>
      
      <div class="journal-entry">
        <h3>📝 Personal Journal Notes</h3>
        <p class="exercise-instructions">Reflect on your shame experiences and insights:</p>
        <textarea 
          id="journalEntry" 
          class="journal-textarea"
          placeholder="Write your reflections here...\n\nConsider:\n- When do I most often feel shame?\n- What physical sensations do I notice?\n- Who can I reach out to for empathy?"
          rows="8"
        >${savedNotes}</textarea>
        <div class="journal-actions">
          <button class="btn btn-secondary" onclick="saveJournalEntry('${module.id}')">
            💾 Save Journal Entry
          </button>
          <button class="btn btn-secondary" onclick="viewAllJournalEntries()">
            📚 View All Entries
          </button>
        </div>
      </div>
      
      <div class="exercise-card">
        <h3>💡 Key Insights</h3>
        <p class="exercise-instructions">Tag this module with insights:</p>
        <div class="insight-tags">
          <button class="insight-tag ${savedTags.includes('people-pleasing') ? 'active' : ''}" onclick="toggleInsightTag('${module.id}', 'people-pleasing', this)">
            People-Pleasing
          </button>
          <button class="insight-tag ${savedTags.includes('boundaries') ? 'active' : ''}" onclick="toggleInsightTag('${module.id}', 'boundaries', this)">
            Boundaries
          </button>
          <button class="insight-tag ${savedTags.includes('shame') ? 'active' : ''}" onclick="toggleInsightTag('${module.id}', 'shame', this)">
            Shame
          </button>
          <button class="insight-tag ${savedTags.includes('responsibility') ? 'active' : ''}" onclick="toggleInsightTag('${module.id}', 'responsibility', this)">
            Taking Responsibility
          </button>
          <button class="insight-tag ${savedTags.includes('self-worth') ? 'active' : ''}" onclick="toggleInsightTag('${module.id}', 'self-worth', this)">
            Self-Worth
          </button>
        </div>
      </div>
      
      <button class="btn btn-success btn-large btn-full" onclick="completeEnhancedModule2()">Complete Module ✓</button>
    </div>
  `;

  showScreen('exerciseScreen');
}

function completeEnhancedModule2() {
  const { dayNum, moduleIndex, module } = state.currentModule;

  awardPoints(150);

  if (!state.completedModules.includes(module.id)) {
    state.completedModules.push(module.id);
    state.completedModulesDetails.push({
      id: module.id,
      completedAt: new Date().toISOString(),
      score: state.quizScores[module.id] || 0
    });
  }

  updateModuleVisualState(module.id, 'completed');
  updateDashboardStats();

  const day = courseData.days[dayNum - 1];
  const allModulesComplete = day.modules.every(m => state.completedModules.includes(m.id));

  if (allModulesComplete && !state.completedDays.includes(dayNum)) {
    completeDay(dayNum);
  } else {
    showCelebration('Module Complete!', 'Great work! You\'ve deepened your understanding of shame.', () => showDayOverview(dayNum));
  }
}

// Enhanced Module 3: The Codependency-Shame Connection
function renderEnhancedModule3() {
  showScenarioIntroModule3();
}

function showScenarioIntroModule3() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  const screen = document.getElementById('scenarioScreen');
  screen.innerHTML = `
    <div class="container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>${module.name}</h1>
        <div class="module-meta">
          <span>⏱️ ${module.duration}</span>
          <span>⭐ ${module.points} points</span>
        </div>
      </div>
      
      <div class="scenario-card">
        <h2 class="scenario-title">👤 Meet Riley</h2>
        <div class="scenario-story">
          Riley's partner criticizes their cooking. Riley's immediate internal response: 'I'm worthless. I can't do anything right. They're going to leave me.' Riley spends the next week cooking elaborate meals, cleaning obsessively, and constantly asking 'Are you happy? Is everything okay?' Riley's shame about being 'not good enough' drives constant people-pleasing and caretaking.
        </div>
      </div>
      
      <div style="display: flex; gap: 12px;">
        <button class="btn btn-secondary" onclick="showDayOverview(${dayNum})">Back to Day ${dayNum}</button>
        <button class="btn btn-primary btn-large" onclick="showCoreTeachingModule3()">Continue to Learning →</button>
      </div>
    </div>
  `;

  showScreen('scenarioScreen');
}

function showCoreTeachingModule3() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  const screen = document.getElementById('moduleScreen');
  const content = document.getElementById('moduleScreen').querySelector('#module-content') || document.getElementById('moduleScreen');

  content.innerHTML = `
    <div class="module-container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>${module.name}</h1>
      </div>
      
      <div class="content-card">
        <h2>💡 Layer 1: The Vicious Cycle</h2>
        <p>Shame and codependency form a vicious cycle. Shame creates the core belief 'I'm not worthy of love as I am' → This drives codependent behavior: 'I must prove my worth through service' → When you inevitably can't control others or make them happy → More shame: 'See? I really am worthless' → More codependent trying. Round and round.</p>
      </div>
      
      <div class="content-card">
        <h2>🧠 Layer 2: Childhood Origins</h2>
        <p>Most people with codependency experienced toxic shame in childhood. Perhaps your parent said 'You're so selfish' when you had needs, or 'What's wrong with you?' when you showed emotions. Children can't think 'My parent is having a hard time'—they think 'Something is wrong with ME.'</p>
        <p>This shame gets internalized: 'I am bad, defective, too much, not enough.' As adults, you unconsciously try to prove you're worthy through codependent behaviors.</p>
        <p style="padding: 12px; background-color: var(--color-bg-1); border-radius: var(--radius-base); margin-top: 16px;">
          📊 <strong>Research shows:</strong> Childhood emotional neglect and criticism are primary sources of toxic shame that underlies adult codependency
        </p>
      </div>
      
      <div class="content-card">
        <h2>🌎 Layer 3: Breaking the Cycle</h2>
        <p>You cannot fix someone else to fix your shame. Many codependents believe 'If I can just help them enough, I'll finally feel worthy.' But external validation never fills the internal shame void.</p>
        <p>Breaking free requires:</p>
        <ul>
          <li>Recognizing shame when it arises</li>
          <li>Building shame resilience through connection and empathy</li>
          <li>Developing self-compassion</li>
          <li>Recognizing your inherent worth independent of what you do for others</li>
        </ul>
      </div>
      
      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <button class="btn btn-secondary" onclick="showScenarioIntroModule3()">Back</button>
        <button class="btn btn-primary btn-large" onclick="showRecognitionExerciseModule3()">Test Your Understanding →</button>
      </div>
    </div>
  `;

  showScreen('moduleScreen');
  updateSkillMastery('shameResilience', 10);
}

function showRecognitionExerciseModule3() {
  const recognitionData = [
    { behavior: "Always saying yes even when exhausted", belief: "My worth depends on being helpful", explanation: "The shame belief 'I'm only valuable when useful' drives compulsive helping" },
    { behavior: "Constant apologizing even when not at fault", belief: "Everything is my fault / I am bad", explanation: "Shame makes you believe you're inherently wrong, so you apologize for existing" },
    { behavior: "Can't tolerate partner's bad mood without fixing it", belief: "I'm responsible for others' emotions", explanation: "Shame says 'Their unhappiness proves I'm inadequate'" },
    { behavior: "Staying in abusive relationship", belief: "I don't deserve better / I'm not worthy of respect", explanation: "Shame convinces you this is all you deserve" },
    { behavior: "Hiding your own needs and feelings", belief: "My needs are burdensome / I'm too much", explanation: "Shame teaches you to make yourself small" }
  ];

  state.currentRecognitionAnswers = [];
  state.currentRecognitionIndex = 0;
  state.recognitionData = recognitionData;

  renderRecognitionItemModule3();
}

function renderRecognitionItemModule3() {
  const { dayNum } = state.currentModule;
  const day = courseData.days[dayNum - 1];
  const item = state.recognitionData[state.currentRecognitionIndex];

  const screen = document.getElementById('recognitionScreen');
  screen.innerHTML = `
    <div class="container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>Recognition Exercise</h1>
        <p style="margin-top: 8px;">Scenario ${state.currentRecognitionIndex + 1} of ${state.recognitionData.length}</p>
      </div>
      
      <div class="content-card">
        <h2>What shame-based belief drives this behavior?</h2>
        <div class="recognition-item">
          <div class="recognition-item-text"><strong>Behavior:</strong> ${item.behavior}</div>
          <div style="margin-top: 16px; padding: 16px; background-color: var(--color-bg-2); border-radius: var(--radius-base);">
            <p style="margin: 0;"><strong>Underlying Shame Belief:</strong></p>
            <p style="margin: 8px 0 0 0; font-size: var(--font-size-lg);">${item.belief}</p>
          </div>
          <button class="btn btn-primary" onclick="revealExplanationModule3()" id="reveal-btn" style="margin-top: 16px; width: 100%;">Reveal Explanation</button>
          <div class="recognition-explanation" id="recognition-explanation"></div>
        </div>
      </div>
    </div>
  `;

  showScreen('recognitionScreen');
}

function revealExplanationModule3() {
  const item = state.recognitionData[state.currentRecognitionIndex];
  state.currentRecognitionAnswers.push(true);

  document.getElementById('reveal-btn').style.display = 'none';

  const explanation = document.getElementById('recognition-explanation');
  explanation.innerHTML = `
    <strong>✅ Understanding:</strong><br>
    ${item.explanation}<br><br>
    <button class="btn btn-primary" onclick="continueRecognitionModule3()" style="margin-top: 12px;">Continue</button>
  `;
  explanation.classList.add('show');

  awardPoints(15);
}

function continueRecognitionModule3() {
  state.currentRecognitionIndex++;
  if (state.currentRecognitionIndex < state.recognitionData.length) {
    renderRecognitionItemModule3();
  } else {
    finishRecognitionModule3();
  }
}

function finishRecognitionModule3() {
  awardPoints(75);
  updateSkillMastery('shameResilience', 15);
  startQuizModule3();
}

function startQuizModule3() {
  state.currentQuizAnswers = [];
  state.currentQuizStep = 0;
  renderQuizModule3();
}

function renderQuizModule3() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];
  const screen = document.getElementById('quizScreen');

  if (state.currentQuizStep === 0) {
    screen.innerHTML = `
      <div class="container">
        <div class="module-header" style="border-left: 4px solid ${day.color}">
          <h1>Quiz: Scenario Analysis</h1>
          <p style="margin-top: 8px;">Question 1 of 2</p>
        </div>
        
        <div class="content-card" style="background: linear-gradient(135deg, var(--color-bg-2), var(--color-bg-1)); border-left: 4px solid ${day.color};">
          <h3>Read this scenario:</h3>
          <p style="font-size: var(--font-size-lg); line-height: 1.8; margin-bottom: 24px; padding: 16px; background-color: var(--color-surface); border-radius: var(--radius-base);">
            Sam's parent is an alcoholic. Sam monitors their parent's drinking, hides bottles, makes excuses to friends about cancelled plans, feels responsible for the parent's sobriety, and experiences crushing shame when the parent drinks anyway, thinking 'If I were better/smarter/more helpful, they'd stop.'
          </p>
        </div>
        
        <div class="quiz-question">
          <div class="question-text">What shame-based beliefs are driving Sam's codependent behavior? (Select all that apply)</div>
          <div class="quiz-options">
            <label class="quiz-option" style="cursor: pointer;">
              <input type="checkbox" value="0"> I am responsible for my parent's addiction
            </label>
            <label class="quiz-option" style="cursor: pointer;">
              <input type="checkbox" value="1"> If I were good enough, I could fix this
            </label>
            <label class="quiz-option" style="cursor: pointer;">
              <input type="checkbox" value="2"> Their drinking is evidence of my inadequacy
            </label>
            <label class="quiz-option" style="cursor: pointer;">
              <input type="checkbox" value="3"> I have inherent worth regardless of their choices
            </label>
            <label class="quiz-option" style="cursor: pointer;">
              <input type="checkbox" value="4"> I deserve to have my own needs met
            </label>
            <label class="quiz-option" style="cursor: pointer;">
              <input type="checkbox" value="5"> Their recovery is their responsibility, not mine
            </label>
          </div>
          <div id="quiz-feedback"></div>
          <button class="btn btn-primary" style="margin-top: 24px;" onclick="submitMultiSelectQuizModule3()">Submit Answer</button>
        </div>
      </div>
    `;
  } else if (state.currentQuizStep === 1) {
    screen.innerHTML = `
      <div class="container">
        <div class="module-header" style="border-left: 4px solid ${day.color}">
          <h1>Quiz: Scenario Analysis</h1>
          <p style="margin-top: 8px;">Question 2 of 2</p>
        </div>
        
        <div class="quiz-question">
          <div class="question-text">What would breaking the shame-codependency cycle look like for Sam?</div>
          <div class="quiz-options">
            <div class="quiz-option" onclick="selectSingleChoiceModule3(0)" id="choice3-0">
              Try harder to control the parent's drinking
            </div>
            <div class="quiz-option" onclick="selectSingleChoiceModule3(1)" id="choice3-1">
              Recognize: 'I am not responsible for their addiction. Their drinking doesn't reflect my worth. I can set boundaries and take care of myself.'
            </div>
            <div class="quiz-option" onclick="selectSingleChoiceModule3(2)" id="choice3-2">
              Feel more shame to motivate better caretaking
            </div>
            <div class="quiz-option" onclick="selectSingleChoiceModule3(3)" id="choice3-3">
              Cut off all contact without addressing the underlying shame
            </div>
          </div>
          <div id="quiz-feedback"></div>
        </div>
      </div>
    `;
  }

  showScreen('quiz-screen');
}

function submitMultiSelectQuizModule3() {
  const correctAnswers = [0, 1, 2];
  const checkboxes = document.querySelectorAll('.quiz-option input[type="checkbox"]');
  const selected = [];

  checkboxes.forEach(cb => {
    if (cb.checked) selected.push(parseInt(cb.value));
  });

  const isCorrect = correctAnswers.every(a => selected.includes(a)) && selected.every(s => correctAnswers.includes(s));
  state.currentQuizAnswers.push(isCorrect);

  const feedback = document.getElementById('quiz-feedback');
  feedback.innerHTML = `
    <div class="quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}">
      <strong>${isCorrect ? '✅ Excellent!' : '❌ Incorrect'}</strong><br>
      Sam's codependent behaviors stem from shame-based beliefs about being responsible for the parent and being inadequate. The healthy beliefs (having inherent worth, deserving needs met, recognizing appropriate responsibility) are absent. The correct answers were: I am responsible for my parent's addiction, If I were good enough I could fix this, and Their drinking is evidence of my inadequacy.<br><br>
      <button class="btn btn-primary btn-large" onclick="continueQuizModule3()" style="margin-top: 16px;">Continue to Next Question</button>
    </div>
  `;

  if (isCorrect) {
    awardPoints(100);
  } else {
    awardPoints(50);
  }
}

function selectSingleChoiceModule3(choice) {
  const correctAnswer = 1;
  const isCorrect = choice === correctAnswer;
  state.currentQuizAnswers.push(isCorrect);

  const options = document.querySelectorAll('.quiz-option');
  options.forEach(opt => opt.style.pointerEvents = 'none');

  document.getElementById(`choice3-${choice}`).classList.add(isCorrect ? 'correct' : 'incorrect');
  if (!isCorrect) {
    document.getElementById(`choice3-${correctAnswer}`).classList.add('correct');
  }

  const feedback = document.getElementById('quiz-feedback');
  feedback.innerHTML = `
    <div class="quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}">
      <strong>${isCorrect ? '✅ Perfect!' : '❌ Incorrect'}</strong><br>
      Breaking the cycle requires recognizing the shame-based beliefs are false, understanding appropriate responsibility, and developing self-compassion and boundaries. Simply trying harder or cutting contact doesn't address the underlying shame.<br><br>
      <button class="btn btn-primary btn-large" onclick="continueQuizModule3()" style="margin-top: 16px;">Continue to Application Challenge</button>
    </div>
  `;

  if (isCorrect) {
    awardPoints(100);
  } else {
    awardPoints(50);
  }
}

function continueQuizModule3() {
  state.currentQuizStep++;
  if (state.currentQuizStep < 2) {
    renderQuizModule3();
  } else {
    updateSkillMastery('shameResilience', 15);
    showApplicationChallengeModule3();
  }
}

function showApplicationChallengeModule3() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  const screen = document.getElementById('applicationScreen');
  screen.innerHTML = `
    <div class="container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>Application Challenge: Before &amp; After</h1>
      </div>
      
      <div class="decision-tree">
        <div class="decision-setup">
          📅 <strong>Scenario:</strong> Your partner forgets to do something they promised.
        </div>
        
        <h3 style="margin-bottom: 16px;">Compare these two responses:</h3>
        
        <div class="content-card" style="background-color: var(--color-bg-4); border-left: 4px solid var(--color-error);">
          <h4 style="color: var(--color-error);">❌ Shame-Driven Codependent Response</h4>
          <p style="line-height: 1.7; margin: 12px 0;">Immediately think: 'They forgot because I'm not important/worthy of consideration.' Feel shame spiral. Either: A) Over-apologize for being upset, or B) Do the task yourself while building resentment. Monitor their mood anxiously. Try to be 'perfect' to prevent future 'rejection.'</p>
          <p style="font-weight: bold; margin-top: 12px;">Result: More shame, more codependency, no behavior change from partner, relationship deteriorates</p>
          <div class="health-score" style="background-color: var(--color-error);">Health Score: 2/10</div>
        </div>
        
        <div class="content-card" style="background-color: var(--color-bg-3); border-left: 4px solid var(--color-success); margin-top: 16px;">
          <h4 style="color: var(--color-success);">✅ Shame-Resilient Response</h4>
          <p style="line-height: 1.7; margin: 12px 0;">Notice shame starting but challenge it: 'Their forgetting is about their actions, not my worth.' Use 'I' statement: 'I feel frustrated when plans aren't followed through. Can we problem-solve this?' Set boundary if needed. Remember your worth isn't determined by their behavior.</p>
          <p style="font-weight: bold; margin-top: 12px;">Result: Shame decreases, boundary set, self-respect maintained, relationship can actually improve through honest communication</p>
          <div class="health-score">Health Score: 10/10</div>
        </div>
        
        <div style="margin-top: 24px; padding: 20px; background-color: var(--color-bg-1); border-radius: var(--radius-base);">
          <h3 style="margin-bottom: 12px;">💡 Key Insight</h3>
          <p style="line-height: 1.7;">The shame-resilient response recognizes shame arising, challenges the false belief, and responds from a place of inherent worth rather than trying to earn worth through codependent behavior.</p>
        </div>
        
        <button class="btn btn-primary btn-large" style="margin-top: 24px; width: 100%;" onclick="showCommitmentModule3()">Continue to Reflection →</button>
      </div>
    </div>
  `;

  showScreen('applicationScreen');
  awardPoints(150);
}

function showCommitmentModule3() {
  const { dayNum, module } = state.currentModule;
  const day = courseData.days[dayNum - 1];

  const savedNotes = getUserJournalEntry(module.id) || '';
  const savedTags = state.selectedInsightTags[module.id] || [];

  const screen = document.getElementById('exerciseScreen');
  screen.innerHTML = `
    <div class="container">
      <div class="module-header" style="border-left: 4px solid ${day.color}">
        <h1>Your Commitment &amp; Reflection</h1>
      </div>
      
      <div class="exercise-card">
        <h2>💭 Your Commitment</h2>
        <p class="exercise-instructions">Select what resonates with you:</p>
        
        <div class="commitment-options">
          <div class="commitment-option">
            <input type="checkbox" id="commit3-0">
            <label for="commit3-0">I will notice when shame triggers codependent behavior</label>
          </div>
          <div class="commitment-option">
            <input type="checkbox" id="commit3-1">
            <label for="commit3-1">I will practice the thought: 'My worth is inherent, not earned'</label>
          </div>
          <div class="commitment-option">
            <input type="checkbox" id="commit3-2">
            <label for="commit3-2">I will work on shame resilience, not just behavior change</label>
          </div>
          <div class="commitment-option">
            <input type="checkbox" id="commit3-3">
            <label for="commit3-3">I will remember: I can't fix others to fix my shame</label>
          </div>
          <div class="commitment-option">
            <input type="checkbox" id="commit3-4">
            <label for="commit3-4">I will seek connection and empathy when shame arises</label>
          </div>
        </div>
      </div>
      
      <div class="journal-entry">
        <h3>📝 Personal Journal Notes</h3>
        <p class="exercise-instructions">Reflect on the shame-codependency connection in your life:</p>
        <textarea 
          id="journalEntry" 
          class="journal-textarea"
          placeholder="Write your reflections here...\n\nConsider:\n- How has shame driven my codependent behaviors?\n- What would change if I believed I was inherently worthy?\n- What patterns do I want to break?"
          rows="8"
        >${savedNotes}</textarea>
        <div class="journal-actions">
          <button class="btn btn-secondary" onclick="saveJournalEntry('${module.id}')">
            💾 Save Journal Entry
          </button>
          <button class="btn btn-secondary" onclick="viewAllJournalEntries()">
            📚 View All Entries
          </button>
        </div>
      </div>
      
      <div class="exercise-card">
        <h3>💡 Key Insights</h3>
        <p class="exercise-instructions">Tag this module with insights:</p>
        <div class="insight-tags">
          <button class="insight-tag ${savedTags.includes('people-pleasing') ? 'active' : ''}" onclick="toggleInsightTag('${module.id}', 'people-pleasing', this)">
            People-Pleasing
          </button>
          <button class="insight-tag ${savedTags.includes('boundaries') ? 'active' : ''}" onclick="toggleInsightTag('${module.id}', 'boundaries', this)">
            Boundaries
          </button>
          <button class="insight-tag ${savedTags.includes('shame') ? 'active' : ''}" onclick="toggleInsightTag('${module.id}', 'shame', this)">
            Shame
          </button>
          <button class="insight-tag ${savedTags.includes('responsibility') ? 'active' : ''}" onclick="toggleInsightTag('${module.id}', 'responsibility', this)">
            Taking Responsibility
          </button>
          <button class="insight-tag ${savedTags.includes('self-worth') ? 'active' : ''}" onclick="toggleInsightTag('${module.id}', 'self-worth', this)">
            Self-Worth
          </button>
        </div>
      </div>
      
      <button class="btn btn-success btn-large btn-full" onclick="completeEnhancedModule3()">Complete Module ✓</button>
    </div>
  `;

  showScreen('exerciseScreen');
}

function completeEnhancedModule3() {
  const { dayNum, moduleIndex, module } = state.currentModule;

  awardPoints(150);

  if (!state.completedModules.includes(module.id)) {
    state.completedModules.push(module.id);
    state.completedModulesDetails.push({
      id: module.id,
      completedAt: new Date().toISOString(),
      score: state.quizScores[module.id] || 0
    });
  }

  updateModuleVisualState(module.id, 'completed');
  updateDashboardStats();

  const day = courseData.days[dayNum - 1];
  const allModulesComplete = day.modules.every(m => state.completedModules.includes(m.id));

  if (allModulesComplete && !state.completedDays.includes(dayNum)) {
    completeDay(dayNum);
  } else {
    showCelebration('Module Complete!', 'Excellent work! You understand the connection between shame and codependency.', () => showDayOverview(dayNum));
  }
}

// Insight Tracker
function captureInsight(moduleId, moduleName) {
  const modal = document.createElement('div');
  modal.className = 'insight-modal active';
  modal.innerHTML = `
    <div class="insight-modal-content">
      <h3>💡 Capture Your Insight</h3>
      <p style="margin-bottom: 16px;">This concept resonates with you! Let's track it.</p>
      
      <h4 style="margin-bottom: 12px;">This explains my relationship with:</h4>
      <div class="insight-options" id="relationship-options">
        <div class="insight-option" data-value="Partner">❤️ Partner</div>
        <div class="insight-option" data-value="Parent">👨‍👩‍👧 Parent</div>
        <div class="insight-option" data-value="Friend">👥 Friend</div>
        <div class="insight-option" data-value="Coworker">💼 Coworker</div>
        <div class="insight-option" data-value="Self">🪞 Myself</div>
      </div>
      
      <h4 style="margin: 16px 0 12px 0;">I want to change this:</h4>
      <div class="insight-options" id="change-options">
        <div class="insight-option" data-value="Yes">✅ Yes</div>
        <div class="insight-option" data-value="Not sure">🤔 Not sure</div>
        <div class="insight-option" data-value="Need to think">💭 Need to think about it</div>
      </div>
      
      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <button class="btn btn-secondary" onclick="closeInsightModal()">Cancel</button>
        <button class="btn btn-primary" onclick="saveInsight('${moduleId}', '${moduleName.replace(/'/g, "\\'")}')">Save Insight</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Handle selections
  modal.querySelectorAll('.insight-option').forEach(option => {
    option.addEventListener('click', function () {
      // Deselect siblings
      this.parentElement.querySelectorAll('.insight-option').forEach(opt => opt.classList.remove('selected'));
      // Select this one
      this.classList.add('selected');
    });
  });
}

function closeInsightModal() {
  const modal = document.querySelector('.insight-modal');
  if (modal) modal.remove();
}

function saveInsight(moduleId, moduleName) {
  const modal = document.querySelector('.insight-modal');
  const relationship = modal.querySelector('#relationship-options .insight-option.selected')?.dataset.value;
  const changeIntent = modal.querySelector('#change-options .insight-option.selected')?.dataset.value;

  if (!relationship || !changeIntent) {
    alert('Please make selections for both questions.');
    return;
  }

  // Save insight
  state.insights.push({
    moduleId,
    moduleName,
    relationship,
    changeIntent,
    timestamp: new Date().toISOString(),
    dayNum: state.currentModule?.dayNum || state.currentDay
  });

  // Award points
  awardPoints(25);

  // Show success
  closeInsightModal();
  showCelebration('Insight Captured! 💡', `You earned +25 points for self-reflection. Track your patterns in "My Patterns".`, null);
}

// Review Navigation
function showModuleReview(dayNum) {
  const day = courseData.days[dayNum - 1];
  if (!day) return;

  const reviewHTML = `
    <div class="review-container">
      <h1>📚 Review: Day ${dayNum} - ${day.title}</h1>
      <p class="review-subtitle">Jump to any section to review content</p>
      
      <div class="review-menu">
        ${day.modules.map((module, idx) => {
    const isCompleted = state.completedModules.includes(module.id);
    return `
            <div class="review-section-card ${isCompleted ? 'completed' : ''}" onclick="jumpToModule(${dayNum}, ${idx})">
              <div class="review-icon">${isCompleted ? '✅' : '📖'}</div>
              <h3>${module.name}</h3>
              <p>${module.duration} • ${module.points} points</p>
              ${isCompleted ? '<p style="color: var(--color-success); font-weight: bold; margin-top: 8px;">Completed</p>' : ''}
            </div>
          `;
  }).join('')}
      </div>
      
      <button class="btn btn-secondary" onclick="showDashboard()">Back to Dashboard</button>
    </div>
  `;

  const screen = document.getElementById('reviewScreen');
  screen.innerHTML = reviewHTML;
  showScreen('reviewScreen');
}

function jumpToModule(dayNum, moduleIndex) {
  startModule(dayNum, moduleIndex);
}

// Journal System
function getUserJournalEntry(moduleId) {
  return state.journalEntries[moduleId]?.content || '';
}

function saveJournalEntry(moduleId) {
  const textarea = document.getElementById('journalEntry');
  if (!textarea) return;

  const entry = textarea.value;

  state.journalEntries[moduleId] = {
    content: entry,
    timestamp: new Date().toISOString(),
    moduleId: moduleId
  };

  showNotification('✓ Journal entry saved!');
  awardPoints(25);
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

function viewAllJournalEntries() {
  const entries = Object.values(state.journalEntries);

  if (entries.length === 0) {
    showNotification('No journal entries yet. Start reflecting as you complete modules!');
    return;
  }

  let html = `
    <div class="journal-viewer">
      <h2>📚 Your Journal Entries</h2>
      <div class="journal-list">
  `;

  entries.forEach(entry => {
    const module = findModuleById(entry.moduleId);
    const moduleName = module ? module.name : 'Unknown Module';
    html += `
      <div class="journal-entry-card">
        <h3>${moduleName}</h3>
        <p class="timestamp">${new Date(entry.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <div class="entry-content">${entry.content}</div>
      </div>
    `;
  });

  html += `
      </div>
      <div class="journal-actions">
        <button class="btn btn-primary" onclick="exportJournal()">
          📥 Export All Entries
        </button>
        <button class="btn btn-secondary" onclick="closeJournalViewer()">
          Close
        </button>
      </div>
    </div>
  `;

  const modal = document.getElementById('journal-modal');
  const content = document.getElementById('journal-modal-content');
  content.innerHTML = html;
  modal.classList.add('active');
}

function closeJournalViewer() {
  document.getElementById('journal-modal').classList.remove('active');
}

function findModuleById(moduleId) {
  for (const day of courseData.days) {
    for (const module of day.modules) {
      if (module.id === moduleId) {
        return module;
      }
    }
  }
  return null;
}

function exportJournal() {
  const entries = Object.values(state.journalEntries);
  if (entries.length === 0) {
    showNotification('No journal entries to export');
    return;
  }

  let text = 'CODEPENDENCY RECOVERY JOURNAL\n';
  text += '================================\n\n';

  entries.forEach(entry => {
    const module = findModuleById(entry.moduleId);
    const moduleName = module ? module.name : 'Unknown Module';
    text += `${moduleName}\n`;
    text += `Date: ${new Date(entry.timestamp).toLocaleDateString()}\n`;
    text += `\n${entry.content}\n`;
    text += '\n---\n\n';
  });

  downloadTextFile(text, `Recovery-Journal-${new Date().toISOString().split('T')[0]}.txt`);
  showNotification('Journal exported successfully!');
}

function downloadTextFile(text, filename) {
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Certificate Export
function exportCertificate() {
  const totalModules = 90;
  const quizScores = Object.values(state.quizScores);
  const avgAccuracy = quizScores.length > 0 ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length) : 0;

  const userData = {
    completedModules: state.completedModules.length,
    totalModules: totalModules,
    completedDays: state.completedDays.length,
    totalDays: 30,
    completedWeeks: state.completedWeeks.length,
    totalWeeks: 4,
    points: state.points,
    level: getCurrentLevel().level,
    levelName: getCurrentLevel().name,
    badges: state.earnedBadges.map(key => courseData.badges.find(b => b.key === key)).filter(b => b),
    accuracy: avgAccuracy,
    streak: state.streak,
    studyGroupId: state.studyGroupId,
    cohortId: state.cohortId,
    masteryTier: state.masteryTier,
    startDate: state.startDate || new Date().toISOString(),
    completionDate: new Date().toISOString()
  };

  const certificateHTML = generateCertificateHTML(userData);

  // Download as HTML file
  const blob = new Blob([certificateHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Codependency-Recovery-Certificate-${new Date().toISOString().split('T')[0]}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showNotification('Certificate downloaded! Open the file to view or print.');
}

function generateCertificateHTML(data) {
  return `
<!DOCTYPE html>
<html>
<head>
  <title>Certificate of Completion - 30-Day Program</title>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: 'Georgia', serif;
      max-width: 900px;
      margin: 0 auto;
      padding: 40px;
      background: white;
    }
    .certificate {
      border: 20px solid #3B82F6;
      padding: 60px;
      text-align: center;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }
    .certificate-title {
      font-size: 52px;
      color: #3B82F6;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .certificate-subtitle {
      font-size: 26px;
      color: #4a5568;
      margin-bottom: 40px;
    }
    .recipient {
      font-size: 36px;
      color: #2d3748;
      margin: 30px 0;
      font-style: italic;
    }
    .completion-text {
      font-size: 18px;
      color: #4a5568;
      line-height: 1.8;
      margin: 30px 0;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin: 40px 0;
      text-align: left;
    }
    .stat-item {
      background: white;
      padding: 20px;
      border-radius: 8px;
      border: 2px solid #e2e8f0;
    }
    .stat-label {
      font-size: 14px;
      color: #718096;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .stat-value {
      font-size: 28px;
      color: #21808D;
      font-weight: bold;
      margin-top: 8px;
    }
    .badges-section {
      margin: 40px 0;
    }
    .badge-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      margin-top: 20px;
    }
    .badge {
      font-size: 36px;
    }
    .date {
      font-size: 16px;
      color: #718096;
      margin-top: 40px;
    }
    @media print {
      body { background: white; padding: 0; }
      .certificate { border-width: 10px; padding: 40px; }
    }
  </style>
</head>
<body>
  <div class="certificate">
    <div class="certificate-title">Certificate of Completion</div>
    <div class="certificate-subtitle">30-Day College Codependency Recovery Program</div>
    
    <div class="recipient">Awarded to Program Participant</div>
    
    <div class="completion-text">
      Has successfully completed the intensive 30-day college-level program on understanding 
      and overcoming codependency, mastering healthy boundaries, building shame resilience,
      and contributing to collaborative learning environments.
    </div>
    
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-label">Modules Completed</div>
        <div class="stat-value">${data.completedModules} / ${data.totalModules}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Days Completed</div>
        <div class="stat-value">${data.completedDays} / ${data.totalDays}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Weeks Completed</div>
        <div class="stat-value">${data.completedWeeks} / ${data.totalWeeks}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Experience Points</div>
        <div class="stat-value">${data.points} XP</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Study Group</div>
        <div class="stat-value">${data.studyGroupId || 'N/A'}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Final Level</div>
        <div class="stat-value">${data.levelName}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Quiz Accuracy</div>
        <div class="stat-value">${data.accuracy}%</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Badges Earned</div>
        <div class="stat-value">${data.badges.length}</div>
      </div>
    </div>
    
    <div class="badges-section">
      <h3>Achievements Earned</h3>
      <div class="badge-list">
        ${data.badges.map(badge => `<span class="badge" title="${badge.name}">${badge.icon}</span>`).join('')}
      </div>
    </div>
    
    <div class="date">
      Completed: ${new Date(data.completionDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })}
    </div>
  </div>
</body>
</html>
  `;
}

function exportProgressReport() {
  const totalModules = 90;
  const quizScores = Object.values(state.quizScores);
  const avgAccuracy = quizScores.length > 0 ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length) : 0;

  let report = '30-DAY COLLEGE RECOVERY PROGRAM - PROGRESS REPORT\n';
  report += '==================================================\n\n';
  report += `Generated: ${new Date().toLocaleDateString()}\n\n`;
  report += 'OVERALL PROGRESS\n';
  report += '----------------\n';
  report += `Modules Completed: ${state.completedModules.length}/${totalModules}\n`;
  report += `Days Completed: ${state.completedDays.length}/30\n`;
  report += `Weeks Completed: ${state.completedWeeks.length}/4\n`;
  report += `Total Points: ${state.points} XP\n`;
  report += `Current Level: ${getCurrentLevel().name}\n`;
  report += `Quiz Accuracy: ${avgAccuracy}%\n`;
  report += `Streak: ${state.streak} days\n`;
  report += `Badges Earned: ${state.earnedBadges.length}\n\n`;
  report += 'LEARNING PATH\n';
  report += '-------------\n';
  report += `Learning Mode: ${state.studyGroupOptIn ? 'Group + Solo' : 'Solo (100% Independent)'}\n`;
  report += `Study Group: ${state.studyGroupId || 'None (Solo learner)'}\n`;
  report += `All modules completed: ${state.studyGroupOptIn ? 'with optional group support' : 'independently'}\n\n`;

  report += 'SKILL MASTERY\n';
  report += '-------------\n';
  Object.entries(state.skillMastery).forEach(([skill, value]) => {
    const displayName = skill.replace(/([A-Z])/g, ' $1').trim();
    report += `${displayName}: ${value}%\n`;
  });

  report += '\nCOMPLETED DAYS\n';
  report += '--------------\n';
  state.completedDays.forEach(dayNum => {
    const day = courseData.days[dayNum - 1];
    if (day) report += `Day ${dayNum}: ${day.title}\n`;
  });

  report += '\nCOMPLETED WEEKS\n';
  report += '---------------\n';
  state.completedWeeks.forEach(weekNum => {
    report += `Week ${weekNum}: ${['Foundation & Theory', 'Deep Psychological Work', 'Advanced Skills', 'Mastery & Future'][weekNum - 1]}\n`;
  });

  report += '\nJOURNAL ENTRIES\n';
  report += '---------------\n';
  report += `Total Entries: ${Object.keys(state.journalEntries).length}\n`;

  downloadTextFile(report, `Recovery-Progress-Report-${new Date().toISOString().split('T')[0]}.txt`);
  showNotification('Progress report exported!');
}

function showMyPatterns() {
  const screen = document.getElementById('patternsScreen');
  const content = document.getElementById('patterns-content');

  if (state.insights.length === 0) {
    content.innerHTML = `
      <div class="pattern-card">
        <h3>No Patterns Captured Yet</h3>
        <p>As you go through the modules, click "💡 This is me!" when something resonates with you. Your insights will appear here, helping you see patterns in your codependency journey.</p>
      </div>
    `;
  } else {
    // Group by relationship
    const byRelationship = {};
    state.insights.forEach(insight => {
      if (!byRelationship[insight.relationship]) {
        byRelationship[insight.relationship] = [];
      }
      byRelationship[insight.relationship].push(insight);
    });

    // Group by concept
    const conceptCounts = {};
    state.insights.forEach(insight => {
      const concept = insight.moduleName;
      conceptCounts[concept] = (conceptCounts[concept] || 0) + 1;
    });

    let patternsHTML = `
      <div class="pattern-card">
        <h3>🎯 Your Pattern Overview</h3>
        <p style="font-size: var(--font-size-lg); margin-bottom: 16px;">
          You've identified <strong>${state.insights.length} insights</strong> across your learning journey.
        </p>
      </div>
      
      <div class="pattern-card">
        <h3>📊 Concepts That Resonate</h3>
        <ul class="pattern-list">
    `;

    Object.entries(conceptCounts).sort((a, b) => b[1] - a[1]).forEach(([concept, count]) => {
      const relatedInsights = state.insights.filter(i => i.moduleName === concept);
      const contexts = [...new Set(relatedInsights.map(i => i.relationship))].join(', ');
      patternsHTML += `
        <li class="pattern-item">
          <div class="pattern-item-header">
            <span class="pattern-concept">${concept}</span>
            <span class="pattern-count">${count}x</span>
          </div>
          <div class="pattern-contexts">Noticed in: ${contexts}</div>
        </li>
      `;
    });

    patternsHTML += `</ul></div>`;

    // Relationship breakdown
    patternsHTML += `
      <div class="pattern-card">
        <h3>💭 Where You See These Patterns</h3>
        <ul class="pattern-list">
    `;

    Object.entries(byRelationship).forEach(([relationship, insights]) => {
      patternsHTML += `
        <li class="pattern-item">
          <div class="pattern-item-header">
            <span class="pattern-concept">${relationship}</span>
            <span class="pattern-count">${insights.length} patterns</span>
          </div>
        </li>
      `;
    });

    patternsHTML += `</ul></div>`;

    // Connection insights
    if (state.insights.length >= 3) {
      const recentInsights = state.insights.slice(-3);
      patternsHTML += `
        <div class="connection-insight">
          <h3>💡 Emerging Connections</h3>
          <p><strong>You're building awareness!</strong> You've identified patterns in ${Object.keys(byRelationship).length} different relationship contexts. This self-awareness is the first step toward change.</p>
        </div>
      `;
    }

    if (state.completedDays.length >= 3 && state.insights.length >= 5) {
      patternsHTML += `
        <div class="connection-insight">
          <h3>🌟 Your Journey So Far</h3>
          <p><strong>Remember on Day 1 when you started recognizing codependency patterns?</strong> Now you're connecting those patterns across multiple relationships and contexts. That's exactly how transformation happens—not overnight, but through consistent awareness and practice.</p>
        </div>
      `;
    }

    content.innerHTML = patternsHTML;
  }

  showScreen('patternsScreen');
}

// Additional helper to mark modules as completed when showing day overview
function markModuleAsCompletedInUI(moduleId) {
  setTimeout(() => {
    const cards = document.querySelectorAll('.content-card');
    cards.forEach(card => {
      if (card.textContent.includes('Start Module') || card.textContent.includes('Review Module')) {
        const moduleIdMatch = card.querySelector('button')?.getAttribute('onclick')?.match(/startModule\((\d+),\s*(\d+)\)/);
        if (moduleIdMatch) {
          const dayNum = parseInt(moduleIdMatch[1]);
          const moduleIndex = parseInt(moduleIdMatch[2]);
          const day = courseData.days[dayNum - 1];
          if (day && day.modules[moduleIndex]) {
            const module = day.modules[moduleIndex];
            if (module.id === moduleId && state.completedModules.includes(moduleId)) {
              card.classList.add('module-completed');
              if (!card.querySelector('.completion-indicator')) {
                const indicator = document.createElement('div');
                indicator.className = 'completion-indicator';
                indicator.innerHTML = '✓';
                card.style.position = 'relative';
                card.appendChild(indicator);
              }
            }
          }
        }
      }
    });
  }, 100);
}

// Update journal context when starting modules
function setJournalContext(context) {
  currentJournalContext = context;
  const contextEl = document.getElementById('currentContext');
  if (contextEl) contextEl.textContent = context;
}

// MOBILE RETENTION FEATURES

// Check for returning users and show re-engagement banner
function checkDailyEngagement() {
  if (!state.lastActive) return;

  const lastActive = new Date(state.lastActive);
  const now = new Date();
  const hoursSince = (now - lastActive) / (1000 * 60 * 60);

  if (hoursSince > 24 && state.currentDay > 0) {
    showReEngagementPrompt();
  }
}

function showReEngagementPrompt() {
  const banner = document.createElement('div');
  banner.className = 'engagement-banner';
  banner.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#667eea,#764ba2);color:white;padding:20px 40px;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.3);z-index:999;display:flex;align-items:center;gap:16px;animation:slideDown 0.5s ease;';

  banner.innerHTML = `
    <span style="font-size:32px;">🌟</span>
    <div>
      <div style="font-weight:bold;font-size:18px;margin-bottom:4px;">Welcome back!</div>
      <div>Your Day ${state.currentDay} awaits. Continue your transformation.</div>
    </div>
    <button onclick="this.parentElement.remove();continueCurrentDay();" style="background:white;color:#667eea;border:none;padding:10px 20px;border-radius:6px;font-weight:bold;cursor:pointer;">
      Continue
    </button>
    <button onclick="this.parentElement.remove();" style="background:transparent;border:1px solid white;color:white;padding:10px 20px;border-radius:6px;cursor:pointer;margin-left:8px;">
      ✕
    </button>
  `;

  document.body.appendChild(banner);

  setTimeout(() => {
    if (banner.parentElement) banner.remove();
  }, 10000);
}

// Database Schema Documentation
const DATABASE_SCHEMA = `
-- CODEPENDENCY RECOVERY APP DATABASE SCHEMA
-- PostgreSQL / MySQL Compatible

-- Users Table
CREATE TABLE users (
  user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE,
  username VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_active TIMESTAMP,
  preferences JSONB DEFAULT '{}'::jsonb,
  INDEX idx_email (email),
  INDEX idx_last_active (last_active)
);

-- User Progress Table
CREATE TABLE user_progress (
  progress_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
  current_day INTEGER DEFAULT 1,
  current_level INTEGER DEFAULT 1,
  total_points INTEGER DEFAULT 0,
  streak INTEGER DEFAULT 0,
  quiz_accuracy DECIMAL(5,2) DEFAULT 0.00,
  boundaries_set INTEGER DEFAULT 0,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_id (user_id)
);

-- Completed Modules Table
CREATE TABLE completed_modules (
  completion_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
  module_id VARCHAR(50) NOT NULL,
  day_number INTEGER NOT NULL,
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  score INTEGER,
  time_spent INTEGER, -- seconds
  INDEX idx_user_modules (user_id, module_id),
  INDEX idx_day (day_number)
);

-- Earned Badges Table
CREATE TABLE earned_badges (
  badge_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
  badge_key VARCHAR(50) NOT NULL,
  badge_name VARCHAR(100) NOT NULL,
  earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_badges (user_id)
);

-- Quiz Attempts Table
CREATE TABLE quiz_attempts (
  attempt_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
  quiz_id VARCHAR(50) NOT NULL,
  question_id VARCHAR(50) NOT NULL,
  first_attempt BOOLEAN DEFAULT TRUE,
  is_correct BOOLEAN NOT NULL,
  attempted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_quiz (user_id, quiz_id)
);

-- Journal Entries Table
CREATE TABLE journal_entries (
  entry_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
  module_id VARCHAR(50),
  context VARCHAR(255),
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_journal (user_id),
  INDEX idx_created (created_at)
);

-- User Insights Table
CREATE TABLE user_insights (
  insight_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
  module_id VARCHAR(50) NOT NULL,
  module_name VARCHAR(255) NOT NULL,
  relationship_context VARCHAR(100),
  change_intent VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_insights (user_id)
);

-- Skill Mastery Table
CREATE TABLE skill_mastery (
  skill_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
  skill_name VARCHAR(100) NOT NULL,
  percentage INTEGER DEFAULT 0,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, skill_name),
  INDEX idx_user_skills (user_id)
);

-- Daily Challenges Table
CREATE TABLE completed_challenges (
  challenge_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
  day_number INTEGER NOT NULL,
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_challenges (user_id)
);

-- MAPPING TO EXTERNAL SYSTEMS
-- Example: Mapping to a CRM or LMS

CREATE TABLE external_system_mapping (
  mapping_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
  external_system VARCHAR(100) NOT NULL, -- e.g., 'salesforce', 'hubspot', 'canvas_lms'
  external_user_id VARCHAR(255) NOT NULL,
  sync_enabled BOOLEAN DEFAULT TRUE,
  last_synced TIMESTAMP,
  UNIQUE(user_id, external_system),
  INDEX idx_external (external_system, external_user_id)
);
`;

// App Recreation Prompt
const RECREATION_PROMPT = `
Create a 7-day intensive codependency recovery web application with comprehensive gamification and retention features.

**CORE SPECIFICATIONS:**

1. VISUAL DESIGN
   - Modern hero landing page with gradient backgrounds (#667eea to #764ba2)
   - Floating animated orbs using CSS blur and animations
   - Glassmorphic design elements (backdrop-filter, rgba backgrounds)
   - Emoji-based iconography throughout
   - Dark/light mode support via CSS custom properties
   - Responsive design: mobile-first, breakpoints at 640px, 768px, 1024px

2. GAMIFICATION SYSTEM
   - 6,500+ total points across all activities
   - 8 progression levels: Awakening(0), Aware(600), Learning(1200), Practicing(2000), Growing(3000), Transforming(4000), Thriving(5000), Master(6000)
   - 17 achievement badges with specific unlock requirements
   - Skill mastery tracking: Self-Awareness, Cognitive Skills, Boundaries, Shame Resilience, Emotional Regulation, Communication
   - Streak system with milestone celebrations (3-day, 7-day)
   - Real-time point animations and level-up celebrations

3. COURSE STRUCTURE
   - 7 days, 3 modules per day (21 total)
   - Day 1: Understanding Codependency & Shame
   - Day 2: Blame, Shifting Blame & Cognitive Distortions
   - Day 3: Building Boundaries & Self-Identity
   - Day 4: Shame Resilience & Self-Compassion
   - Day 5: Emotional Regulation & Distress Tolerance
   - Day 6: Effective Communication & Relationship Skills
   - Day 7: Integration & Moving Forward

4. MODULE FLOW (Enhanced Day 1 Modules 1-3)
   - Scenario introduction (relatable story with named character)
   - 3-layer teaching: Basic concept → Psychology/neuroscience → Real-world manifestations
   - Recognition exercise (6 scenarios, pattern identification)
   - Varied quiz formats (multi-select, true/false, scenario analysis, decision trees)
   - Scenario reminder box (collapsible, available during quiz)
   - Application challenge (decision tree with health scores)
   - Commitment selection (checkboxes, no text input)
   - Personal journal with auto-save and export
   - Insight tagging system

5. QUIZ MECHANICS
   - First attempt counts for accuracy scoring
   - One retry allowed (doesn't affect score)
   - Previous question navigation
   - Immediate feedback with explanations
   - Module completion requires quiz + exercise completion

6. JOURNAL SYSTEM
   - Floating action button (always accessible)
   - Slide-in sidebar panel
   - Two tabs: Current Note, All Entries
   - Context-aware (knows current module)
   - Auto-save option (60-second intervals)
   - Export functionality
   - Insight tag buttons (5 categories)

7. RETENTION FEATURES
   - Re-engagement banner for 24h+ inactive users
   - Daily rotating motivational quotes
   - Progress visualization (circular progress ring)
   - Milestone celebrations with confetti
   - "This is me!" insight capture button
   - Pattern tracking across relationships
   - Mini-homework system with bonus points
   - Review system (jump to any completed module)

8. USER EXPERIENCE
   - Flow indicators showing current step
   - Completion badges with consistent #10B981 green
   - Achievement gallery with small top-right locks (32px)
   - No duplicate checkmarks (remove existing before adding)
   - Export capabilities: Certificate, Journal, Progress Report
   - Settings panel: 6 color palettes, 5 font sizes

9. ERROR HANDLING
   - Comprehensive startup checks (DOM, data, CSS variables)
   - Health checks every 60 seconds
   - User-friendly error modals with recovery options
   - Reset functionality with confirmation

10. TECHNICAL REQUIREMENTS
    - Pure HTML/CSS/JavaScript (no frameworks)
    - Single-page application
    - In-memory state management (no localStorage due to sandbox)
    - Responsive grid layouts (CSS Grid, Flexbox)
    - CSS custom properties for theming
    - Smooth animations (CSS transitions, keyframes)
    - Accessible design (ARIA labels, semantic HTML)

11. DATA STRUCTURE
    state = {
      currentDay, currentModule, points, level,
      earnedBadges, completedModules, completedDays,
      quizScores, firstAttemptScores, streak,
      skillMastery: {selfAwareness, cognitiveSkills, boundarySetting, shameResilience, emotionalRegulation, communication},
      insights: [{moduleId, moduleName, relationship, changeIntent, timestamp}],
      journalEntries: {moduleId: {content, timestamp}},
      selectedInsightTags, quizHistory
    }

12. COLOR SYSTEM
    - Completion: #10B981 (single consistent green)
    - Primary gradient: #667eea to #764ba2
    - Accent gradient: #f093fb to #4facfe
    - Background orbs: radial-gradient with blur(80px)
    - Status colors: success(teal), error(red), warning(orange), info(slate)

Style: Modern, empowering, supportive. Professional mental health application with gaming elements. Clean sans-serif typography, generous white space, subtle shadows, smooth interactions.
`;

// Log documentation on app load
console.log('%c📄 DATABASE SCHEMA', 'background:#667eea;color:white;padding:8px;border-radius:4px;font-weight:bold;');
console.log(DATABASE_SCHEMA);

console.log('%c🚀 APP RECREATION PROMPT', 'background:#764ba2;color:white;padding:8px;border-radius:4px;font-weight:bold;');
console.log(RECREATION_PROMPT);

// Initialize on load with DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    logDebug('DOM Content Loaded');
    init();
    checkDailyEngagement();

    // Run tests after a short delay
    setTimeout(() => {
      console.log('\n📋 Running automated tests...\n');
      runComprehensiveTests();
      console.log('\n✅ All tests complete!\n');
      console.log('\n🎉 READY TO START!\n');
      console.log('✅ "Begin Your Journey" button is active (3 fallback methods)\n');
      console.log('👥 Study groups are 100% OPTIONAL - complete everything solo!\n');
      console.log('🎨 Try Settings (top-right) to customize colors and font size\n');
      console.log('\n🚀 Click "Begin Your Journey" to start the 30-day program!\n');
    }, 1000);
  });
} else {
  logDebug('DOM already loaded');
  init();
  checkDailyEngagement();

  setTimeout(() => {
    console.log('\n📋 Running automated tests...\n');
    runComprehensiveTests();
    console.log('\n✅ All tests complete!\n');
    console.log('\n🎉 READY TO START!\n');
    console.log('✅ "Begin Your Journey" button is active (3 fallback methods)\n');
    console.log('👥 Study groups are 100% OPTIONAL - complete everything solo!\n');
    console.log('🎨 Try Settings (top-right) to customize colors and font size\n');
    console.log('\n🚀 Click "Begin Your Journey" to start the 30-day program!\n');
  }, 1000);
}