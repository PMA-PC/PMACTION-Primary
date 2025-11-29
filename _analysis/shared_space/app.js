// Script loaded checkpoint
console.log('✓ Script loaded');

// Wrap entire application in DOMContentLoaded for proper initialization
document.addEventListener('DOMContentLoaded', function() {
  console.log('✓ DOM loaded');
  
  // Set up Get Started button listener with multiple fallback methods
  const getStartedBtn = document.getElementById('get-started-btn');
  const userNameInput = document.getElementById('user-name-input');
  
  console.log('Get Started button found:', getStartedBtn);
  console.log('User name input found:', userNameInput);
  
  if (getStartedBtn) {
    // Method 1: addEventListener (backup to onclick in HTML)
    getStartedBtn.addEventListener('click', function() {
      console.log('Button clicked via addEventListener!');
      startApp();
    });
    console.log('✓ Get Started button addEventListener attached');
    
    // Method 2: Direct onclick assignment (additional backup)
    getStartedBtn.onclick = function() {
      console.log('Button clicked via onclick!');
      startApp();
    };
    console.log('✓ Get Started button onclick assigned');
  } else {
    console.error('❌ Get Started button NOT FOUND!');
  }
  
  // Set up Enter key support on name input
  if (userNameInput) {
    userNameInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        console.log('Enter key pressed on name input');
        e.preventDefault();
        startApp();
      }
    });
    console.log('✓ Enter key listener attached to name input');
  } else {
    console.error('❌ User name input NOT FOUND!');
  }
  
  // Set up new topic form listener
  const topicForm = document.getElementById('new-topic-form');
  if (topicForm) {
    topicForm.addEventListener('submit', handleNewTopicSubmit);
  }
  
  console.log('✓ App initialization complete');
});

// Data Models - ALL in memory (no localStorage due to sandbox)
const data = {
  userName: '',
  feelingsCheckIns: [],
  topics: [],
  appreciations: [],
  accomplishments: [],
  boundaries: [],
  quotes: [],
  dailyDiscussionTime: 0,
  timerInterval: null,
  lastCheckInTime: null,
  notificationsEnabled: false
};

let idCounters = {
  checkIn: 1,
  topic: 1,
  appreciation: 1,
  accomplishment: 1,
  boundary: 1,
  quote: 1
};

// Communication Reminders & Ground Rules
const communicationReminders = [
  { icon: '❤️', text: 'Assume positive intent - we\'re both trying our best' },
  { icon: '💬', text: 'Use \'I feel...\' instead of \'You always...\'' },
  { icon: '📝', text: 'Describe specific behaviors, not character' },
  { icon: '⏸️', text: 'It\'s okay to take breaks when overwhelmed' },
  { icon: '⏰', text: 'We don\'t need immediate solutions' },
  { icon: '⚖️', text: 'Both our perspectives are valid' },
  { icon: '🗣️', text: 'Express needs clearly without blame' },
  { icon: '✅', text: 'Acknowledge each other\'s feelings' }
];

const groundRules = [
  { icon: '🤝', text: 'We commit to honest, respectful communication' },
  { icon: '🛑', text: 'We take breaks when needed without judgment' },
  { icon: '🔍', text: 'We acknowledge our own triggers and patterns' },
  { icon: '💭', text: 'We assume positive intent until proven otherwise' },
  { icon: '🎉', text: 'We celebrate small wins and progress' },
  { icon: '🎯', text: 'We ask for what we need clearly' },
  { icon: '👂', text: 'We listen to understand, not to respond' }
];

const categoryHashtags = [
  '#Household', '#Finances', '#JobLoss', '#Boundaries', '#Future',
  '#Relationship', '#Schedule', '#MentalHealth', '#Gratitude',
  '#Conflict', '#Communication', '#SelfCare', '#Work', '#Family', '#Friends', '#Other'
];

const accomplishmentTypes = [
  { emoji: '💪', label: 'Gym/Exercise', colorType: 'gym' },
  { emoji: '🚶', label: 'Went for a walk', colorType: 'walk' },
  { emoji: '📝', label: 'Applied for job/opportunity', colorType: 'applied' },
  { emoji: '📚', label: 'Completed lesson', colorType: 'lesson' },
  { emoji: '🎓', label: 'Learned new skill', colorType: 'skill' },
  { emoji: '📞', label: 'Voice call', colorType: 'call' },
  { emoji: '💬', label: 'Text conversation', colorType: 'text' },
  { emoji: '🤝', label: 'Networking', colorType: 'networking' },
  { emoji: '🎉', label: 'Social event', colorType: 'social' },
  { emoji: '✋', label: 'Set a boundary', colorType: 'boundary' },
  { emoji: '🎯', label: 'Avoided negative behavior', colorType: 'avoided' },
  { emoji: '📝', label: 'Custom', colorType: 'custom' }
];

const feelingsWheel = {
  Happy: {
    color: '#FFC107',
    middle: ['Playful', 'Content', 'Interested', 'Proud', 'Accepted', 'Powerful', 'Peaceful', 'Trusting', 'Optimistic'],
    outer: ['Aroused', 'Cheeky', 'Free', 'Joyful', 'Curious', 'Inquisitive', 'Successful', 'Confident', 'Respected', 'Valued', 'Loving', 'Thankful', 'Intimate', 'Hopeful', 'Inspired']
  },
  Sad: {
    color: '#2196F3',
    middle: ['Lonely', 'Vulnerable', 'Despair', 'Guilty', 'Depressed', 'Hurt'],
    outer: ['Isolated', 'Abandoned', 'Victimized', 'Fragile', 'Grief', 'Powerless', 'Ashamed', 'Remorseful', 'Inferior', 'Empty']
  },
  Angry: {
    color: '#E91E63',
    middle: ['Let down', 'Humiliated', 'Bitter', 'Mad', 'Aggressive', 'Frustrated', 'Distant', 'Critical'],
    outer: ['Betrayed', 'Resentful', 'Disrespected', 'Ridiculed', 'Violated', 'Furious', 'Jealous', 'Provoked', 'Hostile', 'Annoyed', 'Skeptical', 'Dismissive']
  },
  Fearful: {
    color: '#9C27B0',
    middle: ['Scared', 'Anxious', 'Insecure', 'Weak', 'Rejected', 'Threatened'],
    outer: ['Helpless', 'Frightened', 'Overwhelmed', 'Worried', 'Inadequate', 'Worthless', 'Insignificant', 'Excluded', 'Persecuted', 'Nervous', 'Exposed']
  },
  Surprised: {
    color: '#FF9800',
    middle: ['Startled', 'Confused', 'Amazed', 'Excited'],
    outer: ['Shocked', 'Dismayed', 'Perplexed', 'Disillusioned', 'Astonished', 'Awe']
  },
  Disgusted: {
    color: '#4CAF50',
    middle: ['Disapproving', 'Disappointed', 'Awful', 'Repelled'],
    outer: ['Judgmental', 'Embarrassed', 'Appalled', 'Revolted', 'Nauseated', 'Detestable', 'Horrified']
  },
  Indifferent: {
    color: '#9E9E9E',
    middle: ['Bored', 'Tired', 'Busy'],
    outer: ['Indifferent', 'Apathetic', 'Sleepy', 'Unfocused', 'Rushed', 'Pressured', 'Stressed']
  }
};

// Feelings Check-In State
let feelingsCheckInState = {
  primaryEmotion: null,
  subcategory: null,
  outerFeelings: [],
  additionalFeelings: [],
  currentTriggers: [],
  linkedTopicId: null
};

let selectedCategoryHashtags = [];
let selectedAccomplishmentType = null;
let currentAppreciationType = 'text';
let currentAppreciationFile = null;
let quoteFormState = {
  selectedFeelings: [],
  tags: []
};

// App Initialization
function startApp() {
  console.log('========================================');
  console.log('🚀 startApp() called');
  console.log('========================================');
  
  try {
    // Step 1: Find name input
    const nameInput = document.getElementById('user-name-input');
    console.log('Step 1 - Name input element:', nameInput);
    
    if (!nameInput) {
      console.error('❌ CRITICAL: Name input element not found');
      alert('Error: Name input field not found. Please refresh the page.');
      return;
    }
    
    // Step 2: Get and validate name
    const name = nameInput.value.trim();
    console.log('Step 2 - Name value:', name);
    console.log('Step 2 - Name length:', name.length);
    
    if (!name) {
      console.warn('⚠️ No name entered');
      alert('Please enter your name to continue');
      nameInput.focus();
      return;
    }
    
    // Step 3: Save name to data object
    data.userName = name;
    console.log('Step 3 - User name saved to data:', data.userName);
    
    // Step 4: Find screen elements
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainApp = document.getElementById('main-app');
    const displayName = document.getElementById('user-display-name');
    
    console.log('Step 4 - Welcome screen:', welcomeScreen);
    console.log('Step 4 - Main app:', mainApp);
    console.log('Step 4 - Display name:', displayName);
    
    // Step 5: Hide welcome screen
    if (welcomeScreen) {
      welcomeScreen.classList.add('hidden');
      welcomeScreen.style.display = 'none';
      console.log('✓ Welcome screen hidden');
    } else {
      console.error('❌ Welcome screen element not found');
    }
    
    // Step 6: Show main app
    if (mainApp) {
      mainApp.classList.remove('hidden');
      mainApp.style.display = 'block';
      console.log('✓ Main app shown');
    } else {
      console.error('❌ Main app element not found');
    }
    
    // Step 7: Display user name
    if (displayName) {
      displayName.textContent = data.userName;
      console.log('✓ Display name updated');
    } else {
      console.warn('⚠️ Display name element not found');
    }
    
    // Step 8: Initialize app
    console.log('Step 8 - Calling initializeApp()');
    initializeApp();
    
    console.log('========================================');
    console.log('✅ App started successfully!');
    console.log('User:', data.userName);
    console.log('========================================');
    
  } catch (error) {
    console.error('========================================');
    console.error('❌ CRITICAL ERROR in startApp():', error);
    console.error('Error stack:', error.stack);
    console.error('========================================');
    alert('Error starting app: ' + error.message + '\n\nPlease refresh the page and try again.');
  }
}

