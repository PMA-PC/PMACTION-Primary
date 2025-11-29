import { useState } from 'react';

export default function ProductEcosystem() {
  const [activeSection, setActiveSection] = useState<keyof typeof sections | null>(null);

  const sections = {
    user: {
      title: "User Experience Layer",
      color: "from-teal-500 to-teal-600",
      items: [
        { name: "Progressive Web App", desc: "iOS, Android, Desktop", icon: "📱" },
        { name: "Onboarding (7 screens)", desc: "Welcome → Account → Assessment → First Challenge", icon: "👋" },
        { name: "Dashboard", desc: "Mood check-in, progress, current challenge, habits", icon: "📊" },
        { name: "Challenge System", desc: "12+ structured programs with daily activities", icon: "🎯" },
        { name: "Habit Tracker", desc: "Custom habits, streaks, visual progress", icon: "✅" },
        { name: "Digital Journal", desc: "Private entries with sentiment analysis", icon: "📝" },
        { name: "Blog & Resources", desc: "Mental health articles, SEO optimized", icon: "📚" },
        { name: "Therapist Connection", desc: "Search, book, message (via Headway)", icon: "👨‍⚕️" }
      ]
    },
    gamification: {
      title: "Engagement & Motivation",
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "Points System", desc: "Earn 10-500 pts per action", icon: "⭐" },
        { name: "Levels (1-5)", desc: "Beginner → Master progression", icon: "📈" },
        { name: "Badges", desc: "8+ achievements unlocked through actions", icon: "🏆" },
        { name: "Streaks", desc: "Flexible consistency tracking", icon: "🔥" },
        { name: "Rewards Store", desc: "Redeem points for merchandise", icon: "🛍️" },
        { name: "Referral Program", desc: "200 pts per friend + bonuses", icon: "🤝" }
      ]
    },
    ai: {
      title: "AI Personalization Engine",
      color: "from-blue-500 to-indigo-500",
      items: [
        { name: "Recommendation Algorithm", desc: "Suggests challenges, blogs, quizzes", icon: "🤖" },
        { name: "Sentiment Analysis", desc: "Journal entries → mood insights", icon: "💭" },
        { name: "Pattern Detection", desc: "Identifies trends in behavior", icon: "🔍" },
        { name: "Adaptive Difficulty", desc: "Adjusts challenge complexity", icon: "⚙️" },
        { name: "Crisis Detection", desc: "Keyword + ML model → resources", icon: "🚨" },
        { name: "Therapist Recommendations", desc: "Flags when professional help needed", icon: "💡" }
      ]
    },
    backend: {
      title: "Backend Infrastructure",
      color: "from-gray-700 to-gray-800",
      items: [
        { name: "PostgreSQL Database", desc: "HIPAA-compliant, encrypted at rest", icon: "🗄️" },
        { name: "Redis Cache", desc: "Session management, real-time data", icon: "⚡" },
        { name: "Google Cloud Run", desc: "Serverless API, auto-scaling", icon: "☁️" },
        { name: "Cloud Storage", desc: "Encrypted journals, user data", icon: "💾" },
        { name: "Vertex AI", desc: "ML model hosting", icon: "🧠" },
        { name: "Authentication", desc: "Firebase Auth with MFA", icon: "🔐" }
      ]
    },
    automation: {
      title: "Automation & Workflows",
      color: "from-orange-500 to-red-500",
      items: [
        { name: "n8n Workflows (8)", desc: "Onboarding, reminders, celebrations, etc.", icon: "🔄" },
        { name: "SendGrid", desc: "Automated emails (HIPAA tier)", icon: "📧" },
        { name: "Twilio", desc: "SMS reminders, crisis notifications", icon: "💬" },
        { name: "Stripe Webhooks", desc: "Subscription management", icon: "💳" },
        { name: "Scheduled Jobs", desc: "Daily analytics, content updates", icon: "⏰" },
        { name: "Firebase Messaging", desc: "Push notifications", icon: "🔔" }
      ]
    },
    integrations: {
      title: "Third-Party Integrations",
      color: "from-green-500 to-emerald-600",
      items: [
        { name: "Headway API", desc: "60K+ therapists, insurance billing", icon: "🏥" },
        { name: "Google Analytics 4", desc: "Web analytics, conversion tracking", icon: "📈" },
        { name: "Mixpanel", desc: "Product analytics, funnels", icon: "📊" },
        { name: "Sentry", desc: "Error tracking, monitoring", icon: "🐛" },
        { name: "HubSpot CRM", desc: "Customer relationship management", icon: "👥" },
        { name: "Zendesk", desc: "Support ticketing system", icon: "🎫" }
      ]
    },
    compliance: {
      title: "Security & Compliance",
      color: "from-red-600 to-pink-600",
      items: [
        { name: "HIPAA Compliant", desc: "BAAs signed, audited annually", icon: "🏥" },
        { name: "GDPR Compliant", desc: "Right to access, delete, export", icon: "🇪🇺" },
        { name: "AES-256 Encryption", desc: "Data at rest", icon: "🔒" },
        { name: "TLS 1.3", desc: "Data in transit", icon: "🔐" },
        { name: "Regular Security Audits", desc: "Quarterly pentesting", icon: "🛡️" },
        { name: "Audit Logging", desc: "All data access tracked", icon: "📋" }
      ]
    },
    content: {
      title: "Content Library",
      color: "from-yellow-500 to-amber-500",
      items: [
        { name: "12 Initial Challenges", desc: "ADHD, anxiety, habits, relationships, etc.", icon: "📖" },
        { name: "Blog Articles", desc: "50+ SEO-optimized posts", icon: "✍️" },
        { name: "Quiz Library", desc: "Self-assessments, knowledge tests", icon: "❓" },
        { name: "Assessment Tools", desc: "PHQ-9, GAD-7, custom surveys", icon: "📝" },
        { name: "Resource Links", desc: "Crisis hotlines, organizations", icon: "🔗" },
        { name: "Condition Pages", desc: "ADHD, anxiety, depression guides", icon: "📄" }
      ]
    },
    business: {
      title: "Business Model",
      color: "from-indigo-600 to-purple-600",
      items: [
        { name: "Freemium Subscription", desc: "Free tier + $9.99/month premium", icon: "💎" },
        { name: "B2B Enterprise", desc: "Corporate wellness, universities", icon: "🏢" },
        { name: "Therapist Referrals", desc: "10-15% commission per booking", icon: "💰" },
        { name: "Merchandise Store", desc: "Points → products", icon: "👕" },
        { name: "White-Label Licensing", desc: "Future: Clinics, hospitals", icon: "🏷️" }
      ]
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            PMAction Product Ecosystem
          </h1>
          <p className="text-xl text-gray-600">
            Complete architecture from user experience to infrastructure
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Click any section to explore details
          </p>
        </div>

        {/* Central Diagram */}
        <div className="mb-16 bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid grid-cols-3 gap-6">
            {(Object.keys(sections) as Array<keyof typeof sections>).map((key) => {
              const section = sections[key];
              const isActive = activeSection === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveSection(isActive ? null : key)}
                  className={`p-6 rounded-2xl transition-all transform ${isActive ? 'scale-105 shadow-2xl' : 'hover:scale-102 shadow-md'
                    } bg-gradient-to-br ${section.color} text-white text-left`}
                >
                  <div className="text-3xl mb-3">{section.items[0].icon}</div>
                  <h3 className="font-bold text-lg mb-2">{section.title}</h3>
                  <p className="text-sm opacity-90">{section.items.length} components</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed View */}
        {activeSection && (
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-8 animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                {sections[activeSection].title}
              </h2>
              <button
                onClick={() => setActiveSection(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {sections[activeSection].items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-5 border-2 border-gray-200 hover:border-teal-300 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">90%</div>
            <div className="text-sm text-gray-600">Development Ready</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">12</div>
            <div className="text-sm text-gray-600">Initial Challenges</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">8</div>
            <div className="text-sm text-gray-600">Automated Workflows</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">10+</div>
            <div className="text-sm text-gray-600">Third-Party APIs</div>
          </div>
        </div>

        {/* Data Flow Diagram */}
        <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-3xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Complete Data Flow</h2>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 px-4 py-2 rounded-lg font-semibold min-w-[180px]">
                  User Action
                </div>
                <div className="text-2xl">→</div>
                <div className="bg-white/20 px-4 py-2 rounded-lg font-semibold min-w-[180px]">
                  PWA Frontend
                </div>
                <div className="text-2xl">→</div>
                <div className="bg-white/20 px-4 py-2 rounded-lg font-semibold min-w-[180px]">
                  API Backend
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 px-4 py-2 rounded-lg font-semibold min-w-[180px]">
                  Database Update
                </div>
                <div className="text-2xl">→</div>
                <div className="bg-white/20 px-4 py-2 rounded-lg font-semibold min-w-[180px]">
                  n8n Workflow
                </div>
                <div className="text-2xl">→</div>
                <div className="bg-white/20 px-4 py-2 rounded-lg font-semibold min-w-[180px]">
                  Notifications
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 px-4 py-2 rounded-lg font-semibold min-w-[180px]">
                  AI Analysis
                </div>
                <div className="text-2xl">→</div>
                <div className="bg-white/20 px-4 py-2 rounded-lg font-semibold min-w-[180px]">
                  Recommendations
                </div>
                <div className="text-2xl">→</div>
                <div className="bg-white/20 px-4 py-2 rounded-lg font-semibold min-w-[180px]">
                  User Dashboard
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Platform Capabilities</h3>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-4">
              <div className="text-2xl mb-2">🔒</div>
              <div className="text-sm font-semibold text-gray-900">HIPAA Compliant</div>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
              <div className="text-2xl mb-2">🤖</div>
              <div className="text-sm font-semibold text-gray-900">AI-Powered</div>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <div className="text-2xl mb-2">📱</div>
              <div className="text-sm font-semibold text-gray-900">Cross-Platform PWA</div>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm font-semibold text-gray-900">Auto-Scaled</div>
            </div>
            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
              <div className="text-2xl mb-2">🔄</div>
              <div className="text-sm font-semibold text-gray-900">Fully Automated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}