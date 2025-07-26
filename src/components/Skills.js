import React, { useState } from 'react';
import './Skills.css';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiPython,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiAmazonwebservices,
  SiFirebase,
} from "react-icons/si";
import { FaCrown, FaBookOpen, FaUsers, FaSync, FaComments, FaClock, FaTools, FaPaintBrush, FaVial, FaCloud } from 'react-icons/fa';

const techIcons = {
  'React.js': <SiReact style={{ color: '#00d8ff' }} />, // cyan
  'JavaScript': <SiJavascript style={{ color: '#f7df1e' }} />, // yellow
  'TypeScript': <SiTypescript style={{ color: '#3178c6' }} />, // blue
  'HTML5': <SiHtml5 style={{ color: '#e44d26' }} />, // orange
  'CSS3': <SiCss3 style={{ color: '#1572b6' }} />, // blue
  'Node.js': <SiNodedotjs style={{ color: '#3c873a' }} />, // green
  'Express.js': <SiExpress style={{ color: '#000' }} />, // black
  'PHP': <SiPhp style={{ color: '#777bb4' }} />, // purple
  'Python': <SiPython style={{ color: '#306998' }} />, // blue
  'Laravel': <SiLaravel style={{ color: '#ff2d20' }} />, // red
  'MongoDB': <SiMongodb style={{ color: '#47a248' }} />, // green
  'MySQL': <SiMysql style={{ color: '#00758f' }} />, // blue
  'PostgreSQL': <SiPostgresql style={{ color: '#336791' }} />, // blue
  'AWS': <SiAmazonwebservices style={{ color: '#ff9900' }} />, // orange
  'Firebase': <SiFirebase style={{ color: '#ffcb2b' }} />, // yellow
};