function initializeApp() {
  try {
    console.log('Initializing app...');
    populateDashboardElements();
    showView('dashboard');
    requestNotificationPermission();
    startNotificationChecker();
    console.log('✓ App initialization complete');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

function populateDashboardElements() {
  // Populate communication reminders as cards
  const remindersGrid = document.getElementById('communication-reminders-grid');
  if (remindersGrid) {
    remindersGrid.innerHTML = communicationReminders.map(r => `
      <div class="reminder-card glass-card">
        <div class="reminder-icon">${r.icon}</div>
        <div class="reminder-text">${escapeHtml(r.text)}</div>
      </div>
    `).join('');
  }
  
  // Populate ground rules
  const rulesContent = document.getElementById('ground-rules-content');
  if (rulesContent) {
    rulesContent.innerHTML = groundRules.map(r => `
      <div class="ground-rule-item">
        <div class="ground-rule-icon">${r.icon}</div>
        <div class="ground-rule-text">${escapeHtml(r.text)}</div>
      </div>
    `).join('');
  }
  
  // Render feelings wheel in hero section
  renderFeelingsWheelHero();
}

function toggleGroundRules() {
  const content = document.getElementById('ground-rules-content');
  const toggle = document.getElementById('ground-rules-toggle');
  if (content && toggle) {
    content.classList.toggle('hidden');
    toggle.classList.toggle('collapsed');
  }
}

function renderFeelingsWheelHero() {
  try {
    console.log('Rendering feelings wheel...');
    const svg = document.querySelector('.feelings-wheel-svg');
    if (!svg) {
      console.warn('Feelings wheel SVG not found');
      return;
    }
    
    const emotions = Object.keys(feelingsWheel);
    const numSegments = emotions.length;
    const centerX = 200;
    const centerY = 200;
    const radius = 150;
    const anglePerSegment = (2 * Math.PI) / numSegments;
    
    let paths = '';
    emotions.forEach((emotion, index) => {
      const startAngle = index * anglePerSegment - Math.PI / 2;
      const endAngle = (index + 1) * anglePerSegment - Math.PI / 2;
      
      const x1 = centerX + radius * Math.cos(startAngle);
      const y1 = centerY + radius * Math.sin(startAngle);
      const x2 = centerX + radius * Math.cos(endAngle);
      const y2 = centerY + radius * Math.sin(endAngle);
      
      const largeArc = anglePerSegment > Math.PI ? 1 : 0;
      
      const pathData = `M ${centerX},${centerY} L ${x1},${y1} A ${radius},${radius} 0 ${largeArc},1 ${x2},${y2} Z`;
      
      paths += `<path class="wheel-segment-path" d="${pathData}" fill="${feelingsWheel[emotion].color}" opacity="0.8"/>`;
    });
    
    // Add center circle
    paths += `<circle cx="${centerX}" cy="${centerY}" r="40" fill="rgba(26, 31, 46, 0.9)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>`;
    paths += `<text x="${centerX}" y="${centerY}" text-anchor="middle" dominant-baseline="middle" fill="#E4E6EB" font-size="24" font-weight="600">💚</text>`;
    
    svg.innerHTML = paths;
    console.log('✓ Feelings wheel rendered');
  } catch (error) {
    console.error('Error rendering feelings wheel:', error);
  }
}

// Navigation
function showView(viewName, subView = null) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  
  const view = document.getElementById(`${viewName}-view`);
  if (view) {
    view.classList.add('active');
    const navBtn = document.querySelector(`[data-view="${viewName}"]`);
    if (navBtn) navBtn.classList.add('active');
  }
  
  if (viewName === 'dashboard') renderDashboard();
  else if (viewName === 'topics') renderTopics();
  else if (viewName === 'logs') renderLogs(subView || 'feelings');
}

function renderDashboard() {
  const today = new Date().toDateString();
  const todayCheckIns = data.feelingsCheckIns.filter(c => new Date(c.timestamp).toDateString() === today);
  const todayAppreciations = data.appreciations.filter(a => new Date(a.timestamp).toDateString() === today);
  const todayAccomplishments = data.accomplishments.filter(a => new Date(a.timestamp).toDateString() === today);
  const todayBoundaries = data.boundaries.filter(b => new Date(b.timestamp).toDateString() === today);
  
  // Update stats
  document.getElementById('checkins-today-stat').textContent = todayCheckIns.length;
  
  // Update timer display mini
  const timerMini = document.getElementById('timer-display-mini');
  if (timerMini) {
    const minutes = Math.floor(data.dailyDiscussionTime / 60);
    timerMini.textContent = `${minutes} min`;
  }
  
  // Streak counter (simple: consecutive days with check-ins)
  const streakEl = document.getElementById('streak-counter');
  if (streakEl) {
    streakEl.textContent = calculateStreak();
  }
  
  // Topics count
  const topicsCountEl = document.getElementById('topics-count');
  if (topicsCountEl) {
    const activeTopics = data.topics.filter(t => t.status !== 'Resolved').length;
    topicsCountEl.textContent = activeTopics;
  }
  
  // Recent topics
  const recentTopics = data.topics.slice(-6).reverse();
  const recentList = document.getElementById('recent-topics-list');
  if (recentTopics.length === 0) {
    recentList.innerHTML = '<div class="empty-state">No topics yet. Create your first topic!</div>';
  } else {
    recentList.innerHTML = recentTopics.map(t => createTopicCardModern(t)).join('');
  }
  
  populateDashboardElements();
}

function calculateStreak() {
  if (data.feelingsCheckIns.length === 0) return 0;
  
  const sortedCheckIns = [...data.feelingsCheckIns].sort((a, b) => b.timestamp - a.timestamp);
  let streak = 0;
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  
  for (let i = 0; i < 30; i++) {
    const dateStr = currentDate.toDateString();
    const hasCheckIn = sortedCheckIns.some(c => new Date(c.timestamp).toDateString() === dateStr);
    
    if (hasCheckIn) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else if (i === 0) {
      // No check-in today, check yesterday
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }
  
  return streak;
}

function createTopicCard(topic) {
  const urgencyClass = `urgency-${topic.urgency.toLowerCase()}`;
  const statusClass = topic.status === 'Resolved' ? 'resolved' : topic.response ? 'in-progress' : 'pending';
  const statusText = topic.status === 'Resolved' ? 'Resolved' : topic.response ? 'In Progress' : 'Pending';
  
  return `
    <div class="topic-card-small ${urgencyClass}" onclick="viewTopicDetail(${topic.id})">
      <div class="topic-title">${topic.title}</div>
      <div class="topic-with">With: ${topic.withPerson}</div>
      <div class="topic-meta">
        ${topic.categoryHashtags.slice(0, 2).map(tag => 
          `<span class="topic-badge">${tag}</span>`
        ).join('')}
      </div>
      <div class="topic-status-badge ${statusClass}">${statusText}</div>
    </div>
  `;
}

function createTopicCardModern(topic) {
  const urgencyClass = `urgency-${topic.urgency.toLowerCase()}`;
  const statusClass = topic.status === 'Resolved' ? 'resolved' : topic.response ? 'in-progress' : 'pending';
  const statusText = topic.status === 'Resolved' ? '✓ Resolved' : topic.response ? '🔄 In Progress' : '⏳ Pending';
  const urgencyEmoji = topic.urgency === 'High' ? '🔴' : topic.urgency === 'Medium' ? '🟡' : '🟢';
  
  return `
    <div class="topic-card-small glass-card ${urgencyClass}" onclick="viewTopicDetail(${topic.id})">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
        <div class="topic-title">${topic.title}</div>
        <div style="font-size: 24px;">${urgencyEmoji}</div>
      </div>
      <div class="topic-with" style="margin-bottom: 12px;">👤 ${topic.withPerson}</div>
      <div class="topic-meta" style="margin-bottom: auto;">
        ${topic.categoryHashtags.slice(0, 3).map(tag => 
          `<span class="hashtag-chip" style="font-size: 11px; padding: 4px 10px;">${tag}</span>`
        ).join('')}
      </div>
      <div class="topic-status-badge ${statusClass}" style="margin-top: 16px;">${statusText}</div>
    </div>
  `;
}

// Topics
function renderTopics() {
  const container = document.getElementById('topics-container');
  if (data.topics.length === 0) {
    container.innerHTML = '<div class="empty-state">No topics yet. Click "New Topic" to get started!</div>';
  } else {
    container.innerHTML = data.topics.map(t => createTopicCard(t)).join('');
  }
}

function openNewTopic() {
  selectedCategoryHashtags = [];
  document.getElementById('new-topic-modal').classList.remove('hidden');
  renderCategoryHashtags();
}

function closeNewTopic() {
  document.getElementById('new-topic-modal').classList.add('hidden');
  document.getElementById('new-topic-form').reset();
  selectedCategoryHashtags = [];
}

function renderCategoryHashtags() {
  const container = document.getElementById('category-hashtags');
  container.innerHTML = categoryHashtags.map(tag => 
    `<button type="button" class="hashtag-suggestion" onclick="toggleCategoryHashtag('${tag}')">${tag}</button>`
  ).join('');
}

function toggleCategoryHashtag(tag) {
  const index = selectedCategoryHashtags.indexOf(tag);
  if (index > -1) {
    selectedCategoryHashtags.splice(index, 1);
  } else {
    selectedCategoryHashtags.push(tag);
  }
  
  document.querySelectorAll('#category-hashtags .hashtag-suggestion').forEach(btn => {
    if (btn.textContent === tag) {
      btn.classList.toggle('selected');
    }
  });
  
  document.getElementById('selected-categories').value = selectedCategoryHashtags.join(',');
}

// Topic form listener moved to main DOMContentLoaded handler

function handleNewTopicSubmit(e) {
  e.preventDefault();
  
  if (selectedCategoryHashtags.length === 0) {
    alert('Please select at least one category hashtag.');
    return;
  }
  
  const discussionDateInput = document.getElementById('discussion-date').value;
  let discussionDate = null;
  if (discussionDateInput) {
    discussionDate = new Date(discussionDateInput).getTime();
  }
  
  const topic = {
    id: idCounters.topic++,
    title: document.getElementById('topic-title').value,
    withPerson: document.getElementById('topic-with').value,
    categoryHashtags: [...selectedCategoryHashtags],
    urgency: document.getElementById('topic-urgency').value,
    bulletPoints: document.getElementById('topic-bullets').value,
    discussionDate: discussionDate,
    createdAt: Date.now(),
    status: 'Pending',
    response: null
  };
  
  data.topics.push(topic);
  closeNewTopic();
  showView('topics');
  alert('✓ Topic created successfully!');
}

function viewTopicDetail(topicId) {
  const topic = data.topics.find(t => t.id === topicId);
  if (!topic) return;
  
  const container = document.getElementById('topic-detail-content');
  let html = `
    <div class="topic-detail-header">
      <h2>${topic.title}</h2>
      <div class="topic-meta">
        <span class="topic-badge">With: ${topic.withPerson}</span>
        ${topic.categoryHashtags.map(tag => 
          `<span class="hashtag-chip" style="font-size: 12px;">${tag}</span>`
        ).join(' ')}
        <span class="topic-badge">${topic.urgency} Priority</span>
        ${topic.discussionDate ? `<span class="schedule-badge">📅 ${new Date(topic.discussionDate).toLocaleDateString()}</span>` : ''}
      </div>
      ${topic.bulletPoints ? `
        <div class="bullet-points-section" style="margin-top: 16px;">
          <h5>Reference Notes</h5>
          <div class="bullet-points-list">${topic.bulletPoints}</div>
        </div>
      ` : ''}
    </div>
  `;
  
  if (!topic.response) {
    html += `
      <div class="response-form">
        <h3>Add Your Response</h3>
        <p class="form-hint">Use the feelings wheel to express how you feel about this topic.</p>
        <button class="btn btn--primary" onclick="openResponseForm(${topicId})">Select Feelings &amp; Respond</button>
      </div>
    `;
    container.innerHTML = html;
  } else {
    html += `
      <div class="response-card">
        <h3>Your Response</h3>
        <div class="response-field">
          <div class="response-field-label">Feelings</div>
          <div class="response-field-value">${topic.response.primaryEmotion}: ${topic.response.subcategory} ${topic.response.outerFeelings.join(', ')}</div>
        </div>
        <div class="response-field">
          <div class="response-field-label">My Thoughts</div>
          <div class="response-field-value">${topic.response.thoughts}</div>
        </div>
        <div class="response-field">
          <div class="response-field-label">What I Need</div>
          <div class="response-field-value">${topic.response.needs}</div>
        </div>
        ${topic.response.solution ? `
          <div class="response-field">
            <div class="response-field-label">My Proposed Solution</div>
            <div class="response-field-value">${topic.response.solution}</div>
          </div>
        ` : ''}
      </div>
      <div class="action-buttons" style="margin-top: 24px;">
        <button class="btn btn--primary" onclick="markTopicResolved(${topicId})">Mark as Resolved</button>
      </div>
    `;
  }
  
  container.innerHTML = html;
  showView('topic-detail');
}

function goBackFromDetail() {
  showView('topics');
}

function openResponseForm(topicId) {
  feelingsCheckInState.linkedTopicId = topicId;
  openFeelingsCheckIn(true);
}

function markTopicResolved(topicId) {
  const topic = data.topics.find(t => t.id === topicId);
  if (topic) {
    topic.status = 'Resolved';
    alert('🎉 Topic marked as resolved!');
    goBackFromDetail();
  }
}

// Feelings Check-In
function openFeelingsCheckIn(isTopicResponse = false) {
  feelingsCheckInState = {
    primaryEmotion: null,
    subcategory: null,
    outerFeelings: [],
    additionalFeelings: [],
    currentTriggers: [],
    linkedTopicId: isTopicResponse ? feelingsCheckInState.linkedTopicId : null
  };
  
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'feelings-modal';
  modal.onclick = (e) => {
    if (e.target === modal) closeFeelingsCheckIn();
  };
  
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 700px;">
      <div class="modal-header">
        <h3>💚 ${isTopicResponse ? 'Topic Response - ' : ''}Feelings Check-In</h3>
        <button class="modal-close" onclick="closeFeelingsCheckIn()">&times;</button>
      </div>
      <form id="feelings-checkin-form" onsubmit="submitFeelingsCheckIn(event, ${isTopicResponse})">
        <div class="form-group">
          <label class="form-label">Step 1: Select Primary Emotion</label>
          <div id="primary-emotions-container" class="feelings-chips">
            ${Object.keys(feelingsWheel).map(emotion => 
              `<button type="button" class="feeling-chip" style="background-color: ${feelingsWheel[emotion].color}30; border-color: ${feelingsWheel[emotion].color};" onclick="selectPrimaryEmotion('${emotion}')">${emotion}</button>`
            ).join('')}
          </div>
        </div>
        <div id="subcategory-container" style="display: none;">
          <div class="form-group">
            <label class="form-label">Step 2: Select Subcategory</label>
            <div id="subcategories-container" class="feelings-chips"></div>
          </div>
        </div>
        <div id="outer-container" style="display: none;">
          <div class="form-group">
            <label class="form-label">Step 3: Select up to 2 specific feelings</label>
            <div id="outer-feelings-container" class="feelings-chips"></div>
          </div>
        </div>
        <div id="additional-container" style="display: none;">
          <div class="form-group">
            <label class="form-label">Step 4: Add up to 4 additional feelings (optional)</label>
            <p class="form-hint">Select from any category</p>
            <div id="additional-feelings-container" class="feelings-chips"></div>
          </div>
        </div>
        <div id="details-container" style="display: none;">
          ${!isTopicResponse ? `
            <div class="form-group">
              <label class="form-label">Where do you feel this in your body?</label>
              <input type="text" class="form-control" id="body-location" placeholder="e.g., tightness in chest, tension in shoulders" required>
            </div>
            <div class="form-group">
              <label class="form-label">What triggered this feeling?</label>
              <div id="trigger-hashtags" class="hashtag-input-container">
                <input type="text" class="hashtag-input" id="trigger-input" placeholder="Type and press Enter to add #tags">
              </div>
            </div>
          ` : ''}
          <div class="form-group">
            <label class="form-label">${isTopicResponse ? 'My Thoughts' : 'Notes / Reflections'}</label>
            <textarea class="form-control" id="feeling-notes" rows="3" ${isTopicResponse ? 'required' : ''} placeholder="${isTopicResponse ? 'Share your thoughts...' : 'Any additional thoughts...'}"></textarea>
          </div>
          ${isTopicResponse ? `
            <div class="form-group">
              <label class="form-label">What I Need</label>
              <textarea class="form-control" id="what-i-need" rows="3" required placeholder="Express what you need clearly..."></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">My Proposed Solution (Optional)</label>
              <textarea class="form-control" id="my-solution" rows="3" placeholder="If you have ideas for solutions, share them here..."></textarea>
            </div>
          ` : ''}
          <div class="form-actions">
            <button type="submit" class="btn btn--primary">Save ${isTopicResponse ? 'Response' : 'Check-In'}</button>
            <button type="button" class="btn btn--secondary" onclick="closeFeelingsCheckIn()">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  if (!isTopicResponse) {
    setTimeout(() => {
      setupHashtagInput('trigger-input');
    }, 100);
  }
}

function closeFeelingsCheckIn() {
  const modal = document.getElementById('feelings-modal');
  if (modal) modal.remove();
}

function selectPrimaryEmotion(emotion) {
  feelingsCheckInState.primaryEmotion = emotion;
  feelingsCheckInState.subcategory = null;
  feelingsCheckInState.outerFeelings = [];
  
  document.querySelectorAll('#primary-emotions-container .feeling-chip').forEach(chip => {
    chip.classList.remove('selected');
    if (chip.textContent === emotion) chip.classList.add('selected');
  });
  
  const subcatContainer = document.getElementById('subcategory-container');
  const subcatChips = document.getElementById('subcategories-container');
  subcatContainer.style.display = 'block';
  subcatChips.innerHTML = feelingsWheel[emotion].middle.map(sub => 
    `<button type="button" class="feeling-chip" onclick="selectSubcategory('${sub}')">${sub}</button>`
  ).join('');
  
  document.getElementById('outer-container').style.display = 'none';
  document.getElementById('additional-container').style.display = 'none';
  document.getElementById('details-container').style.display = 'none';
}

function selectSubcategory(subcategory) {
  feelingsCheckInState.subcategory = subcategory;
  feelingsCheckInState.outerFeelings = [];
  
  document.querySelectorAll('#subcategories-container .feeling-chip').forEach(chip => {
    chip.classList.remove('selected');
    if (chip.textContent === subcategory) chip.classList.add('selected');
  });
  
  const outerContainer = document.getElementById('outer-container');
  const outerChips = document.getElementById('outer-feelings-container');
  outerContainer.style.display = 'block';
  outerChips.innerHTML = feelingsWheel[feelingsCheckInState.primaryEmotion].outer.map(feeling => 
    `<button type="button" class="feeling-chip" onclick="toggleOuterFeeling('${feeling}')">#${feeling}</button>`
  ).join('');
  
  document.getElementById('additional-container').style.display = 'block';
  renderAdditionalFeelings();
  document.getElementById('details-container').style.display = 'block';
}

function toggleOuterFeeling(feeling) {
  const index = feelingsCheckInState.outerFeelings.indexOf(feeling);
  if (index > -1) {
    feelingsCheckInState.outerFeelings.splice(index, 1);
  } else {
    if (feelingsCheckInState.outerFeelings.length < 2) {
      feelingsCheckInState.outerFeelings.push(feeling);
    } else {
      alert('You can select up to 2 outer feelings.');
      return;
    }
  }
  
  document.querySelectorAll('#outer-feelings-container .feeling-chip').forEach(chip => {
    if (chip.textContent === '#' + feeling) {
      chip.classList.toggle('selected', feelingsCheckInState.outerFeelings.includes(feeling));
    }
  });
}

function renderAdditionalFeelings() {
  const container = document.getElementById('additional-feelings-container');
  const allFeelings = [];
  Object.keys(feelingsWheel).forEach(emotion => {
    allFeelings.push(...feelingsWheel[emotion].outer);
  });
  
  container.innerHTML = allFeelings.map(feeling => 
    `<button type="button" class="feeling-chip" onclick="toggleAdditionalFeeling('${feeling}')">#${feeling}</button>`
  ).join('');
}

function toggleAdditionalFeeling(feeling) {
  const index = feelingsCheckInState.additionalFeelings.indexOf(feeling);
  if (index > -1) {
    feelingsCheckInState.additionalFeelings.splice(index, 1);
  } else {
    if (feelingsCheckInState.additionalFeelings.length < 4) {
      feelingsCheckInState.additionalFeelings.push(feeling);
    } else {
      alert('You can select up to 4 additional feelings.');
      return;
    }
  }
  
  document.querySelectorAll('#additional-feelings-container .feeling-chip').forEach(chip => {
    if (chip.textContent === '#' + feeling) {
      chip.classList.toggle('selected', feelingsCheckInState.additionalFeelings.includes(feeling));
    }
  });
}

function setupHashtagInput(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      let value = input.value.trim();
      if (value) {
        if (!value.startsWith('#')) value = '#' + value;
        if (!feelingsCheckInState.currentTriggers.includes(value)) {
          feelingsCheckInState.currentTriggers.push(value);
          renderTriggerHashtags();
        }
        input.value = '';
      }
    }
  });
}

