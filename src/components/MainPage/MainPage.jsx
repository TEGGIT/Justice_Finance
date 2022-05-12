import React from 'react';
import classes from './MainPage.module.scss'
import Header from "../Header/Header";
import background from '../../assets/image/background.png'
const MainPage = () => {
  return (
      <div className={classes.background} style={{backgroundImage: `url(${background})`}}>
      <Header/>
        <main className={classes.main}>
         <h1 className={classes.title}>Обменивайте валюту по выгодному курсу</h1>
        </main>
      </div>
  );
};

export default MainPage;