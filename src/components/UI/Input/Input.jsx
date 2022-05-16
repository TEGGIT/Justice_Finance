import React from 'react';
import './Input.module.scss'

const Input = ({placeholder, value, styles, type, onChange}) => {
  return (
    <>
      <input placeholder={placeholder}
             value={value}
             className={styles}
             type={type}
             onChange={onChange}/>
    </>
  );
};

export default Input;