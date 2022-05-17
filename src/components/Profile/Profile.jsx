import React from 'react';
import NavBar from "../NavBar/NavBar";
import ProfileBar from "../ProfileBar/ProfileBar";
import classes from './Profile.module.scss'
import ButtonMui from "../MUI/Button/ButtonMui";
const Profile = () => {
  return (
    <main className={classes.main}>
      <NavBar/>
      <section className={classes.main_wrapper}>
        <div className={classes.main_wrapper__title}>
          <h1 className={classes.main_wrapper__title_text}>
            Мой профиль
          </h1>
          <ButtonMui background='#EDEDED' color='#8C8C8C' text='Сохранить изменения' padding='12px 24px' hoverBackground='#EDEDED'/>
        </div>

      </section>
      <ProfileBar/>
    </main>
  );
};

export default Profile;