import React from 'react';
import {
  Grid, Tabs, Tab,
} from '@mui/material';

function HeaderComp(props) {
  const { value, onTabChange } = props;

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
        sx={{
          display: 'flex', alignSelf: 'flex-end', justifyContent: 'center', height: '100%',
        }}
      >
        <Tabs
          textColor="inherit"
          onChange={onTabChange}
          value={value}
          fullWidth
          centered
          variant="scrollable"
          TabIndicatorProps={{
            style: {
              backgroundColor: '#68E98D',
            },
          }}
        >
          <Tab
            label="Dashboard"
            sx={{ height: '100%' }}
          />
          <Tab
            label="Questionaries"
            sx={{ height: '100%' }}
          />

        </Tabs>
      </Grid>
      <Grid item xs={5}>
        account holder
      </Grid>
    </Grid>
  );
}

export default HeaderComp;
