import React, {useEffect, useState} from 'react';
import NavBar from "../NavBar/NavBar";
import ProfileBar from "../ProfileBar/ProfileBar";
import classes from './Profile.module.scss'
import ButtonMui from "../MUI/Button/ButtonMui";
import Input from "../UI/Input/Input";
import {useStateContext} from "../../context/stateContext";
import Cookie from "js-cookie";
import axios from "axios";
import Cookies from "js-cookie";

const Profile = () => {


  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [city, setCity] = useState()
  const [birthday, setBirthday] = useState()
  const [number, setNumber] = useState()
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [isDisabledPassword, setIsDisabledPassword] = useState(true)
  const [oldPassword, setOldPassword] = useState('')
  const [isOldPassword, setIsOldPassword] = useState(true)

  const passwordChecker = () => {
    if (password.password === oldPassword) {
      setIsOldPassword(false)
    } else {
      setIsOldPassword(true)
    }
  }

  const repeatsPassword = () => {
    if (password === repeatPassword) {
      setIsOldPassword(false)
    } else {
      setIsOldPassword(true)

    }
  }
  const newPassword = () => {
    const passwordChecker = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    if (!passwordChecker.test(password)) {
      setIsOldPassword(true)
    } else {
      setIsOldPassword(false)
    }
  }


  useEffect(() => {
    axios.get('http://localhost:5000/api/wallets', {headers:{
        Authorization: Cookies.get("TOKEN")
      }
    }).then((responce) => {
      setEmail(responce.data[0].email)
      setName(responce.data[0].name)
      setCity(responce.data[0].city)
      setBirthday(responce.data[0].birthday)
      setNumber(responce.data[0].phoneNumber)
    })

  },[])

  useEffect(() => {
    if (!isOldPassword && repeatPassword && password) {
      setIsDisabledPassword(false)
    } else
      setIsDisabledPassword(true)

  }, [isOldPassword, repeatPassword, password])

  useEffect(() => {

    if (!name || !email || !city || !birthday || !number) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [name, email, city, birthday, number])


  const changeProfile = () => {
    axios.patch('http://localhost:5000/api/profile', {
      name:name,
      email:email,
      city:city,
      birthday:birthday,
      phoneNumber: number
    },{headers:{
        Authorization: Cookie.get("TOKEN")
      }
    },).then((responce) => {
      console.log(responce.data)
    })
  }
  const changePassword = () => {
    axios.patch('http://localhost:5000/api/profile', {
      password:password,
    },{headers:{
        Authorization: Cookie.get("TOKEN")
      }
    },).then((responce) => {
      console.log(responce.data)
    })
  }

  return (
    <main className={classes.main}>
      <NavBar/>
      <section className={classes.main_wrapper}>
        <div className={classes.main_wrapper__title}>
          <h1 className={classes.main_wrapper__title_text}>
            Мой профиль
          </h1>
          <div className={classes.main_wrapper__title_button}>
            <ButtonMui background='#363636' color='#FFFFFF' text='Сохранить изменения' padding='12px 24px'
                       hoverBackground='#363636' fontWeight='600' disabled={isDisabled} onClick={changeProfile}/>
          </div>
        </div>
        <div className={classes.main_wrapper__content}>
          <div className={classes.main_wrapper__content__title__info}>
            <p>Информация о вашей учетной записи</p>
          </div>
          <div className={classes.main_wrapper__content__input}>
            <Input placeholder="Имя, Фамилия" value={name} onChange={(e) => setName(e.target.value)}
                   styles={classes.main_wrapper__content__input_input}/>
            <Input placeholder="Email" type='email' value={email} onChange={(e) => setEmail(e.target.value)}
                   styles={classes.main_wrapper__content__input_input}/>
            <Input placeholder="Город" styles={classes.main_wrapper__content__input_input} value={city}
                   onChange={(e) => setCity(e.target.value)}/>
            <Input placeholder="Дата рождения" styles={classes.main_wrapper__content__input_input} value={birthday}
                   onChange={(e) => setBirthday(e.target.value)}/>
            <Input placeholder="Номер телефона" styles={classes.main_wrapper__content__input_input} value={number}
                   onChange={(e) => setNumber(e.target.value)}/>
          </div>
          <div className={classes.main_wrapper__title_button_bottom}>
            <ButtonMui background='#363636' color='#FFFFFF' text='Сохранить изменения' padding='12px 24px'
                       hoverBackground='#363636' fontWeight='600' disabled={isDisabled} onClick={changeProfile}/>
          </div>
          <div className={classes.main_wrapper__content__title__password}>
            <p>Пароль</p>
          </div>
          <div className={classes.main_wrapper__content__input}>
            <Input placeholder="Введите старый пароль" type='password'
                   styles={classes.main_wrapper__content__input_input}
                   onBlur={passwordChecker}
                   value={oldPassword}
                   onChange={(e) =>
                     setOldPassword(e.target.value)}/>

            <Input placeholder="Повторите новый пароль" type='password'
                   styles={classes.main_wrapper__content__input_input}
                   onBlur={repeatsPassword}
                   value={repeatPassword}
                   onChange={(e) =>
                     setRepeatPassword(e.target.value)}/>

            <Input placeholder="Введите новый пароль" type='password'
                   styles={classes.main_wrapper__content__input_input}
                   onBlur={newPassword}
                   value={password}
                   onChange={(e) =>
                     setPassword(e.target.value)}/>

            <ButtonMui background='#363636'
                       text='Изменить пароль'
                       color='white'
                       padding='15px 24px'
                       hoverBackground='#363636'
                       fontSize='16px'
                       disabled={isDisabledPassword}
                       fontWeight='600'
                       onClick={changePassword}
            />
          </div>

        </div>
      </section>
      <ProfileBar/>
    </main>
  );
};

export default Profile;