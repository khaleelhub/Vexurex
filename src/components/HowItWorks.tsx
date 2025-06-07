// src/components/HowItWorks.tsx
import React from 'react';
import '../css/HowItWorks.css';
import GoogleAd from './GoogleAd';

const steps = [
  {
    icon: '🛒',
    title: 'Buy Vexurex',
    description: 'Purchase Vexurex easily through our partnered exchanges or direct wallet-to-wallet transfers.'
  },
  {
    icon: '📤',
    title: 'Send & Receive',
    description: 'Quickly send and receive Vexurex with near-instant confirmations and low fees.'
  },
  {
    icon: '💼',
    title: 'Use Vexurex',
    description: 'Spend Vexurex worldwide for goods, services, or trade on supported platforms.'
  }
];

const platforms = [
  { name: 'Web Wallet', icon: '🌐' },
  { name: 'Mobile App', icon: '📱' },
  { name: 'Desktop Wallet', icon: '💻' },
  { name: 'Hardware Wallets', icon: '🔒' }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works-section">
      <h2 className="section-title">How It Works</h2>

      <div className="steps-container">
        {steps.map(({ icon, title, description }, index) => (
          <div key={index} className="step-card">
            <div className="step-icon">{icon}</div>
            <h3 className="step-title">{title}</h3>
            <p className="step-desc">{description}</p>
          </div>
        ))}
      </div>

      <div className="platforms-container">
        <h3>Supported Platforms</h3>
        <div className="platforms-list">
          {platforms.map(({ name, icon }, index) => (
            <div key={index} className="platform-card" title={name}>
              <span className="platform-icon">{icon}</span>
              <span className="platform-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
      <GoogleAd slot="1234567890" />
    </section>
  );
};
