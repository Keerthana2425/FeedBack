import React, { useState, useMemo } from 'react';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Grid } from '@mui/material';

// import React from 'react'

function SelectCountry() {
  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (val) => {
    setValue(val);
  };
  return (
    <Grid
      sx={{
        border: '1.5px solid #c0c1c1',
        borderRadius: '5px',

        width: '100%',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Grid sx={{
        // width: '9%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <LanguageOutlinedIcon fontSize="small" style={{ color: 'grey', paddingLeft: '14px', paddingRight: '15px' }} />
      </Grid>
      <Grid sx={{ width: '92%' }}>
        <Select options={options} sx={{ width: '100%', height: '100%' }} placeholder="select country" value={value} onChange={changeHandler} />

      </Grid>
    </Grid>
  );
}

export default SelectCountry;
