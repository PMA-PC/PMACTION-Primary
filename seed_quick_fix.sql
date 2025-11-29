-- Quick fix to populate content_data for Day 1 of Codependency challenge
-- This will allow you to see the lesson page working

DO $$
DECLARE
    v_challenge_id INTEGER;
BEGIN
    -- Get the codependency challenge ID
    SELECT id INTO v_challenge_id FROM challenges WHERE slug = 'codependency-7-day';
    
    -- Update Day 1 with sample content_data
    UPDATE challenge_tasks 
    SET content_data = '{
        "modules": [
            {
                "id": "d1m1",
                "name": "What is Codependency?",
                "duration": "15 min",
                "points": 100,
                "content": {
                    "intro": "Understanding the core patterns of codependency",
                    "topics": [
                        "Definition and origins",
                        "Common characteristics",
                        "How it develops",
                        "Impact on relationships"
                    ],
                    "keyPoints": [
                        "Codependency is a learned behavior",
                        "It often stems from childhood experiences",
                        "Recovery is possible with awareness",
                        "You are not alone in this journey"
                    ]
                },
                "quiz": [
                    {
                        "question": "Codependency is best described as:",
                        "options": [
                            "A personality disorder",
                            "A learned pattern of behavior",
                            "A sign of weakness",
                            "An untreatable condition"
                        ],
                        "correct": 1,
                        "explanation": "Codependency is a learned behavioral pattern that develops over time, often in response to family dynamics or relationships."
                    }
                ],
                "exercise": {
                    "type": "journal",
                    "title": "Recognizing Patterns",
                    "prompts": [
                        "What codependent patterns do you recognize in yourself?",
                        "When did you first notice these patterns?",
                        "How do these patterns affect your relationships?"
                    ]
                }
            },
            {
                "id": "d1m2",
                "name": "Shame vs. Guilt",
                "duration": "15 min",
                "points": 100,
                "content": {
                    "intro": "Understanding the difference between healthy guilt and toxic shame",
                    "topics": [
                        "Guilt: I did something bad",
                        "Shame: I am bad",
                        "How shame fuels codependency",
                        "Breaking the shame cycle"
                    ],
                    "keyPoints": [
                        "Guilt can be productive, shame is destructive",
                        "Shame thrives in secrecy",
                        "Speaking shame reduces its power",
                        "Self-compassion is the antidote"
                    ]
                },
                "quiz": [
                    {
                        "question": "The key difference between shame and guilt is:",
                        "options": [
                            "Shame is about behavior, guilt is about identity",
                            "Guilt is about behavior, shame is about identity",
                            "They are the same thing",
                            "Guilt is worse than shame"
                        ],
                        "correct": 1,
                        "explanation": "Guilt says ''I did something bad'' (behavior), while shame says ''I am bad'' (identity). This distinction is crucial for healing."
                    }
                ],
                "exercise": {
                    "type": "journal",
                    "title": "Shame Inventory",
                    "prompts": [
                        "What shame messages did you receive growing up?",
                        "How does shame show up in your life today?",
                        "What would it feel like to release this shame?"
                    ]
                }
            },
            {
                "id": "d1m3",
                "name": "Boundaries Basics",
                "duration": "15 min",
                "points": 100,
                "content": {
                    "intro": "Introduction to healthy boundaries",
                    "topics": [
                        "What boundaries are (and aren''t)",
                        "Types of boundaries",
                        "Why codependents struggle with boundaries",
                        "Starting to set boundaries"
                    ],
                    "keyPoints": [
                        "Boundaries protect your energy and well-being",
                        "Boundaries are not walls",
                        "You have the right to say no",
                        "Boundaries improve relationships"
                    ]
                },
                "quiz": [
                    {
                        "question": "Healthy boundaries are:",
                        "options": [
                            "Walls that keep everyone out",
                            "Selfish and mean",
                            "Limits that protect your well-being",
                            "Only necessary in toxic relationships"
                        ],
                        "correct": 2,
                        "explanation": "Healthy boundaries are limits that protect your physical, emotional, and mental well-being while allowing for genuine connection."
                    }
                ],
                "exercise": {
                    "type": "journal",
                    "title": "Boundary Awareness",
                    "prompts": [
                        "Where do you lack boundaries in your life?",
                        "What makes it hard for you to set boundaries?",
                        "What is one small boundary you could set this week?"
                    ]
                }
            }
        ],
        "dailyChallenge": {
            "title": "Awareness Practice",
            "description": "Notice one codependent pattern today without judgment",
            "points": 100
        }
    }'::jsonb
    WHERE challenge_id = v_challenge_id AND day_number = 1;
    
    RAISE NOTICE 'Updated Day 1 content for codependency challenge';
END $$;
