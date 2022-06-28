import {
  Paper, Grid, Button, Divider, Typography,
} from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';

export default function SendLink() {
  return (

    <Paper sx={{ height: '100%', borderRadius: '10px', padding: '1% 3%' }}>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '60px',
          // border: '1px solid blue',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6">
          FeedBack Link
        </Typography>
        <Grid item>
          <Button
            variant="contained"
            size="large"
            startIcon={<SendIcon />}
            sx={{
              textTransform: 'none',
              backgroundColor: '#68E98D',

              color: 'black',
              '&:hover': {
                bgcolor: '#68E98D',
              },
            }}
          >
            Send Feedback Link
          </Button>
        </Grid>
      </Grid>
      <br />
      <Divider />
    </Paper>
  );
}
