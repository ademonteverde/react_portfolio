import React from 'react';
import { Grid, Typography } from '@mui/material';
import Navigation from './Navigation';

function Header() {
  return (
    <header>
      <Grid>
        <Grid>
          <Navigation />
        </Grid>
        <Grid>
          <Typography>
            Andre's Portfolio
          </Typography>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
