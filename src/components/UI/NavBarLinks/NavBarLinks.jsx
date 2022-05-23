import React, {useState} from 'react';
import classes from './NavBarLinks.module.scss'
import echangeRates from "../../../assets/image/echangeRates.svg";
import userIcon from '../../../assets/image/userIcon.svg'
import arrow from '../../../assets/image/Arrow.svg'
import suitcase from '../../../assets/image/Suitcase.svg'
import checklist from '../../../assets/image/Checklist.svg'
import logOut from '../../../assets/image/LogOut.svg'
import ButtonMui from "../../MUI/Button/ButtonMui";
import {NavLink} from "react-router-dom";
import {useStateContext} from "../../../context/stateContext";

const NavBarLinks = () => {
  const {onLogout} = useStateContext()

  const clear = () => {
    localStorage.removeItem('LOGIN_USER')
    onLogout()
  }
  const item = [
    {
      img: echangeRates,
      text: 'Курсы валют',
      pass: "/exchange-rates-page"
    },
    {
      img: userIcon,
      text: 'Мой профиль',
      pass: '/profile-page'
    },
    {
      img: arrow,
      text: 'Обмен валют',
      pass: '/currency-exchange'
    },
    {
      img: suitcase,
      text: 'Кошельки',
      pass: '/purse-page'
    },
    {
      img: checklist,
      text: 'Транзакции',
      pass: '/transactions-page'
    },

  ]

  return (
    <div>
      <div className={classes.nav_bar_links}>


        {item.map((items) => {

          return <NavLink  key={items.pass} to={`${items.pass}`}>
          <ButtonMui  text={items.text}
                            img={items.img}
                            padding="12px 0 12px 8px"
                            gap='8px'
                            background='#FFFFFF'
                            color="#363636"
                            fontSize='0.875rem'
                            hoverBackground='transparent'
          />
            </NavLink>
        })}
        <NavLink to='/'>
          <ButtonMui
            onClick={clear}
            text="Выход"
            img={logOut}
            padding='12px 61px 12px 8px'
            gap='8px'
            borderTop='1px solid'
            background='#FFFFFF'
            color="#363636"
            fontSize='0.875rem'
            hoverBackground='transparent'
            marginTop='200px'
          />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBarLinks;