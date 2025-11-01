import { useState } from 'react';

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

  return (
    <main style={{ maxWidth: 420, margin: '0 auto', padding: '2rem' }}>
      <h2>How are you feeling today?</h2>
      <div style={{ margin: '28px 0' }}>
        {moods.map(m => (
          <button
            key={m.value}
            style={{ fontSize: '2rem', margin: '0 12px', background: mood === m.value ? m.color : '#f4f4f4', border: 'none', borderRadius: '50%', width: 64, height: 64 }}
            onClick={() => setMood(m.value)}
          >
            {m.label}
          </button>
        ))}
      </div>
      <textarea
        value={note}
        onChange={e => setNote(e.target.value)}
        placeholder="Add a note (optional)"
        rows={3}
        style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #ddd', marginBottom: 20 }}
      />
      <button
        style={{ padding: '12px 32px', borderRadius: 6, background: '#6c5dd3', color: '#fff', border: 'none', fontSize: '1rem', marginBottom: 26 }}
        disabled={!mood}
      >
        Save Log
      </button>
    </main>
  );
}
