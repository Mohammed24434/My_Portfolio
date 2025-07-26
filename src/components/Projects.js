import React, { useState } from 'react';
import './Projects.css';

const projectIcon = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/box-seam.svg';

const projects = [
  { title: 'E-Commerce Platform', type: 'fullstack', desc: 'A comprehensive online store with payment integration and admin dashboard.', tech: ['React', 'Node.js', 'MongoDB'], github: '#', demo: '#', color: 'blue', iconColor: '#1976d2' },
  { title: 'Portfolio Website', type: 'frontend', desc: 'A modern portfolio showcasing projects with smooth animations.', tech: ['React', 'CSS'], github: '#', demo: '#', color: 'green', iconColor: '#2ecc40' },
  { title: 'Task Management API', type: 'backend', desc: 'RESTful API for task management with authentication.', tech: ['Node.js', 'Express', 'JWT'], github: '#', demo: '#', color: 'orange', iconColor: '#fd7e14' },
  { title: 'Social Media Dashboard', type: 'fullstack', desc: 'Real time social media analytics dashboard.', tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'], github: '#', demo: '#', color: 'purple', iconColor: '#6f42c1' },
  { title: 'Weather App', type: 'frontend', desc: 'Responsive weather application with real time data.', tech: ['React', 'OpenWeather API'], github: '#', demo: '#', color: 'red', iconColor: '#ff4c60' },
  { title: 'Inventory Management', type: 'backend', desc: 'API for inventory tracking and management.', tech: ['Python', 'Flask', 'MongoDB'], github: '#', demo: '#', color: 'teal', iconColor: '#20c997' },
  { title: 'Chat Application', type: 'fullstack', desc: 'Real-time chat app with group and private messaging.', tech: ['React', 'Node.js', 'Socket.io'], github: '#', demo: '#', color: 'blue', iconColor: '#1976d2' },
  { title: 'Todo List App', type: 'frontend', desc: 'Interactive todo list with drag-and-drop functionality.', tech: ['React', 'Redux'], github: '#', demo: '#', color: 'orange', iconColor: '#fd7e14' },
];

const filterTypes = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Fullstack', value: 'fullstack' },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter);
  return (
    <section className="projects" id="projects">
      <h2>Projects & <span>Portfolio</span></h2>
      <p>A showcase of my work, demonstrating technical expertise and problem-solving skills across various domains</p>
      <div className="projects__filters">
        {filterTypes.map(f => (
          <button key={f.value} className={filter === f.value ? 'active' : ''} onClick={() => setFilter(f.value)}>{f.label}</button>
        ))}
      </div>
      <div className="projects__cards">
        {filtered.map((proj, idx) => (
          <div className={`projects__card ${proj.color}`} key={idx}>
            <div className="projects__card-title-row projects__card-title-left">
              <div className="card-icon-circle" style={{ background: proj.iconColor }}>
                <img src={projectIcon} alt="Project" />
              </div>
              <h3>{proj.title}</h3>
            </div>
            <p>{proj.desc}</p>
            <div className="projects__tech">
              {proj.tech.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="projects__links" style={{ display: 'flex', gap: '1.2rem', marginTop: '1.2rem', justifyContent: 'center' }}>
              <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{ color: proj.color, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                <i className="bi bi-github" style={{ fontSize: 18 }}></i> GitHub
              </a>
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer" style={{ color: proj.color, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <i className="bi bi-box-arrow-up-right" style={{ fontSize: 18 }}></i> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 