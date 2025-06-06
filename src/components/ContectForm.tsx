import React, { useState } from 'react';
import '../css/ContectForm.css';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just simulate submission
    console.log({ name, email, message });
    setSubmitted(true);
    // Clear form (optional)
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      {submitted && <p className="success-message">Thank you for your message!</p>}
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder="Your full name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
        </label>

        <label>
          Message:
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            placeholder="Write your message here"
            rows={5}
          />
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
