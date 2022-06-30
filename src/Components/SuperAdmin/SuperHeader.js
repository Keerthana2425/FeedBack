import React from 'react';
import {
  Grid, Typography,
} from '@mui/material';

function SuperHeader() {
  // const { value, onTabChange } = props;

  return (
    <Grid
      container
      sx={{
        height: '54px', backgroundColor: '#263238', color: '#68E98D', paddingTop: '0.5%',
      }}
    >
      <Grid item xs={2} sx={{ height: '100%' }}>
        logo
      </Grid>
      <Grid
        item
        xs={5}
        container
        sx={{
          alignSelf: 'center', justifyContent: 'center', height: '100%',
        }}
      >
        <Typography variant="h6">
          Clients
        </Typography>
      </Grid>
      <Grid item xs={5}>
        account holder
      </Grid>
    </Grid>
  );
}

export default SuperHeader;
