import Link from 'next/link';
import '../styles/style.css';

export default function Landing() {
  return (
    <main className="landing-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem' }}>
      <img src="/logo.png" alt="PMA Logo" style={{ width: 120, marginBottom: 24 }} />
      <h1 className="page-title">Welcome to PMAction!</h1>
      <p className="landing-description" style={{ textAlign: 'center', fontSize: '1.1rem', maxWidth: 600, marginTop: 16 }}>
        Your mental action platform for mood tracking, journaling, habits, and personal growth.
      </p>
      
      {/* Feature highlights with gradient cards */}
      <section className="features-section" style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, maxWidth: 800 }}>
        <div className="feature-card gradient-bg" style={{ padding: 20, borderRadius: 10, background: '#f0f8ff', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: 10 }}>📊</div>
          <h4>Track Moods</h4>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Log your daily moods and emotions</p>
        </div>
        <div className="feature-card gradient-bg" style={{ padding: 20, borderRadius: 10, background: '#fff0f5', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: 10 }}>📝</div>
          <h4>Smart Journaling</h4>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Write with tag suggestions</p>
        </div>
        <div className="feature-card gradient-bg" style={{ padding: 20, borderRadius: 10, background: '#f0fff4', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: 10 }}>🎯</div>
          <h4>Build Habits</h4>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Create and track healthy habits</p>
        </div>
        <div className="feature-card gradient-bg" style={{ padding: 20, borderRadius: 10, background: '#fffaf0', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: 10 }}>🔥</div>
          <h4>Earn Streaks</h4>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Stay motivated with gamification</p>
        </div>
      </section>
      
      <Link href="/onboarding">
        <button className="btn btn-primary gradient-bg" style={{ marginTop: 32, padding: '12px 32px', fontSize: '1.15rem', borderRadius: 8, background: '#6c5dd3', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Get Started
        </button>
      </Link>
      
      <div style={{ marginTop: 40 }}>
        <small>
          <strong>Already have an account?</strong> <a href="/login" style={{ color: '#6c5dd3', textDecoration: 'underline' }}>Log in</a>
        </small>
      </div>
    </main>
  );
}
