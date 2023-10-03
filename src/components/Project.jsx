import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import '../App.css';

function Project({ projectData }) {
  return (
    <Grid container direction="column" justify="center">
      <Grid>
        <Card>
          <a href={projectData?.URL || ''}>
            <div className="project-container-media">
              <CardMedia
                component="img"
                alt={projectData?.alt || ''}
                height="140"
                image={projectData?.imgPath || ''}
              />
              <div className="overlay-text">
                <a className="project-title desc">{projectData?.title || ''}</a>
                <div>
                  <a className="project-bio desc">{projectData?.bio || ''}</a>
                </div>
              </div>
            </div>
          </a>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Project;
