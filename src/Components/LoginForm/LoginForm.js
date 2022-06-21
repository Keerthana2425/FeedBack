import {
  Grid, Card, CardContent, Typography, TextField, Button,
} from '@mui/material';
import React, { Component } from 'react';
import logo from '../../Images/logo.png';
import loginimg from '../../Images/login-image.png';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: '',
      // password: '',
    };
  }

  render() {
    return (
      <Grid sx={{
        backgroundColor: '#F5F8FE', height: '100vh', width: '100',
      }}
      >
        <Grid
          sx={{
            height: '14vh',
            // border: '1px solid red',
            width: '18%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img style={{ height: '54%' }} src={logo} alt="logo" />
        </Grid>
        <Grid container sx={{ height: '72vh', width: '100%' }}>
          <Grid
            item
            xs={7}
            sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%',
            }}
          >
            <img style={{ height: '62%' }} src={loginimg} alt="login" />
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '1.5%',
            }}
          >
            <Card elevation={2} sx={{ width: '88%', padding: '2% 3.5% 2% 3.5%' }}>
              <CardContent>
                <Typography sx={{ fontSize: '1.35rem', fontWeight: 600 }}>
                  Login Now !
                </Typography>
                <Grid sx={{ display: 'flex' }}>
                  <Grid>
                    <Typography sx={{ fontSize: '1.09rem', fontWeight: 530 }}>
                      Don&apos;t have an account?
                      &nbsp;
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography sx={{
                      color: '#68E98D',
                      '&:hover': {
                        textDecorationLine: 'underline',
                      },
                    }}
                    >
                      {' '}
                      Sign Up
                    </Typography>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid sx={{ margin: '3.5% 0 3.5% 0' }}>
                    <Typography variant="p">
                      Email
                    </Typography>
                    <TextField id="outlined-basic" size="small" variant="outlined" sx={{ width: '100%', marginTop: '1.2%' }} placeholder="Email" />
                  </Grid>
                  <Grid sx={{ margin: '3.5% 0 3.5% 0' }}>
                    <Typography variant="p">
                      Password
                    </Typography>
                    <TextField id="outlined-basic" size="small" variant="outlined" sx={{ width: '100%', marginTop: '1.2%' }} placeholder="Password" />
                  </Grid>
                  <Typography>
                    Forgot Password ?
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      height: '7vh',
                      marginTop: '4%',
                      width: '100%',
                      backgroundColor: '#68E98D',
                      color: 'black',
                      '&:hover': {
                        bgcolor: '#68E98D',
                      },
                    }}
                  >
                    login
                  </Button>
                </Grid>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default LoginForm;