function renderTriggerHashtags() {
  const container = document.getElementById('trigger-hashtags');
  if (!container) return;
  
  const input = container.querySelector('.hashtag-input');
  const existingChips = container.querySelectorAll('.hashtag-chip');
  existingChips.forEach(chip => chip.remove());
  
  feelingsCheckInState.currentTriggers.forEach(tag => {
    const chip = document.createElement('span');
    chip.className = 'hashtag-chip';
    chip.innerHTML = `${tag} <span class="remove" onclick="removeTriggerHashtag('${tag}')">&times;</span>`;
    container.insertBefore(chip, input);
  });
}

function removeTriggerHashtag(tag) {
  feelingsCheckInState.currentTriggers = feelingsCheckInState.currentTriggers.filter(t => t !== tag);
  renderTriggerHashtags();
}

function submitFeelingsCheckIn(e, isTopicResponse) {
  e.preventDefault();
  
  if (!feelingsCheckInState.primaryEmotion || !feelingsCheckInState.subcategory) {
    alert('Please complete all feelings selection steps.');
    return;
  }
  
  const checkIn = {
    id: idCounters.checkIn++,
    timestamp: Date.now(),
    primaryEmotion: feelingsCheckInState.primaryEmotion,
    subcategory: feelingsCheckInState.subcategory,
    outerFeelings: [...feelingsCheckInState.outerFeelings],
    additionalFeelings: [...feelingsCheckInState.additionalFeelings],
    bodyLocation: document.getElementById('body-location')?.value || '',
    triggers: [...feelingsCheckInState.currentTriggers],
    notes: document.getElementById('feeling-notes').value,
    linkedTopicId: feelingsCheckInState.linkedTopicId
  };
  
  data.feelingsCheckIns.push(checkIn);
  data.lastCheckInTime = Date.now();
  
  if (isTopicResponse && feelingsCheckInState.linkedTopicId) {
    const topic = data.topics.find(t => t.id === feelingsCheckInState.linkedTopicId);
    if (topic) {
      topic.response = {
        primaryEmotion: feelingsCheckInState.primaryEmotion,
        subcategory: feelingsCheckInState.subcategory,
        outerFeelings: [...feelingsCheckInState.outerFeelings],
        thoughts: document.getElementById('feeling-notes').value,
        needs: document.getElementById('what-i-need').value,
        solution: document.getElementById('my-solution')?.value || '',
        timestamp: Date.now()
      };
      topic.status = 'In Progress';
      closeFeelingsCheckIn();
      viewTopicDetail(topic.id);
      alert('✓ Response saved! A new feelings journal entry has been created.');
      return;
    }
  }
  
  closeFeelingsCheckIn();
  alert('✓ Feelings check-in saved! Great job tracking your emotions.');
  renderDashboard();
}

