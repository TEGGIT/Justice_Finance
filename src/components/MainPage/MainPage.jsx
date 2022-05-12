import React from 'react';
import classes from './MainPage.module.scss'
import Header from "../Header/Header";
import background from '../../assets/image/background.png'
const MainPage = () => {
  return (
      <div className={classes.main} style={{backgroundImage: `url(${background})`}}>
      <Header/>
        <main>

        </main>
      </div>
  );
};

export default MainPage;