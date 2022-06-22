import React, { useState } from 'react';
import {
  Grid, Card, CardContent, Typography, Button,
} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import InputField from '../Reusable/InputField';
import logo from '../../Images/logo.png';
import loginimg from '../../Images/login-image.png';
// import loginimg from '../../Images/lo'

function SignUp() {
  const [businessName, setBusinessName] = useState('');
  const [holderName, setHolderName] = useState('');
  const [Country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const onChangeBusiness = (e) => {
    setBusinessName(e.target.value);
  };

  const onChangeHolder = (e) => {
    setHolderName(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeContact = (e) => {
    setContact(e.target.value);
  };

  return (
    <Grid sx={{
      backgroundColor: '#F5F8FE', height: '100vh', width: '100', paddingLeft: '2%',
    }}
    >
      <Link to="/">
        <Grid
          sx={{
            height: '14vh',
            width: '18%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img style={{ height: '54%' }} src={logo} alt="logo" />
        </Grid>
      </Link>

      <Grid container sx={{ height: '72vh', width: '100%' }}>
        <Grid
          item
          xs={7}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <img style={{ height: '70%' }} src={loginimg} alt="login" />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', paddingRight: '1.5%', position: 'absolute', top: '5%', right: '0%', width: '100%',
          }}
        >
          <Card elevation={2} sx={{ width: '88%', height: '100%', padding: '1.5% 3.5% 1.5% 3.5%' }}>
            <CardContent>
              <Typography sx={{ fontSize: '1.35rem', fontWeight: 600 }}>
                Sign Up !
              </Typography>
              <Grid sx={{ display: 'flex' }}>
                <Grid>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 550 }}>
                    Already have an account?
                    &nbsp;
                  </Typography>
                </Grid>
                <Link to="/log-in" style={{ textDecoration: 'none' }}>
                  <Grid>
                    <Typography sx={{
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
                      Login
                    </Typography>
                  </Grid>
                </Link>

              </Grid>
              <Grid>
                <Grid sx={{ margin: '3.5% 0 3% 0' }}>
                  <InputField
                    changeAction={onChangeBusiness}
                    searchValue={businessName}
                    placeholder="Enter Bussiness Name"
                    icon={<AccountCircleOutlinedIcon fontSize="small" style={{ color: 'grey', marginRight: '20px' }} />}
                    label="Enter Bussiness Name"
                  />
                </Grid>
                <Grid sx={{ margin: '3.5% 0 3% 0' }}>
                  <InputField
                    changeAction={onChangeHolder}
                    searchValue={holderName}
                    placeholder="Enter Your Name"
                    icon={<AccountCircleOutlinedIcon fontSize="small" style={{ color: 'grey', marginRight: '20px' }} />}
                    label="Enter Your Name"
                  />
                </Grid>
                <Grid sx={{ margin: '3.5% 0 3% 0' }}>
                  <InputField
                    changeAction={onChangeCountry}
                    searchValue={Country}
                    placeholder="Enter Your Country"
                    icon={<AccountCircleOutlinedIcon fontSize="small" style={{ color: 'grey', marginRight: '20px' }} />}
                    label="Enter Your Country"
                  />
                </Grid>
                <Grid sx={{ margin: '3.5% 0 3% 0' }}>
                  <InputField
                    changeAction={onChangeEmail}
                    searchValue={email}
                    placeholder="Enter Your Email"
                    icon={<AccountCircleOutlinedIcon fontSize="small" style={{ color: 'grey', marginRight: '20px' }} />}
                    label="Email"
                  />
                </Grid>
                <Grid sx={{ margin: '3.5% 0 3% 0' }}>
                  <InputField
                    changeAction={onChangeContact}
                    searchValue={contact}
                    placeholder="Enter contact number"
                    icon={<AccountCircleOutlinedIcon fontSize="small" style={{ color: 'grey', marginRight: '20px' }} />}
                    label="Contact"
                  />
                </Grid>
                {/* <Typography>
                  Forgot Password ?
                </Typography> */}
                <Button
                  variant="contained"
                  // onClick={onLogin}
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
                  Register
                </Button>
              </Grid>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SignUp;
