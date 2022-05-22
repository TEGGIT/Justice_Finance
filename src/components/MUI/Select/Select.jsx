import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {countryIcon} from "../../../mockdata/countryIcon";


const SelectMui = ({selectValue, handleChangeSelect, minWidth, name}) => {

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
            {countryIcon.map(country => {
              return <MenuItem
                  key={country.currencyName}
                  value={country.currencyName}>
                <img
                  src={country.icon} alt='Иконка'/>
                {country.currencyName}</MenuItem>

            })}


          </Select>
        </FormControl>
      </Box>
  );
};

export default SelectMui;