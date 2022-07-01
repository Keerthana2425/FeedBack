import {
  Button,
  Card, CardContent, Grid, Typography,
} from '@mui/material';
import React, { useState, useMemo } from 'react';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ReactPhoneInput from 'react-phone-input-2';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { Link } from 'react-router-dom';
import InputField from '../../Reusable/InputField';
import LogoComp from '../../Reusable/LogoComponents/logoComp';

const customStyles = {
  control: (base) => ({
    ...base,
    height: 39,
    minHeight: 39,
  }),
};

export default function RequestDemo() {
  const [bussinessName, setBusinessName] = useState('');
  const [country, setCountry] = useState('');

  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  const onChangeCountry = (val) => {
    setCountry(val);
  };

  const onChangeBussiness = (e) => {
    setBusinessName(e.target.value);
  };

  const onChangeClient = (e) => {
    setClientName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeContact = (val) => {
    setContact(val);
  };

  return (
    <Grid height="100vh" backgroundColor="#F2F2F2" padding="0% 3%">
      <Grid height="12vh" minHeight="50px">
        <LogoComp />
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item xs={5.8} container minWidth="400px" alignItems="center" justifyContent="center">
          left image
        </Grid>
        <Grid item xs={5.8} minWidth="600px">
          <Card sx={{ borderRadius: '15px', minHeight: '500px' }}>
            <CardContent>
              <Grid container alignItems="center" justifyContent="space-between" paddingLeft="2%" marginTop="1%">
                <Typography fontSize="1.15rem" fontWeight="600">
                  Talk to us to find out how we can help your Business
                </Typography>
                <Link to="/">
                  <button
                    type="button"
                    style={{
                      border: 'none', height: '30px', width: '30px', fontSize: '1.1rem', borderRadius: '10px',
                    }}
                  >
                    X
                  </button>
                </Link>
              </Grid>
              <Grid padding="2% 2%">
                <Grid container alignItems="center" justifyContent="space-between" marginTop="5%">
                  <Grid item xs={5.7}>
                    <InputField
                      type="text"
                      changeAction={onChangeBussiness}
                      searchValue={bussinessName}
                      placeholder="Enter Bussiness Name"
                      icon={(
                        <LocalMallIcon
                          fontSize="small"
                          style={{ color: 'grey', marginRight: '20px' }}
                        />
                      )}
                      label="Bussiness Name"
                    />
                  </Grid>
                  <Grid item xs={5.7}>
                    <InputField
                      type="text"
                      changeAction={onChangeClient}
                      searchValue={clientName}
                      placeholder="Enter Your Name"
                      icon={(
                        <AccountCircleOutlinedIcon
                          fontSize="small"
                          style={{ color: 'grey', marginRight: '20px' }}
                        />
                      )}
                      label="Your Name"
                    />
                  </Grid>
                </Grid>
                <Grid container alignItems="center" justifyContent="space-between" marginTop="5%">
                  <Grid item xs={5.7}>
                    <InputField
                      type="email"
                      changeAction={onChangeEmail}
                      searchValue={email}
                      placeholder="Enter your Email"
                      icon={(
                        <MailOutlinedIcon
                          fontSize="small"
                          style={{ color: 'grey', marginRight: '20px' }}
                        />
                      )}
                      label="Your Email"
                    />
                  </Grid>
                  <Grid item xs={5.7}>
                    <Grid fontSize="15px" fontWeight="400" marginBottom="7px">
                      Contact
                    </Grid>
                    <ReactPhoneInput
                      inputExtraProps={{
                        name: 'phone',
                        required: true,
                        // autoFocus: true,
                      }}
                      inputStyle={{ width: '100%', height: '39px' }}
                      defaultCountry="bh"
                      value={contact}
                      onChange={onChangeContact}
                    />
                  </Grid>
                </Grid>
                <Grid container alignItems="center" justifyContent="flex-start" marginTop="5%">
                  <Grid item xs={5.7}>
                    <Grid sx={{ marginBottom: '8px' }}>Select Country</Grid>
                    <Grid sx={{ width: '100%' }}>
                      <Select
                        options={options}
                        styles={customStyles}
                        placeholder="select country"
                        value={country}
                        onChange={onChangeCountry}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container alignItems="center" justifyContent="flex-start" marginTop="7%" paddingBottom="20px">
                  <Grid item xs={6} height="50px" marginRight="35px">
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        height: '100%',
                        borderRadius: '10px',
                        color: 'black',
                        backgroundColor: '#68E98D',
                        '&:hover': {
                          color: 'black',
                          bgcolor: '#68E98D',
                        },
                      }}
                    >
                      book
                    </Button>
                  </Grid>
                  <Grid item container xs={4} height="50px">
                    <Link to="/" style={{ textDecoration: 'none', width: '100%' }}>
                      <Button
                        variant="outlined"
                        size="large"
                        fullWidth
                        sx={{
                          height: '100%',
                          borderRadius: '10px',
                          color: '#68E98D',
                          // color: '#73F5C6',
                          borderColor: '#68E98D',
                          '&:hover': {
                            borderColor: '#68E98D',
                          },
                        }}
                      >
                        <ArrowBackOutlinedIcon fontSize="small" style={{ marginRight: '20px' }} />
                        Back
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
