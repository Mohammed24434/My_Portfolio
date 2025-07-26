import React, { useState } from 'react';
import './Contact.css';

const contactCards = [
  {
    title: 'Email',
    lines: ['Personal: hizkia@example.com', 'Work: workcontact@example.com'],
    color: '#1976d2',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/envelope.svg',
    className: 'blue',
  },
  {
    title: 'Social Media',
    lines: ['LinkedIn: linkedin.com/in/yourprofile', 'Twitter: twitter.com/yourhandle', 'GitHub: github.com/yourusername'],
    color: '#fd7e14',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/share.svg',
    className: 'orange',
  },
  {
    title: 'Phone',
    lines: ['Mobile: +251 926-033-581', 'WhatsApp: +251 926-033-581'],
    color: '#6f42c1',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/telephone.svg',
    className: 'purple',
  },
];

const Contact = () => {
  const [tab, setTab] = useState('form');
  return (
    <section className="contact" id="contact">
      <h2>Get in <span>Touch</span></h2>
      <p>Reach out to collaborate, discuss opportunities, or just say hello!</p>
      <div className="contact__tabs">
        <button className={tab === 'form' ? 'active' : ''} onClick={() => setTab('form')}>Contact Form</button>
        <button className={tab === 'methods' ? 'active' : ''} onClick={() => setTab('methods')}>Contact Methods</button>
      </div>
      {tab === 'form' ? (
        <form className="contact__form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      ) : (
        <div className="contact__methods">
          {contactCards.map(card => (
            <div className={`contact__card ${card.className}`} key={card.title}>
              <div className="contact__card-title-row contact__card-title-left">
                <div className="card-icon-circle" style={{ background: card.color }}>
                  <img src={card.icon} alt={card.title} />
                </div>
                <h3>{card.title}</h3>
              </div>
              {card.lines.map((line, i) => <p key={i}>{line}</p>)}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Contact; 