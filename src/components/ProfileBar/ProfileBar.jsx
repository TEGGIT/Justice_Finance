import React from 'react';
import classes from './ProfileBar.module.scss'
import avatar from '../../assets/image/Avatar.svg'
import plus from '../../assets/image/Plus.svg'
import transactions from '../../assets/image/transaction.svg'
import ButtonMui from "../MUI/Button/ButtonMui";
const ProfileBar = () => {



  const user = JSON.parse(localStorage.getItem('USERS_DATA'));

  return (
    <div className={classes.profile}>
      <div className={classes.profile_wrapper}>
     <div className={classes.profile_wrapper__avatar}>
     <img src={avatar} alt='аватар'/>
         <p>{user.name}</p>
     </div>
        <div className={classes.profile_wrapper__balance}>
        <p>Мой баланс</p>
              <div className={classes.profile_wrapper__balance__purse}>
                <p>Добавьте кошелек</p>
                <ButtonMui img={plus} background='#363636' hoverBackground='#363636' borderRadius='30px ' padding='12px' height='60px'/>
              </div>
        </div>
        <div className={classes.profile_wrapper__transactions}>
          <p>Последние транзацкции </p>
          <div className={classes.profile_wrapper__transactions__history}>
          <img src={transactions} alt="Транзакции"/>
            <p>Вы не совершили не одной транзакции</p>
          </div>
        </div>
    </div>
    </div>
  );
};

export default ProfileBar;