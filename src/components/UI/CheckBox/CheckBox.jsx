import React from 'react';
import classes from "./CheckBox.module.scss";
const CheckBox = () => {
  return (
    <>
     <input type='checkbox' className={classes.checkbox}/>
    </>
  );
};

export default CheckBox;