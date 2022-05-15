import React from 'react';
import classes from './LogPage.module.scss'
import image from '../../assets/image/IllustrationOne.svg'
import google from '../../assets/image/google.svg'
import github from '../../assets/image/github.svg'
import {NavLink} from "react-router-dom";
import Input from "../UI/Input/Input";
import CheckBox from "../UI/CheckBox/CheckBox";
import ButtonMui from "../MUI/Button/ButtonMui";



const LogPage = () => {
    return (
        <main className={classes.main}>
            <div className={classes.main__login}>
                <div className={classes.main__login_wrapper}>
                    <form className={classes.main__login_wrapper__form}>
                        <p className={classes.main__login_wrapper__form_text}>Вход</p>
                        <div className={classes.main__login_wrapper__form__buttons}>
                            <button className={classes.main__login_wrapper__form__buttons_sign} disabled={true}><img src={google}
                                                                                                                     alt='google'/>
                                <p>Sing up with Google</p></button>
                            <button className={classes.main__login_wrapper__form__buttons_sign} disabled={true}><img src={github}
                                                                                                                     alt='github'/>
                                <p>Sing up with GitHub</p>
                            </button>
                        </div>
                        <div>

                        </div>
                        <div className={classes.line_wrapper}>
                            <div className={classes.line}/>
                            <p className={classes.line__text}>Or</p>
                            <div className={classes.line}/>
                        </div>
                        <div className={classes.input_wrapper}>
                            <Input placeholder='E-mail' styles={classes.input} type="email"/>
                            <Input placeholder='Пароль' styles={classes.input} type="password"/>
                            <div className={classes.checkbox}>
                                <CheckBox/><p>Запомнить меня</p>
                            </div>
                        </div>
                        <ButtonMui text='Войти' />
                        <div className={classes.newperson}>
                            <p>Нет аккаунта?  <span className={classes.signup}>Создать аккаунт</span></p>
                        </div>
                    </form>
                </div>
            </div>
            <div className={classes.main__image}>
                <NavLink to='/' className={classes.main__image_text}>
                    <p className={classes.text_bold}>
                        Justice
                    </p>
                    <p className={classes.text_regular}>Finance</p>
                </NavLink>
                <div className={classes.main__image_wrapper}>
                    <img src={image} alt="SignUp"/>
                </div>
            </div>
        </main>
    );
};

export default LogPage;