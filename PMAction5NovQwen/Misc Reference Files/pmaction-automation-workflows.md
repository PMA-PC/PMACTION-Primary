# PMAction - Complete Automation & Integration Architecture

## Overview
This document provides the complete automation workflows, integration requirements, and operational procedures needed to run PMAction without constant manual intervention.

---

## 1. n8n Workflow Architecture

### Core Automation Workflows

#### Workflow 1: User Onboarding & Welcome Sequence

**Trigger:** New user account created
**Tools Required:** n8n, SendGrid, PostgreSQL, Google Analytics

```
[Webhook: User Signup] 
    ↓
[PostgreSQL: Insert user record]
    ↓
[SendGrid: Send welcome email]
    ↓
[Wait 5 minutes]
    ↓
[Check: Has user completed onboarding?]
    ├─ YES → [Tag as "onboarded" in database]
    └─ NO → [SendGrid: Reminder email "Complete your profile"]
        ↓
        [Wait 24 hours]
        ↓
        [Check again: Onboarding complete?]
            ├─ YES → End
            └─ NO → [SendGrid: "Need help getting started?"]
                    [Create support ticket in CRM]
```

**Email Templates Needed:**
- Welcome email with security highlights
- Onboarding reminder (sent if not completed in 5 minutes)
- "Getting started" tips (sent 24 hours after signup)
- Support outreach (48 hours, if still no activity)

**Implementation Details:**
```javascript
// n8n Custom Function Node: Check Onboarding Status
const userId = $input.item.json.user_id;
const query = `
  SELECT 
    profile_completed,
    assessment_taken,
    challenge_selected
  FROM user_onboarding_status 
  WHERE user_id = $1
`;
const result = await $executeQuery(query, [userId]);
const isComplete = result.profile_completed && result.assessment_taken;
return { complete: isComplete, userId: userId };
```

---

#### Workflow 2: Daily Habit Reminder System

**Trigger:** Cron job (runs at 6 AM, 12 PM, 6 PM daily)
**Tools Required:** n8n, Twilio, Firebase Cloud Messaging, PostgreSQL

```
[Cron: Daily at configured times]
    ↓
[PostgreSQL: Query users with active habits]
    ↓
[Filter: User preference for reminder time matches current time]
    ↓
[For Each User:]
    ├─ [Get uncompleted habits for today]
    ├─ [Check: User prefers push vs SMS vs email]
    ├─ [Firebase/Twilio/SendGrid: Send personalized reminder]
    └─ [Log reminder sent in database]
```

**Personalization Logic:**
```javascript
// n8n Function: Generate Personalized Reminder
const user = $input.item.json;
const habits = user.uncompleted_habits;

// Calculate streak to include in message
const longestStreak = Math.max(...habits.map(h => h.current_streak));

const messages = {
  high_streak: `🔥 ${longestStreak}-day streak! Keep it going - complete your ${habits[0].name} today.`,
  new_habit: `🌱 Building new habits takes time. Ready to tackle "${habits[0].name}"?`,
  missed_yesterday: `No worries about yesterday. Fresh start today - ${habits.length} habit${habits.length > 1 ? 's' : ''} waiting.`,
  default: `✨ Time for your daily habits! You've got ${habits.length} to complete.`
};

// Sentiment-based selection
let message = messages.default;
if (longestStreak > 7) message = messages.high_streak;
else if (user.missed_yesterday) message = messages.missed_yesterday;
else if (habits.some(h => h.days_since_created < 7)) message = messages.new_habit;

return { message, userId: user.id, channel: user.preferred_reminder };
```

---

#### Workflow 3: Challenge Progress & Celebration

**Trigger:** User completes challenge activity
**Tools Required:** n8n, PostgreSQL, SendGrid, Firebase

```
[Webhook: Activity Completed]
    ↓
[PostgreSQL: Update progress, award points]
    ↓
