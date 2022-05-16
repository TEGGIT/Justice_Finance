import React from 'react';
import classes from './ExchangeRatesPage.module.scss'
import NavBar from '../NavBar/NavBar'
import Input from "../UI/Input/Input";
import ProfileBar from "../ProfileBar/ProfileBar";

const ExchangeRatesPage = () => {
  return (

    <div className={classes.wrapper}>
      <NavBar/>
      <main className={classes.main}>
        <div className={classes.main_title}>
        <h1 className={classes.main_title_text}>
          Курсы валют
        </h1>
        <Input styles={classes.main_title_input} placeholder="Поиск валюты"/>
    </div>
      </main>
      <ProfileBar/>
    </div>
  );
};

export default ExchangeRatesPage;