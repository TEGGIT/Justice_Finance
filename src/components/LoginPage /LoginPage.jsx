import React from 'react';
import classes from '../LoginPage /LoginPage.module.scss'
import Header from "../Header";
import image from '../../assets/image/IllustrationOne.svg'
import google from '../../assets/image/google.svg'
import github from '../../assets/image/github.svg'

const LoginPage = () => {
  return (
    <main className={classes.main}>
      <div className={classes.main__login}>
        <div className={classes.main__login_wrapper}>
          <form className={classes.main__login_wrapper__form}>
            <p className={classes.main__login_wrapper__form_text}>Вход</p>
            <div className={classes.main__login_wrapper__form__buttons}>
              <button className={classes.main__login_wrapper__form__buttons_sign} disabled={true}><img src={google} alt='google'/>
                <p>Sing up with Google</p></button>
              <button className={classes.main__login_wrapper__form__buttons_sign} disabled={true}><img src={github} alt='github'/>
              <p>Sing up with GitHub</p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={classes.main__image}>
        <Header bold='Justice' regular='Finance'/>
        <div className={classes.main__image_wrapper}>
          <img src={image} alt="SignUp"/>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;