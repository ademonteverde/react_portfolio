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
          href="https://drive.google.com/file/d/1E42zGS30IDOevmxAgrbXbHTOs3kBPSwA/view?usp=sharing"
          className="resume-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>resume</u>
        </a>
      </Typography>

      <div className="skills-section">
        <Typography variant="h4" align="center" className="skills-heading">
          <u>Front-End Proficiencies</u>
        </Typography>
        <ul className="skills-list">
          <li>HTML5</li>
          <li>CSS3 (SASS, CSS Grid, Flexbox)</li>
          <li>JavaScript (ES6+)</li>
          <li>jQuery</li>
          <li>React.js</li>
          <li>Redux (State Management)</li>
          <li>Bootstrap</li>
          <li>Responsive Web Design</li>
          <li>Progressive Web Applications (PWAs)</li>
        </ul>
      </div>

      <div className="skills-section">
        <Typography variant="h4" align="center" className="skills-heading">
          <u>Back-End Proficiencies</u>
        </Typography>
        <ul className="skills-list">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>APIs (REST, GraphQL)</li>
          <li>SQL (MySQL, PostgreSQL)</li>
          <li>NoSQL (MongoDB)</li>
          <li>Object-Relational Mapping (ORM) with Sequelize</li>
          <li>Mongoose (MongoDB)</li>
          <li>JWT Authentication</li>
          <li>Serverless Architecture (AWS Lambda)</li>
        </ul>
      </div>

      <div className="skills-section">
        <Typography variant="h4" align="center" className="skills-heading">
          <u>DevOps & Cloud Technologies</u>
        </Typography>
        <ul className="skills-list">
          <li>AWS (EC2, S3, Lambda, RDS)</li>
          <li>Docker</li>
          <li>CI/CD Pipelines (GitHub Actions, Jenkins)</li>
          <li>Git & GitHub</li>
          <li>Firebase</li>
          <li>Heroku</li>
        </ul>
      </div>

      <div className="skills-section">
        <Typography variant="h4" align="center" className="skills-heading">
          <u>General and Additional Proficiencies</u>
        </Typography>
        <ul className="skills-list">
          <li>Agile & Scrum Methodologies</li>
          <li>Test-Driven Development (TDD)</li>
          <li>Unit Testing (Jest, Mocha)</li>
          <li>Version Control (Git, GitHub)</li>
          <li>Web Security (OWASP Top 10)</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Model-View-Controller (MVC)</li>
          <li>Third-Party APIs Integration</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
