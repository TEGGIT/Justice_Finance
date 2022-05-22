import React from 'react';
import './Input.module.scss'
const Input = ({placeholder, value, styles, type, onChange, onBlur, name, defaultValue, readOnly}) => {

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
          />
    </>


  );
};

export default Input;