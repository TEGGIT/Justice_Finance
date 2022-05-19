import React from 'react';
import classes from "../ExchangeRatesPage.module.scss";
import arrowUp from "../../../assets/image/ArrowUp.svg";

const SliderRate = () => {
  return (
      <div className={classes.main_wrapper__slider__rate}>
        <img src={arrowUp} alt="Положительно" className={classes.main_wrapper__slider__rate_img}/>
        <div className={classes.main_wrapper__slider__rate_wrapper}>
          <div className={classes.main_wrapper__slider__rate__country}>
            <p>USD / RUB</p>
            <p className={classes.main_wrapper__slider__rate__country_percent}>0,13%</p>
          </div>
          <div className={classes.main_wrapper__slider__rate__positive}>
            <p>83,6055</p>
            <p className={classes.main_wrapper__slider__rate__positive_plus}>+0,2380</p>
          </div>
        </div>
      </div>

  );
};

export default SliderRate;