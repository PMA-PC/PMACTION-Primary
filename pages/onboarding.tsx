import { useState } from 'react';
import Link from 'next/link';
import '../styles/style.css';

const steps = [
  {
    label: 'Welcome! What\'s your main goal?',
    options: ['Boost Mood', 'Build Habits', 'Track Streaks', 'Journaling', 'Stress Relief']
  },
  {
    label: 'Pick your preferred mood log style:',
    options: ['Slider Scale', 'Emoji Quick-Tap', 'Tags & Notes']
  },
  {
    label: 'Choose app theme:',
    options: ['Light', 'Dark', 'System', 'Vibrant', 'High-Contrast']
  },
  {
    label: 'How do you want reminders?',
    options: ['Daily Mood Ping', 'Weekly Check-in', 'No Reminders']
  }
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);

  const advance = (option: string) => {
    setSelections([...selections, option]);
    if (step < steps.length - 1) setStep(step + 1);
  };

  return (
    <main className="onboarding-container" style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
      <img src="/logo.png" alt="PMA Logo" style={{ width: 88, marginBottom: 18 }} />
      <h2 className="page-title">Get Started with PMAction!</h2>
      
      {/* Progress Indicator for Onboarding Steps */}
      <div className="progress-bar-container" style={{ marginBottom: 30 }}>
        <div className="progress-bar gradient-bg" style={{ width: `${((step + 1) / steps.length) * 100}%` }}></div>
        <div style={{ textAlign: 'center', marginTop: 8, fontSize: '0.9rem', color: '#666' }}>
          Step {step + 1} of {steps.length}
        </div>
      </div>
      
      <div style={{ marginBottom: 32, minHeight: 90 }}>
        <h3>{steps[step].label}</h3>
        <ul className="option-list" style={{ listStyle: 'none', padding: 0 }}>
          {steps[step].options.map(opt => (
            <li key={opt} className="option-item" style={{ margin: '0.5rem 0' }}>
              <button
                className="btn btn-option gradient-bg"
                style={{ fontSize: '1rem', padding: '8px 24px', borderRadius: 6, background: '#6c5dd3', color: '#fff', border: 'none', cursor: 'pointer', width: '100%' }}
                onClick={() => advance(opt)}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      {step === steps.length - 1 && selections.length === steps.length && (
        <div className="completion-section" style={{ marginTop: 24 }}>
          <p>Great! Ready to personalize your experience.</p>
          <Link href="/dashboard">
            <button className="btn btn-primary gradient-bg" style={{ fontSize: '1rem', padding: '8px 24px', borderRadius: 6, background: '#6c5dd3', color: '#fff', border: 'none', cursor: 'pointer' }}>
              Go to Dashboard
            </button>
          </Link>
          <div className="selection-summary" style={{ marginTop: 16 }}>
            <small>Your setup: {selections.join(', ')}</small>
          </div>
        </div>
      )}
    </main>
  );
}
