import React, {useEffect} from 'react';
import classes from './ExchangeRatesPage.module.scss'
import NavBar from '../NavBar/NavBar'
import Input from "../UI/Input/Input";
import ProfileBar from "../ProfileBar/ProfileBar";
import SlideButton from "../UI/SlideButton/SlideButton";
import arrowButtonLeft from '../../assets/image/ArrowButtonLeft.svg'
import arrowButtonRight from '../../assets/image/arrowButtonRight.svg'
import arrowUp from '../../assets/image/ArrowUp.svg'
const ExchangeRatesPage = () => {
  return (
      <>
          <div className={classes.wrapper}>
            <NavBar/>
            <main className={classes.main}>
              <div className={classes.main_title}>
                <h1 className={classes.main_title_text}>
                  Курсы валют
                </h1>
                <Input styles={classes.main_title_input} placeholder="Поиск валюты"/>
              </div>
              <div className={classes.main_wrapper__slider}>
                <SlideButton img={arrowButtonLeft}/>
                <div className={classes.main_wrapper__slider__rate}>
                 <img src={arrowUp} alt="Положительно" className={classes.main_wrapper__slider__rate_img}/>

                  <div className={classes.main_wrapper__slider__rate__count}>
                    <p>USD / RUB</p>
                    <p>83,6055</p>
                  </div>
                </div>
                <SlideButton img={arrowButtonRight}/>
              </div>
            </main>
            <ProfileBar/>
          </div>
      </>
  );
};

export default ExchangeRatesPage;