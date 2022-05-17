import React, {useEffect, useState} from 'react';
import classes from "./RegisterPage.module.scss";
import { useNavigate } from "react-router-dom";

import google from "../../assets/image/google.svg";
import github from "../../assets/image/github.svg";
import Input from "../UI/Input/Input";
import CheckBox from "../MUI/CheckBox/CheckBox";
import ButtonMui from "../MUI/Button/ButtonMui";
import {NavLink} from "react-router-dom";
import image from "../../assets/image/IllustrationTwo.svg";
import { Patterns } from '../../appConstans';

const RegisterPage = () => {

  const [checked, setChecked] = React.useState(false);
  const [name, setName] = useState('')
  const [error, setError] = useState({
    nameError: 'Введите имя!',
    emailError:'Введите Email',
  })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [storageUser, setStorageUser] = useState([])
  const navigate = useNavigate();
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const test = (e) => {
    if (!Patterns.name.test(name)){
      alert("Нет")
    }else{
      alert("Работает")

    }
  }
  const newUser = {
    name: name,
    email: email,
    password: password
  }
  const registration = () => {

    if (newUser){
      storageUser.push(newUser)
      localStorage.setItem('USERS_DATA', JSON.stringify(storageUser));
      localStorage.setItem('LOGIN_DATA', JSON.stringify(newUser))
      navigate("/exchange-rates-page", { replace: true });
    }else{
      alert("no")
    }
  }
  useEffect(() => {
    if (localStorage.getItem('USERS_DATA'))
      setStorageUser(JSON.parse(localStorage.getItem("USERS_DATA")));
  },[]);

  return (
    <main className={classes.main}>
      <div className={classes.main__register}>
        <div className={classes.main__register_wrapper}>
          <form className={classes.main__register_wrapper__form}>
            <p className={classes.main__register_wrapper__form_text}>Регистрация</p>
            <div className={classes.main__register_wrapper__form__buttons}>
              <ButtonMui fontSize='12px'
                         img={google}
                         text='Sing up with Google'
                         gap="13px"
                         color='#363636'
                         border='1px solid #ECECEC'
                         padding="16px 25px 16px 30px"
                         fontWeight='500'
              />
              <ButtonMui fontSize='12px'
                         img={github}
                         text='Sing up with GitHub'
                         gap="13px"
                         color='#363636'
                         border='1px solid #ECECEC'
                         padding="16px 25px 16px 30px"
                         fontWeight='500'
              />
            </div>
            <div>

            </div>
            <div className={classes.line_wrapper}>
              <div className={classes.line}/>
              <p className={classes.line__text}>Or</p>
              <div className={classes.line}/>
            </div>
            <div className={classes.input_wrapper}>
                    <Input placeholder="Имя, Фамилия" styles={classes.input} type= 'text' value={name}
                           onChange={(e) => setName(e.target.value)} onBlur={() => test()}/>
              <Input placeholder='E-mail' styles={classes.input} type="email" value={email}
                     onChange={(e) => setEmail(e.target.value)}/>
              <div className={classes.input_wrapper_password}>
                <Input placeholder='Пароль' styles={classes.input} type="password" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <Input placeholder="Подтвердите пароль" styles={classes.input} type='password'/>
              </div>

              <div className={classes.checkbox}>
                <CheckBox onChange={handleChange} checkedMui={checked}/><p>i accept the Terms of Service and have read Privacy Policy</p>
              </div>
            </div>
            {name && email && password && checked ? (
                <>
                  <ButtonMui text='Зарегистрироваться'
                             padding="12px 190px"
                             background='#363636'
                             color='#FFFFFF'
                             onClick={registration}
                             disabled={false}
                             fontWeight='600'
                             hoverBackground='#363636'

                  />

                </>
            ) : (
                <>
                  <ButtonMui text='Зарегистрироваться'
                             padding="12px 190px"
                             background='#EDEDED'
                             color='#8C8C8C'
                             disabled={true}
                             onClick={registration}
                             fontWeight='600'
                             hoverBackground='#EDEDED'

                  />
                </>
            )}

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
          <img src={image} alt="Register"/>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;