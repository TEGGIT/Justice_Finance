import React from 'react';
import classes from './NavBarLinks.module.scss'
import echangeRates from "../../../assets/image/echangeRates.svg";
import userIcon from '../../../assets/image/userIcon.svg'
import arrow from '../../../assets/image/Arrow.svg'
import suitcase from '../../../assets/image/Suitcase.svg'
import checklist from '../../../assets/image/Checklist.svg'
import logOut from '../../../assets/image/LogOut.svg'
import ButtonMui from "../../MUI/Button/ButtonMui";
import {NavLink} from "react-router-dom";

const NavBarLinks = () => {

  const item = [
    {
      img: echangeRates,
      text: 'Курсы валют',
      pass: ""
    },
    {
      img: userIcon,
      text: 'Мой профиль',
    },
    {
      img: arrow,
      text: 'Обмен валют',
    },
    {
      img: suitcase,
      text: 'Кошельки',
      pass: ''
    },
    {
      img: checklist,
      text: 'Транзакции',
    },

  ]

  return (
    <div>
      <div className={classes.nav_bar_links}>


        {item.map((items) => {
          return <ButtonMui text={items.text}
                            img={items.img}
                            padding="12px 61px 12px 8px"
                            gap='8px'
                            background='#FFFFFF'
                            color="#363636"
                            fontSize='0.875rem'
                            hoverBackground='transparent'
          />
        })}
        <NavLink to='/'>
          <ButtonMui
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