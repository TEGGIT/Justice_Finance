import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectMui = ({selectValue, handleChangeSelect, minWidth, name, array}) => {
//country[`${image}`]
  return (

      <Box sx={{minWidth}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{name}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectValue}
            label="age"
            onChange={handleChangeSelect}
          >
            {array.map(country => {
              return <MenuItem
                  key={country.currency}
                  value={country.currency}>
                <img
                  src={`./${country.currency}.svg`} alt='Иконка'/>
                    {country.currency}</MenuItem>

            })}


          </Select>
        </FormControl>
      </Box>
  );
};

export default SelectMui;