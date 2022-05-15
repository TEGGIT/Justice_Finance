import React from 'react';
import classes from "./RegisterPage.module.scss";
import google from "../../assets/image/google.svg";
import github from "../../assets/image/github.svg";
import Input from "../UI/Input/Input";
import CheckBox from "../UI/CheckBox/CheckBox";
import ButtonMui from "../MUI/Button/ButtonMui";
import {NavLink} from "react-router-dom";
import image from "../../assets/image/IllustrationTwo.svg";

const RegisterPage = () => {
    return (
        <main className={classes.main}>
            <div className={classes.main__register}>
                <div className={classes.main__register_wrapper}>
                    <form className={classes.main__register_wrapper__form}>
                        <p className={classes.main__register_wrapper__form_text}>Регистрация</p>
                        <div className={classes.main__register_wrapper__form__buttons}>
                            <button className={classes.main__register_wrapper__form__buttons_sign} disabled={true}><img
                                src={google}
                                alt='google'/>
                                <p>Sing up with Google</p></button>
                            <button className={classes.main__register_wrapper__form__buttons_sign} disabled={true}><img
                                src={github}
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
                            <Input placeholder="Имя" styles={classes.input} type='text'/>
                            <Input placeholder='E-mail' styles={classes.input} type="email"/>
                            <div className={classes.input_wrapper_password}>
                            <Input placeholder='Пароль' styles={classes.input} type="password"/>
                                <Input placeholder="Подтвердите пароль" styles={classes.input} type='password'/>
                        </div>

                            <div className={classes.checkbox}>
                                <CheckBox/><p>i accept the Terms of Service and have read Privacy Policy</p>
                            </div>
                        </div>
                        <ButtonMui text='Зарегистрироваться' padding="12px 190px" background='#EDEDED'/>
                        <div className={classes.newperson}>
                            <p> У вас уже есть учетная запись? <NavLink to='/login-page' className={classes.signup}>Авторизоваться
                                </NavLink></p>
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

export default RegisterPage;