import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useStateContext} from "../../context/stateContext";

import Cookies from "js-cookie";
import axios from "axios";

import Input from "../UI/Input/Input";
import CheckBox from "../MUI/CheckBox/CheckBox";
import ButtonMui from "../MUI/Button/ButtonMui";


import classes from './LogPage.module.scss'

import image from '../../assets/image/IllustrationOne.svg'
import google from '../../assets/image/google.svg'
import github from '../../assets/image/github.svg'

const LogPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailError, setIsEmailError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)
  const [isDisabledBtn, setIsDisabledBtn] = useState(true)
  const [checked, setChecked] = React.useState(false);

  const navigate = useNavigate();

  const {setIsAuth,onLogin } = useStateContext()
  const checkUser = () => {

      axios.post('http://localhost:5000/api/auth/login-page', {
        "email": email,
        "password": password
      }).then((responce) => {
        setIsAuth(responce.data)
        Cookies.set("TOKEN", responce.data.token)
        navigate("/exchange-rates-page", {replace: true});
        onLogin()

      })

  }
  const checkEmail = () => {
    const emailChecker = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
    if (!emailChecker.test(email)) {
      setIsEmailError(true)
    } else {
      setIsEmailError(false)
    }
  }

  const checkPassword = () => {
    const passwordChecker = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    if (!passwordChecker.test(password)) {
      setIsPasswordError(true)
    } else {
      setIsPasswordError(false)
    }
  }

  useEffect(() => {

    if (!email || !password || isEmailError || isPasswordError) {
      setIsDisabledBtn(true)
    } else {
      setIsDisabledBtn(false)
    }
  }, [email, password, isEmailError, isPasswordError])

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <main className={classes.main}>
      {/*//todo:допилить мобильную адаптацию*/}
      <div className={classes.main__login}>
        <div className={classes.main__login_wrapper}>
          <form className={classes.main__login_wrapper__form}>
            <p className={classes.main__login_wrapper__form_text}>Вход</p>
            <div className={classes.main__login_wrapper__form__buttons}>
              <div className={classes.main__login_wrapper__form__buttons_desktop}>
              <ButtonMui fontSize='12px'
                         img={google}
                         text='Sing up with Google'
                         gap="8px"
                         color='#363636'
                         border='1px solid #ECECEC'
                         padding="16px 25px 16px 30px"
                         fontWeight='500'


              />

              <ButtonMui fontSize='12px'
                         img={github}
                         text='Sing up with GitHub'
                         gap="8px"
                         color='#363636'
                         border='1px solid #ECECEC'
                         padding="16px 25px 16px 30px"
                         fontWeight='500'


              />
              </div>
                <div className={classes.main__login_wrapper__form__buttons_mobile}>
                  <ButtonMui fontSize='12px'
                             img={google}
                             text='Sing up with Google'
                             gap="8px"
                             color='#363636'
                             border='1px solid #ECECEC'
                             padding="11px"
                             fontWeight='500'


                  />

                  <ButtonMui fontSize='12px'
                             img={github}
                             text='Sing up with GitHub'
                             gap="8px"
                             color='#363636'
                             border='1px solid #ECECEC'
                             padding="11px"
                             fontWeight='500'


                  />
                </div>

            </div>
            <div>

            </div>
            <div className={classes.line_wrapper}>
              <div className={classes.line}/>
              <p className={classes.line__text}>Or</p>
              <div className={classes.line}/>
            </div>
            <div className={classes.input_wrapper}>
              {isEmailError ? (

                <Input placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}
                       styles={classes.input_error} type="email" onBlur={checkEmail}/>
              ) : (
                <Input placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}
                       styles={classes.input} type="email" onBlur={checkEmail}/>
              )}
              {isPasswordError ? (
                <Input placeholder='Пароль' value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       styles={classes.input_error}
                       type="password"
                       onBlur={checkPassword}/>
              ) : (
                <Input placeholder='Пароль' value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       styles={classes.input}
                       type="password"
                       onBlur={checkPassword}/>
              )}

              <div className={classes.checkbox}>
                <CheckBox onChange={handleChange} checkedMui={checked}/>
                <p>Запомнить меня</p>
              </div>
            </div>
            <div className={classes.buttons_bottom_desktop}>
            <ButtonMui text='Войти'
                       padding="12px 190px"
                       background='#363636'
                       color='#FFFFFF'
                       hoverBackground="#363636"
                       fontWeight='600'
                       onClick={checkUser}
                       disabled={isDisabledBtn}
            />
        </div>
            <div className={classes.buttons_bottom_mobile}>
              <ButtonMui text='Войти'
                         padding="12px 100px"
                         background='#363636'
                         color='#FFFFFF'
                         hoverBackground="#363636"
                         fontWeight='600'
                         onClick={checkUser}
                         disabled={isDisabledBtn}
              />
            </div>
            <div className={classes.newperson}>
              <p>Нет аккаунта? <NavLink to='/register-page' className={classes.signup}>Создать
                аккаунт</NavLink></p>
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
    </main>);
};

export default LogPage;