const technical = [
  { category: 'Frontend Development', icon: <FaBookOpen style={{ color: '#1976d2', fontSize: 32 }} />, skills: [
    { name: 'React.js', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
  ]},
  { category: 'Backend Development', icon: <FaUsers style={{ color: '#28a745', fontSize: 32 }} />, skills: [
    { name: 'Node.js', level: 88 },
    { name: 'Express.js', level: 85 },
    { name: 'PHP', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Laravel', level: 78 },
  ]},
  { category: 'Database & Cloud', icon: <FaCloud style={{ color: '#fd7e14', fontSize: 32 }} />, skills: [
    { name: 'MongoDB', level: 85 },
    { name: 'MySQL', level: 88 },
    { name: 'PostgreSQL', level: 82 },
    { name: 'AWS', level: 80 },
    { name: 'Firebase', level: 75 },
  ]},
];

const softSkills = [
  { name: 'Problem Solving', level: 92, icon: <FaBookOpen color="#1976d2" size={32} />, color: '#1976d2', desc: 'Analytical thinking and creative solution development' },
  { name: 'Team Collaboration', level: 90, icon: <FaUsers color="#28a745" size={32} />, color: '#28a745', desc: 'Effective communication and teamwork abilities' },
  { name: 'Leadership', level: 85, icon: <FaCrown color="#fd7e14" size={32} />, color: '#fd7e14', desc: 'Project management and team guidance skills' },
  { name: 'Adaptability', level: 88, icon: <FaSync color="#a259fa" size={32} />, color: '#a259fa', desc: 'Quick learning and adaptation to new technologies' },
  { name: 'Communication', level: 87, icon: <FaComments color="#ff4c60" size={32} />, color: '#ff4c60', desc: 'Clear technical communication and documentation' },
  { name: 'Time Management', level: 89, icon: <FaClock color="#20c997" size={32} />, color: '#20c997', desc: 'Efficient project planning and deadline management' },
];

const tools = [
  { category: 'Development Tools', icon: <FaTools style={{ color: '#1976d2', fontSize: 28 }} />, items: ['VS Code', 'Git', 'GitHub', 'Postman', 'Docker', 'Webpack'] },
  { category: 'Design Tools', icon: <FaPaintBrush style={{ color: '#28a745', fontSize: 28 }} />, items: ['Figma', 'Adobe XD', 'Canva', 'Photoshop'] },
  { category: 'Testing & Deployment', icon: <FaVial style={{ color: '#fd7e14', fontSize: 28 }} />, items: ['Jest', 'Cypress', 'Netlify', 'Vercel', 'Heroku'] },
];

const Skills = () => {
  const [tab, setTab] = useState('technical');
  return (
    <section className="skills" id="skills">
      <h2>Skills & <span>Expertise</span></h2>
      <p>Technical competencies and professional skills I've developed through experience and continuous learning</p>
      <div className="skills__tabs">
        <button className={tab === 'technical' ? 'active' : ''} onClick={() => setTab('technical')}>Technical</button>
        <button className={tab === 'soft' ? 'active' : ''} onClick={() => setTab('soft')}>Soft Skills</button>
        <button className={tab === 'tools' ? 'active' : ''} onClick={() => setTab('tools')}>Tools</button>
      </div>
      {tab === 'technical' && (
        <div className="skills__categories">
          {technical.map((cat) => (
            <div className="skills__category" key={cat.category}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.1rem' }}>
                <span className="skill-icon-circle" style={{ background: '#fff', width: 38, height: 38, minWidth: 38, minHeight: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>{cat.icon}</span>
                <h3 style={{ fontWeight: 700, fontSize: '1.13rem', margin: 0, textAlign: 'left' }}>{cat.category}</h3>
              </div>
              {cat.skills.map((skill) => (
                <div className="skills__bar" key={skill.name}>
                  <div className="skill-name-with-icon">
                    {techIcons[skill.name]}
                    <span>{skill.name}</span>
                  </div>
                  <div className="bar">
                    <div className="bar__fill" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <span className="level">{skill.level}%</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      {tab === 'soft' && (
        <div className="skills__soft" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', justifyContent: 'center', margin: '0 auto', maxWidth: 1100 }}>
          {softSkills.map((skill) => (
            <div
              className="skills__soft-card"
              key={skill.name}
              style={{
                background: '#fff',
                borderRadius: 16,
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                textAlign: 'center',
                border: skill.name === 'Team Collaboration' ? '2px solid #28a745' : '2px solid transparent',
                padding: '2.2rem 1.5rem 1.7rem 1.5rem',
                minWidth: 280,
                maxWidth: 340,
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <div className="skill-icon-circle" style={{ background: skill.color, marginBottom: '1.1rem', width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                {React.cloneElement(skill.icon, { color: '#fff', size: 32 })}
              </div>
              <h4 style={{ fontWeight: 700, fontSize: '1.18rem', marginBottom: '0.3rem' }}>{skill.name}</h4>
              <div style={{ color: '#444', fontSize: '1.01rem', marginBottom: '1.1rem' }}>{skill.desc}</div>
              <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.2rem', fontWeight: 600, fontSize: '0.97rem', color: '#222' }}>
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
              <div className="bar" style={{ background: '#e3e9f7', height: 8, borderRadius: 6, width: '100%', margin: '0.3rem 0 0.7rem 0' }}>
                <div className="bar__fill" style={{ width: `${skill.level}%`, background: skill.color, height: 8, borderRadius: 6, transition: 'width 0.5s' }}></div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {tab === 'tools' && (
        <div className="skills__tools">
          {tools.map((tool) => (
            <div className="skills__tool-card" key={tool.category}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.1rem' }}>
                <span className="skill-icon-circle" style={{ background: '#fff', width: 32, height: 32, minWidth: 32, minHeight: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>{tool.icon}</span>
                <h4 style={{ fontWeight: 700, fontSize: '1.08rem', margin: 0, textAlign: 'left' }}>{tool.category}</h4>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
                {tool.items.map((item) => (
                  <span key={item} style={{ background: '#f1f3f6', color: '#333', borderRadius: 6, padding: '0.15rem 0.7rem', fontSize: '0.97rem', fontWeight: 500 }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Skills; 