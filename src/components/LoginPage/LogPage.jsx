import React, { useState} from 'react';
import classes from './LogPage.module.scss'
import image from '../../assets/image/IllustrationOne.svg'
import google from '../../assets/image/google.svg'
import github from '../../assets/image/github.svg'
import {NavLink, useNavigate} from "react-router-dom";
import Input from "../UI/Input/Input";
import CheckBox from "../MUI/CheckBox/CheckBox";
import ButtonMui from "../MUI/Button/ButtonMui";


const LogPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = React.useState(false);
  const user = JSON.parse(localStorage.getItem('USERS_DATA'))
  const navigate = useNavigate();
  const checkUser = () => {
    user.map(item =>{
      if (email === item.email && password === item.password) {
        navigate("/exchange-rates-page", {replace: true});
      }else{
        console.log('error')
      }
    } )
  }

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
      <main className={classes.main}>
        <div className={classes.main__login}>
          <div className={classes.main__login_wrapper}>
            <form className={classes.main__login_wrapper__form}>
              <p className={classes.main__login_wrapper__form_text}>Вход</p>
              <div className={classes.main__login_wrapper__form__buttons}>
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
              <div>

              </div>
              <div className={classes.line_wrapper}>
                <div className={classes.line}/>
                <p className={classes.line__text}>Or</p>
                <div className={classes.line}/>
              </div>
              <div className={classes.input_wrapper}>
                <Input placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}
                       styles={classes.input} type="email"/>
                <Input placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)}
                       styles={classes.input} type="password"/>
                <div className={classes.checkbox}>
                  <CheckBox onChange={handleChange} checkedMui={checked}/>
                  <p>Запомнить меня</p>
                </div>
              </div>
              {email && password ? (
                  <>
                    <ButtonMui text='Войти'
                               padding="12px 190px"
                               background='#363636'
                               color='#FFFFFF'
                               hoverBackground="#363636"
                               fontWeight='600'
                               onClick={checkUser}
                    />

                  </>
              ) : (
                  <>
                    <ButtonMui text='Войти'
                               padding="12px 190px"
                               background='#EDEDED'
                               color='#8C8C8C'
                               hoverBackground="#EDEDED"
                               fontWeight='600'
                               onClick={checkUser}
                    />
                  </>
              )}

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
      </main>
  );
};

export default LogPage;