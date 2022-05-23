import React from 'react';
import './Input.module.scss'

const Input = ({placeholder, value, styles, type, onChange, onBlur, name, defaultValue, readOnly, max}) => {

  return (
    <>
      <input placeholder={placeholder}
             value={value}
             className={styles}
             type={type}
             onChange={onChange}
             onBlur={onBlur}
             name={name}
             defaultValue={defaultValue}
             readOnly={readOnly}
             max={max}
      />
    </>


  );
};

export default Input;