[Check: Is this final activity?]
    ├─ YES → [Challenge Complete Path]
    │   ├─ [Award bonus points + badge]
    │   ├─ [SendGrid: Celebration email]
    │   ├─ [Firebase: Push notification with confetti]
    │   ├─ [AI: Generate next challenge recommendation]
    │   └─ [Create "recommendation ready" notification]
    │
    └─ NO → [Progress Update Path]
        ├─ [Firebase: Simple "Great work!" notification]
        ├─ [Check: Milestone reached? (25%, 50%, 75%)]
        │   └─ YES → [SendGrid: Encouragement email]
        └─ [Update user dashboard]
```

**Celebration Email Template Variables:**
- Challenge name
- Completion date
- Points earned
- Badge unlocked
- Next recommended challenge (from AI)
- Social share option (optional)

---

#### Workflow 4: AI Recommendation Engine Trigger

**Trigger:** Multiple events (challenge completion, assessment taken, 7 days of inactivity)
**Tools Required:** n8n, Python/FastAPI microservice, PostgreSQL, Google Vertex AI

```
[Event Trigger: Multiple sources]
    ↓
[Aggregate user data:]
    ├─ Recent mood logs (14 days)
    ├─ Journal sentiment scores
    ├─ Challenge completion rate
    ├─ Habit adherence
    └─ Assessment scores
    ↓
[HTTP Request: POST to AI microservice]
    ↓
[AI Microservice: Generate recommendations]
    ├─ Next challenge (3 options)
    ├─ Blog articles (5 relevant)
    ├─ Quiz suggestion
    └─ Therapist recommendation flag (if scores indicate)
    ↓
[PostgreSQL: Store recommendations]
    ↓
[Firebase: Push notification "New recommendations for you"]
    ↓
[Check: Therapist flag = true?]
    └─ YES → [SendGrid: "Consider talking to someone" email]
                [Link to Headway therapist search]
```

**AI Microservice API Specification:**
```json
POST /api/recommendations/generate
{
  "user_id": "uuid",
  "mood_logs": [{"date": "2026-01-15", "rating": 3, "sentiment": -0.2}],
  "challenges": {"completed": 2, "abandoned": 1, "current_progress": 0.6},
  "assessments": {"phq9": 8, "gad7": 12},
  "preferences": {"topics": ["anxiety", "relationships"], "difficulty": "beginner"}
}

Response:
{
  "challenge_recommendations": [
    {
      "challenge_id": "uuid",
      "title": "Overcoming Social Anxiety",
      "confidence_score": 0.89,
      "reason": "Your recent assessment indicates mild anxiety and journal entries mention social situations"
    }
  ],
  "blog_articles": [...],
  "therapist_recommendation": true,
  "urgency_level": "moderate"
}
```

---

#### Workflow 5: Subscription Management & Billing

**Trigger:** Stripe webhook events
**Tools Required:** n8n, Stripe, PostgreSQL, SendGrid

```
[Stripe Webhook: subscription.created]
    ↓
[PostgreSQL: Update user.subscription_tier = 'premium']
    ↓
[PostgreSQL: Set subscription_end_date]
    ↓
[SendGrid: Welcome to Premium email]
    ↓
[Unlock premium features in user record]

[Stripe Webhook: invoice.payment_failed]
    ↓
[Increment failed_payment_count]
    ↓
[Check: First failure?]
    ├─ YES → [SendGrid: "Payment issue" email]
    │        [Wait 3 days, retry]
    └─ NO → [Check: Third failure?]
        └─ YES → [Downgrade to free tier]
                 [SendGrid: "Subscription ended" email]
                 [Create win-back campaign tag]

[Stripe Webhook: subscription.canceled]
    ↓
[PostgreSQL: Update user status]
    ↓
[SendGrid: "Sorry to see you go" email]
    ↓
[Wait 7 days]
    ↓
[SendGrid: "We miss you" win-back offer]
    ↓
[Tag for remarketing campaign]
```

---

#### Workflow 6: Crisis Detection & Response

**Trigger:** Journal entry submitted OR assessment completed with high risk score
**Tools Required:** n8n, Python NLP service, PostgreSQL, Twilio, SendGrid

```
[Webhook: Content submitted]
    ↓
