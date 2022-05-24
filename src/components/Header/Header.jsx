import React from 'react';

import {NavLink} from "react-router-dom";

import ButtonMui from "../MUI/Button/ButtonMui";

import classes from "./Header.module.scss";

const Header = (props) => {

  const {
    bold,
    regular,
    text
  } = props

  return (
    <>
      <header className={classes.header}>
        <p>{text}</p>
        <nav className={classes.header__nav}>
          <div className={classes.header__nav__text}>
            <p className={classes.text_bold}>{bold}</p>
            <p className={classes.text_regular}>{regular}</p>
          </div>
          <div className={classes.header__nav__button}>
            <NavLink to='/login-page'>
              <ButtonMui text='Войти'
                         padding='12px 24px'
                         background='#363636'
                         color='#FFFFFF'
                         fontSize="12px"
                         hoverBackground='#363636'
                         borderRadius="none"
                         fontWeight='600'
              />
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;