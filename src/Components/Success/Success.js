import {
  Grid, Card, CardContent, Typography, Button,
} from '@mui/material';
import React from 'react';
// import LogoComp from '../LogoComponents/logoComp';
import tick from '../../Images/tick2.png';
import shop from '../../Images/shop.svg';
import rate from '../../Images/rate.svg';

function Success(props) {
  const { businessName, email, toggle } = props;
  return (
    <>
      <Grid container justifyContent="space-between" sx={{ width: '100%', height: '80vh' }}>
        <Grid item container alignItems="center" xs={3} sx={{ minWidth: '300px' }}>
          <img src={shop} style={{ height: '50%', width: '100%' }} alt="success" />
        </Grid>
        <Grid item xs={5.8} sx={{ minWidth: '550px' }}>
          <Card
            elevation={3}
            sx={{ padding: '4% 3% 4% 3%' }}
          >
            <CardContent>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                sx={{
                  height: '100px',
                }}
              >
                <img src={tick} style={{ height: '90%' }} alt="success" />
              </Grid>
              <br />
              <Grid sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}
              >
                <Typography variant="h4" sx={{ fontWeight: 500 }}>
                  Hello
                  {' '}
                  <span style={{ color: '#68E98D' }}>
                    {businessName}
                  </span>
                  ,
                </Typography>
                <Typography variant="h4">
                  Thank you for registering with us!
                </Typography>
              </Grid>
              <br />
              <br />
              <Grid sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}
              >
                <Typography variant="h6">
                  please check your mail!
                </Typography>
                <Grid sx={{ display: 'flex' }}>
                  <Typography variant="h6">
                    we&apos;ve sent a message to&nbsp;
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#68E98D' }}>
                    {email}
                    !
                  </Typography>
                </Grid>

                <br />
                <Typography variant="h6">

                  your details are sent for approval.
                </Typography>
                <Typography variant="h6">

                  once the approval done you will start accesing our portal
                </Typography>
              </Grid>
              <br />
              <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button
                  variant="outlined"
                  sx={{
                    color: 'black',
                    borderColor: 'black',
                    '&:hover': {
                      borderColor: 'black', bgcolor: 'inherit',
                    },
                  }}
                  onClick={toggle}
                >
                  close
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} container alignItems="center" sx={{ minWidth: '300px' }}>
          <img src={rate} style={{ height: '50%', width: '100%' }} alt="success" />
        </Grid>
      </Grid>
      {/* </Grid> */}
    </>

  );
}

export default Success;