[NLP Analysis: Keyword + ML model]
    ↓
[Check: Crisis keywords detected?]
    ├─ NO → [Normal flow, store content]
    └─ YES → [URGENT PATH]
        ↓
        [PostgreSQL: Flag entry as high-risk]
        ↓
        [Immediate Actions (parallel):]
        ├─ [Firebase: Show crisis resources in app]
        ├─ [SendGrid: Email with crisis hotline info]
        ├─ [Twilio: SMS with 988 Lifeline number]
        └─ [Alert internal clinical team if consent given]
        ↓
        [Create follow-up task for 24 hours]
        ↓
        [Next day: Check if user logged in?]
            ├─ YES → [Gentle check-in notification]
            └─ NO → [Escalate to clinical team]
```

**Crisis Detection Keywords:**
```javascript
const highRiskPhrases = [
  "suicide", "kill myself", "end my life", "better off dead",
  "want to die", "no reason to live", "can't go on",
  "hurt myself", "self harm", "cut myself"
];

const contextualRisk = [
  // Combinations that indicate risk
  ["hopeless", "see no way out"],
  ["plan", "method"],
  ["goodbye", "last time"]
];
```

**CRITICAL LEGAL NOTE:** Crisis detection triggers resources and support, but NEVER attempts automated counseling or diagnosis. Human clinician review required for all flagged entries within 4 hours.

---

#### Workflow 7: Content Performance Analytics

**Trigger:** Daily at 2 AM
**Tools Required:** n8n, PostgreSQL, Google Analytics, Internal Dashboard

```
[Cron: Daily at 2 AM]
    ↓
