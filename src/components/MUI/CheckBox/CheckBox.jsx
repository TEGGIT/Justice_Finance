import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { green } from '@mui/material/colors';


const CheckBox = () => {
  const [checked, setChecked] = React.useState(true);


  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Checkbox
        sx={{
          '& .MuiSvgIcon-root': { fontSize: 25},
          color: green[0],
          '&.Mui-checked': {
            color: green[500],
          },
        }}
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}

      />
    </>
  );
};

export default CheckBox;