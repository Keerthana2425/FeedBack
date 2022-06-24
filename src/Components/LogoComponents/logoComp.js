import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';

function LogoComp() {
  return (
    <Grid
      sx={{
        height: '12vh',
        // width: '16%',
        width: '180px',
        marginLeft: '2%',

      }}
    >
      <Link
        to="/"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <img style={{ height: '50%' }} src={logo} alt="logo" />
      </Link>
    </Grid>
  );
}

export default LogoComp;
