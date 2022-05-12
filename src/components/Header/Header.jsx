import React from 'react';
import classes from "./Header.module.scss";
import Button from "../UI/Button";
const Header = () => {
  return (
      <header className={classes.header}>
        <nav className={classes.header__nav}>
          <div className={classes.header__nav__text}>
          <p className={classes.text_bold}>Justice</p>
          <p className={classes.text_regular}>Finance</p>
        </div>
          <div className={classes.header__nav__button}>
          <Button
              text='Войти'
              style={classes.header__nav__button_customize}
          />
        </div>
        </nav>

      </header>
  );
};

export default Header;