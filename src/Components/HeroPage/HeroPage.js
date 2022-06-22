import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import mainLogo from '../../Images/logo.png';
import HeroImg from '../../Images/landing-image.png';

function HeroPage() {
  return (
    <Grid
      container
      sx={{
        paddingLeft: '4%',
        paddingRight: '4%',

        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#DEF6E5',
      }}
    >
      <Grid item container sx={{ height: '13vh' }}>
        <Grid
          item
          xs={2}
          sx={{
            // border: '2px solid grey',
            height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
          }}
        >
          <img style={{ height: '48%' }} alt="logo" src={mainLogo} />
        </Grid>
        <Grid
          item
          container
          xs={4}
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Grid
            item
            sx={{
              cursor: 'pointer', padding: '1%', margin: '2%',
            }}
          >
            <Link to="/works" style={{ textDecoration: 'none', color: '#343A40' }}>How it works?</Link>

          </Grid>
          <Grid
            item
            sx={{
              cursor: 'pointer', padding: '2%', margin: '2%', color: '#343A40',
            }}
          >
            <Link to="Pricing" style={{ textDecoration: 'none', color: '#343A40' }}>Pricing</Link>
          </Grid>
          <Grid
            item
            sx={{
              cursor: 'pointer', padding: '2%', margin: '2%', color: '#343A40',
            }}
          >
            <Link to="contacts" style={{ textDecoration: 'none', color: '#343A40' }}>Contacts</Link>

          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={6}
          sx={{
            height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
          }}
        >
          <Grid item sx={{ border: '1px solid red', height: '50%', width: '18%' }}>
            language
          </Grid>
          <Grid
            item
            sx={{
              height: '55%', width: '13%', marginLeft: '3.5%', marginRight: '3.5%',
            }}
          >
            <Link to="/log-in" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                // onClick={this.routeChange}
                sx={{
                  height: '100%',
                  width: '100%',
                  border: '2px solid grey',
                  color: 'black',
                  '&:hover': {
                    bgcolor: '#475156',
                    color: 'white',
                    border: '2px solid grey',
                  },
                }}
              >
                Login
              </Button>
            </Link>

          </Grid>
          <Grid
            item
            sx={{
              height: '50%',
              width: '20%',
            }}
          >
            <Button
              variant="contained"
              sx={{
                height: '100%',
                width: '100%',
                backgroundColor: '#68E98D',

                color: 'black',
                '&:hover': {
                  bgcolor: '#68E98D',
                },
              }}
            >
              Get Started
            </Button>
          </Grid>

        </Grid>
      </Grid>
      <Grid
        item
        container
        sx={{
          height: '80vh', display: 'flex', justifyContent: 'space-between', marginTop: '2%',
        }}
      >
        <Grid
          item
          container
          spacing={2}
          sx={{
            width: '39%', display: 'flex', flexDirection: 'column', marginTop: '5%', marginLeft: '0%',
          }}
        >
          <Grid item>
            <Typography variant="h4" sx={{ fontWeight: '600', color: '#343A40' }}>
              Get your Business better With
              <Typography variant="h4" sx={{ fontWeight: '600', color: '#68E98D' }}>Customer Feedback!</Typography>
            </Typography>
          </Grid>
          <Grid item>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis
          </Grid>
          <Grid item sx={{ marginTop: '2%' }}>
            <Button
              variant="contained"
              sx={{
                height: '80%',
                width: '27%',
                backgroundColor: '#68E98D',
                fontWeight: '500',
                color: 'black',
                '&:hover': {
                  bgcolor: '#68E98D',
                },
              }}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            width: '48%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <img style={{ height: '58vh' }} src={HeroImg} alt="heroimg" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HeroPage;
