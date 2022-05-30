import React, {useEffect, useState} from 'react';
import NavBar from "../NavBar/NavBar";
import ProfileBar from "../ProfileBar/ProfileBar";
import classes from './Profile.module.scss'
import ButtonMui from "../MUI/Button/ButtonMui";
import Input from "../UI/Input/Input";
import {useStateContext} from "../../context/stateContext";

const Profile = () => {

  const {isAuth: user} = useStateContext()


  const [name, setName] = useState(user.candidate.name)
  const [email, setEmail] = useState(user.candidate.email)
  const [city, setCity] = useState(user.candidate.city)
  const [birthday, setBirthday] = useState(user.candidate.birthday)
  const [number, setNumber] = useState(user.candidate.number)
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [isDisabledPassword, setIsDisabledPassword] = useState(true)
  const [oldPassword, setOldPassword] = useState('')
  const [isOldPassword, setIsOldPassword] = useState(true)

  const passwordChecker = () => {
    if (user.password === oldPassword) {
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


  // const changeProfile = () => {
  //   const updateStorage = user.map((item) => {
  //     if (item.email === user.email) {
  //       const updateUser = {
  //         ...item,
  //         email: email,
  //         name: name,
  //         city: city,
  //         birthday: birthday,
  //         number: number
  //       }
  //       return updateUser
  //     }
  //   })
  //   changeCurrentUser(updateStorage)
  // }

  // const changePassword = () => {
  //   const updatePassword = currentUser.map((item) => {
  //     if (item.email === currentUser[0].email) {
  //       const updatePassword = {
  //         ...item,
  //         email: email,
  //         name: name,
  //         city: city,
  //         birthday: birthday,
  //         number: number,
  //         password: password,
  //       }
  //       return updatePassword
  //     }
  //   })
  //   changeCurrentUser(updatePassword)
  // }

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
                       hoverBackground='#363636' fontWeight='600' disabled={isDisabled} />
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
                       hoverBackground='#363636' fontWeight='600' disabled={isDisabled} />
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
            />
          </div>

        </div>
      </section>
      <ProfileBar/>
    </main>
  );
};

export default Profile;