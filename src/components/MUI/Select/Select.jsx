import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const SelectMui = ({selectValue, handleChangeSelect, minWidth}) => {
  return (
      <Box sx={{minWidth}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Выберите кошелек</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectValue}
            label="age"
            onChange={handleChangeSelect}
          >
            <MenuItem value={'RUB'}>RUB</MenuItem>
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'CNY'}>CNY</MenuItem>
            <MenuItem value={'EUR'}>EUR</MenuItem>
            <MenuItem value={'TRY'}>TRY</MenuItem>

          </Select>
        </FormControl>
      </Box>
  );
};

export default SelectMui;