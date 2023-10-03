import React from 'react';
import { Typography } from '@mui/material';
import '../App.css';

function Resume() {
  return (
    <div className="resume">
      <Typography variant="h2" align="center" className="resume-title">
        Resume
      </Typography>

      <Typography align="center" className="resume-link">
        Click here to view my{' '}
        <a
          href="https://drive.google.com/file/d/1GzYcOvamQCcld4czXj_U3ux2IF5ZUTQz/view?usp=sharing"
          className="resume-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
      </Typography>

      <div className="skills-section">
        <Typography variant="h4" align="center" className="skills-heading">
          Front-End Proficiencies
        </Typography>
        <ul className="skills-list">
          <li>HTML (HyperText Markup Language)</li>
          <li>CSS (Cascading Style Sheets)</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Progressive Web Applications (PWAs)</li>
          <li>React</li>
        </ul>
      </div>

      <div className="skills-section">
        <Typography variant="h4" align="center" className="skills-heading">
          Back-End Proficiencies
        </Typography>
        <ul className="skills-list">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Server-Side APIs</li>
          <li>SQL (Structured Query Language)</li>
          <li>Object-Relational Mapping (ORM)</li>
          <li>NoSQL Databases</li>
          <li>Mongoose</li>
          <li>Sequelize</li>
        </ul>
      </div>

      <div className="skills-section">
        <Typography variant="h4" align="center" className="skills-heading">
          General and Additional Proficiencies
        </Typography>
        <ul className="skills-list">
          <li>Git</li>
          <li>GraphQL</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>State Management</li>
          <li>Model-View-Controller (MVC)</li>
          <li>Third-Party APIs</li>
          <li>REST (Representational State Transfer)</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
