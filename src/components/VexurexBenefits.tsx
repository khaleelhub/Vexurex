// src/components/VexurexBenefits.tsx
import React from "react";
import "../css/VexurexBenefits.css";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: "⚡",
    title: "Fast Transactions",
    description:
      "Experience lightning-speed transactions with near-instant confirmation times.",
  },
  {
    icon: "🔒",
    title: "Secure Blockchain",
    description:
      "Built on robust cryptography, ensuring privacy and protection for all users.",
  },
  {
    icon: "🌱",
    title: "Eco-Friendly Technology",
    description:
      "Designed to consume less energy without sacrificing performance or safety.",
  },
  {
    icon: "💸",
    title: "Low Fees",
    description:
      "Send and receive money without high fees — keeping your value intact.",
  },
  {
    icon: "🌍",
    title: "Global & Inclusive",
    description:
      "Open to anyone, anywhere. Vexurex is borderless, fast, and accessible.",
  },
];

const VexurexBenefits: React.FC = () => {
  return (
    <section className="benefits-section">
      <h2 className="benefits-title">Why Choose Vexurex?</h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div
            className="benefit-card"
            key={index}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="benefit-icon" role="img" aria-label={benefit.title}>
              {benefit.icon}
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VexurexBenefits;
