import React from 'react';
import { Grid, Typography } from '@mui/material';
import Project from '../components/Project';
import projectData from '../projects.json';
import '../App.css'; 

export default function Portfolio() {
  const allProjects = projectData.slice(0, 6);

  return (
    <div className="portfolio">
      <Typography variant="h2" className="portfolio-title">
        Portfolio
      </Typography>
      
      <div className="project-container">
        <Grid container spacing={6}>
          {allProjects.map((project, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <Project projectData={project} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
