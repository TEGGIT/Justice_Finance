import React from 'react';
import classes from './SlideButton.module.scss'

const SlideButton = ({img, onClick}) => {
  return (
    <button className={classes.button}>
      <img src={img} alt='Левый слайд' onClick={onClick}/>
    </button>
  );
};

export default SlideButton;