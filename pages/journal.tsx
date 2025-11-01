import { useState } from 'react';

export default function Journal() {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState<string[]>([]);

  const addEntry = () => {
    if (!entry.trim()) return;
    setEntries([{date: new Date().toLocaleString(), text: entry}, ...entries]);
    setEntry('');
  };

  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '2rem' }}>
      <h2>Journal</h2>
      <textarea
        value={entry}
        onChange={e => setEntry(e.target.value)}
        placeholder="Write your thoughts here..."
        rows={4}
        style={{ width: '100%', padding: 14, borderRadius: 8, border: '1px solid #ccc', marginBottom: 14 }}
      />
      <button
        onClick={addEntry}
        style={{ padding: '12px 30px', borderRadius: 6, background: '#6c5dd3', color: '#fff', border: 'none', fontSize: '1rem', marginBottom: 20 }}
      >
        Save Entry
      </button>
      <ul style={{ marginTop: 28 }}>
        {entries.map((entry, i) => (
          <li key={i} style={{ marginBottom: 14, background: '#f9f9f9', padding: '12px 18px', borderRadius: 5 }}>
            <div style={{ fontSize: '0.9rem', color: '#555' }}>{entry.date}</div>
            <div>{entry.text}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
