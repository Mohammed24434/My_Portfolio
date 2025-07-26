import React from 'react';
import './AboutMe.css';
import profileImg from '../assets/profile4.jpg';

const aboutCards = [
  {
    title: 'Bio',
    text: 'Passionate software engineer with over 5 years of experience in web development. Enjoys solving complex problems and building scalable solutions.',
    color: '#1976d2',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/person-badge.svg',
    className: 'blue',
  },
  {
    title: 'Hobbies',
    text: 'Enjoys hiking, photography, reading sci-fi, and participating in hackathons and open-source projects.',
    color: '#2ecc40',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/camera.svg',
    className: 'green',
  },
  {
    title: 'Languages',
    text: 'Fluent in English and Indonesian. Intermediate proficiency in Japanese.',
    color: '#fd7e14',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/globe.svg',
    className: 'orange',
  },
  {
    title: 'Contact',
    text: 'Email: hizkia@example.com\nPhone: +62 812-3456-7890',
    color: '#6f42c1',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/envelope.svg',
    className: 'purple',
  },
  {
    title: 'Location',
    text: 'Medan, Indonesia. Available for remote and onsite work.',
    color: '#20c997',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/geo-alt.svg',
    className: 'teal',
  },
  {
    title: 'Education Summary',
    text: 'Bachelor of Computer Science\nUniversity of North Sumatra (2016-2020)',
    color: '#ffc107',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/mortarboard.svg',
    className: 'yellow',
  },
];

const socials = [
  { href: '#', label: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/linkedin.svg', color: '#1976d2' },
  { href: '#', label: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/github.svg', color: '#222' },
  { href: '#', label: 'Twitter', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/twitter.svg', color: '#1da1f2' },
  { href: '#', label: 'Instagram', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/instagram.svg', color: '#e1306c' },
];

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <h2>About <span>Me</span></h2>
      <p>Discover my journey, passions, and the story behind my work</p>
      <div className="about__container">
        <div className="about__image">
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>
        <div className="about__cards">
          {aboutCards.map(card => (
            <div className={`about__card ${card.className}`} key={card.title}>
              <div className="about__card-title-row about__card-title-left">
                <div className="card-icon-circle" style={{ background: card.color, marginLeft:'5px' }}>
                  <img src={card.icon} alt={card.title} />
                </div>
                <h3>{card.title} </h3>
              </div>
              <p>{card.text.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="about__actions">
        <span>Follow me on</span>
        {socials.map((s) => (
          <a href={s.href} aria-label={s.label} key={s.label} target="_blank" rel="noopener noreferrer">
            <div className="card-icon-circle" style={{ background: s.color }}>
              <img src={s.icon} alt={s.label} />
            </div>
          </a>
        ))}
        <a href="#" className="btn btn-primary">Download CV</a>
      </div>
    </section>
  );
};

export default AboutMe; 