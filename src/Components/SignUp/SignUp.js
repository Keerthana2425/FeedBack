import React, { useState, useMemo } from 'react';
import {
  Grid, Card, CardContent, Typography, Button,
} from '@mui/material';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import ReactPhoneInput from 'react-phone-input-2';
// import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { Link } from 'react-router-dom';
// import styles from './SignUp.module.css';
import InputField from '../Reusable/InputField';
import logo from '../../Images/logo.png';
import loginimg from '../../Images/login-image.png';

const customStyles = {
  control: (base) => ({
    ...base,
    height: 35,
    minHeight: 35,
  }),
};

function SignUp() {
  const [businessName, setBusinessName] = useState('');
  const [holderName, setHolderName] = useState('');
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  // const [businessLogo, setBusinessLogo] = useState(null);
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (val) => {
    setValue(val);
  };

  // const onChangeBusinessLogo = (e) => {
  //   console.log(e.target.files[0]);
  //   setBusinessLogo(e.target.files[0]);
  // };

  const onChangeBusiness = (e) => {
    setBusinessName(e.target.value);
  };

  const onChangeHolder = (e) => {
    setHolderName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeContact = (val) => {
    setContact(val);
  };

  const onRegister = () => {
    // console.log(businessName, holderName, value.label, contact, email);
  };

  return (
    <Grid
      xs={12}
      sx={{
        backgroundColor: '#F5F8FE', height: '100vh', width: '100%', paddingLeft: '3%',
      }}
    >
      <Grid
        sx={{
          height: '12vh',
          width: '16%',
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
      <Grid
        // className={styles.gridContainer}
        wrap="wrap"
        container
        sx={{
          // border: '1px solid red',
          // height: '100%',
          width: '100%',
          // display: 'flex',
        }}
      >
        <Grid
          xs={6}
          item
          // className={styles.imgGrid}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '580px',
            // width: '50%',
          }}
        >
          <img style={{ width: '80%' }} src={loginimg} alt="login" />
        </Grid>
        <Grid
          item
          xs={6}
          // className={styles.heroGridCard}
          sx={{
            // border: '1px solid blue',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50%',
            paddingRight: '1.5%',
            minWidth: '580px',

            // width: '50%',
          }}
        >
          <Card elevation={3} sx={{ width: '70%', height: '100%', padding: '1.5% 4% 1.5% 4%' }}>
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
                  <Grid sx={{ marginBottom: '8px' }}>
                    Select Country
                  </Grid>

                  {/* <Grid sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    >
                      <LanguageOutlinedIcon
                      fontSize="small" style={{ color: 'grey', paddingLeft: '14px',
                       paddingRight: '15px' }} />
                    </Grid> */}
                  <Grid sx={{ width: '100%' }}>
                    <Select options={options} styles={customStyles} placeholder="select country" value={value} onChange={changeHandler} />

                  </Grid>
                </Grid>
                <Grid sx={{ margin: '3.5% 0 3% 0' }}>
                  <InputField
                    changeAction={onChangeEmail}
                    searchValue={email}
                    placeholder="Enter Your Email"
                    icon={<EmailOutlinedIcon fontSize="small" style={{ color: 'grey', marginRight: '20px' }} />}
                    label="Contact"
                  />
                </Grid>
                <Grid sx={{ margin: '2% 0 2% 0' }}>
                  {/* <Grid sx={{ marginBottom: '8px' }}>
                    Contact
                  </Grid> */}

                  <ReactPhoneInput
                    inputExtraProps={{
                      name: 'phone',
                      required: true,
                      // autoFocus: true,
                    }}
                    inputStyle={{ width: '100%', height: '35px' }}
                    defaultCountry="in"
                    value={contact}
                    onChange={onChangeContact}
                  />
                </Grid>
                {/* <Grid sx={{ margin: '3.5% 0 3% 0' }}>
                  <Grid marginBottom="8px">
                    Bussiness Logo
                  </Grid>
                  <input type="file" onChange={onChangeBusinessLogo} />
                </Grid> */}
                <Button
                  variant="contained"
                  // onClick={onLogin}
                  onClick={onRegister}
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
              {/* <SelectCountry /> */}

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SignUp;
