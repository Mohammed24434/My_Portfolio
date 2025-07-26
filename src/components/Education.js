import React, { useState } from 'react';
import './Education.css';

const formalEducation = [
  {
    title: 'Bachelor of Computer Science',
    major: 'Software Engineering',
    institution: 'Asosa University',
    year: '2021 - 2024',
    location: 'Asosa, Ethiopia',
    gpa: '3.92/4.00',
    status: 'Graduated',
    desc: 'Focused on software development, data structures, algorithms, and modern programming paradigms. Completed capstone project on full-stack web application development.',
    keyCourses: [
      'Data Structures',
      'Algorithms',
      'Database Systems',
      'Web Development',
      'Software Engineering',
      'Mobile Programming',
    ],
    achievements: [
      "Dean's List for 6 consecutive semesters",
      'Best Capstone Project Award 2020',
      'Programming Competition 2nd Place',
    ],
    color: '#1976d2',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/mortarboard.svg',
    className: 'blue',
  },
  {
    title: 'Full Stack Web Development',
    major: 'Intensive Bootcamp',
    institution: 'Hacktiv8 Indonesia',
    year: '2024',
    location: 'Jakarta, Indonesia',
    gpa: 'Outstanding',
    status: 'Certified',
    desc: 'Intensive 12-week bootcamp covering modern web development technologies including React, Node.js, and cloud deployment. Built multiple real-world projects.',
    keyCourses: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'AWS Deployment',
    ],
    achievements: [
      'Top 10% of cohort',
      'Successfully deployed 5 full-stack applications',
      'Mentored junior bootcamp students',
    ],
    color: '#28a745',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/code-slash.svg',
    className: 'green',
  },
];

const certifications = [
  {
    title: 'React Certification',
    institution: 'Meta',
    year: '2022',
    color: '#1976d2',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/react.svg',
    className: 'blue',
  },
  {
    title: 'Node.js Certified Developer',
    institution: 'OpenJS Foundation',
    year: '2021',
    color: '#2ecc40',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/node-plus.svg',
    className: 'green',
  },
  {
    title: 'MongoDB Associate',
    institution: 'MongoDB Inc.',
    year: '2021',
    color: '#20c997',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/database.svg',
    className: 'teal',
  },
  {
    title: 'JavaScript Algorithms',
    institution: 'freeCodeCamp',
    year: '2020',
    color: '#fd7e14',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/file-earmark-code.svg',
    className: 'orange',
  },
];

const Education = () => {
  const [tab, setTab] = useState('formal');
  return (
    <section className="education" id="education">
      <h2>Educational <span>Background</span></h2>
      <p>My academic journey and continuous learning path in computer science and web development</p>
      <div className="education__tabs">
        <button className={tab === 'formal' ? 'active' : ''} onClick={() => setTab('formal')}>Formal Education</button>
        <button className={tab === 'cert' ? 'active' : ''} onClick={() => setTab('cert')}>Certifications</button>
      </div>
      {tab === 'formal' ? (
        <div className="education__cards">
          {formalEducation.map((card, idx) => (
            <div className={`education__card ${card.className}`} key={card.title}>
              <div className="education__card-title-row education__card-title-left">
                <div className="card-icon-circle" style={{ background: card.color }}>
                  <img src={card.icon} alt={card.title} />
                </div>
                <h3>{card.title}</h3>
              </div>
              <div style={{ marginBottom: '0.3rem', fontWeight: 500, color: '#007bff' }}>{card.major}</div>
              <div style={{ fontWeight: 500 }}>{card.institution}</div>
              <div style={{ fontSize: '0.95rem', color: '#666', marginBottom: '0.2rem' }}>
                <span role="img" aria-label="calendar">📅</span> {card.year} &nbsp;
                <span role="img" aria-label="location">📍</span> {card.location}
              </div>
              <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'center', marginBottom: '0.2rem' }}>
                <span style={{ background: '#3460c0', color: '#28a745', borderRadius: 6, padding: '0.1rem 0.5rem', fontWeight: 600, fontSize: '0.95rem' }}>GPA: {card.gpa}</span>
                <span style={{ background: '#4ce65c', color: '#28a745', borderRadius: 6, padding: '0.1rem 0.5rem', fontWeight: 600, fontSize: '0.95rem' }}>{card.status}</span>
              </div>
              <div style={{ fontSize: '0.97rem', marginBottom: '0.5rem', color: '#444' }}>{card.desc}</div>
              <div style={{ marginBottom: '0.3rem', fontWeight: 600 }}>Key Courses:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.5rem' }}>
                {card.keyCourses.map((course, i) => (
                  <span key={i} style={{  borderRadius: 6, padding: '0.15rem 0.7rem', fontSize: '0.93rem' }}>{course}</span>
                ))}
              </div>
              <div style={{ marginBottom: '0.3rem', fontWeight: 600 }}>Notable Achievements:</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.97rem' }}>
                {card.achievements.map((ach, i) => (
                  <li key={i} style={{ marginBottom: '0.2rem' }}>{ach}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="education__cards" style={{ justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          {certifications.map(card => (
            <div className={`education__card ${card.className}`} key={card.title} style={{ alignItems: 'center', minWidth: 260, maxWidth: 300, boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
              <div className="card-icon-circle" style={{ background: card.color, margin: '1.2rem auto 0.7rem auto' }}>
                <img src={card.icon} alt={card.title} />
              </div>
              <h3 style={{ textAlign: 'center', fontWeight: 600, fontSize: '1.13rem', margin: '0.7rem 0 0.2rem 0' }}>{card.title}</h3>
              <div style={{ textAlign: 'center', color: '#444', fontWeight: 500, marginBottom: '0.7rem' }}>{card.institution}</div>
              <div style={{ marginTop: 'auto', marginBottom: '1.2rem' }}>
                <span style={{ background: '#e6fff2', color: '#28a745', borderRadius: 8, padding: '0.18rem 1.1rem', fontWeight: 600, fontSize: '1rem', display: 'inline-block' }}>{card.year}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Education; 