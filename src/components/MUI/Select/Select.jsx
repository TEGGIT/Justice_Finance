import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const SelectMui = ({selectValue, handleChangeSelect}) => {
  return (
      <Box sx={{ minWidth: 336 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Выберите кошелек</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectValue}
            label="age"
            onChange={handleChangeSelect}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
  );
};

export default SelectMui;