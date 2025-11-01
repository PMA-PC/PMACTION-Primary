import { useState } from 'react';
import '../styles/style.css';

const moods = [
  { label: 'Great 😀', value: 5, color: '#27ae60' },
  { label: 'Good 🙂', value: 4, color: '#2ecc71' },
  { label: 'Okay 😐', value: 3, color: '#f1c40f' },
  { label: 'Meh 😕', value: 2, color: '#e67e22' },
  { label: 'Bad 😞', value: 1, color: '#e74c3c' }
];

export default function MoodLog() {
  const [mood, setMood] = useState<number | null>(null);
  const [note, setNote] = useState('');
  const [moodLogs, setMoodLogs] = useState<{mood: number; note: string; date: string}[]>([]);
  const [moodStreak, setMoodStreak] = useState(0);
  
  const saveMoodLog = () => {
    if (mood === null) return;
    setMoodLogs([{mood, note, date: new Date().toLocaleString()}, ...moodLogs]);
    setMoodStreak(prev => prev + 1);
    setMood(null);
    setNote('');
  };
  
  const getMoodColor = (value: number) => {
    const moodObj = moods.find(m => m.value === value);
    return moodObj ? moodObj.color : '#ccc';
  };

  return (
    <main className="mood-log-container" style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
      <h2 className="page-title">How are you feeling today?</h2>
      
      {/* Gamification Elements */}
      <div className="streak-indicator gradient-bg" style={{ marginBottom: 20 }}>
        <span className="streak-value">{moodStreak}</span>
        <span className="streak-label">Mood Log Streak</span>
      </div>
      
      {/* Progress bar for mood logs */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${Math.min(moodLogs.length * 5, 100)}%` }}></div>
      </div>
      
      <div className="mood-selector" style={{ margin: '28px 0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {moods.map(m => (
          <button
            key={m.value}
            className={`mood-button ${mood === m.value ? 'mood-selected' : ''}`}
            style={{ fontSize: '2rem', margin: '0 12px', background: mood === m.value ? m.color : '#f4f4f4', border: 'none', borderRadius: '50%', width: 64, height: 64, cursor: 'pointer' }}
            onClick={() => setMood(m.value)}
          >
            {m.label}
          </button>
        ))}
      </div>
      
      <textarea
        className="form-input mood-note"
        value={note}
        onChange={e => setNote(e.target.value)}
        placeholder="Add a note (optional)"
        rows={3}
        style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #ddd', marginBottom: 20 }}
      />
      
      <button
        className="btn btn-primary gradient-bg"
        onClick={saveMoodLog}
        disabled={mood === null}
        style={{ padding: '12px 30px', borderRadius: 6, background: mood !== null ? '#6c5dd3' : '#ccc', color: '#fff', border: 'none', fontSize: '1rem', marginBottom: 20, cursor: mood !== null ? 'pointer' : 'not-allowed' }}
      >
        Save Mood Log
      </button>
      
      {/* Mood History */}
      <section className="mood-history" style={{ marginTop: 40 }}>
        <h3>Mood History</h3>
        <ul className="mood-log-list" style={{ marginTop: 20 }}>
          {moodLogs.map((log, i) => (
            <li key={i} className="mood-log-card" style={{ marginBottom: 14, background: '#f9f9f9', padding: '12px 18px', borderRadius: 5 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: getMoodColor(log.mood), marginRight: 12 }}></div>
                  <span style={{ fontSize: '1.1rem' }}>{moods.find(m => m.value === log.mood)?.label}</span>
                </div>
                <span style={{ fontSize: '0.85rem', color: '#666' }}>{log.date}</span>
              </div>
              {log.note && <div style={{ marginTop: 8, color: '#555' }}>{log.note}</div>}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
