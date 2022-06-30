import { Grid } from '@mui/material';
import React, { useState } from 'react';
import HeaderComp from '../../Reusable/HeaderComp';
import DashBoard from './DashBoard';
import Questionaries from './Questionaries';
import Displayer from './Displayer';
import SendLink from './sendLink';

function LandingPage() {
  const [value, setValue] = useState(0);
  const onTabChange = (e, val) => {
    setValue(val);
  };
  return (
    <Grid height="100vh">
      <HeaderComp value={value} onTabChange={onTabChange} />
      <Grid sx={{ backgroundColor: '#E6E7E9', padding: '0% 2.5%', height: '91vh' }}>
        <Displayer />
        <Grid
          container
          justifyContent="space-between"
          sx={{
            height: '81%',
          }}
        >
          <Grid item xs={7} minWidth="600px">
            {value === 0 ? (<DashBoard />) : (<Questionaries />)}
          </Grid>
          <Grid item xs={4.9} minWidth="500px">
            <SendLink />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