// Logs
function switchLogTab(logType) {
  document.querySelectorAll('.log-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-log="${logType}"]`).classList.add('active');
  renderLogContent(logType);
}

function renderLogs(logType = 'feelings') {
  switchLogTab(logType);
}

// Helper function for accomplishments log
function renderAccomplishmentsLog(container) {
  container.innerHTML = `
    <div class="log-action-bar">
      <button class="btn btn--primary" onclick="openNewAccomplishment()">+ New Accomplishment</button>
      <button class="btn btn--outline" onclick="openFeelingsCheckIn()">+ New Feelings Check-In</button>
    </div>
    <div class="quick-add-form glass-card">
      <h3>Log Accomplishment</h3>
      <div class="type-buttons">
        ${accomplishmentTypes.map((type, index) => 
          `<button type="button" class="type-button" onclick="selectAccomplishmentType(${index})">${type.emoji} ${type.label}</button>`
        ).join('')}
      </div>
      <form id="accomplishment-form" onsubmit="submitAccomplishment(event)">
        <div class="form-group">
          <textarea class="form-control" id="accomplishment-details" rows="2" placeholder="Details..." required></textarea>
        </div>
        <button type="submit" class="btn btn--primary">Log Accomplishment</button>
      </form>
    </div>
    <div class="accomplishments-grid">
      ${data.accomplishments.length === 0 ? '<div class="empty-state">No accomplishments logged yet. Start celebrating your wins!</div>' : 
        [...data.accomplishments].reverse().map(a => {
          const date = new Date(a.timestamp);
          const type = accomplishmentTypes[a.typeIndex];
          return `
            <div class="accomplishment-card glass-card" data-type="${type.colorType}">
              <div class="accomplishment-header">
                <div class="accomplishment-icon">${type.emoji}</div>
                <div class="accomplishment-type">${type.label}</div>
              </div>
              <div class="accomplishment-details" style="margin: 16px 0; line-height: 1.5;">${a.details}</div>
              <div class="accomplishment-meta" style="margin-top: auto; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px;">${date.toLocaleDateString()} • ${date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</div>
            </div>
          `;
        }).join('')
      }
    </div>
  `;
}

function renderLogContent(logType) {
  const container = document.getElementById('logs-content');
  if (!container) {
    console.error('Logs content container not found');
    return;
  }
  
  if (logType === 'feelings') {
    if (data.feelingsCheckIns.length === 0) {
      container.innerHTML = `
        <div class="empty-state">No feelings check-ins yet. Start tracking your emotions!</div>
        <button class="btn btn--primary" onclick="openFeelingsCheckIn()">+ New Feelings Check-In</button>
      `;
      return;
    }
    
    const sorted = [...data.feelingsCheckIns].reverse();
      container.innerHTML = `
        <div class="log-action-bar">
          <button class="btn btn--primary" onclick="openFeelingsCheckIn()">+ New Feelings Check-In</button>
        </div>
        <div class="feelings-timeline">
          ${sorted.map(checkIn => {
            const date = new Date(checkIn.timestamp);
            const emotionClass = checkIn.primaryEmotion.toLowerCase();
            return `
              <div class="feelings-checkin-card glass-card ${emotionClass}">
                <div class="checkin-header">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="font-size: 48px;">${getEmotionEmoji(checkIn.primaryEmotion)}</div>
                    <div>
                      <div class="checkin-emotion">${checkIn.primaryEmotion}</div>
                      <div class="checkin-feeling" style="font-size: 14px; color: var(--color-text-secondary);">${checkIn.subcategory}</div>
                    </div>
                  </div>
                  <div class="checkin-meta" style="font-size: 12px;">${date.toLocaleDateString()}<br>${date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</div>
                </div>
                <div class="feelings-chips" style="margin: 16px 0; gap: 6px;">
                  ${checkIn.outerFeelings.map(f => `<span class="feeling-chip selected" style="font-size: 12px; padding: 4px 10px;">#${f}</span>`).join('')}
                  ${checkIn.additionalFeelings.map(f => `<span class="feeling-chip" style="font-size: 12px; padding: 4px 10px; background: rgba(255,255,255,0.1);">#${f}</span>`).join('')}
                </div>
                ${checkIn.bodyLocation ? `<div class="checkin-field" style="margin-bottom: 8px;"><div class="checkin-field-label">📍 Body Location</div><div class="checkin-field-value">${checkIn.bodyLocation}</div></div>` : ''}
                ${checkIn.triggers.length > 0 ? `<div class="checkin-field" style="margin-bottom: 8px;"><div class="checkin-field-label">⚡ Triggers</div><div class="checkin-field-value">${checkIn.triggers.join(' ')}</div></div>` : ''}
                ${checkIn.notes ? `<div class="checkin-field"><div class="checkin-field-label">💭 Notes</div><div class="checkin-field-value">${checkIn.notes}</div></div>` : ''}
              </div>
            `;
          }).join('')}
        </div>
      `;
  } else if (logType === 'accomplishments') {
    renderAccomplishmentsLog(container);
  } else if (logType === 'appreciation') {
    const actionBar = '<div class="log-action-bar"><button class="btn btn--primary" onclick="openFeelingsCheckIn()">+ New Feelings Check-In</button></div>';
    container.innerHTML = `
      ${actionBar}
      <div class="appreciation-quote">
        <h2>"Can't Never Could, Be Better!"</h2>
      </div>
      <div class="quick-add-form">
        <h3>Add Appreciation</h3>
        <div class="media-type-selector">
          <button type="button" class="media-type-btn selected" onclick="selectAppreciationType('text')">
            <span class="icon">📝</span>
            <span>Text</span>
          </button>
          <button type="button" class="media-type-btn" onclick="selectAppreciationType('image')">
            <span class="icon">📷</span>
            <span>Photo</span>
          </button>
          <button type="button" class="media-type-btn" onclick="selectAppreciationType('audio')">
            <span class="icon">🎵</span>
            <span>Audio</span>
          </button>
          <button type="button" class="media-type-btn" onclick="selectAppreciationType('document')">
            <span class="icon">📄</span>
            <span>Document</span>
          </button>
          <button type="button" class="media-type-btn" onclick="selectAppreciationType('link')">
            <span class="icon">🔗</span>
            <span>Link</span>
          </button>
        </div>
        <form id="appreciation-form" onsubmit="submitAppreciation(event)">
          <div id="appreciation-input-container">
            <div class="form-group">
              <textarea class="form-control" id="appreciation-text" rows="3" placeholder="I appreciate..." required></textarea>
            </div>
          </div>
          <div id="appreciation-preview"></div>
          <button type="submit" class="btn btn--primary">Share Appreciation</button>
        </form>
      </div>
      <div id="appreciation-list">
        ${data.appreciations.length === 0 ? '<div class="empty-state">No appreciations yet. Share something positive!</div>' : 
          [...data.appreciations].reverse().map(a => {
            const date = new Date(a.timestamp);
            let mediaContent = '';
            if (a.type === 'image' && a.fileData) {
              mediaContent = `<div class="media-content"><img src="${a.fileData}" alt="Appreciation image" onclick="window.open(this.src)"></div>`;
            } else if (a.type === 'audio' && a.fileData) {
              mediaContent = `<div class="media-content"><audio controls src="${a.fileData}"></audio></div>`;
            } else if (a.type === 'document') {
              mediaContent = `<div class="document-preview"><span class="document-icon">📄</span><div class="document-info"><div class="document-name">${a.fileName}</div></div></div>`;
            } else if (a.type === 'link') {
              mediaContent = `<div style="margin-top: 8px;"><a href="${a.content}" target="_blank" style="color: var(--color-primary);">${a.content}</a></div>`;
            }
            return `
              <div class="appreciation-card ${a.type !== 'text' ? 'has-media' : ''}">
                <div class="appreciation-text">${a.text || a.content}</div>
                ${mediaContent}
                <div class="appreciation-meta">${date.toLocaleDateString()} ${date.toLocaleTimeString()}</div>
              </div>
            `;
          }).join('')
        }
      </div>
    `;
  } else if (logType === 'boundaries') {
    container.innerHTML = `
      ${actionBar}
      <div class="quick-add-form glass-card">
        <h3>Log Accomplishment</h3>
        <div class="type-buttons">
          ${accomplishmentTypes.map((type, index) => 
            `<button type="button" class="type-button" onclick="selectAccomplishmentType(${index})">${type.emoji} ${type.label}</button>`
          ).join('')}
        </div>
        <form id="accomplishment-form" onsubmit="submitAccomplishment(event)">
          <div class="form-group">
            <textarea class="form-control" id="accomplishment-details" rows="2" placeholder="Details..." required></textarea>
          </div>
          <button type="submit" class="btn btn--primary">Log Accomplishment</button>
        </form>
      </div>
      <div class="accomplishments-grid">
        ${data.accomplishments.length === 0 ? '<div class="empty-state">No accomplishments logged yet. Start celebrating your wins!</div>' : 
          [...data.accomplishments].reverse().map(a => {
            const date = new Date(a.timestamp);
            const type = accomplishmentTypes[a.typeIndex];
            return `
              <div class="accomplishment-card glass-card" data-type="${type.colorType}">
                <div class="accomplishment-header">
                  <div class="accomplishment-icon">${type.emoji}</div>
                  <div class="accomplishment-type">${type.label}</div>
                </div>
                <div class="accomplishment-details" style="margin: 16px 0; line-height: 1.5;">${a.details}</div>
                <div class="accomplishment-meta" style="margin-top: auto; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px;">${date.toLocaleDateString()} • ${date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</div>
              </div>
            `;
          }).join('')
        }
      </div>
    `;
    return;
  }
  
  if (logType === 'boundaries') {
    container.innerHTML = `
      ${actionBar}
      <div class="quick-add-form glass-card">
        <h3>Log Boundary</h3>
        <form id="boundary-form" onsubmit="submitBoundary(event)">
          <div class="form-group">
            <label class="form-label">Boundary Description</label>
            <input type="text" class="form-control" id="boundary-description" placeholder="e.g., I said no to working late" required>
          </div>
          <div class="form-group">
            <label class="form-label">Who was involved?</label>
            <input type="text" class="form-control" id="boundary-person" placeholder="Person or situation" required>
          </div>
          <div class="form-group">
            <label class="form-label">Outcome</label>
            <textarea class="form-control" id="boundary-outcome" rows="2" required></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Success Rating (1-5 stars)</label>
            <div>
              <input type="range" min="1" max="5" value="3" id="boundary-rating" class="form-control" style="width: 200px;">
              <span id="rating-display">3</span> ⭐
            </div>
          </div>
          <button type="submit" class="btn btn--primary">Log Boundary</button>
        </form>
      </div>
      <div class="boundaries-grid">
        ${data.boundaries.length === 0 ? '<div class="empty-state">No boundaries logged yet. Start tracking your boundary-setting journey!</div>' : 
          [...data.boundaries].reverse().map(b => {
            const date = new Date(b.timestamp);
            const stars = '⭐'.repeat(b.rating) + '☆'.repeat(5 - b.rating);
            return `
              <div class="boundary-card glass-card">
                <div style="font-size: 32px; margin-bottom: 12px;">🛡️</div>
                <div class="boundary-header">
                  <h4 style="margin: 0 0 12px 0; font-size: 18px;">${b.description}</h4>
                </div>
                <div class="boundary-details" style="margin-bottom: 12px; line-height: 1.6;">
                  <div style="margin-bottom: 8px;"><strong>👤 With:</strong> ${b.person}</div>
                  <div><strong>📝 Outcome:</strong> ${b.outcome}</div>
                </div>
                <div class="boundary-success-rating" style="margin: 12px 0; font-size: 20px;">${stars}</div>
                <div class="boundary-meta" style="margin-top: auto; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px;">${date.toLocaleDateString()} • ${date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</div>
              </div>
            `;
          }).join('')
        }
      </div>
    `;
    
    setTimeout(() => {
      const ratingSlider = document.getElementById('boundary-rating');
      const ratingDisplay = document.getElementById('rating-display');
      if (ratingSlider && ratingDisplay) {
        ratingSlider.addEventListener('input', (e) => {
          ratingDisplay.textContent = e.target.value;
        });
      }
    }, 100);
  } else if (logType === 'quotes') {
    container.innerHTML = `
      ${actionBar}
      <div style="text-align: center; margin-bottom: 24px;">
        <button class="btn btn--outline" onclick="showRandomQuote()" ${data.quotes.length === 0 ? 'disabled' : ''}>🎲 Show Random Quote</button>
      </div>
      <div id="random-quote-container"></div>
      <div class="quick-add-form glass-card">
        <h3>Add New Quote</h3>
        <form id="quote-form" onsubmit="submitQuote(event)">
          <div class="form-group">
            <label class="form-label">Quote Text</label>
            <textarea class="form-control" id="quote-text" rows="4" placeholder="Enter the inspiring quote..." required></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Author / Source (Optional)</label>
            <input type="text" class="form-control" id="quote-author" placeholder="e.g., Rumi, Unknown">
          </div>
          <div class="form-group">
            <label class="form-label">Associated Feelings (Optional)</label>
            <p class="form-hint">How does this quote make you feel?</p>
            <button type="button" class="btn btn--secondary btn--sm" onclick="openQuoteFeelingSelector()">Select Feelings</button>
            <div id="quote-selected-feelings" class="feelings-chips" style="margin-top: 12px;"></div>
          </div>
          <div class="form-group">
            <label class="form-label">Context / Why It Resonated (Optional)</label>
            <textarea class="form-control" id="quote-context" rows="2" placeholder="Why does this quote speak to you?"></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Tags</label>
            <div id="quote-tags-container" class="hashtag-input-container">
              <input type="text" class="hashtag-input" id="quote-tags-input" placeholder="Type and press Enter to add #tags">
            </div>
          </div>
          <button type="submit" class="btn btn--primary">Save Quote</button>
        </form>
      </div>
      <div class="quotes-grid">
        ${data.quotes.length === 0 ? '<div class="empty-state">No quotes saved yet. Add your first inspiring quote!</div>' :
          [...data.quotes].reverse().map(q => {
            const date = new Date(q.timestamp);
            return `
              <div class="quote-card glass-card">
                <div class="quote-text">${q.quoteText}</div>
                ${q.author ? `<div class="quote-author">${q.author}</div>` : ''}
                ${q.feelings && q.feelings.length > 0 ? `
                  <div class="quote-feelings" style="margin-top: 16px;">
                    ${q.feelings.map(f => `<span class="quote-feeling-badge">${f}</span>`).join('')}
                  </div>
                ` : ''}
                ${q.context ? `<div class="quote-context" style="margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.1);">${q.context}</div>` : ''}
                ${q.tags && q.tags.length > 0 ? `
                  <div class="quote-tags" style="margin-top: 12px;">
                    ${q.tags.map(t => `<span class="quote-tag">${t}</span>`).join('')}
                  </div>
                ` : ''}
                <div class="quote-meta" style="margin-top: 16px; font-size: 12px;">${date.toLocaleDateString()}</div>
              </div>
            `;
          }).join('')
        }
      </div>
    `;
    
    setTimeout(() => {
      setupQuoteTagsInput();
    }, 100);
  }
}

function getEmotionEmoji(emotion) {
  const emojis = {
    'Happy': '😊',
    'Sad': '😢',
    'Angry': '😡',
    'Fearful': '😨',
    'Surprised': '😮',
    'Disgusted': '😬',
    'Indifferent': '😐'
  };
  return emojis[emotion] || '💚';
}

function getLogTypeName(logType) {
  const names = {
    'appreciation': 'Appreciation',
    'accomplishments': 'Accomplishment',
    'boundaries': 'Boundary',
    'quotes': 'Quote'
  };
  return names[logType] || '';
}

function getLogPrimaryAction(logType) {
  const actions = {
    'appreciation': 'document.getElementById("appreciation-text").focus()',
    'accomplishments': 'openNewAccomplishment()',
    'boundaries': 'document.getElementById("boundary-description").focus()',
    'quotes': 'document.getElementById("quote-text").focus()'
  };
  return actions[logType] || '';
}

function selectAccomplishmentType(index) {
  selectedAccomplishmentType = index;
  document.querySelectorAll('.type-button').forEach((btn, i) => {
    btn.classList.toggle('selected', i === index);
  });
}

function openNewAccomplishment() {
  const detailsField = document.getElementById('accomplishment-details');
  if (detailsField) detailsField.focus();
}

function selectAppreciationType(type) {
  currentAppreciationType = type;
  currentAppreciationFile = null;
  
  document.querySelectorAll('.media-type-btn').forEach(btn => btn.classList.remove('selected'));
  event.target.closest('.media-type-btn').classList.add('selected');
  
  const container = document.getElementById('appreciation-input-container');
  const preview = document.getElementById('appreciation-preview');
  preview.innerHTML = '';
  
  if (type === 'text') {
    container.innerHTML = `
      <div class="form-group">
        <textarea class="form-control" id="appreciation-text" rows="3" placeholder="I appreciate..." required></textarea>
      </div>
    `;
  } else if (type === 'link') {
    container.innerHTML = `
      <div class="form-group">
        <input type="url" class="form-control" id="appreciation-text" placeholder="https://..." required>
      </div>
    `;
  } else {
    const acceptTypes = {
      'image': 'image/*',
      'audio': 'audio/*',
      'document': '.pdf,.doc,.docx,.txt'
    };
    container.innerHTML = `
      <div class="form-group">
        <input type="file" class="form-control" id="appreciation-file" accept="${acceptTypes[type]}" required onchange="previewAppreciationFile(event)">
      </div>
      <div class="form-group">
        <textarea class="form-control" id="appreciation-text" rows="2" placeholder="Add a note (optional)"></textarea>
      </div>
    `;
  }
}

function setupAppreciationTypeSelector() {
  currentAppreciationType = 'text';
  currentAppreciationFile = null;
}

function previewAppreciationFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const preview = document.getElementById('appreciation-preview');
  const reader = new FileReader();
  
  reader.onload = function(e) {
    currentAppreciationFile = {
      name: file.name,
      data: e.target.result,
      size: file.size
    };
    
    if (currentAppreciationType === 'image') {
      preview.innerHTML = `<div class="media-preview-container"><img src="${e.target.result}" alt="Preview"></div>`;
    } else if (currentAppreciationType === 'audio') {
      preview.innerHTML = `<div class="media-preview-container"><audio controls src="${e.target.result}"></audio></div>`;
    } else if (currentAppreciationType === 'document') {
      preview.innerHTML = `
        <div class="document-preview">
          <span class="document-icon">📄</span>
          <div class="document-info">
            <div class="document-name">${file.name}</div>
            <div class="document-size">${(file.size / 1024).toFixed(2)} KB</div>
          </div>
        </div>
      `;
    }
  };
  
  if (currentAppreciationType === 'image' || currentAppreciationType === 'audio') {
    reader.readAsDataURL(file);
  } else {
    reader.readAsDataURL(file);
  }
}

function submitAppreciation(e) {
  e.preventDefault();
  const textElement = document.getElementById('appreciation-text');
  const text = textElement ? textElement.value : '';
  
  const appreciation = {
    id: idCounters.appreciation++,
    type: currentAppreciationType,
    text: text,
    timestamp: Date.now()
  };
  
  if (currentAppreciationFile) {
    appreciation.fileName = currentAppreciationFile.name;
    appreciation.fileData = currentAppreciationFile.data;
  }
  
  if (currentAppreciationType === 'link') {
    appreciation.content = text;
  }
  
  data.appreciations.push(appreciation);
  
  currentAppreciationType = 'text';
  currentAppreciationFile = null;
  renderLogContent('appreciation');
  alert('⭐ Appreciation shared!');
}

function submitAccomplishment(e) {
  e.preventDefault();
  
  if (selectedAccomplishmentType === null) {
    alert('Please select an accomplishment type.');
    return;
  }
  
  const details = document.getElementById('accomplishment-details').value;
  
  data.accomplishments.push({
    id: idCounters.accomplishment++,
    typeIndex: selectedAccomplishmentType,
    details: details,
    timestamp: Date.now()
  });
  
  selectedAccomplishmentType = null;
  renderLogContent('accomplishments');
  alert('🎉 Accomplishment logged!');
}

function submitBoundary(e) {
  e.preventDefault();
  
  data.boundaries.push({
    id: idCounters.boundary++,
    description: document.getElementById('boundary-description').value,
    person: document.getElementById('boundary-person').value,
    outcome: document.getElementById('boundary-outcome').value,
    rating: parseInt(document.getElementById('boundary-rating').value),
    timestamp: Date.now()
  });
  
  renderLogContent('boundaries');
  alert('✋ Boundary logged!');
}

// Timer (15-minute countdown)
let timerSeconds = 900; // 15 minutes
let timerActive = false;

function startTimer() {
  if (timerActive) return;
  timerActive = true;
  document.getElementById('start-timer-btn').disabled = true;
  document.getElementById('pause-timer-btn').disabled = false;
  
  data.timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      data.dailyDiscussionTime++;
      updateTimerDisplay();
      checkTimerAlerts();
    } else {
      pauseTimer();
      alert('🎉 15-minute session complete!');
    }
  }, 1000);
}

function pauseTimer() {
  timerActive = false;
  document.getElementById('start-timer-btn').disabled = false;
  document.getElementById('pause-timer-btn').disabled = true;
  if (data.timerInterval) {
    clearInterval(data.timerInterval);
  }
}

function resetTimer() {
  if (confirm('Reset the timer to 15:00?')) {
    pauseTimer();
    timerSeconds = 900;
    timerAlertsShown = { 600: false, 300: false, 120: false, 0: false };
    updateTimerDisplay();
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  const display = document.getElementById('timer-display');
  if (display) {
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  
  const progressFill = document.getElementById('timer-progress-fill');
  if (progressFill) {
    const elapsed = 900 - timerSeconds;
    const percentage = Math.min((elapsed / 900) * 100, 100);
    progressFill.style.width = percentage + '%';
    
    if (timerSeconds < 300) {
      progressFill.style.background = '#ff9800';
    } else if (timerSeconds < 120) {
      progressFill.style.background = '#f44336';
    } else {
      progressFill.style.background = 'var(--color-primary)';
    }
  }
  
  const timerMini = document.getElementById('timer-display-mini');
  if (timerMini) {
    const totalMinutes = Math.floor(data.dailyDiscussionTime / 60);
    timerMini.textContent = `${totalMinutes} min`;
  }
}

let timerAlertsShown = { 600: false, 300: false, 120: false, 0: false };

function checkTimerAlerts() {
  if (timerSeconds === 600 && !timerAlertsShown[600]) {
    alert('⏰ 10 minutes remaining');
    timerAlertsShown[600] = true;
  } else if (timerSeconds === 300 && !timerAlertsShown[300]) {
    alert('⏱️ 5 minutes left - start wrapping up');
    timerAlertsShown[300] = true;
  } else if (timerSeconds === 120 && !timerAlertsShown[120]) {
    alert('🔔 2 minutes remaining - time to conclude');
    timerAlertsShown[120] = true;
  } else if (timerSeconds === 0 && !timerAlertsShown[0]) {
    alert('🎉 Time\'s up! 15 minute session complete.');
    timerAlertsShown[0] = true;
  }
}

// Notifications
function requestNotificationPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        data.notificationsEnabled = true;
        new Notification('Wellness Tracker', {
          body: 'Notifications enabled! You\'ll receive reminders for check-ins.',
          icon: '💚'
        });
      }
    });
  } else if (Notification.permission === 'granted') {
    data.notificationsEnabled = true;
  }
}

