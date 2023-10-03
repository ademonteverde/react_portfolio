import React from 'react';
import Grid from '@mui/material/Grid';

function Navigation() {
  return (
    <nav>
      <Grid container id="navbar" alignItems="center" justifyContent="space-between">
        <Grid item>
          <h1 className="title">Andre Carlo</h1>
        </Grid>

        <Grid item>
          <ul className="links">
            <li><a href="/">About Me</a></li>
            <li><a href="/Portfolio">Portfolio</a></li>
            <li><a href="/Resume">Resume</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </Grid>
      </Grid>
    </nav>
  );
}

export default Navigation;
