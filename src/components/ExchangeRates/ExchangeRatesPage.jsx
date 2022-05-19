import React, {useEffect} from 'react';
import classes from './ExchangeRatesPage.module.scss'
import NavBar from '../NavBar/NavBar'
import Input from "../UI/Input/Input";
import ProfileBar from "../ProfileBar/ProfileBar";
import SlideButton from "../UI/SlideButton/SlideButton";
import arrowButtonLeft from '../../assets/image/ArrowButtonLeft.svg'
import arrowButtonRight from '../../assets/image/arrowButtonRight.svg'
import arrowUp from '../../assets/image/ArrowUp.svg'
import Charts from "./Chart/Chart";
import SliderRate from "./SliderRate/SliderRate";

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
                 <SliderRate/>
                  <SliderRate/>
                <SliderRate/>
                <SlideButton img={arrowButtonRight}/>
              </div>
              <Charts/>
            </main>
            <ProfileBar/>
          </div>
      </>
  );
};

export default ExchangeRatesPage;