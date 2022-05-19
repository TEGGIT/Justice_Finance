import React from 'react';
import classes from './PurseInfo.module.scss'
import NavBar from "../../NavBar/NavBar";
import ProfileBar from "../../ProfileBar/ProfileBar";
import backArrow from '../../../assets/image/Back.svg'
import Wallet from "../../ProfileBar/WalletBar/Wallet";
import banner from '../../../assets/image/Banner.png'
import ButtonMui from "../../MUI/Button/ButtonMui";
import Input from "../../UI/Input/Input";

const PurseInfo = () => {
  return (
    <main className={classes.main}>
      <NavBar/>
      <section className={classes.main__wrapper}>
        <div className={classes.main__wrapper__title}>
          <div className={classes.main__wrapper__navigate}>
            <img src={backArrow} alt='Обратно'/>
            <h1 className={classes.main__wrapper__title_text}>
              RUB / <span className={classes.main__wrapper__title_text_number}>#2102</span>
            </h1>
          </div>

          <ButtonMui text='Удалить кошелек'
                     padding="12px 24px"
                     border='1px solid #363636'
                     color='#363636'
                     fontSize='12px'
                     fontWeight='600'
                     hoverBackground='white'/>
        </div>
        <div className={classes.main__wrapper_wallet}>
          <Wallet
            countryName='RUB'
            country='RUB'
            count='1000,00'
            countryCounter='RUB'/>
          <img src={banner}/>
        </div>

        <div className={classes.main__wrapper_replenishment}>
         <p className={classes.main__wrapper_replenishment_title}>Пополнение</p>
          <div className={classes.main__wrapper_replenishment_main}>
            <div className={classes.main__wrapper_replenishment_main_input}>
            <Input placeholder='Сумма' type='number' styles={classes.main__wrapper_replenishment_main_input_input} />
            <Input placeholder='Номер карты' type='number' styles={classes.main__wrapper_replenishment_main_input_input} />
            <Input placeholder='Даты' type='number' styles={classes.main__wrapper_replenishment_main_input_input} />
            <Input placeholder='CVC' type='number' styles={classes.main__wrapper_replenishment_main_input_input} />
            <Input placeholder='Владелец карты' type='number' styles={classes.main__wrapper_replenishment_main_input_input} />
            <ButtonMui color='#FFFFFF'
                       padding='15px 24px'
                       text='Пополнить кошелек'
                       disabled={true} fontWeight='600'
                       background='#363636'
                       hoverBackground='#363636'
                       fontSize='16px'/>
          </div>
          </div>
        </div>

      </section>
      <ProfileBar/>
    </main>
  );
};

export default PurseInfo;