function startNotificationChecker() {
  setInterval(() => {
    if (!data.notificationsEnabled || Notification.permission !== 'granted') return;
    
    const now = Date.now();
    const lastCheckIn = data.lastCheckInTime || 0;
    const hoursSinceCheckIn = (now - lastCheckIn) / (1000 * 60 * 60);
    
    if (hoursSinceCheckIn >= 3) {
      new Notification('Time for your feelings check-in! 🌅', {
        body: 'It\'s been 3 hours since your last check-in. How are you feeling?'
      });
      data.lastCheckInTime = now;
    }
  }, 3600000);
}

// Download
function downloadDashboard() {
  showView('download');
}

function downloadFullJournal() {
  let content = '=================================\n';
  content += 'WELLNESS & COMMUNICATION JOURNAL\n';
  content += '=================================\n\n';
  content += `User: ${data.userName}\n`;
  content += `Generated: ${new Date().toLocaleString()}\n\n`;
  
  // Feelings
  content += '\n=== FEELINGS CHECK-INS ===\n\n';
  data.feelingsCheckIns.forEach(c => {
    content += `${new Date(c.timestamp).toLocaleString()}\n`;
    content += `Emotion: ${c.primaryEmotion} - ${c.subcategory}\n`;
    content += `Feelings: ${c.outerFeelings.join(', ')} ${c.additionalFeelings.join(', ')}\n`;
    if (c.bodyLocation) content += `Body: ${c.bodyLocation}\n`;
    if (c.triggers.length > 0) content += `Triggers: ${c.triggers.join(' ')}\n`;
    if (c.notes) content += `Notes: ${c.notes}\n`;
    content += '\n---\n\n';
  });
  
  // Topics
  content += '\n=== TOPICS ===\n\n';
  data.topics.forEach(t => {
    content += `${t.title}\n`;
    content += `With: ${t.withPerson}\n`;
    content += `Status: ${t.status}\n`;
    if (t.response) {
      content += `Response: ${t.response.thoughts}\n`;
    }
    content += '\n---\n\n';
  });
  
  // Appreciations
  content += '\n=== APPRECIATIONS ===\n\n';
  data.appreciations.forEach(a => {
    content += `${new Date(a.timestamp).toLocaleString()}\n${a.text}\n\n`;
  });
  
  // Accomplishments
  content += '\n=== ACCOMPLISHMENTS ===\n\n';
  data.accomplishments.forEach(a => {
    const type = accomplishmentTypes[a.typeIndex];
    content += `${new Date(a.timestamp).toLocaleString()}\n${type.emoji} ${type.label}: ${a.details}\n\n`;
  });
  
  // Boundaries
  content += '\n=== BOUNDARIES ===\n\n';
  data.boundaries.forEach(b => {
    content += `${new Date(b.timestamp).toLocaleString()}\n${b.description}\nWith: ${b.person}\nOutcome: ${b.outcome}\nRating: ${b.rating}/5\n\n`;
  });
  
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `wellness-journal-${new Date().toISOString().split('T')[0]}.txt`;
  a.click();
  URL.revokeObjectURL(url);
  alert('✓ Journal downloaded!');
}

