import React from 'react';
import classes from "./Header.module.scss";
import ButtonMui from "../MUI/Button/ButtonMui";
import {NavLink} from "react-router-dom";


const Header = ({bold, regular}) => {



  return (
      <header className={classes.header}>
        <nav className={classes.header__nav}>
          <div className={classes.header__nav__text}>
          <p className={classes.text_bold}>{bold}</p>
          <p className={classes.text_regular}>{regular}</p>
        </div>
          <div className={classes.header__nav__button}>
              <NavLink to='/login-page' style={{textDecoration:'none'}}>
             <ButtonMui text='Войти' padding='12px 24px'/>
          </NavLink>
        </div>
        </nav>

      </header>
  );
};

export default Header;