import {
  Grid, Card, CardContent, Typography, Button,
} from '@mui/material';
import React from 'react';
// import LogoComp from '../LogoComponents/logoComp';

function Success(props) {
  const { businessName, email, toggle } = props;
  return (
  // <Grid
  //   container
  //   sx={{
  //     backgroundColor: '#F5F8FE',
  //     height: '100vh',
  //     width: '100%',
  //     paddingLeft: '3%',
  //     paddingRight: '3%',

    //   }}
    // >
    <>
      {/* <Grid>
        <LogoComp />

      </Grid> */}
      <Grid container sx={{ width: '100%', height: '80vh' }}>
        <Grid item xs={3} sx={{ border: '1px solid black', minWidth: '300px' }}>
          img 1
        </Grid>
        <Grid item xs={6} sx={{ minWidth: '550px' }}>
          <Card
            elevation={3}
            sx={{ padding: '4% 3% 4% 3%' }}
          >
            <CardContent>
              <Grid
                sx={{
                  height: '100px',
                  border: '2px solid red',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                img
              </Grid>
              <br />
              <Grid sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}
              >
                <Typography variant="h4" sx={{ fontWeight: 500 }}>
                  Hello
                  {' '}
                  {businessName}
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
        <Grid item xs={3} sx={{ border: '1px solid blue', minWidth: '300px' }}>
          img2
        </Grid>
      </Grid>
      {/* </Grid> */}
    </>

  );
}

export default Success;
