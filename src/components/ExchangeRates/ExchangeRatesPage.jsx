import React, {useEffect, useState} from 'react';
import classes from './ExchangeRatesPage.module.scss'
import NavBar from '../NavBar/NavBar'
import Input from "../UI/Input/Input";
import ProfileBar from "../ProfileBar/ProfileBar";
import {useNavigate} from "react-router-dom";
const ExchangeRatesPage = () => {
  const [main, setMain] = useState(true)
  useEffect(() => {
    if (!localStorage.USERS_DATA) {
      setMain(navigate("/", {replace: true})
      )
    }
  }, [main])
  const navigate = useNavigate();

  return (
      <>
        {localStorage.USERS_DATA ? (<>
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
        </>) : (<>
          {main}
        </>)}

      </>
  );
};

export default ExchangeRatesPage;