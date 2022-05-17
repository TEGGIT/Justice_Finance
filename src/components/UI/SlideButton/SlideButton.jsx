import React from 'react';
import classes from './SlideButton.module.scss'
const SlideButton = ({img}) => {
  return (
    <button className={classes.button}>
      <img src={img} alt='Левый слайд'/>
    </button>
  );
};

export default SlideButton;