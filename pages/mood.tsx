import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function MoodLog() {
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mood, setMood] = useState(3);
  const [note, setNote] = useState("");

  useEffect(() => {
    supabase.from('mood_logs').select('*').order('created_at', { ascending: false }).then(({ data }) => {
      setMoods(data || []);
      setLoading(false);
    });
  }, []);

  const submitMood = async (e: any) => {
    e.preventDefault();
    await supabase.from('mood_logs').insert([{ mood, note }]);
    setMood(3); setNote('');
    setLoading(true);
    const { data } = await supabase.from('mood_logs').select('*').order('created_at', { ascending: false });
    setMoods(data || []); setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Mood Log Demo</h1>
      <form onSubmit={submitMood}>
        <label>
          Mood (1-5):{" "}
          <input type="number" min={1} max={5} value={mood} onChange={e => setMood(+e.target.value)} />
        </label>
        <br />
        <label>
          Note: <input value={note} onChange={e => setNote(e.target.value)} />
        </label>
        <br />
        <button type="submit">Log Mood</button>
      </form>
      <hr />
      <h2>Log History</h2>
      {loading ? "Loading..." : (
        <ul>
          {moods.map((d: any) => (
            <li key={d.id}>{d.created_at?.slice(0, 19).replace("T"," ")}: Mood {d.mood} – {d.note}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
