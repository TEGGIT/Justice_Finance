import React from 'react';
import './Input.module.scss'
const Input = ({placeholder, value, styles, type}) => {
  return (
    <>
     <input  placeholder={placeholder} value={value} className={styles} type={type} />
    </>
  );
};

export default Input;