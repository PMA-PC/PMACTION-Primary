import { useState } from 'react';
import '../styles/style.css';

export default function Journal() {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState<{date: string; text: string; tags?: string[]}[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [journalStreak, setJournalStreak] = useState(0);
  
  // Suggested tags for smart journaling
  const suggestedTags = ['grateful', 'anxious', 'motivated', 'tired', 'happy', 'stressed', 'productive', 'calm'];

  const addEntry = () => {
    if (!entry.trim()) return;
    setEntries([{date: new Date().toLocaleString(), text: entry, tags: selectedTags}, ...entries]);
    setEntry('');
    setSelectedTags([]);
    setJournalStreak(prev => prev + 1);
  };
  
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <main className="journal-container" style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
      <h2 className="page-title">Journal</h2>
      
      {/* Gamification Elements */}
      <div className="streak-indicator gradient-bg" style={{ marginBottom: 20 }}>
        <span className="streak-value">{journalStreak}</span>
        <span className="streak-label">Journal Streak</span>
      </div>
      
      {/* Progress bar for journal entries */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${Math.min(entries.length * 5, 100)}%` }}></div>
      </div>
      
      <textarea
        className="form-input journal-textarea"
        value={entry}
        onChange={e => setEntry(e.target.value)}
        placeholder="Write your thoughts here..."
        rows={4}
        style={{ width: '100%', padding: 14, borderRadius: 8, border: '1px solid #ccc', marginBottom: 14, marginTop: 20 }}
      />
      
      {/* Tag Suggestion UI for Smart Journaling */}
      <div className="tag-suggestion-container" style={{ marginBottom: 14 }}>
        <h4 style={{ fontSize: '0.9rem', marginBottom: 8 }}>Add Tags:</h4>
        <div className="tag-list" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {suggestedTags.map(tag => (
            <button
              key={tag}
              className={`tag-chip ${selectedTags.includes(tag) ? 'tag-selected' : ''}`}
              onClick={() => toggleTag(tag)}
              style={{
                padding: '6px 12px',
                borderRadius: 16,
                border: selectedTags.includes(tag) ? '2px solid #6c5dd3' : '1px solid #ccc',
                background: selectedTags.includes(tag) ? '#e8e4f3' : '#fff',
                color: selectedTags.includes(tag) ? '#6c5dd3' : '#555',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      <button
        className="btn btn-primary gradient-bg"
        onClick={addEntry}
        style={{ padding: '12px 30px', borderRadius: 6, background: '#6c5dd3', color: '#fff', border: 'none', fontSize: '1rem', marginBottom: 20 }}
      >
        Save Entry
      </button>
      
      <ul className="journal-entries" style={{ marginTop: 28 }}>
        {entries.map((entry, i) => (
          <li key={i} className="journal-card" style={{ marginBottom: 14, background: '#f9f9f9', padding: '12px 18px', borderRadius: 5 }}>
            <div style={{ fontSize: '0.9rem', color: '#555' }}>{entry.date}</div>
            <div>{entry.text}</div>
            {entry.tags && entry.tags.length > 0 && (
              <div className="entry-tags" style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {entry.tags.map((tag, idx) => (
                  <span key={idx} className="tag-badge" style={{ padding: '4px 10px', borderRadius: 12, background: '#e8e4f3', color: '#6c5dd3', fontSize: '0.75rem' }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
