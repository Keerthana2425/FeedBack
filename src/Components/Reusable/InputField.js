import * as React from 'react';
import { OutlinedInput, Grid } from '@mui/material';

function InputField(props) {
  const {
    changeAction, searchValue, placeholder, icon, label, type,
  } = props;

  return (
    <>
      <Grid sx={{ mb: 1, fontWeight: 400, fontColor: '#5F6A6F' }}>{label}</Grid>
      <OutlinedInput
        required
        fullWidth
        type={type}
        value={searchValue}
        onChange={changeAction}
        autoComplete="off"
        placeholder={placeholder}
        startAdornment={icon}
        sx={{
          bgcolor: '#fff',
          border: '0.5px solid #c0c1c1',
          textTransform: 'none',
          fontSize: '15px',
          fontWeight: '300',
          height: '35px',
          borderRadius: '5px',
          minWidth: '280px',
          '& fieldset': {
            border: 0,
          },
        }}
      />
    </>
  );
}

export default InputField;
