import React from 'react';

const Input = ({placeholder, value, styles, type}) => {
  return (
    <>
     <input placeholder={placeholder} value={value} className={styles} type={type}/>
    </>
  );
};

export default Input;