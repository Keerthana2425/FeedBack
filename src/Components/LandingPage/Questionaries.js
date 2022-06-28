import {
  Paper, Grid, Select, MenuItem, FormControl, Typography, Switch, Divider, OutlinedInput, Button,
} from '@mui/material';
import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';

function Questionaries() {
  const [rating, setRating] = useState('star');
  const [checked, setChecked] = useState(true);
  const [knowName, setKnowName] = useState(false);
  const [question, setQuestion] = useState('');

  const onChangeQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const onChangeSwitch1 = () => {
    setChecked(!checked);
  };

  const onChangeSwitch2 = () => {
    setKnowName(!knowName);
  };

  const handleChangeRating = (event) => {
    setRating(event.target.value);
  };
  return (
    <Paper sx={{ height: '100%', borderRadius: '10px' }}>
      <Grid padding="2% 3%">
        <Grid>
          <Grid container alignItems="center">
            <Grid item>
              Your rating setup is
            </Grid>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              {/* <InputLabel id="demo-select-small">rating</InputLabel> */}
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                // defaultValue="star"
                value={rating}
                label="Age"
                onChange={handleChangeRating}
              >
                <MenuItem
                  value="star"
                >
                  <Grid container justifyContent="flex-start">
                    <StarIcon fontSize="small" />
                    <Typography>
                      &nbsp;&nbsp;Star Rating
                    </Typography>
                  </Grid>

                </MenuItem>
                <MenuItem value="emoji">
                  <Grid container justifyContent="flex-start">
                    <EmojiEmotionsIcon fontSize="small" />
                    <Typography>
                      &nbsp;&nbsp;Emoji Rating
                    </Typography>
                  </Grid>
                </MenuItem>
                <MenuItem value="number">
                  <Grid container justifyContent="flex-start">
                    <FormatListNumberedRtlIcon fontSize="small" />
                    <Typography>
                      &nbsp;&nbsp;Number Rating
                    </Typography>
                  </Grid>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <br />
          <Grid container alignItems="center">
            <Grid>
              Do you want to show the description for customer to write comment? &nbsp;&nbsp;
            </Grid>
            <Switch
              checked={checked}
              onChange={onChangeSwitch1}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Grid>
          <br />
          <Grid container alignItems="center">
            <Grid>
              Do you want to know your customer name? &nbsp;&nbsp;
            </Grid>
            <Switch
              checked={knowName}
              onChange={onChangeSwitch2}
              // style={{ color: '#68E98D' }}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Grid>
        </Grid>
        <br />
        <Divider />
        <Grid>
          <Typography variant="h6">
            Add Questions
          </Typography>
          <br />
          <OutlinedInput sx={{ height: '44px' }} placeholder="Add a Question" fullWidth value={question} onChange={onChangeQuestion} />

          <Grid container alignItems="center" justifyContent="center" marginTop="40px">
            <Button
              variant="contained"
              size="large"
              sx={{
                // textTransform: 'none',
                backgroundColor: '#68E98D',

                color: 'black',
                '&:hover': {
                  bgcolor: '#68E98D',
                },
              }}
            >
              save question
            </Button>
          </Grid>

        </Grid>
      </Grid>

    </Paper>
  );
}

export default Questionaries;
