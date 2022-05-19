import React, {useState} from 'react';
import NavBar from "../NavBar/NavBar";
import ProfileBar from "../ProfileBar/ProfileBar";
import classes from './Profile.module.scss'
import ButtonMui from "../MUI/Button/ButtonMui";
import Input from "../UI/Input/Input";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('USERS_DATA'));
  const [name, setName] = useState([user[0].name])
  return (
    <main className={classes.main}>
      <NavBar/>
      <section className={classes.main_wrapper}>
        <div className={classes.main_wrapper__title}>
          <h1 className={classes.main_wrapper__title_text}>
            Мой профиль
          </h1>
          <ButtonMui background='#EDEDED' color='#8C8C8C' text='Сохранить изменения' padding='12px 24px'
                     hoverBackground='#EDEDED' fontWeight='600'/>
        </div>
        <div className={classes.main_wrapper__content}>
          <div className={classes.main_wrapper__content__title__info}>
            <p>Информация о вашей учетной записи</p>
          </div>
          <div className={classes.main_wrapper__content__input}>
            <Input placeholder="Имя, Фамилия"  defaultValue={user[0].name} value={name} onChange={(e) => setName(e.target.value)} styles={classes.main_wrapper__content__input_input}/>
            <Input placeholder="Email" type='email' defaultValue={user[0].email}
                   styles={classes.main_wrapper__content__input_input}/>
            <Input placeholder="Город" styles={classes.main_wrapper__content__input_input}/>
            <Input placeholder="Дата рождения" styles={classes.main_wrapper__content__input_input}/>
            <Input placeholder="Номер телефона" styles={classes.main_wrapper__content__input_input}/>
          </div>
          <div className={classes.main_wrapper__content__title__password}>
            <p>Пароль</p>
          </div>
          <div className={classes.main_wrapper__content__input}>
            <Input placeholder="Введите старый пароль" type='password'
                   styles={classes.main_wrapper__content__input_input}/>
            <Input placeholder="Повторите новый пароль" type='password'
                   styles={classes.main_wrapper__content__input_input}/>
            <Input placeholder="Введите новый пароль" type='password'
                   styles={classes.main_wrapper__content__input_input}/>
            <ButtonMui background='#EDEDED' text='Изменить пароль' color='#8C8C8C' padding='15px 24px'
                       hoverBackground='#EDEDED' fontSize='16px' fontWeight='600'/>
          </div>

        </div>
      </section>
      <ProfileBar/>
    </main>
  );
};

export default Profile;