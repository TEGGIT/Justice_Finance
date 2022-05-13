import React from 'react';

import Header from "../Header";

import classes from './MainPage.module.scss'

import background from '../../assets/image/background.png'
import starOne from '../../assets/image/StarOne.svg'
const MainPage = () => {
  return (
      <div className={classes.background} style={{backgroundImage: `url(${background})`}}>
      <Header/>

          <main className={classes.main}>
              <div className={classes.ellipseOne}/>
              <div className={classes.starOne} style={{backgroundImage:`url(${starOne})`}}/>
              <section className={classes.main__section}>
                  <h1 className={classes.title}>Обменивайте валюту по выгодному курсу</h1>

                  <div className={classes.main__section__content}>
ffff
                  </div>

              </section>
        </main>
      </div>
  );
};

export default MainPage;