import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/HowItWorks.css';

const steps = [
  {
    icon: '🛒',
    title: 'Buy Vexurex',
    description:
      'Purchase Vexurex easily through our partnered exchanges or direct wallet-to-wallet transfers.',
  },
  {
    icon: '📤',
    title: 'Send & Receive',
    description:
      'Quickly send and receive Vexurex with near-instant confirmations and low fees.',
  },
  {
    icon: '💼',
    title: 'Use Vexurex',
    description:
      'Spend Vexurex worldwide for goods, services, or trade on supported platforms.',
  },
];

const platforms = [
  { name: 'Web Wallet', icon: '🌐', url: 'https://your-web-wallet.com' }, // External URL
  { name: 'Mobile App', icon: '📱', path: '/mobile' },
  { name: 'Desktop Wallet', icon: '💻', path: '/desktop' },
  { name: 'Hardware Wallets', icon: '🔒', path: '/hardware' },
];

export const HowItWorks: React.FC = () => {
  const navigate = useNavigate();

  // Optional: Click handler for debugging
  const handleNavigate = (path?: string, url?: string) => {
    if (url) {
      // Open external link in a new tab
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (path) {
      navigate(path);
    } else {
      console.warn('No path or url provided for navigation.');
    }
  };

  return (
    <section className="how-it-works-section">
      <h2 className="section-title">How It Works</h2>

      <div className="steps-container">
        {steps.map(({ icon, title, description }, index) => (
          <div key={index} className="step-card">
            <div className="step-icon" aria-label={`Step icon ${icon}`}>
              {icon}
            </div>
            <h3 className="step-title">{title}</h3>
            <p className="step-desc">{description}</p>
          </div>
        ))}
      </div>

      <div className="platforms-container">
        <h3>Supported Platforms</h3>
        <div className="platforms-list" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {platforms.map(({ name, icon, path, url }, index) => (
            <div
              key={index}
              className="platform-card"
              title={name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                border: '1px solid #ccc',
                borderRadius: 6,
                userSelect: 'none',
                // Removed cursor: default here to avoid confusion
              }}
            >
              <span className="platform-icon" aria-label={`Platform icon ${icon}`} style={{ fontSize: '1.5rem' }}>
                {icon}
              </span>

              {/* Use buttons for better accessibility and consistent clicks */}
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-name"
                  style={{
                    cursor: 'pointer',
                    color: '#007bff',
                    textDecoration: 'underline',
                    fontWeight: '600',
                    fontSize: '1rem',
                  }}
                >
                  {name}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => handleNavigate(path, url)}
                  className="platform-name"
                  style={{
                    cursor: 'pointer',
                    color: '#007bff',
                    textDecoration: 'underline',
                    fontWeight: '600',
                    fontSize: '1rem',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontFamily: 'inherit',
                  }}
                  aria-label={`Navigate to ${name}`}
                >
                  {name}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