function printDashboard() {
  window.print();
}

// Production File Downloads
function downloadManifest() {
  const manifest = {
    name: "Shared Space - Personal Wellness Tracker",
    short_name: "Shared Space",
    description: "Track feelings, set boundaries, and build healthier communication patterns",
    start_url: "/",
    display: "standalone",
    background_color: "#0f1419",
    theme_color: "#2196F3",
    orientation: "portrait-primary",
    icons: [
      { src: "/icons/icon-72x72.png", sizes: "72x72", type: "image/png" },
      { src: "/icons/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { src: "/icons/icon-128x128.png", sizes: "128x128", type: "image/png" },
      { src: "/icons/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { src: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { src: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-384x384.png", sizes: "384x384", type: "image/png" },
      { src: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  };
  downloadFile('manifest.json', JSON.stringify(manifest, null, 2), 'application/json');
}

function downloadServiceWorker() {
  const sw = `const CACHE_NAME = 'shared-space-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});`;
  downloadFile('service-worker.js', sw, 'application/javascript');
}

function downloadHtaccess() {
  const htaccess = `# Enable HTTPS redirect
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css text/javascript application/javascript application/json
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "no-referrer-when-downgrade"
</IfModule>

# SPA routing - redirect all to index.html
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>`;
  downloadFile('.htaccess', htaccess, 'text/plain');
}

function downloadNginxConf() {
  const nginx = `server {
    listen 80;
    server_name your-domain.com;
    
    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    # SSL certificates (update paths)
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    root /var/www/shared-space;
    index index.html;
    
    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    
    # Cache static assets
    location ~* \\.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA routing - serve index.html for all routes
    location / {
        try_files $uri $uri/ /index.html;
    }
}`;
  downloadFile('nginx.conf', nginx, 'text/plain');
}

function downloadReadme() {
  const readme = `# Shared Space - Personal Wellness Tracker

A personal wellness and communication tracker to help you manage emotions, set boundaries, and improve communication patterns.

## Features

- \ud83d\udc9a **Feelings Check-In**: Track your emotions with an interactive feelings wheel
- \ud83d\udcdd **Topics**: Create and manage discussion topics
- \u2b50 **Appreciation Log**: Share gratitude and positive moments
- \ud83c\udfc6 **Accomplishments**: Track daily wins and achievements
- \ud83d\udee1\ufe0f **Boundaries**: Log boundary-setting successes
- \ud83d\udcac **Quotes**: Save inspiring quotes
- \u23f1\ufe0f **Discussion Timer**: Time-boxed conversations with alerts

## Deployment Instructions

### Requirements

- Web server with HTTPS support (required for PWA features)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation Steps

1. **Upload Files**
   - Upload \`index.html\`, \`style.css\`, \`app.js\` to your web server
   - Upload \`manifest.json\` and \`service-worker.js\` to the root directory

2. **Configure Server**
   - **Apache**: Use the provided \`.htaccess\` file
   - **Nginx**: Add the provided \`nginx.conf\` configuration
   - Ensure HTTPS is enabled (required for service workers and notifications)

3. **Set MIME Types**
   Ensure these MIME types are configured:
   - \`.html\` \u2192 \`text/html\`
   - \`.css\` \u2192 \`text/css\`
   - \`.js\` \u2192 \`application/javascript\`
   - \`.json\` \u2192 \`application/json\`

4. **Enable Compression**
   Enable gzip compression for text files to improve load times

5. **Configure Security Headers**
   Add these headers to your server configuration:
   - \`X-Content-Type-Options: nosniff\`
   - \`X-Frame-Options: SAMEORIGIN\`
   - \`X-XSS-Protection: 1; mode=block\`

### Testing Checklist

- [ ] Test all 14 user flows (see TESTING.md)
- [ ] Verify data persistence across page refreshes
- [ ] Check browser console for errors
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on iOS and Android mobile browsers
- [ ] Verify PWA installation works
- [ ] Test offline functionality
- [ ] Verify notifications work (if permissions granted)
- [ ] Test all export/download features
- [ ] Run Lighthouse audit for performance and accessibility

### PWA Installation

Once deployed with HTTPS:
1. Visit the site in a supported browser
2. Look for "Install App" or "Add to Home Screen" prompt
3. Accept the installation
4. The app will open as a standalone application

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Technology Stack

- Pure HTML5, CSS3, JavaScript (ES6+)
- No external dependencies or frameworks
- Progressive Web App (PWA) compatible
- Responsive design with mobile-first approach

## Data Storage

All data is stored **in-memory** within the browser session. Data will be lost on page refresh. For persistent storage, you'll need to implement a backend API.

## License

MIT License - See LICENSE file for details

## Support

For issues or questions, please refer to the documentation or create an issue in your project repository.

---

**Note**: This app is designed for personal use and stores data locally in the browser. No data is sent to external servers.`;
  downloadFile('README.md', readme, 'text/markdown');
}

function downloadPrivacy() {
  const privacy = `# Privacy Policy

**Effective Date**: ${new Date().toLocaleDateString()}

## Overview

Shared Space ("the App") is a personal wellness tracker designed to help you track emotions, set boundaries, and improve communication. Your privacy is our top priority.

## Data Collection

The App does **not** collect, store, or transmit any personal data to external servers. All data you enter remains on your device.

### What Data is Stored Locally

- Your name (entered during onboarding)
- Feelings check-in records
- Topics and responses
- Appreciation log entries
- Accomplishment logs
- Boundary logs
- Saved quotes
- Timer usage data

### How Data is Stored

All data is stored **in-memory** within your browser session during use. When you close or refresh the browser, all data is lost. The app does not use cookies, localStorage, or any persistent storage mechanisms in the sandboxed environment.

## Data Transmission

The App does **not**:
- Send data to external servers
- Use analytics or tracking tools
- Share data with third parties
- Collect usage statistics

## Notifications

If you grant notification permissions, the App may send local browser notifications to remind you of check-ins. These notifications are generated locally and do not involve any external services.

## Security

Since all data remains on your device:
- No data is transmitted over the internet
- No user accounts or passwords are required
- No risk of data breaches from external sources

## Your Rights

You have complete control over your data:
- All data is yours and never leaves your device
- You can export your journal at any time
- Data is automatically cleared when you close the browser

## Changes to This Policy

We may update this privacy policy from time to time. The updated policy will be indicated by an updated "Effective Date" and the updated policy will be effective as soon as it is accessible.

## Contact

If you have questions about this privacy policy, you can contact the app developer.

---

**Summary**: This app is completely private. Your data never leaves your device.`;
  downloadFile('PRIVACY.md', privacy, 'text/markdown');
}

function downloadLicense() {
  const license = `MIT License

Copyright (c) ${new Date().getFullYear()} Shared Space

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
  downloadFile('LICENSE', license, 'text/plain');
}

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  console.log('\u2713 Downloaded:', filename);
}

// Quote Functions
function setupQuoteTagsInput() {
  quoteFormState.tags = [];
  const input = document.getElementById('quote-tags-input');
  if (!input) return;
  
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      let value = input.value.trim();
      if (value) {
        if (!value.startsWith('#')) value = '#' + value;
        if (!quoteFormState.tags.includes(value)) {
          quoteFormState.tags.push(value);
          renderQuoteTags();
        }
        input.value = '';
      }
    }
  });
}

function renderQuoteTags() {
  const container = document.getElementById('quote-tags-container');
  if (!container) return;
  
  const input = container.querySelector('.hashtag-input');
  const existingChips = container.querySelectorAll('.hashtag-chip');
  existingChips.forEach(chip => chip.remove());
  
  quoteFormState.tags.forEach(tag => {
    const chip = document.createElement('span');
    chip.className = 'hashtag-chip';
    chip.innerHTML = `${tag} <span class="remove" onclick="removeQuoteTag('${tag}')">&times;</span>`;
    container.insertBefore(chip, input);
  });
}

function removeQuoteTag(tag) {
  quoteFormState.tags = quoteFormState.tags.filter(t => t !== tag);
  renderQuoteTags();
}

function openQuoteFeelingSelector() {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'quote-feeling-modal';
  modal.onclick = (e) => {
    if (e.target === modal) closeQuoteFeelingSelector();
  };
  
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 600px;">
      <div class="modal-header">
        <h3>Select Feelings</h3>
        <button class="modal-close" onclick="closeQuoteFeelingSelector()">&times;</button>
      </div>
      <div class="form-group">
        <label class="form-label">How does this quote make you feel?</label>
        <div class="feelings-chips">
          ${Object.keys(feelingsWheel).map(emotion => 
            `<button type="button" class="feeling-chip ${quoteFormState.selectedFeelings.includes(emotion) ? 'selected' : ''}" onclick="toggleQuoteFeeling('${emotion}')">${emotion}</button>`
          ).join('')}
        </div>
      </div>
      <div style="text-align: center; margin-top: 24px;">
        <button class="btn btn--primary" onclick="closeQuoteFeelingSelector()">Done</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
}

function closeQuoteFeelingSelector() {
  const modal = document.getElementById('quote-feeling-modal');
  if (modal) modal.remove();
  renderQuoteSelectedFeelings();
}

function toggleQuoteFeeling(feeling) {
  const index = quoteFormState.selectedFeelings.indexOf(feeling);
  if (index > -1) {
    quoteFormState.selectedFeelings.splice(index, 1);
  } else {
    quoteFormState.selectedFeelings.push(feeling);
  }
  
  document.querySelectorAll('#quote-feeling-modal .feeling-chip').forEach(chip => {
    if (chip.textContent === feeling) {
      chip.classList.toggle('selected', quoteFormState.selectedFeelings.includes(feeling));
    }
  });
}

function renderQuoteSelectedFeelings() {
  const container = document.getElementById('quote-selected-feelings');
  if (!container) return;
  
  if (quoteFormState.selectedFeelings.length === 0) {
    container.innerHTML = '<span style="color: var(--color-text-secondary); font-size: 14px;">No feelings selected</span>';
  } else {
    container.innerHTML = quoteFormState.selectedFeelings.map(f => 
      `<span class="feeling-chip selected">${f}</span>`
    ).join('');
  }
}

function submitQuote(e) {
  e.preventDefault();
  
  const quote = {
    id: idCounters.quote++,
    quoteText: document.getElementById('quote-text').value,
    author: document.getElementById('quote-author').value,
    feelings: [...quoteFormState.selectedFeelings],
    context: document.getElementById('quote-context').value,
    tags: [...quoteFormState.tags],
    timestamp: Date.now()
  };
  
  data.quotes.push(quote);
  
  quoteFormState.selectedFeelings = [];
  quoteFormState.tags = [];
  
  renderLogContent('quotes');
  alert('💬 Quote saved!');
}

function showRandomQuote() {
  if (data.quotes.length === 0) return;
  
  const randomIndex = Math.floor(Math.random() * data.quotes.length);
  const quote = data.quotes[randomIndex];
  
  const container = document.getElementById('random-quote-container');
  container.innerHTML = `
    <div class="random-quote-display">
      <div class="quote-text">${quote.quoteText}</div>
      ${quote.author ? `<div class="quote-author">${quote.author}</div>` : ''}
      ${quote.feelings && quote.feelings.length > 0 ? `
        <div class="quote-feelings" style="justify-content: center; margin-top: 16px;">
          ${quote.feelings.map(f => `<span class="quote-feeling-badge">${f}</span>`).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

// Helper: Escape HTML to prevent errors
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Test all flows on startup
function testAllFlows() {
  console.log('\ud83e\uddea Testing all flows...');
  
  const tests = [
    { name: 'Data structure initialized', test: () => data !== null },
    { name: 'Feelings wheel data loaded', test: () => Object.keys(feelingsWheel).length === 7 },
    { name: 'Communication reminders loaded', test: () => communicationReminders.length === 8 },
    { name: 'Ground rules loaded', test: () => groundRules.length === 7 },
    { name: 'Accomplishment types loaded', test: () => accomplishmentTypes.length === 12 },
    { name: 'DOM elements present', test: () => {
      return document.getElementById('welcome-screen') &&
             document.getElementById('main-app') &&
             document.getElementById('get-started-btn');
    }}
  ];
  
  let passed = 0;
  tests.forEach(test => {
    try {
      if (test.test()) {
        console.log('\u2713', test.name);
        passed++;
      } else {
        console.error('\u2717', test.name);
      }
    } catch (e) {
      console.error('\u2717', test.name, e);
    }
  });
  
  console.log(`\ud83c\udfaf Test Results: ${passed}/${tests.length} passed`);
}