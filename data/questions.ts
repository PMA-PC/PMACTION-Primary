
import { Question } from './types';

export const baseQuestions: Question[] = [
  // I. Communication and Social Interaction
  {
    id: 'comm_eye_contact',
    text: 'Do you find making direct eye contact uncomfortable?',
    definition: 'The experience of feeling physically or mentally uncomfortable when making direct eye contact with another person.',
    example: 'During a business meeting, you find yourself staring at the wall or your notes to avoid looking at your colleagues.',
    category: 'Communication',
    type: 'binary'
  },
  {
    id: 'comm_facial_expressions',
    text: 'Trouble reading facial expressions',
    definition: 'Difficulty understanding the emotions that others are conveying through their facial movements.',
    example: 'A friend tells you a story while smiling, but you can\'t tell if they are genuinely happy or masking sadness.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_social_cues',
    text: 'Difficulty with social cues',
    definition: 'Struggling to understand and respond to the unspoken rules and signals of social interaction.',
    example: 'You are talking to someone who keeps leaning away from you, but you don\'t realize they want to end the conversation.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_small_talk',
    text: 'Difficulty with small talk',
    definition: 'Finding brief, casual conversations about superficial topics uninteresting, frustrating, or pointless.',
    example: 'A coworker asks "How was your weekend?" and you feel a strong urge to avoid the question.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_initiating',
    text: 'Difficulty initiating conversations',
    definition: 'A struggle to start a conversation with someone, often due to not knowing what to say.',
    example: 'You stand awkwardly outside your door for several minutes, unable to think of an opening line for a neighbor.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_maintaining',
    text: 'Difficulty maintaining conversations',
    definition: 'Challenges in keeping a conversation going, often by not knowing how to respond or ask follow-up questions.',
    example: 'A friend tells you about their favorite movie, but you don\'t know what to say, leading to awkward silence.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_ending',
    text: 'Difficulty ending conversations',
    definition: 'Not knowing how to appropriately and smoothly exit a conversation.',
    example: 'You simply turn and walk away without saying "goodbye" because you don\'t know the proper procedure.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_tone',
    text: 'Difficulty with tone of voice',
    definition: 'The inability to use the correct vocal inflection to convey a specific meaning or emotion.',
    example: 'You say "I\'m so excited!" in a flat voice, and your partner asks if you\'re okay.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_inflection',
    text: 'Difficulty with inflection in voice',
    definition: 'Not varying your tone to emphasize important words or meanings.',
    example: 'Your voice stays at the same pitch for an entire story, making it hard to tell what matters.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_volume',
    text: 'Difficulty with volume control',
    definition: 'Not being able to gauge whether your speaking volume is appropriate for the environment.',
    example: 'You speak too loudly in a library without realizing it.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_pitch',
    text: 'Difficulty with pitch',
    definition: 'Speaking in a flat, unchanging pitch, which can make your voice sound robotic.',
    example: 'You explain a complex topic with a consistent pitch, lacking excitement.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_intonation',
    text: 'Difficulty with intonation',
    definition: 'The inability to vary the pitch and speed of your voice to convey meaning.',
    example: 'When asking a question, your voice doesn\'t rise at the end.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_prosody',
    text: 'Difficulty with prosody',
    definition: 'Struggling with the overall rhythm, stress, and melody of speech.',
    example: 'Your speech lacks a natural "flow" and might sound stilted.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_articulation',
    text: 'Difficulty in articulation',
    definition: 'Struggling to make clear and distinct speech sounds.',
    example: 'Words come out jumbled or slurred when you are tired.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_vocabulary',
    text: 'Difficulty with vocabulary',
    definition: 'Struggling to find the right words to express yourself despite having a clear thought.',
    example: 'You use simpler terms because you can\'t recall the specific words needed.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_grammar',
    text: 'Difficulty with grammar',
    definition: 'Struggling with rules and structure, leading to incorrect sentences.',
    example: 'Mixing up verb tenses or sentence structure.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_syntax',
    text: 'Difficulty with syntax',
    definition: 'Struggling with the correct order and arrangement of words.',
    example: 'Placing words in an unusual order like "The dog, blue and fast, ran."',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_semantics',
    text: 'Difficulty with semantics',
    definition: 'Struggling with the meaning and interpretation of words.',
    example: 'Someone says "I\'m feeling blue" and you think of the color.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_echolalia',
    text: 'Echolalia',
    definition: 'The repetition of words, phrases, or sounds heard from others.',
    example: 'Repeating "Go to the store" under your breath after hearing it.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_unique_style',
    text: 'Unique communication styles',
    definition: 'Communicating differently from the norm (quirky, abrupt, interrupting).',
    example: 'Interrupting a conversation to ask rapid-fire questions about a topic.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_written_pref',
    text: 'Preference for written communication',
    definition: 'Finding it easier to communicate through writing for clarity and comfort.',
    example: 'Preferring to email a coworker rather than discuss a project face-to-face.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_processing_time',
    text: 'Requirement for extra processing time',
    definition: 'Needing more time to absorb information and formulate a response.',
    example: 'Pausing noticeably before responding to a question.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_monologue',
    text: 'Tendency to monologue',
    definition: 'Talking at length about passionate topics without realizing others have lost interest.',
    example: 'Talking for 30 minutes about a video game without letting others speak.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_implicit_rules',
    text: 'Difficulty with implicit rules',
    definition: 'Struggling to understand unwritten social rules.',
    example: 'Correcting your boss in a meeting without realizing it\'s considered rude.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_ambiguous',
    text: 'Difficulty with ambiguous instructions',
    definition: 'Needing precise, step-by-step instructions.',
    example: 'Being confused by "help around the house" vs "load the dishwasher".',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_power_diff',
    text: 'Tendency to collapse power differentials',
    definition: 'Interacting with everyone as equals regardless of status.',
    example: 'Talking to a CEO with the same casual manner as a friend.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_same_stories',
    text: 'Sharing "SAME Stories"',
    definition: 'Responding to stories by sharing a similar personal experience to show empathy.',
    example: 'Sharing a similar work struggle to show you relate to a friend.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_direct',
    text: 'More direct communication manner',
    definition: 'Communicating in a straightforward way without a "social filter".',
    example: 'Telling a friend a color doesn\'t suit them without realizing it might be rude.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_inaccuracies',
    text: 'Difficulty not pointing out inaccuracies',
    definition: 'A strong urge to correct factual errors even in casual conversation.',
    example: 'Correcting a statistic during a group discussion.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_loner',
    text: 'Often seen as "loners"',
    definition: 'Preference for own company or small circle of friends.',
    example: 'Preferring to work on a hobby at home rather than go to a party.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_emotional_labor',
    text: 'Less reliance on emotionally satiating others',
    definition: 'Not feeling obligated to perform emotional labor like comforting with white lies.',
    example: 'Not giving empty reassurances if you don\'t feel they are productive.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_etiquette',
    text: 'Etiquette breaches',
    definition: 'Unintentionally violating social rules or boundaries.',
    example: 'Asking a very personal question to a new acquaintance.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_comical_obs',
    text: 'Observations interpreted as comedy',
    definition: 'Direct observations being perceived as humorous when meant seriously.',
    example: 'Pointing out a detail about a room and everyone laughs.',
    category: 'Communication',
    type: 'likert'
  },
  {
    id: 'comm_one_level',
    text: 'Operating on only one level',
    definition: 'Preference for straightforward communication with no subtext.',
    example: 'Being confused by sarcasm or subtle hints.',
    category: 'Communication',
    type: 'likert'
  },

  // II. Cognition and Thinking Styles
  {
    id: 'cog_literal',
    text: 'Literal thinking',
    definition: 'Struggling to understand figurative language, idioms, and metaphors.',
    example: 'Being confused by "raining cats and dogs".',
    category: 'Cognition',
    type: 'likert'
  },
  {
    id: 'cog_abstract',
    text: 'Difficulty with abstract thinking',
    definition: 'Preference for concrete facts over abstract concepts.',
    example: 'Struggling to grasp "justice" without a specific example.',
    category: 'Cognition',
    type: 'likert'
  },
  {
    id: 'cog_coherence',
    text: 'Difficulty with Central Coherence',
    definition: 'Focusing on details rather than the big picture.',
    example: 'Memorizing street names but not having a mental map of the city.',
    category: 'Cognition',
    type: 'likert'
  },
  {
    id: 'cog_detail',
    text: 'Attention to detail',
    definition: 'Natural inclination to notice minutia.',
    example: 'Spotting a single typo in a large document instantly.',
    category: 'Cognition',
    type: 'likert'
  },
  {
    id: 'cog_memory',
    text: 'Strong memory and knowledge retention',
    definition: 'Exceptional memory for facts and conversations.',
    example: 'Recalling a conversation from 5 years ago in detail.',
    category: 'Cognition',
    type: 'likert'
  },
  {
    id: 'cog_pattern',
    text: 'Enhanced pattern recognition',
    definition: 'Ability to see patterns in data or behavior.',
    example: 'Identifying repeating sequences in complex data quickly.',
    category: 'Cognition',
    type: 'likert'
  },
  {
    id: 'cog_faces',
    text: 'Difficulty recognizing faces (prosopagnosia)',
    definition: 'Struggle to remember faces, relying on other cues.',
    example: 'Checking clothes or hair to recognize someone.',
    category: 'Cognition',
    type: 'likert'
  },
  {
    id: 'cog_divergent',
    text: 'Divergent thinking',
    definition: 'Thinking creatively and making connections across unrelated ideas.',
    example: 'Combining ideas from different fields to solve a problem.',
    category: 'Cognition',
    type: 'likert'
  },
  {
    id: 'cog_time',
    text: 'Altered time perception',
    definition: 'Struggling to accurately gauge the passage of time.',
    example: 'A 15-minute task feels like an eternity.',
    category: 'Cognition',
    type: 'likert'
  },
  {
    id: 'cog_creativity',
    text: 'High levels of creativity',
    definition: 'Approaching problems from non-traditional angles.',
    example: 'Coming up with imaginative stories or designs.',
    category: 'Cognition',
    type: 'likert'
  },
  {
    id: 'cog_sarcasm',
    text: 'Difficulty understanding sarcasm',
    definition: 'Struggle to interpret verbal irony.',
    example: 'Thinking someone is happy about paperwork when they are sarcastic.',
    category: 'Cognition',
    type: 'likert'
  },
  {
    id: 'cog_humor',
    text: 'Difficulty with humor',
    definition: 'Struggle to understand jokes or comedic timing.',
    example: 'Pausing to analyze a joke before understanding it.',
    category: 'Cognition',
    type: 'likert'
  },
  {
    id: 'cog_ambiguity',
    text: 'Low tolerance for ambiguity',
    definition: 'Strong preference for clear, unambiguous communication.',
    example: 'Feeling stressed by a vague deadline.',
    category: 'Cognition',
    type: 'likert'
  },
  {
    id: 'cog_figurative',
    text: 'Literal interpretations of figurative language',
    definition: 'Taking idioms and metaphors at face value.',
    example: 'Wondering why someone would hit hay when they say "hit the hay".',
    category: 'Cognition',
    type: 'likert'
  },
  {
    id: 'cog_lying_system',
    text: 'Difficulty in lie telling (Systemizing)',
    definition: 'Lying feels like breaking a predictable system of truth.',
    example: 'Feeling distress because lying deviates from facts.',
    category: 'Cognition',
    type: 'likert'
  },

  // III. Emotional Experiences and Regulation
  {
    id: 'emo_social_anxiety',
    text: 'Social anxiety',
    definition: 'Significant fear or anxiety in social situations.',
    example: 'Dreading a party due to fear of saying the wrong thing.',
    category: 'Emotion',
    type: 'likert'
  },
  {
    id: 'emo_relating',
    text: 'Trouble relating to others\' emotions',
    definition: 'Struggle to identify and empathize with others\' feelings.',
    example: 'Not knowing what to say when a friend is crying.',
    category: 'Emotion',
    type: 'likert'
  },
  {
    id: 'emo_regulation',
    text: 'Difficulty with emotional regulation',
    definition: 'Struggling to manage intense emotions.',
    example: 'A small routine change causes intense frustration.',
    category: 'Emotion',
    type: 'likert'
  },
  {
    id: 'emo_self_esteem',
    text: 'Low self-esteem / dim view of oneself',
    definition: 'Poor self-image from feeling different.',
    example: 'Avoiding jobs you are qualified for due to feeling not good enough.',
    category: 'Emotion',
    type: 'likert'
  },
  {
    id: 'emo_atmosphere',
    text: 'Highly sensitive to emotional atmospheres',
    definition: 'Being very aware of others\' emotions.',
    example: 'Feeling tension in a room after an argument even if silence.',
    category: 'Emotion',
    type: 'likert'
  },
  {
    id: 'emo_criticism',
    text: 'High sensitivity to criticism',
    definition: 'Experiencing feedback intensely.',
    example: 'Feeling rejected after a minor note from a boss.',
    category: 'Emotion',
    type: 'likert'
  },
  {
    id: 'emo_rsd',
    text: 'Rejection Sensitive Dysphoria (RSD)',
    definition: 'Extreme emotional pain from perceived rejection.',
    example: 'Panic when a friend doesn\'t reply to a text immediately.',
    category: 'Emotion',
    type: 'likert'
  },
  {
    id: 'emo_stigma',
    text: 'Internalized stigma',
    definition: 'Feeling shame for being autistic/different.',
    example: 'Thinking you are just the "odd one out".',
    category: 'Emotion',
    type: 'likert'
  },
  {
    id: 'emo_societal',
    text: 'Attributes negative experiences to societal factors',
    definition: 'Recognizing struggles are due to a neurotypical world.',
    example: 'Realizing eye contact difficulty isn\'t a flaw but a mismatch.',
    category: 'Emotion',
    type: 'likert'
  },
  {
    id: 'emo_anxiety_honesty',
    text: 'Anxiety as underlying factor for lack of honesty',
    definition: 'Lying out of fear of reaction rather than malice.',
    example: 'Lying about finishing a task due to fear of the boss\'s reaction.',
    category: 'Emotion',
    type: 'likert'
  },
  {
    id: 'emo_shame',
    text: 'Shame due to feeling inadequate',
    definition: 'Deep-seated inadequacy from feeling misunderstood.',
    example: 'Feeling shame over minor social mistakes.',
    category: 'Emotion',
    type: 'likert'
  },
  {
    id: 'emo_hypersensitivity',
    text: 'Hypersensitivity to emotions',
    definition: 'Experiencing emotions at a hyper-level.',
    example: 'Joy is exhilarating; sadness is crushing.',
    category: 'Emotion',
    type: 'likert'
  },
  {
    id: 'emo_processing',
    text: 'Time to process emotions',
    definition: 'Understanding emotions requires time.',
    example: 'Taking time to grasp a friend\'s sadness before responding.',
    category: 'Emotion',
    type: 'likert'
  },
  {
    id: 'emo_facial_use',
    text: 'Utilize facial expressions to express self',
    definition: 'Capable of using expressions even if not in sync with feelings.',
    example: 'Putting on a happy face while feeling overwhelmed.',
    category: 'Emotion',
    type: 'likert'
  },
  {
    id: 'emo_offend',
    text: 'Not telling truth to intentionally offend',
    definition: 'Direct honesty is not meant to be cruel.',
    example: 'Stating a haircut looks messy to be helpful, not mean.',
    category: 'Emotion',
    type: 'likert'
  },

  // IV. Sensory Processing and Motor Skills
  {
    id: 'sens_sensitivities',
    text: 'Which of the following sensory sensitivities do you experience? (Select all that apply)',
    definition: 'Over- or under-reaction to sensory stimuli.',
    example: 'Fluorescent lights are constantly irritating, or tags in clothes feel like sandpaper.',
    category: 'Sensory',
    type: 'multi-select',
    options: [
      { value: 'light', label: 'Light (e.g., fluorescent lights, sun)' },
      { value: 'sound', label: 'Sound (e.g., loud noises, chewing)' },
      { value: 'texture', label: 'Texture (e.g., clothing tags, food)' },
      { value: 'smell', label: 'Smell (e.g., perfumes, food odors)' },
      { value: 'touch', label: 'Touch (e.g., light touch, hugs)' },
      { value: 'temperature', label: 'Temperature (e.g., heat, cold)' }
    ]
  },
  {
    id: 'sens_hyper_hypo',
    text: 'Hypersensitivity or Hyposensitivity',
    definition: 'Senses are heightened or dulled.',
    example: 'Wool is painful (hyper) or not feeling a burn (hypo).',
    category: 'Sensory',
    type: 'likert'
  },
  {
    id: 'sens_seeking',
    text: 'Sensory seeking behaviors',
    definition: 'Repetitive movements to self-regulate.',
    example: 'Chewing a pen cap or tapping fingers to calm down.',
    category: 'Sensory',
    type: 'likert'
  },
  {
    id: 'sens_pain_temp',
    text: 'Hyposensitivity to pain/temp',
    definition: 'Reduced sensitivity to pain or temperature.',
    example: 'Not realizing you have a cut until you see it.',
    category: 'Sensory',
    type: 'likert'
  },
  {
    id: 'sens_clumsiness',
    text: 'Lack of coordination / clumsiness',
    definition: 'Challenges with motor skills and spatial awareness.',
    example: 'Tripping over feet or dropping objects.',
    category: 'Sensory',
    type: 'likert'
  },
  {
    id: 'sens_fine_motor',
    text: 'Difficulty with fine motor skills',
    definition: 'Challenges with small, precise movements.',
    example: 'Difficulty tying shoelaces or writing neatly.',
    category: 'Sensory',
    type: 'likert'
  },
  {
    id: 'sens_gross_motor',
    text: 'Difficulty with gross motor skills',
    definition: 'Challenges with large body movements.',
    example: 'Struggling to catch a ball.',
    category: 'Sensory',
    type: 'likert'
  },
  {
    id: 'sens_balance',
    text: 'Difficulty with balance',
    definition: 'Struggle to maintain equilibrium.',
    example: 'Difficulty standing still without swaying.',
    category: 'Sensory',
    type: 'likert'
  },
  {
    id: 'sens_proprioception',
    text: 'Difficulty with proprioception',
    definition: 'Challenges sensing where body is in space.',
    example: 'Not knowing if arm is raised without looking.',
    category: 'Sensory',
    type: 'likert'
  },
  {
    id: 'sens_spatial',
    text: 'Difficulty with spatial awareness',
    definition: 'Struggle to know body relation to objects.',
    example: 'Bumping into people because you don\'t know your space.',
    category: 'Sensory',
    type: 'likert'
  },
  {
    id: 'sens_visual',
    text: 'Difficulty with visual processing',
    definition: 'Challenges making sense of visual info.',
    example: 'Hard to follow a complex map.',
    category: 'Sensory',
    type: 'likert'
  },
  {
    id: 'sens_auditory',
    text: 'Difficulty with auditory processing',
    definition: 'Struggle to make sense of auditory info.',
    example: 'Remembering only the first instruction in a series.',
    category: 'Sensory',
    type: 'likert'
  },
  {
    id: 'sens_tactile',
    text: 'Difficulty with tactile processing',
    definition: 'Struggle to make sense of tactile info.',
    example: 'Trouble identifying an object by touch alone.',
    category: 'Sensory',
    type: 'likert'
  },
  {
    id: 'sens_touch_resist',
    text: 'Resistance to being touched',
    definition: 'Strong aversion to physical touch.',
    example: 'Disliking hugs or cutting tags out of clothes.',
    category: 'Sensory',
    type: 'likert'
  },
  {
    id: 'sens_textures',
    text: 'Sensitivity to textures',
    definition: 'Strong aversion to certain textures (food/clothes).',
    example: 'Gagging on soft foods.',
    category: 'Sensory',
    type: 'likert'
  },
  {
    id: 'sens_interoception',
    text: 'Interoception issues',
    definition: 'Difficulty sensing internal body signals.',
    example: 'Not realizing hunger until faint.',
    category: 'Sensory',
    type: 'likert'
  },

  // V. Interests, Routines, and Executive Functioning
  {
    id: 'exec_transitions',
    text: 'Difficulty with transitions',
    definition: 'Struggling to shift from one activity to another.',
    example: 'Anxiety when told to stop reading for dinner.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_change',
    text: 'Difficulty with change',
    definition: 'Anxiety from unexpected changes.',
    example: 'Stress when a commute is rerouted.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_routine',
    text: 'Need for routine',
    definition: 'Preference for set routine for comfort.',
    example: 'Feeling "wrong" if a morning routine step is missed.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_interests',
    text: 'Strong interest in specific topics',
    definition: 'Deep passion for a subject.',
    example: 'Researching ancient coins for months.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_functioning',
    text: 'Difficulty with executive functioning',
    definition: 'Struggle with organizing thoughts and actions.',
    example: 'Hard to start a project and break it down.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_prioritizing',
    text: 'Difficulty prioritizing',
    definition: 'Struggle to determine importance of tasks.',
    example: 'Paralyzed deciding between laundry and bills.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_decisions',
    text: 'Challenges making decisions',
    definition: 'Struggling to choose, overwhelmed by options.',
    example: 'Spending an hour choosing pasta.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_multitasking',
    text: 'Difficulty in multitasking',
    definition: 'Inability to focus on more than one task.',
    example: 'Cannot talk while reading email.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_inward',
    text: 'Inward focus to specific interests',
    definition: 'Focusing energy on passions over social pursuits.',
    example: 'Absorbed in model trains while friends discuss trends.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_hyperfocus',
    text: 'Hyperfocus and flow state',
    definition: 'Intense absorption losing sense of time.',
    example: 'Coding for 8 hours without eating.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_expertise',
    text: 'Intense expertise and interests',
    definition: 'Passions evolve into deep expertise.',
    example: 'Knowing every musician on every track of a band.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_familiarity',
    text: 'Strong preference for familiarity',
    definition: 'Comfort in known places and routines.',
    example: 'Eating at the same restaurant every night on vacation.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_predictability',
    text: 'Strong need for predictability',
    definition: 'Thriving in consistent environments.',
    example: 'Feeling calm when daily schedule is predictable.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_learning',
    text: 'Distinctive learning styles',
    definition: 'Needing specific ways to learn (visual, hands-on).',
    example: 'Learning from video but not lecture.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_time_mgmt',
    text: 'Difficulty with time management',
    definition: 'Struggling to estimate time or manage deadlines.',
    example: 'A project takes 3 hours instead of 1.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_autonomy',
    text: 'Strong need for autonomy',
    definition: 'Desire to control own life and choices.',
    example: 'Disliking micromanagement.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_daily_activities',
    text: 'Reliance on daily activities',
    definition: 'Small activities crucial for regulation.',
    example: 'Morning coffee is a vital structure, not just a drink.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_multistep',
    text: 'Difficulty with multi-step instructions',
    definition: 'Overwhelmed by too many steps.',
    example: 'Shutting down when given a 5-part project.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_solo',
    text: 'Preference for solo activities',
    definition: 'Enjoying activities alone.',
    example: 'Building a model kit alone vs social gathering.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_establish_routine',
    text: 'Difficulty establishing a daily routine',
    definition: 'Struggle to create consistent habits.',
    example: 'Hard to stick to exercise at the same time.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_dopamine',
    text: 'ADHD dopamine-seeking behavior',
    definition: 'Need for high stimulation.',
    example: 'Playing video games for hours to engage brain.',
    category: 'Executive Function',
    type: 'likert'
  },
  {
    id: 'exec_overcommit',
    text: 'Not over-committing',
    definition: 'Cautious about new responsibilities to avoid burnout.',
    example: 'Thinking long before agreeing to a committee.',
    category: 'Executive Function',
    type: 'likert'
  },

  // VI. Honesty, Trust, and Deception
  {
    id: 'hon_lies',
    text: 'Less inclined to tell lies',
    definition: 'Natural preference for truth.',
    example: 'Preferring honesty over deception.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_deception_skill',
    text: 'Less skilled in deception',
    definition: 'Struggle to maintain a believable lie.',
    example: 'Giving away clues when being dishonest.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_innocence',
    text: 'Appearance of moral innocence',
    definition: 'Perceived as trustworthy or naive.',
    example: 'Seen as pure due to directness.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_objection',
    text: 'Objection against deception',
    definition: 'Strong ethical opposition to lying.',
    example: 'Feeling lying is wrong in any form.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_anxiety',
    text: 'Lying is anxiety-provoking',
    definition: 'Lying causes high stress.',
    example: 'Feeling intense stress when telling a lie.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_falsehoods',
    text: 'Difficulty distinguishing falsehoods',
    definition: 'Seeing all lies as equally wrong.',
    example: 'White lies feel as bad as serious ones.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_context',
    text: 'Difficulty with context of lying',
    definition: 'Struggle to know when lying is appropriate.',
    example: 'Not understanding social white lies.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_fairness',
    text: 'Strong sense of fairness',
    definition: 'Powerful desire for justice.',
    example: 'Wanting things to be fair above all.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_directness',
    text: 'Directness and honesty',
    definition: 'Speaking mind without filter.',
    example: 'Being sincere and authentic.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_facts',
    text: 'Priority is facts',
    definition: 'Valuing factual info above all.',
    example: 'Focusing on facts in discussion.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_real_feedback',
    text: 'Preference for real feedback',
    definition: 'Wanting unvarnished truth.',
    example: 'Frustrated by sugarcoated truth.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_sugarcoat',
    text: 'Dislike of sugarcoating',
    definition: 'Frustrated by softened truth.',
    example: 'Preferring harsh truth over nice lies.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_offensive',
    text: 'Unaware of offense',
    definition: 'Cannot predict if honesty is offensive.',
    example: 'Surprised when directness hurts feelings.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_infantilizing',
    text: 'Disguised feelings seen as infantilizing',
    definition: 'Finding white lies insulting.',
    example: 'Feeling insulted by "nice" versions of truth.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_compliments',
    text: 'Difficulty trusting compliments',
    definition: 'Assuming compliments are not genuine.',
    example: 'Doubting praise due to experience with "curated honesty".',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_comfort',
    text: 'Truth provides comfort',
    definition: 'Knowing truth is secure.',
    example: 'Feeling calm when knowing the unpleasant truth.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_deep_truths',
    text: 'Impossibility of lying about deep truths',
    definition: 'Physically impossible to lie about fundamental truths.',
    example: 'Cannot lie about core beliefs.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_rigidity',
    text: 'Rigidity of values',
    definition: 'Strong unyielding moral code.',
    example: 'Adhering strictly to personal morals.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_fake_thoughts',
    text: 'Difficulty building fake thoughts',
    definition: 'Struggle to maintain false narrative.',
    example: 'Hard to keep a lie going in mind.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_complicated',
    text: 'Honesty is less complicated',
    definition: 'Lying seen as messy effort.',
    example: 'Telling truth because it\'s easier.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_memory',
    text: 'Poor memory makes lying hard',
    definition: 'Hard to track lies.',
    example: 'Telling truth because you forget lies.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_credibility',
    text: 'Concern about credibility',
    definition: 'High value on being trusted.',
    example: 'Wanting to be seen as trustworthy.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_sucking',
    text: 'Perceived as bad at lying',
    definition: 'Others tell when you lie.',
    example: 'Being caught in lies easily.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_conscience',
    text: 'Great conscience',
    definition: 'Deep moral conviction.',
    example: 'Desire to see things made right.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_integrity',
    text: 'Loyal with integrity',
    definition: 'Adhering to moral code.',
    example: 'Being a loyal person.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_need',
    text: 'Inherent need to be honest',
    definition: 'Fundamental need for honesty.',
    example: 'Feeling compelled to be honest.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_masking',
    text: 'Masking is lying',
    definition: 'Camouflaging is dishonesty.',
    example: 'Feeling masking is a form of lying.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_safety',
    text: 'Lying for safety',
    definition: 'Lying to protect self.',
    example: 'Lying when safety is at risk.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_impress',
    text: 'Lying to impress',
    definition: 'Lying for social acceptance.',
    example: 'Exaggerating to fit in.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_feelings',
    text: 'Difficulty lying about feelings',
    definition: 'Struggle to misrepresent emotions.',
    example: 'Cannot hide true feelings.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_opinion',
    text: 'Saying what one thinks',
    definition: 'Giving unvarnished opinion.',
    example: 'Answering honestly when asked.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_omission',
    text: 'Sugarcoating as omission',
    definition: 'Omitting bad parts instead of rephrasing.',
    example: 'Not mentioning negative details.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_universal',
    text: 'Valuing universal truth',
    definition: 'Concern with broad truths.',
    example: 'Thinking about big truths.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_comfort_lie',
    text: 'Inability to comfort with lies',
    definition: 'Cannot tell white lies to comfort.',
    example: 'Struggling to say "it will be okay" if it won\'t.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_roleplay',
    text: 'Roleplaying is creativity',
    definition: 'Acting is creative, not false.',
    example: 'Enjoying roleplay as art.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_trouble',
    text: 'Truth leads to trouble',
    definition: 'Honesty causes conflict.',
    example: 'Directness causing negative reactions.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_search',
    text: 'Dedicated to truth',
    definition: 'Drive to find and share truth.',
    example: 'Mission to reveal truth.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_extreme',
    text: 'Extreme honesty',
    definition: 'Directness seen as extreme.',
    example: 'Others see stance as extreme.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_disproportionate',
    text: 'Concerned with universal truth',
    definition: 'Thinking about science/politics truths.',
    example: 'Focusing on big picture truths.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_inform',
    text: 'Informing of real truth',
    definition: 'Duty to provide accurate info.',
    example: 'Correcting others with facts.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_disbelief',
    text: 'Inability to understand disbelief',
    definition: 'Confused when others reject truth.',
    example: 'Frustrated when facts are ignored.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_context_wrong',
    text: 'Honest answers not always right',
    definition: 'Aware truth isn\'t always socially appropriate.',
    example: 'Knowing truth might be rude.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_theme',
    text: 'Truth is central theme',
    definition: 'Truth guides actions.',
    example: 'Life guided by truth.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_exhausting',
    text: 'Masking is exhausting',
    definition: 'Pretending is draining.',
    example: 'Feeling drained by masking.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_radar',
    text: 'Truth radar',
    definition: 'Intuitive ability to detect lies.',
    example: 'Knowing when someone is dishonest.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_passion',
    text: 'Passion for cause',
    definition: 'Driven to reveal truth of a cause.',
    example: 'Fighting for a cause.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_braver',
    text: 'Braver for truth',
    definition: 'Need for truth stronger than fear.',
    example: 'Speaking up despite fear.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_research',
    text: 'Unsurpassed research',
    definition: 'Dedication supported by depth.',
    example: 'Researching topic in depth.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_partner',
    text: 'Avoid partner input',
    definition: 'Avoiding input to stay on agenda.',
    example: 'Making decisions alone to avoid emotional diversion.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_control',
    text: 'Control as coping',
    definition: 'Using control to manage anxiety.',
    example: 'Controlling situations to feel safe.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_black_white',
    text: 'Rigid black and white thinking',
    definition: 'Right and wrong are absolute.',
    example: 'Believing in absolute morality.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_secret',
    text: 'Secret reflects right way',
    definition: 'Keeping secret to ensure plan succeeds.',
    example: 'Not telling partner to avoid derailment.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_need_know',
    text: 'Need to know basis',
    definition: 'Partner not entitled to all info.',
    example: 'Withholding info deemed unnecessary.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_defy',
    text: 'Withholding to defy',
    definition: 'Withholding info to assert independence.',
    example: 'Not sharing to defy expectations.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_vindictive',
    text: 'Vindictive withholding',
    definition: 'Keeping info to punish.',
    example: 'Withholding to feel power.',
    category: 'Honesty',
    type: 'likert'
  },
  {
    id: 'hon_omission_lie',
    text: 'Omitting is not lying',
    definition: 'Not saying isn\'t lying.',
    example: 'Believing silence is not deception.',
    category: 'Honesty',
    type: 'likert'
  },

  // VII. Self-Perception and Internalized Stigma
  {
    id: 'self_awareness',
    text: 'Difficulty with self-awareness',
    definition: 'Struggle to understand own strengths/weaknesses.',
    example: 'Not knowing own motivations.',
    category: 'Self-Perception',
    type: 'likert'
  },
  {
    id: 'self_monitoring',
    text: 'Difficulty in self-monitoring',
    definition: 'Struggle to reflect on behavior.',
    example: 'Not realizing how you acted in social interaction.',
    category: 'Self-Perception',
    type: 'likert'
  },
  {
    id: 'self_place',
    text: 'Feeling out of place',
    definition: 'Constant feeling of not belonging.',
    example: 'Feeling different from everyone else.',
    category: 'Self-Perception',
    type: 'likert'
  },
  {
    id: 'self_inferior',
    text: 'Believing inferior',
    definition: 'Perception of being less capable.',
    example: 'Feeling less valuable than peers.',
    category: 'Self-Perception',
    type: 'likert'
  },
  {
    id: 'self_relationships',
    text: 'Believing cannot enjoy relationships',
    definition: 'Belief incapable of deep connection.',
    example: 'Thinking you can\'t have close friends.',
    category: 'Self-Perception',
    type: 'likert'
  },
  {
    id: 'self_community',
    text: 'Believing cannot participate in community',
    definition: 'Feeling unable to contribute.',
    example: 'Not joining groups due to feeling unable.',
    category: 'Self-Perception',
    type: 'likert'
  },
  {
    id: 'self_doomed',
    text: 'Believing life is doomed',
    definition: 'Hopelessness about future.',
    example: 'Feeling perpetually the odd one out.',
    category: 'Self-Perception',
    type: 'likert'
  },
  {
    id: 'self_wrong',
    text: 'Sensing doing wrong thing',
    definition: 'Feeling of making mistakes.',
    example: 'Feeling inappropriate without knowing why.',
    category: 'Self-Perception',
    type: 'likert'
  },
  {
    id: 'self_societal',
    text: 'Attributes negative experiences to society',
    definition: 'Recognizing mismatch with society.',
    example: 'Blaming societal expectations, not self.',
    category: 'Self-Perception',
    type: 'likert'
  },
  {
    id: 'self_masking',
    text: 'Masking and camouflaging',
    definition: 'Suppressing self to fit in.',
    example: 'Hiding autistic traits.',
    category: 'Self-Perception',
    type: 'likert'
  },
  {
    id: 'self_depression',
    text: 'Others not accepting truth leads to depression',
    definition: 'Honesty rejection causes sadness.',
    example: 'Depressed when truth is ignored.',
    category: 'Self-Perception',
    type: 'likert'
  },
  {
    id: 'self_loud',
    text: 'Being loud as unmasking',
    definition: ' energetic communication when safe.',
    example: 'Chatty when comfortable.',
    category: 'Self-Perception',
    type: 'likert'
  },
  {
    id: 'self_cautious',
    text: 'Cautious taking challenges',
    definition: 'Hesitant due to past negatives.',
    example: 'Afraid to try new things.',
    category: 'Self-Perception',
    type: 'likert'
  },
  {
    id: 'self_optimistic',
    text: 'Not eternally optimistic',
    definition: 'Realistic/pessimistic outlook.',
    example: 'Expecting challenges.',
    category: 'Self-Perception',
    type: 'likert'
  },
  {
    id: 'self_judgments',
    text: 'Experiencing negative judgments',
    definition: 'Being labeled rude/lazy.',
    example: 'Self-esteem hit by labels.',
    category: 'Self-Perception',
    type: 'likert'
  },

  // VIII. Responsibility and Hypervigilance
  {
    id: 'resp_hypervigilance',
    text: 'Responsibility Hypervigilance',
    definition: 'Extreme alertness for things needing attention.',
    example: 'Constantly scanning for missed details.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_exhaustion',
    text: 'Leads to exhaustion',
    definition: 'Constant alertness is draining.',
    example: 'Burnout from constant checking.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_looking',
    text: 'Actively looking',
    definition: 'Scanning environment for misses.',
    example: 'Checking and double-checking.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_transition',
    text: 'Difficulty transitioning away from tasks',
    definition: 'Struggle to let go of task.',
    example: 'Obsessively perfecting completed task.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_good_enough',
    text: 'Difficulty accepting "good enough"',
    definition: 'Must be perfect.',
    example: 'Cannot stop until perfect.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_future',
    text: 'Tracking future commitments',
    definition: 'Mental load of future tasks.',
    example: 'Cannot relax due to future list.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_turning_off',
    text: 'Difficulty turning off between tasks',
    definition: 'Cannot stop thinking about previous task.',
    example: 'Mind stuck on last task.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_finish_list',
    text: 'Needing to finish list to rest',
    definition: 'Guilt if resting before done.',
    example: 'Must finish everything to relax.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_future_focus',
    text: 'Future tasks block current focus',
    definition: 'Preoccupied with upcoming.',
    example: 'Cannot focus on now due to later.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_paralyzed',
    text: 'Experiencing paralyzed state',
    definition: 'Overwhelmed by list.',
    example: 'Stuck doing nothing due to overwhelm.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_instructions',
    text: 'Meticulously reading instructions',
    definition: 'Extreme thoroughness.',
    example: 'Reading every word.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_research',
    text: 'Extensively researching products',
    definition: 'Must know everything before buying.',
    example: 'Researching for hours.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_social_relax',
    text: 'Difficulty relaxing at social events',
    definition: 'Thinking about work tomorrow.',
    example: 'Cannot be present at party.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_thoroughness',
    text: 'Thoroughness',
    definition: 'Going above and beyond.',
    example: 'Detailed in everything.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_productivity',
    text: 'Extreme productivity',
    definition: 'High efficiency when focused.',
    example: 'Working at high level.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_quality',
    text: 'High quality of work',
    definition: 'Exceptional results in strengths.',
    example: 'Great results in natural talents.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_mediocre',
    text: 'Long time for mediocre results',
    definition: 'Effort doesn\'t match result in weaknesses.',
    example: 'Spending hours on hard task for okay result.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_improvement',
    text: 'Predisposition to improvement',
    definition: 'Searching for better ways.',
    example: 'Always fixing things.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_lookout',
    text: 'Role of lookout',
    definition: 'Noticing problems in group.',
    example: 'Spotting overlooked issues.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_perfectionist',
    text: 'Appearing perfectionist',
    definition: 'Coping mechanism for anxiety.',
    example: 'Fear of missing something drives detail.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_effort',
    text: 'Putting lot of effort',
    definition: 'All or nothing approach.',
    example: 'Giving 100% to everything.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_no_medium',
    text: 'No medium setting',
    definition: 'Burning brightly or not at all.',
    example: 'Intense engagement.',
    category: 'Responsibility',
    type: 'likert'
  },
  {
    id: 'resp_maintenance',
    text: 'Hard to focus on maintenance',
    definition: 'Mundane tasks are hard.',
    example: 'Struggling with repetitive tasks.',
    category: 'Responsibility',
    type: 'likert'
  },
  // ADHD Types (Dr. Amen) - Simplified for Assessment
  {
    id: 'adhd_classic',
    text: 'Classic ADD Symptoms',
    definition: 'Inattentive, distractible, hyperactive, disorganized, and impulsive.',
    example: 'Difficulty sitting still and paying attention.',
    category: 'ADHD Type',
    subcategory: 'Classic',
    type: 'likert'
  },
  {
    id: 'adhd_inattentive',
    text: 'Inattentive ADD Symptoms',
    definition: 'Short attention span, distractible, disorganized, procrastination. Not hyperactive.',
    example: 'Daydreaming frequently and losing things.',
    category: 'ADHD Type',
    subcategory: 'Inattentive',
    type: 'likert'
  },
  {
    id: 'adhd_overfocused',
    text: 'Over-Focused ADD Symptoms',
    definition: 'Trouble shifting attention, stuck in loops, worrying.',
    example: 'Getting stuck on a negative thought and unable to let it go.',
    category: 'ADHD Type',
    subcategory: 'Over-Focused',
    type: 'likert'
  },
  {
    id: 'adhd_temporal',
    text: 'Temporal Lobe ADD Symptoms',
    definition: 'Mood instability, aggression, memory issues.',
    example: 'Quick temper and periods of panic or fear.',
    category: 'ADHD Type',
    subcategory: 'Temporal Lobe',
    type: 'likert'
  },
  {
    id: 'adhd_limbic',
    text: 'Limbic ADD Symptoms',
    definition: 'Moodiness, low energy, social isolation, guilt.',
    example: 'Chronic low-level sadness and negativity.',
    category: 'ADHD Type',
    subcategory: 'Limbic',
    type: 'likert'
  },
  {
    id: 'adhd_ring_fire',
    text: 'Ring of Fire ADD Symptoms',
    definition: 'Sensitivity to noise/light, rapid mood swings, anxiety.',
    example: 'Overwhelmed by sensory input and racing thoughts.',
    category: 'ADHD Type',
    subcategory: 'Ring of Fire',
    type: 'likert'
  },
  {
    id: 'adhd_anxious',
    text: 'Anxious ADD Symptoms',
    definition: 'Anxiety, tension, freezing, conflict avoidance.',
    example: 'Physical stress symptoms like headaches and freezing in stressful situations.',
    category: 'ADHD Type',
    subcategory: 'Anxious',
    type: 'likert'
  }
];
