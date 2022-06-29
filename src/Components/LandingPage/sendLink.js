import {
  Paper, Grid, Button, Divider, Typography, Modal, Box,
} from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SendLink() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            onClick={handleOpen}
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
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Enter Mobile number
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </Grid>

      </Grid>

      <br />
      <Divider />
    </Paper>
  );
}
