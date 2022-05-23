import React, {useState} from 'react';
import classes from './ExchangeRatesPage.module.scss'
import NavBar from '../NavBar/NavBar'
import Input from "../UI/Input/Input";
import ProfileBar from "../ProfileBar/ProfileBar";
import SlideButton from "../UI/SlideButton/SlideButton";
import arrowButtonLeft from '../../assets/image/ArrowButtonLeft.svg'
import arrowButtonRight from '../../assets/image/arrowButtonRight.svg'
import arrowUpMin from '../../assets/image/ArrowUpMin.svg'
import Charts from "./Chart/Chart";
import SliderRate from "./SliderRate/SliderRate";
import ButtonMui from "../MUI/Button/ButtonMui";
import {NavLink} from "react-router-dom";

const ExchangeRatesPage = () => {
  const [x, setX] = useState(0)
  const moveBlockLeft = () => {
    setX(x + 10)
    if (x === 0) setX(-30)
  }
  const moveBlockRight = () => {
    setX(x - 10)
    if (x === -30) setX(0)
  }
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

            <SlideButton img={arrowButtonLeft} onClick={moveBlockLeft}/>
              <div className={classes.slider} >
                <div style={{transform: `translateX(${x}%)`, display:'flex', gap:'16px', transition:'0.5s'}}>
            <SliderRate/>
            <SliderRate/>
            <SliderRate/>
            <SliderRate/>
            <SliderRate/>
              </div>
          </div>
            <SlideButton img={arrowButtonRight} onClick={moveBlockRight}/>
          </div>
          <div className={classes.main_wrapper__chart__title}>
            <div className={classes.main_wrapper__chart__title_text}>
              <p className={classes.main_wrapper__chart__title_text_top}>
                USD / RUB • CURRENCY
              </p>
              <p className={classes.main_wrapper__chart__title_text_bottom}>
                US Dollar/Russian Ruble
              </p>
            </div>
            <NavLink to='/currency-exchange'>
            <ButtonMui
              padding='12px 24px'
              text="Обменять"
              color='white'
              background='#363636'
              hoverBackground='#363636'
            />
          </NavLink>

          </div>
          <div className={classes.main_wrapper__chart}>
            <div className={classes.main_wrapper__chart_price}>
              <p className={classes.main_wrapper__chart_price_currency}>83,8750</p>
              <p className={classes.main_wrapper__chart_price_percent}><img src={arrowUpMin} alt='Проценты'/>0,45 %</p>
              <p className={classes.main_wrapper__chart_price_plus}>+0,3750 Today</p>
            </div>


          </div>
          <Charts/>
        </main>
        <ProfileBar/>
      </div>
    </>
  );
};

export default ExchangeRatesPage;