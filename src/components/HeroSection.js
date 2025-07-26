import React from 'react';
import './HeroSection.css';
import profileImg from '../assets/profile4.jpg';

const socials = [
  { href: '#', label: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/linkedin.svg', color: '#1976d2' },
  { href: '#', label: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/github.svg', color: '#222' },
  { href: '#', label: 'Twitter', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/twitter.svg', color: '#1da1f2' },
  { href: '#', label: 'Instagram', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/instagram.svg', color: '#e1306c' },
];

const quickSkills = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/react.svg', color: '#61dafb' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/node-plus.svg', color: '#3c873a' },
  { name: 'UI/UX', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/palette.svg', color: '#a259fa' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/file-earmark-code.svg', color: '#f7df1e' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/pen.svg', color: '#ff7262' },
];

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <div className="hero__text">
          <h1>Hi, I’m Mohammed</h1>
          <h2>Pixel Composer of Interfaces</h2>
          <p>I craft user interfaces with the spirit of poetry and logic. Bringing designs into forms you can feel on screen.</p>
          <div className="hero__socials">
            {socials.map((s) => (
              <a href={s.href} aria-label={s.label} key={s.label} target="_blank" rel="noopener noreferrer">
                <div className="card-icon-circle" style={{ background: s.color }}>
                  <img src={s.icon} alt={s.label} />
                </div>
              </a>
            ))}
          </div>
          <div className="hero__buttons">
            <a href="#" className="btn btn-primary">Download CV</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
          <div className="hero__skills">
            {quickSkills.map((skill) => (
              <span key={skill.name} className="hero-skill-icon">
                <div className="card-icon-circle" style={{ background: skill.color }}>
                  <img src={skill.icon} alt={skill.name} />
                </div>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
        <div className="hero__image">
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 