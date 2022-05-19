import React from 'react';
import classes from './PurseInfo.module.scss'
import NavBar from "../../NavBar/NavBar";
import ProfileBar from "../../ProfileBar/ProfileBar";
import arrowBack from '../../../assets/image/Back.svg'
import ButtonMui from "../../MUI/Button/ButtonMui";
import Wallet from "../../ProfileBar/WalletBar/Wallet";
import banner from '../../../assets/image/Banner.png'
import Input from "../../UI/Input/Input";
const PurseInfo = () => {
    return (
        <main className={classes.main}>
            <NavBar/>
            <section className={classes.main_wrapper}>
                <div className={classes.main_wrapper__title}>
                    <div className={classes.main_wrapper__title_purse_id}>
                    <img src={arrowBack} alt='Назад'/>
                    <h1 className={classes.main_wrapper__title_text}>
                        RUB / <span className={classes.main_wrapper__title_text_number}>#2102</span>
                    </h1>
                    </div>
                        <ButtonMui
                            text="Удалить кошелёк"
                            padding= '12px'
                            border="1px solid #363636"
                            background="#FFFFFF"
                            hoverBackground="#FFFFFF"
                            color='#363636'
                            fontSize='12px'
                            fontWeight='600'
                        />
                </div>
                <div className={classes.main_wrapper__purse}>
                <Wallet countryName='RUB' country='RUB' count='1200,00' countryCounter='RUB'/>
                    <img src={banner} alt='баннер'/>
                </div>
                <div className={classes.main_wrapper__replenishment}>
                  <p className={classes.main_wrapper__replenishment_text}>Пополнение</p>
                    <div className={classes.main_wrapper__replenishment_wrapper}>
                       <Input placeholder='Сумма'  type="number" styles={classes.main_wrapper__replenishment_wrapper_input}/>
                        <Input placeholder='Номер карты' type="number" styles={classes.main_wrapper__replenishment_wrapper_input}/>
                        <Input placeholder='Даты' type="number" styles={classes.main_wrapper__replenishment_wrapper_input}/>
                        <Input placeholder='CVC' type="number" styles={classes.main_wrapper__replenishment_wrapper_input}/>
                        <Input placeholder='Владелец карты' type="number" styles={classes.main_wrapper__replenishment_wrapper_input}/>
                        <ButtonMui text="Пополнить кошелек"
                                   padding="15px 24px"
                                   background='#363636'
                                   hoverBackground='#363636'
                                   color='#FFFFFF'
                                   fontSize='16px'
                                   fontWeight='600'
                        />
                    </div>
                </div>
            </section>
            <ProfileBar/>
        </main>
    );
};

export default PurseInfo;