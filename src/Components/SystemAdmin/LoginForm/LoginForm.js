import {
  Grid, Card, CardContent, Typography, Button,
} from '@mui/material';
import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

import { useHistory, Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputField from '../../Reusable/InputField';
import loginimg from '../../../Images/login-image.png';

import LogoComp from '../../Reusable/LogoComponents/logoComp';

function LoginForm() {
  const [type, setType] = useState('password');
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const onLogin = (event) => {
    // console.log(email, password);
    event.preventDefault();
    history.push('/landing');
  };
  return (
    <Grid
      sx={{
        backgroundColor: '#F2F2F2',
        height: '100vh',
        width: '100',
        paddingLeft: '3%',
      }}
    >
      <LogoComp />

      <Grid container sx={{ height: '72vh', width: '100%' }}>
        <Grid
          item
          xs={7}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            minWidth: '500px',
          }}
        >
          <img style={{ height: '62%' }} src={loginimg} alt="login" />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            minWidth: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: '5%',
          }}
        >
          <Card elevation={2} sx={{ width: '88%', padding: '2% 3.5% 2% 3.5%' }}>
            <CardContent>
              <Typography sx={{ fontSize: '1.35rem', fontWeight: 600 }}>
                Login Now !
              </Typography>
              <Grid sx={{ display: 'flex' }}>
                <Grid>
                  <Typography sx={{ fontSize: '1.09rem', fontWeight: 550 }}>
                    Don&apos;t have an account? &nbsp;
                  </Typography>
                </Grid>
                <Link to="/sign-up" style={{ textDecoration: 'none' }}>
                  <Grid>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 550,
                        color: '#68E98D',
                        '&:hover': {
                          textDecorationLine: 'underline',
                          cursor: 'pointer',
                        },
                      }}
                    >
                      {' '}
                      Sign Up
                    </Typography>
                  </Grid>
                </Link>
              </Grid>
              <Grid>
                <Grid sx={{ margin: '3.5% 0 3.5% 0' }}>
                  <InputField
                    type="text"
                    changeAction={handleEmail}
                    searchValue={email}
                    placeholder="Enter Email"
                    icon={(
                      <AccountCircleOutlinedIcon
                        fontSize="small"
                        style={{ color: 'grey', marginRight: '20px' }}
                      />
                    )}
                    label="Email"
                  />
                </Grid>
                <Grid sx={{ margin: '3.5% 0 3.5% 0' }}>
                  <InputField
                    type={type}
                    changeAction={handlePassword}
                    searchValue={password}
                    placeholder="Enter password"
                    icon={(
                      <LockOutlinedIcon
                        fontSize="small"
                        style={{ color: 'grey', marginRight: '20px' }}
                      />
                    )}
                    icon2={(
                      <VisibilityOffIcon
                        fontSize="small"
                        style={{ color: 'grey', cursor: 'pointer' }}
                        onClick={() => {
                          if (type === 'password') {
                            setType('text');
                          } else {
                            setType('password');
                          }
                        }}
                      />
                    )}
                    label="Password"
                  />
                </Grid>
                <Typography>Forgot Password ?</Typography>
                <Button
                  variant="contained"
                  onClick={onLogin}
                  sx={{
                    height: '7vh',
                    marginTop: '4%',
                    width: '100%',
                    backgroundColor: '#68E98D',
                    fontWeight: 550,
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

export default LoginForm;
