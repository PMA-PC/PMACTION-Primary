-- Test Enhanced Content Format
-- This will update Day 1, Module 1 of the codependency challenge with comprehensive content

DO $$
DECLARE
    v_challenge_id INTEGER;
BEGIN
    -- Get the codependency challenge ID
    SELECT id INTO v_challenge_id FROM challenges WHERE slug = 'codependency-7-day';
    
    -- Update the task with enhanced content
    UPDATE challenge_tasks 
    SET content_data = $json${
      "modules": [
        {
          "id": "d1m1",
          "name": "What is Codependency?",
          "duration": "45 min",
          "estimatedReadTime": "12 min",
          "points": 100,
          "content": {
            "overview": "Codependency is one of the most misunderstood yet prevalent patterns in modern relationships. Far from being a simple personality quirk or preference for closeness, codependency represents a profound loss of self that develops over time, often rooted in childhood experiences. This module will help you understand what codependency truly is, how it differs from healthy connection, and why recognizing it is the crucial first step toward recovery and building authentic relationships.\n\nYou'll learn the clinical definition, explore real-world examples, and begin to identify patterns in your own life. By the end of this module, you'll have a clear framework for understanding codependency and the tools to start your journey toward healthier relationships.",
            
            "sections": [
              {
                "title": "Definition & Core Concepts",
                "content": "Codependency is a pattern of excessive emotional or psychological reliance on another person, characterized by a loss of independent identity and sense of self. The term originated in the 1980s through the work of Melody Beattie and others studying families affected by addiction, but it has since been recognized as a broader relational pattern that can occur in any type of relationship.\n\nAt its core, codependency involves organizing your life around another person to such an extent that you lose touch with your own needs, feelings, and identity. Your mood becomes dependent on their mood. Your self-worth hinges on their approval. Your sense of purpose comes from taking care of them or managing their problems. This isn't the same as caring deeply about someone or being supportive—it's a compulsive pattern where you feel you cannot function or be okay unless the other person is okay.\n\nThe key distinction is between codependency and healthy interdependence. In healthy relationships, you maintain your individual identity while being connected to others. You have your own interests, friends, values, and goals. You can support your partner while also maintaining boundaries and self-care. In codependency, these boundaries dissolve. You become enmeshed, unable to distinguish where you end and the other person begins.\n\nClinically, codependency is characterized by several core features: low self-esteem that depends on external validation, people-pleasing behaviors that sacrifice your own needs, poor or nonexistent boundaries, excessive caretaking that goes beyond healthy support, difficulty identifying and expressing your own feelings, and an overwhelming sense of responsibility for others' emotions and behaviors. These aren't occasional tendencies—they're pervasive patterns that shape how you relate to everyone in your life.",
                
                "examples": [
                  {
                    "scenario": "Sarah's Work Situation",
                    "analysis": "Sarah works in marketing and has a colleague, Tom, who frequently misses deadlines. Rather than letting Tom face the natural consequences, Sarah stays late to finish his work, makes excuses to their boss on his behalf, and feels anxious and guilty when she considers not helping. She tells herself she's being a good team player, but the reality is that her self-worth has become tied to being needed. When Tom doesn't thank her or seems ungrateful, Sarah feels devastated and resentful, yet she continues the pattern.",
                    "outcome": "Sarah's codependent pattern prevents Tom from learning accountability while leaving her exhausted, resentful, and unable to focus on her own career growth. Her identity has become 'the person who fixes Tom's problems' rather than a skilled professional with her own goals. This is codependency in action—losing yourself in the role of caretaker."
                  },
                  {
                    "scenario": "Marcus's Romantic Relationship",
                    "analysis": "Marcus has been with his partner for three years. His partner struggles with depression and frequently cancels plans, withdraws emotionally, and makes critical comments. Marcus has stopped seeing his friends, given up hobbies he loved, and walks on eggshells to avoid upsetting his partner. He constantly monitors his partner's mood and feels responsible for making them happy. When his partner is having a bad day, Marcus feels like a failure. When they're doing well, Marcus feels validated and worthy.",
                    "outcome": "Marcus has lost his sense of self entirely. His mood, self-worth, and daily choices are all determined by his partner's emotional state. He's not in a relationship—he's merged with another person, abandoning his own identity in the process. This level of enmeshment is a hallmark of codependency."
                  }
                ]
              }
            ],
            
            "keyTakeaways": [
              "Codependency is a learned pattern of losing yourself in relationships, not a character flaw or personality type",
              "It typically develops in childhood as an adaptation to unstable, neglectful, or traumatic environments",
              "Codependency differs from healthy interdependence—you lose your identity rather than maintaining it while connected"
            ]
          },
          
          "quiz": [
            {
              "question": "What is the main difference between codependency and healthy interdependence?",
              "options": [
                "Codependency maintains individual identity, interdependence doesn't",
                "Codependency involves loss of self and identity, interdependence maintains sense of self while being connected",
                "There is no difference between them",
                "Interdependence is always unhealthy"
              ],
              "correct": 1,
              "explanation": "In codependency, you lose your sense of self and identity, organizing your entire life around another person. In healthy interdependence, you maintain your individual identity, needs, and boundaries while being meaningfully connected to others."
            }
          ],
          
          "exercise": {
            "title": "Codependency Self-Assessment",
            "type": "journal",
            "instructions": "Take your time with these questions. Be honest with yourself.",
            "prompts": [
              "Check all statements that resonate with you: I feel responsible for other people's feelings, I have difficulty saying no, I feel anxious when others are upset",
              "What patterns do you notice? When did you first start feeling this way?",
              "Think of a recent situation where you felt responsible for someone else's emotions. Describe what happened."
            ]
          }
        }
      ]
    }$json$::jsonb
    WHERE challenge_id = v_challenge_id AND day_number = 1;
    
    RAISE NOTICE 'Updated Day 1 with enhanced content format';
END $$;
