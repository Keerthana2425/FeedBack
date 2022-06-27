import React from 'react';
import { Grid } from '@mui/material';

function Displayer() {
  return (
    <Grid
      container
      sx={{
        height: '9%', display: 'flex', justifyContent: 'space-between',
      }}
    >
      <Grid xs={7} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Grid>
          company name
        </Grid>
        <Grid>
          address
        </Grid>
        <Grid>
          rating
        </Grid>
      </Grid>
      <Grid xs={4.8}>
        current rating set to star
      </Grid>
    </Grid>
  );
}

export default Displayer;
