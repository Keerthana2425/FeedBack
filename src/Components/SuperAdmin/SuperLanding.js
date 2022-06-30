import React from 'react';
import { Grid } from '@mui/material';
import SuperHeader from './SuperHeader';
import Clients from './Clients';

function SuperLanding() {
  return (
    <Grid>
      <SuperHeader />
      <Clients />
    </Grid>
  );
}

export default SuperLanding;
