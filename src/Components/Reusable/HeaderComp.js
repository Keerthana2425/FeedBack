import React, { useState } from 'react';
import { Grid, Tabs, Tab } from '@mui/material';
// import Logo from '../../Images/logo.png';
// import LogoComp from '../LogoComponents/logoComp';

function HeaderComp() {
  const [value, setValue] = useState(0);

  const onTabChange = (e, val) => {
    setValue(val);
  };

  return (
    <>
      <Grid container sx={{ height: '9vh', backgroundColor: '#263238', color: '#fff' }}>
        <Grid item xs={3} sx={{ border: '1px solid blue', height: '100%' }}>
          {/* <img
          style={{
            height: '70%', position: 'relative', top: '15%', left: '10%',
          }}
          src={Logo}
          alt="logo"
        /> */}
          hii
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            border: '1px solid red', display: 'flex', alignSelf: 'flex-end',
          }}
        >
          <Tabs
            onChange={onTabChange}
            value={value}
            variant="scrollable"
            TabIndicatorProps={{
              style: {
                backgroundColor: 'white',
                color: 'white',
              },
            }}
          >
            <Tab label="Dashboard" />
            <Tab label="Questionaries" />

          </Tabs>
        </Grid>
        <Grid item xs={4} sx={{ border: '1px solid black' }}>
          ppppp
        </Grid>
      </Grid>
      {value === 1 ? <>hii</> : <>hello</>}
    </>
  );
}

export default HeaderComp;