[PostgreSQL: Aggregate previous day's data]
    ├─ Challenge completion rates
    ├─ Blog post views & engagement
    ├─ Quiz completion rates
    ├─ Habit adherence by type
    └─ User retention metrics
    ↓
[Calculate key metrics:]
    ├─ Challenges: completion rate, avg time, drop-off points
    ├─ Blog: views, read time, correlation with mood improvement
    ├─ Habits: streak survival rate, time-of-day patterns
    └─ Overall: DAU, WAU, MAU, retention cohorts
    ↓
[Insert into analytics warehouse]
    ↓
[Check: Any metric below threshold?]
    ├─ Challenge completion < 60% → Flag for content review
    ├─ Blog read time < 2 min → Flag for editing
    └─ Habit adherence < 40% → Flag UX issue
    ↓
[Generate daily report]
    ↓
[SendGrid: Email to product team]
```

**Dashboard Metrics to Track:**
```
User Engagement:
- DAU/MAU ratio (target: >40%)
- Session length (target: >8 minutes)
- Features used per session (target: >2.5)

Content Performance:
- Challenge completion rate by challenge (target: >65%)
- Blog post engagement score (views × read time × shares)
- Quiz completion rate (target: >80%)

Business Metrics:
- Free-to-paid conversion rate (target: >15%)
- Churn rate (target: <5% monthly)
- Customer acquisition cost (target: <$25)
- Lifetime value (target: >$120)

Mental Health Outcomes:
- Avg PHQ-9 score change after 30 days (target: -3 points)
- Users showing improvement (target: >70%)
- Therapist connection rate (target: >5%)
```

---

#### Workflow 8: Referral & Reward System

**Trigger:** User shares referral code OR referred user signs up
**Tools Required:** n8n, PostgreSQL, SendGrid, Stripe (for reward payouts)

```
[Event: Referral code shared]
    ↓
[Generate unique tracking link]
    ↓
[Send via user's preferred channel]

[Event: New user signs up with referral code]
    ↓
[PostgreSQL: Link referrer to referee]
    ↓
[Award 100 points to referrer immediately]
    ↓
[SendGrid: "Friend joined!" email to referrer]
    ↓
[Wait: Track referee's activity]
    ↓
[Check after 7 days: Referee completed first challenge?]
    ├─ YES → [Award 100 bonus points to referrer]
    │        [SendGrid: "Referral bonus unlocked!"]
    │        [Award 50 points to referee as thank you]
    └─ NO → [End, no bonus]
    ↓
[Check: Referrer has 5+ successful referrals?]
    └─ YES → [Unlock "Community Builder" badge]
             [Option: Redeem points for merchandise]
```

---

## 2. CRM & Customer Support System

### CRM Requirements

**Recommended Tool:** HubSpot (HIPAA-compliant tier) OR Salesforce Health Cloud

**Contact Properties to Track:**
```
Core Info:
- User ID (sync with PostgreSQL)
- Email, phone (encrypted)
- Subscription tier
- Sign-up date
- Last login date

Engagement Metrics:
- Challenges completed
- Current streak
- Premium conversion date
- Lifetime points earned
- Referrals made

Support History:
- Tickets opened
- Response time
- Resolution status
- Satisfaction score

Mental Health Context (PHI - highest security):
- Primary concerns (anxiety, depression, etc.)
- Assessment risk level
- Therapist connected? (yes/no)
- Crisis flags (if any)
```

### Support Ticket Workflow

**Tool Integration:** Zendesk OR Intercom (both HIPAA-compliant with BAA)

```
[User submits support request]
    ↓
[Auto-categorize by keywords:]
    ├─ Technical issue → Engineering queue
    ├─ Billing question → Finance queue
    ├─ Content feedback → Product queue
    └─ Mental health question → Clinical queue
    ↓
[SLA Timers:]
    ├─ Critical (crisis-related): 1 hour response
    ├─ High (billing, account): 4 hour response
    ├─ Medium (features, bugs): 24 hour response
    └─ Low (general questions): 48 hour response
    ↓
[n8n: Sync ticket status to CRM]
    ↓
[On resolution:]
    ├─ SendGrid: "Issue resolved" email
    ├─ Request satisfaction rating
    └─ If rating < 3/5 → Escalate to management
```

**Macros/Templates for Common Issues:**
1. "How do I reset my password?"
2. "My streak counter is wrong"
3. "I can't find my therapist appointment"
4. "How do I delete my account?"
5. "Can I export my journal entries?"
6. "I'm having a mental health crisis" → IMMEDIATE escalation + crisis resources

---

## 3. Third-Party Integration Specifications

### Integration 1: Headway API (Therapist Network)

**Authentication:** OAuth 2.0
**Endpoints Used:**
- `GET /therapists/search` - Find therapists by location, specialty, insurance
- `POST /appointments/book` - Schedule session
- `GET /appointments/{id}` - Retrieve appointment details
- `POST /messages` - Send secure message to therapist

**Data Sync:**
```
User Action: "Find a Therapist"
    ↓
[Frontend: Collect user preferences]
    ├─ Location (zip code)
    ├─ Insurance provider
    ├─ Specialty needed
    └─ Preferred session type (video, in-person)
    ↓
[Backend: Call Headway API]
    ↓
[Display: Therapist search results in app]
    ↓
[User: Books appointment]
    ↓
[Backend: Create appointment record in PostgreSQL]
    ↓
[n8n: Send confirmation email + calendar invite]
    ↓
[24 hours before: Reminder notification]
```

**User Data Sharing (Opt-In):**
If user consents, share with therapist:
- Recent assessment scores
- Mood log trends (chart)
- Journal entries (user selects which ones)
- Challenge progress

**Implementation Note:** Headway API may require partnership agreement. Alternative: Build iframe embedding their web search tool.

---

### Integration 2: SendGrid (Email Service)

**HIPAA Configuration:**
- Enable "HIPAA Compliance" in account settings
- Sign Business Associate Agreement (BAA)
- Use encrypted templates for PHI
- Enable click tracking ONLY for non-PHI emails

**Email Templates to Create:**

| Template Name | Purpose | Contains PHI? | Frequency |
|--------------|---------|---------------|-----------|
| welcome-email | New user welcome | No | Once per user |
| onboarding-reminder | Complete profile | No | As needed |
| daily-habit-reminder | Habit nudge | No | Daily (optional) |
| challenge-complete | Celebration | No | Per challenge |
| assessment-results | PHQ-9/GAD-7 scores | YES | Per assessment |
| therapist-recommendation | Suggest professional help | YES | Triggered |
| weekly-progress | Summary of week | No | Weekly |
| subscription-payment-failed | Billing issue | No | As needed |
| win-back-campaign | Re-engage churned users | No | 7 days post-churn |

**Dynamic Content Example:**
```handlebars
Subject: {{user.first_name}}, you completed {{challenge.name}}! 🎉

Body:
Hi {{user.first_name}},

Congratulations! You just completed the "{{challenge.name}}" challenge. 

Your Progress:
- Points Earned: {{points.earned}}
- New Badge: {{badge.name}}
- Total Challenges Completed: {{user.total_challenges}}

{{#if next_recommendation}}
Ready for your next step? We recommend: {{next_recommendation.title}}
[Start Challenge]
{{/if}}

Keep up the amazing work!
- The PMAction Team
```

---

### Integration 3: Twilio (SMS Notifications)

**HIPAA Configuration:**
- Use Twilio Healthcare API
- Sign BAA
- Enable end-to-end encryption
- Store message logs in HIPAA-compliant storage

**SMS Use Cases:**
1. **Habit Reminders** (opt-in required)
2. **Crisis Resources** (sent when crisis detected)
3. **Appointment Reminders** (24 hours before therapist session)
4. **Two-Factor Authentication** (account security)

**Message Templates:**
```
Habit Reminder:
"🌟 PMAction: Time for your daily meditation! You're on a 7-day streak. Keep going! Reply STOP to unsubscribe."

Crisis Response:
"PMAction: We noticed concerning language in your entry. You're not alone. 
988 Suicide & Crisis Lifeline: Call/text 988 anytime. 
Crisis Text Line: Text HOME to 741741"

Appointment Reminder:
"Reminder: Therapy session tomorrow at 2 PM with Dr. Smith. Join video call: [link]"
```

**Cost Management:**
- SMS only sent if user opted in
- Limit to 2 SMS per day max per user
- Use push notifications as primary channel (free)

---

### Integration 4: Stripe (Payment Processing)

**Products to Create in Stripe:**
1. **Premium Subscription** - $9.99/month recurring
2. **Annual Premium** - $99/year (17% discount)
3. **Merchandise Store Items** - Various prices

**Webhook Events to Handle:**
```
customer.subscription.created → Upgrade user to premium
customer.subscription.deleted → Downgrade to free
invoice.payment_succeeded → Extend subscription period
invoice.payment_failed → Trigger retry flow
charge.refunded → Process refund, update records
```

**Implementation:**
```javascript
// n8n Webhook Handler for Stripe Events
const event = $input.item.json;

switch(event.type) {
  case 'customer.subscription.created':
    const userId = event.data.object.metadata.user_id;
    await updateSubscription(userId, 'premium', event.data.object.current_period_end);
    await sendWelcomeToPremiumEmail(userId);
    break;
    
  case 'invoice.payment_failed':
    const attempt = event.data.object.attempt_count;
    if (attempt === 1) {
      await sendPaymentFailedEmail(userId);
    } else if (attempt === 3) {
      await downgradeToFree(userId);
      await sendSubscriptionCancelledEmail(userId);
    }
    break;
}
```

---

### Integration 5: Google Analytics 4 & Mixpanel

**Event Tracking Schema:**

```javascript
// User Events
trackEvent('user_signup', {
  source: 'organic|paid|referral',
  onboarding_completed: boolean
});

trackEvent('challenge_started', {
  challenge_id: uuid,
  challenge_name: string,
  user_tenure_days: number
});

trackEvent('challenge_completed', {
  challenge_id: uuid,
  completion_time_days: number,
  activities_completed: number
});

trackEvent('habit_logged', {
  habit_type: string,
  streak_count: number,
  time_of_day: 'morning|afternoon|evening'
});

trackEvent('premium_conversion', {
  days_to_convert: number,
  trigger_feature: string
});

// Engagement Events
trackEvent('journal_entry', {
  word_count: number,
  sentiment_score: float
});

trackEvent('assessment_taken', {
  assessment_type: 'PHQ-9|GAD-7|custom',
  score: number
});

trackEvent('therapist_search', {
  search_filters: object,
  results_count: number
});
```

**Funnels to Track:**
1. Signup → Onboarding → First Challenge → Challenge Completion
2. Free User → View Premium Feature → Upgrade → Retained 30 Days
3. User → Therapist Search → Appointment Booked → Session Completed

---

## 4. Data Pipeline Architecture

### Daily ETL Process

```
[2 AM Daily: Extract]
    ↓
[PostgreSQL: Pull raw data]
    ├─ User activity logs
    ├─ Challenge progress
    ├─ Mood logs
    ├─ Habit completions
    └─ Journal entries (metadata only, not content)
    ↓
[Transform: Aggregate & Clean]
    ├─ Calculate daily active users
    ├─ Compute retention cohorts
    ├─ Aggregate challenge success rates
    ├─ Anonymize for research dataset
    └─ Generate ML training features
    ↓
[Load: Target systems]
    ├─ BigQuery: Analytics warehouse
    ├─ Mixpanel: Product analytics
    ├─ Internal Dashboard: Business metrics
    └─ ML Training Pipeline: Model retraining
```

---

## 5. Monitoring & Alerting

### Critical Alerts (PagerDuty Integration)

```
System Health:
- API response time >500ms for 5 minutes → Alert on-call engineer
- Database CPU >80% for 10 minutes → Alert DevOps
- Error rate >2% of requests → Alert engineering lead

Business Critical:
- Payment processing failures >10 in 1 hour → Alert finance team
- Zero signups for 2 hours (during business hours) → Alert marketing
- Premium conversion rate drops >30% week-over-week → Alert product team

User Safety:
- Crisis detection model fails → Immediate alert + fallback to keyword-only
- Therapist API down >15 minutes → Alert support team, display cached results
```

### Weekly Health Report

Auto-generated every Monday at 9 AM, sent to leadership:
```
Subject: PMAction Weekly Health Report - Week of [Date]

User Growth:
- New signups: [count] ([+/- %] vs last week)
- DAU: [count] | MAU: [count]
- Premium conversions: [count] ([conversion rate]%)

Engagement:
- Challenges completed: [count]
- Habits logged: [count]
- Journal entries: [count]
- Therapist connections: [count]

Technical Health:
- Uptime: [%]
- Avg API response time: [ms]
- Error rate: [%]

Flags:
[List any metrics below target with recommended actions]
```

---

## Summary: Complete Automation Stack

**n8n Workflows Required:** 8 core workflows (detailed above)
**Third-Party Services:** 10 integrations (SendGrid, Twilio, Stripe, Headway, etc.)
**CRM Platform:** HubSpot or Salesforce Health Cloud
**Monitoring:** Google Cloud Monitoring + PagerDuty + Custom dashboard

**Monthly Operational Costs (10K users):**
- n8n Cloud: $50/month
- SendGrid: $20/month (10K emails)
- Twilio: $75/month (1K SMS)
- Stripe: 2.9% + $0.30 per transaction
- HubSpot CRM: $450/month (HIPAA tier)
- Monitoring tools: $100/month
- **Total: ~$700/month + transaction fees**

**Team Required to Operate:**
- 1 DevOps engineer (part-time) - maintains automation
- 1 Customer support specialist - handles tickets
- 1 Clinical advisor (part-time) - reviews flagged content
- AI/ML engineer consults quarterly for model updates

This automation architecture allows PMAction to scale to 100K users with minimal manual intervention.