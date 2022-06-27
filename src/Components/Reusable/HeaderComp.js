import React from 'react';
import {
  Grid, Tabs, Tab,
} from '@mui/material';
// import Logo from '../../Images/logo.png';
// import { Dashboard } from '@mui/icons-material';
import DashBoard from '../LandingPage/DashBoard';
import LogoComp from './LogoComponents/logoComp';
import Questionaries from '../LandingPage/Questionaries';
import Displayer from '../LandingPage/Displayer';
import SendLink from '../LandingPage/sendLink';

function HeaderComp(props) {
  // const [value, setValue] = useState(0);

  // const onTabChange = (e, val) => {
  //   setValue(val);
  // };

  const { value, onTabChange } = props;

  return (
    <>
      <Grid container sx={{ height: '8vh', backgroundColor: '#263238', color: '#68E98D' }}>
        <Grid item xs={2} sx={{ height: '100%', border: '1px solid white' }}>
          {/* <img
          style={{
            height: '70%', position: 'relative', top: '15%', left: '10%',
          }}
          src={Logo}
          alt="logo"
        /> */}
          <LogoComp />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: 'flex', alignSelf: 'flex-end', justifyContent: 'center',
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
            <Tab label="Dashboard" />
            <Tab label="Questionaries" />

          </Tabs>
        </Grid>
        <Grid item xs={5}>
          ppppp
        </Grid>
      </Grid>
      <Grid sx={{ backgroundColor: '#DEF6E5', padding: '0% 2.5%', height: '91vh' }}>
        <Displayer />
        <Grid
          container
          sx={{
            height: '80%', display: 'flex', justifyContent: 'space-between',
          }}
        >
          <Grid xs={7}>
            {value === 0 ? (<DashBoard />) : (<Questionaries />)}
          </Grid>
          <Grid xs={4.8}>
            <SendLink />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default HeaderComp;
