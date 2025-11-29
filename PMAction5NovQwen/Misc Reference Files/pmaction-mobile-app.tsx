import { useState } from 'react';
import { Home, Target, Book, MessageSquare, User, Plus, TrendingUp, Award, Calendar, Settings, Bell, Search } from 'lucide-react';

export default function MobileAppDemo() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [selectedTab, setSelectedTab] = useState('home');

  const screens = {
    dashboard: DashboardScreen,
    challenges: ChallengesScreen,
    habits: HabitsScreen,
    journal: JournalScreen,
    profile: ProfileScreen
  };

  const CurrentScreenComponent = screens[currentScreen];

  return (
    <div className="bg-gray-100 min-h-screen pb-20">
      {/* Status Bar */}
      <div className="bg-teal-600 text-white px-4 py-2 flex justify-between items-center text-xs">
        <span>9:41</span>
        <span>📶 ⚡️ 92%</span>
      </div>

      {/* Screen Content */}
      <CurrentScreenComponent setScreen={setCurrentScreen} />

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2">
        <div className="flex justify-around items-center">
          {[
            { id: 'home', icon: Home, label: 'Home', screen: 'dashboard' },
            { id: 'challenges', icon: Target, label: 'Challenges', screen: 'challenges' },
            { id: 'habits', icon: TrendingUp, label: 'Habits', screen: 'habits' },
            { id: 'journal', icon: Book, label: 'Journal', screen: 'journal' },
            { id: 'profile', icon: User, label: 'Profile', screen: 'profile' }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = currentScreen === tab.screen;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedTab(tab.id);
                  setCurrentScreen(tab.screen);
                }}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive ? 'text-teal-600 bg-teal-50' : 'text-gray-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DashboardScreen() {
  const [moodRating, setMoodRating] = useState(0);

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Good morning, Alex</h1>
          <p className="text-sm text-gray-600">How are you feeling today?</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-gray-100 rounded-full">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 bg-gray-100 rounded-full">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Quick Mood Check */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-3">Quick Check-In</h3>
        <div className="flex justify-between mb-3">
          {[1,2,3,4,5].map(rating => (
            <button
              key={rating}
              onClick={() => setMoodRating(rating)}
              className={`text-3xl transition-transform ${
                moodRating >= rating ? 'scale-110' : 'scale-100 opacity-50'
              }`}
            >
              {rating === 1 && '😢'}
              {rating === 2 && '😕'}
              {rating === 3 && '😐'}
              {rating === 4 && '🙂'}
              {rating === 5 && '😊'}
            </button>
          ))}
        </div>
        {moodRating > 0 && (
          <button className="w-full bg-teal-600 text-white py-2 rounded-xl font-semibold text-sm">
            Log Mood
          </button>
        )}
      </div>

      {/* Points & Level */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-5 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="text-sm opacity-90">Your Progress</div>
            <div className="text-3xl font-bold">2,450 pts</div>
          </div>
          <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
            Level 3
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Momentum Maker</span>
            <span>550 pts to Champion</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div className="bg-white h-2 rounded-full" style={{ width: '75%' }} />
          </div>
        </div>
      </div>

      {/* Current Challenge */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-gray-900">Current Challenge</h3>
          <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full font-semibold">
            Day 6 of 7
          </span>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Mindfulness & Stress Reduction</h4>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div className="bg-teal-500 h-3 rounded-full" style={{ width: '85%' }} />
          </div>
          <p className="text-sm text-gray-600">Almost there! Complete today's gratitude practice.</p>
        </div>
        <button className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold">
          Start Today's Activity
        </button>
      </div>

      {/* Habit Streak */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-900">Today's Habits</h3>
          <span className="text-sm text-gray-600">2 of 3 complete</span>
        </div>
        <div className="space-y-3">
          {[
            { name: 'Morning Meditation', done: true, streak: 7, icon: '🧘' },
            { name: 'Drink 8 Glasses Water', done: true, streak: 12, icon: '💧' },
            { name: 'Evening Journal', done: false, streak: 5, icon: '📝' }
          ].map((habit, index) => (
            <div key={index} className="flex items-center gap-3">
              <button className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                habit.done ? 'bg-teal-600 border-teal-600' : 'border-gray-300'
              }`}>
                {habit.done && <span className="text-white text-sm">✓</span>}
              </button>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{habit.icon}</span>
                  <span className={`font-medium ${habit.done ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                    {habit.name}
                  </span>
                </div>
              </div>
              <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-semibold">
                🔥 {habit.streak} days
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className="text-2xl">✨</div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Recommended for You</h3>
            <p className="text-sm text-gray-600">Based on your recent progress</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 mb-3">
          <h4 className="font-semibold text-gray-900 mb-1">Building Better Work Relationships</h4>
          <p className="text-xs text-gray-600 mb-2">7-day challenge • Beginner friendly</p>
          <p className="text-sm text-gray-700">Your journal mentions workplace stress. This challenge helps build positive connections.</p>
        </div>
        <button className="w-full border-2 border-purple-300 text-purple-700 py-2 rounded-xl font-semibold text-sm">
          Learn More
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="bg-white rounded-xl p-4 shadow-sm text-left">
          <div className="text-2xl mb-2">📊</div>
          <div className="font-semibold text-gray-900 text-sm">View Progress</div>
          <div className="text-xs text-gray-600">Charts & insights</div>
        </button>
        <button className="bg-white rounded-xl p-4 shadow-sm text-left">
          <div className="text-2xl mb-2">👨‍⚕️</div>
          <div className="font-semibold text-gray-900 text-sm">Find Therapist</div>
          <div className="text-xs text-gray-600">Professional support</div>
        </button>
      </div>
    </div>
  );
}

function ChallengesScreen({ setScreen }) {
  const [filter, setFilter] = useState('all');

  const challenges = [
    {
      title: 'Mindfulness & Stress Reduction',
      category: 'Mindfulness',
      duration: '7 days',
      difficulty: 'Beginner',
      progress: 85,
      status: 'active',
      icon: '🧘',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Building Better Work Relationships',
      category: 'Relationships',
      duration: '7 days',
      difficulty: 'Intermediate',
      progress: 0,
      status: 'recommended',
      icon: '💼',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Understanding ADHD',
      category: 'Focus',
      duration: '10 days',
      difficulty: 'Beginner',
      progress: 0,
      status: 'new',
      icon: '🧠',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Overcoming Social Anxiety',
      category: 'Anxiety',
      duration: '14 days',
      difficulty: 'Advanced',
      progress: 0,
      status: 'available',
      icon: '🌟',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Challenges</h1>
        <p className="text-sm text-gray-600">Structured programs to build lasting change</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search challenges..."
          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {['All', 'Active', 'Recommended', 'Anxiety', 'Relationships', 'Habits'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f.toLowerCase())}
            className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-colors ${
              filter === f.toLowerCase()
                ? 'bg-teal-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Active Challenge */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-3xl">🧘</span>
          <div className="flex-1">
            <div className="text-xs opacity-90 mb-1">CURRENTLY ACTIVE</div>
            <h3 className="font-bold text-lg">Mindfulness & Stress Reduction</h3>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span>Day 6 of 7</span>
            <span>85% complete</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div className="bg-white h-2 rounded-full" style={{ width: '85%' }} />
          </div>
        </div>
        <button className="w-full bg-white text-teal-600 py-3 rounded-xl font-bold">
          Continue Challenge
        </button>
      </div>

      {/* Available Challenges */}
      <div className="space-y-4">
        <h2 className="font-bold text-gray-900">Recommended for You</h2>
        {challenges.filter(c => c.status !== 'active').map((challenge, index) => (
          <div key={index} className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-4 mb-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${challenge.color} flex items-center justify-center text-2xl`}>
                {challenge.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-gray-900">{challenge.title}</h3>
                  {challenge.status === 'recommended' && (
                    <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-semibold">
                      ✨ For You
                    </span>
                  )}
                  {challenge.status === 'new' && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                      New
                    </span>
                  )}
                </div>
                <div className="flex gap-2 text-xs text-gray-600 mb-2">
                  <span>⏱️ {challenge.duration}</span>
                  <span>•</span>
                  <span>📊 {challenge.difficulty}</span>
                  <span>•</span>
                  <span>{challenge.category}</span>
                </div>
                <p className="text-sm text-gray-700">
                  {challenge.title.includes('Work') && 'Improve collaboration, set boundaries, and build positive workplace connections.'}
                  {challenge.title.includes('ADHD') && 'Learn focus techniques and organization strategies designed for ADHD brains.'}
                  {challenge.title.includes('Anxiety') && 'Evidence-based CBT techniques to reduce social anxiety and build confidence.'}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 border-2 border-teal-600 text-teal-700 py-2 rounded-xl font-semibold text-sm">
                Learn More
              </button>
              <button className="flex-1 bg-teal-600 text-white py-2 rounded-xl font-semibold text-sm">
                Start Challenge
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HabitsScreen() {
  const habits = [
    { name: 'Morning Meditation', icon: '🧘', streak: 7, completed: [1,1,1,1,1,1,1], time: 'Morning' },
    { name: 'Drink 8 Glasses Water', icon: '💧', streak: 12, completed: [1,1,1,1,1,1,1], time: 'All Day' },
    { name: 'Evening Journal', icon: '📝', streak: 5, completed: [1,1,0,1,1,1,0], time: 'Evening' },
    { name: 'Gratitude Practice', icon: '🙏', streak: 3, completed: [0,1,1,1,0,0,0], time: 'Morning' }
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Habits</h1>
          <p className="text-sm text-gray-600">Build consistency, one day at a time</p>
        </div>
        <button className="p-3 bg-teal-600 text-white rounded-full">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-teal-600">4</div>
          <div className="text-xs text-gray-600">Active Habits</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-orange-600">12</div>
          <div className="text-xs text-gray-600">Longest Streak</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-purple-600">85%</div>
          <div className="text-xs text-gray-600">This Week</div>
        </div>
      </div>

      {/* Habits List */}
      <div className="space-y-4">
        {habits.map((habit, index) => (
          <div key={index} className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{habit.icon}</div>
                <div>
                  <div className="font-bold text-gray-900">{habit.name}</div>
                  <div className="text-xs text-gray-600">{habit.time}</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{habit.streak}</div>
                <div className="text-xs text-gray-600">day streak</div>
              </div>
            </div>
            
            {/* Week View */}
            <div className="flex justify-between items-center">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                <div key={i} className="text-center">
                  <div className="text-xs text-gray-600 mb-1">{day}</div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    habit.completed[i]
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {habit.completed[i] ? '✓' : '○'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add Habit CTA */}
      <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-4 rounded-2xl font-bold shadow-lg">
        + Add New Habit
      </button>
    </div>
  );
}

function JournalScreen() {
  const entries = [
    { date: 'Today', mood: '😊', preview: 'Had a productive day at work. Finished the presentation and my team really appreciated...', sentiment: 0.8 },
    { date: 'Yesterday', mood: '😐', preview: 'Feeling a bit overwhelmed with everything going on. Need to remember to take breaks...', sentiment: 0.1 },
    { date: '2 days ago', mood: '🙂', preview: 'Morning meditation really helped me start the day calm. Grateful for small moments...', sentiment: 0.6 }
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Journal</h1>
          <p className="text-sm text-gray-600">Your private space for reflection</p>
        </div>
        <button className="px-4 py-2 bg-teal-600 text-white rounded-full font-semibold text-sm flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Write
        </button>
      </div>

      {/* Streak & Insights */}
      <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-5 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="text-sm opacity-90 mb-1">Journal Streak</div>
            <div className="text-4xl font-bold">14 days 🔥</div>
          </div>
          <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
            52 entries
          </div>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-sm">
          <strong>Your pattern:</strong> You write most on Sunday evenings and feel most positive after morning meditation.
        </div>
      </div>

      {/* Mood Trend */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-3">This Week's Mood</h3>
        <div className="flex items-end justify-between h-32">
          {[4, 3, 5, 4, 4, 5, 4].map((height, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-8 bg-teal-500 rounded-t" style={{ height: `${height * 20}%` }} />
              <div className="text-xs text-gray-600">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Entries */}
      <div className="space-y-3">
        <h3 className="font-bold text-gray-900">Recent Entries</h3>
        {entries.map((entry, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{entry.mood}</span>
                <span className="text-sm font-semibold text-gray-900">{entry.date}</span>
              </div>
              <div className={`text-xs px-2 py-1 rounded-full font-semibold ${
                entry.sentiment > 0.5 ? 'bg-green-100 text-green-700' :
                entry.sentiment > 0 ? 'bg-yellow-100 text-yellow-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {entry.sentiment > 0.5 ? 'Positive' : entry.sentiment > 0 ? 'Neutral' : 'Reflective'}
              </div>
            </div>
            <p className="text-sm text-gray-700">{entry.preview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div className="p-4 space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl p-6 text-white text-center">
        <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3 flex items-center justify-center text-4xl">
          👤
        </div>
        <h2 className="text-2xl font-bold mb-1">Alex Johnson</h2>
        <p className="text-sm opacity-90">Member since March 2026</p>
        <div className="mt-4 flex justify-center gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">2,450</div>
            <div className="text-xs opacity-90">Points</div>
          </div>
          <div>
            <div className="text-2xl font-bold">5</div>
            <div className="text-xs opacity-90">Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold">12</div>
            <div className="text-xs opacity-90">Streak</div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-4">Badges Earned</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { emoji: '⭐', name: 'First Step', unlocked: true },
            { emoji: '🔥', name: 'Streak Master', unlocked: true },
            { emoji: '🎯', name: 'Challenge Champion', unlocked: false },
            { emoji: '📝', name: 'Writer', unlocked: true },
            { emoji: '🧘', name: 'Zen Master', unlocked: false },
            { emoji: '🤝', name: 'Community', unlocked: false },
            { emoji: '💪', name: 'Resilient', unlocked: false },
            { emoji: '🧠', name: 'Knowledge', unlocked: true }
          ].map((badge, i) => (
            <div key={i} className="text-center">
              <div className={`text-4xl mb-2 ${!badge.unlocked && 'opacity-30 grayscale'}`}>
                {badge.emoji}
              </div>
              <div className="text-xs text-gray-600">{badge.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
        <h3 className="font-bold text-gray-900 mb-3">Settings</h3>
        {[
          { icon: '👤', label: 'Edit Profile' },
          { icon: '🔔', label: 'Notifications' },
          { icon: '🔒', label: 'Privacy & Security' },
          { icon: '💎', label: 'Upgrade to Premium' },
          { icon: '❓', label: 'Help & Support' },
          { icon: '📄', label: 'Terms & Privacy Policy' }
        ].map((item, i) => (
          <button key={i} className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors">
            <span className="text-2xl">{item.icon}</span>
            <span className="flex-1 text-left font-medium text-gray-900">{item.label}</span>
            <span className="text-gray-400">›</span>
          </button>
        ))}
      </div>

      {/* Premium CTA */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-5 text-center">
        <div className="text-3xl mb-2">✨</div>
        <h3 className="font-bold text-gray-900 mb-2">Unlock Premium</h3>
        <p className="text-sm text-gray-800 mb-4">All challenges, advanced AI, therapist access & more</p>
        <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-bold shadow-lg">
          Start Free Trial
        </button>
      </div>
    </div>
  );
}