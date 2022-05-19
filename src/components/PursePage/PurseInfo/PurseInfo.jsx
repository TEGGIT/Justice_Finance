import React, {useState, useEffect} from 'react';
import classes from './PurseInfo.module.scss'
import NavBar from "../../NavBar/NavBar";
import ProfileBar from "../../ProfileBar/ProfileBar";
import arrowBack from '../../../assets/image/Back.svg'
import ButtonMui from "../../MUI/Button/ButtonMui";
import Wallet from "../../ProfileBar/WalletBar/Wallet";
import banner from '../../../assets/image/Banner.png'
import Input from "../../UI/Input/Input";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useStateContext} from "../../../context/stateContext";

const PurseInfo = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {currentUser, changeCurrentUser} = useStateContext()
    const [sum, setSum] = useState('')
    const currentWallet = currentUser[0].wallets.find((wallet) => `#${wallet.currency}` === location.hash)


    const deleteWallet = () => {
        currentUser[0].wallets.forEach( (wallet,index) => {
            wallet.currency === currentWallet.currency && currentUser[0].wallets.splice(index,1);
        } )
        changeCurrentUser(currentUser)
        navigate("/purse-page", {replace: true});

    }
    const addSumWallet = () => {
        const newWalletStorage = currentUser[0].wallets.map((wallet) => {
            if (wallet.currency === currentWallet.currency)
                wallet.sum =  +currentWallet.sum + +sum
            console.log(wallet.sum)
            return wallet
        })
        const updatedUserWallet = {
            ...currentUser[0],
            wallets: newWalletStorage
        }
        console.log(currentUser[0].wallets)
        changeCurrentUser([updatedUserWallet])
    }

    return (
        <main className={classes.main}>
            <NavBar/>
            <section className={classes.main_wrapper}>
                <div className={classes.main_wrapper__title}>
                    <div className={classes.main_wrapper__title_purse_id}>
                        <NavLink to='/purse-page'>
                            <img src={arrowBack} alt='Назад'/>
                        </NavLink>
                        <h1 className={classes.main_wrapper__title_text}>
                            {currentWallet.currency}

                            <span
                            className={classes.main_wrapper__title_text_number}>
                                {`#${currentWallet.numberPurse}`}
                            </span>
                        </h1>
                    </div>
                    <ButtonMui
                        text="Удалить кошелёк"
                        padding='12px'
                        border="1px solid #363636"
                        background="#FFFFFF"
                        hoverBackground="#FFFFFF"
                        color='#363636'
                        fontSize='12px'
                        fontWeight='600'
                        onClick={deleteWallet}
                    />
                </div>
                <div className={classes.main_wrapper__purse}>
                    <Wallet countryName={currentWallet.currency} country={currentWallet.currency} count={currentWallet.sum} countryCounter={currentWallet.currency}/>
                    <img src={banner} alt='баннер'/>
                </div>
                <div className={classes.main_wrapper__replenishment}>
                    <p className={classes.main_wrapper__replenishment_text}>Пополнение</p>
                    <div className={classes.main_wrapper__replenishment_wrapper}>
                        <Input placeholder='Сумма' type="number"
                               styles={classes.main_wrapper__replenishment_wrapper_input}
                               value={sum}
                               onChange={(e) => setSum(e.target.value)}
                        />
                        <Input placeholder='Номер карты' type="number"
                               styles={classes.main_wrapper__replenishment_wrapper_input}/>
                        <Input placeholder='Даты' type="number"
                               styles={classes.main_wrapper__replenishment_wrapper_input}/>
                        <Input placeholder='CVC' type="number"
                               styles={classes.main_wrapper__replenishment_wrapper_input}/>
                        <Input placeholder='Владелец карты' type="number"
                               styles={classes.main_wrapper__replenishment_wrapper_input}/>
                        <ButtonMui text="Пополнить кошелек"
                                   padding="15px 24px"
                                   background='#363636'
                                   hoverBackground='#363636'
                                   color='#FFFFFF'
                                   fontSize='16px'
                                   fontWeight='600'
                                   onClick={addSumWallet}
                        />
                    </div>
                </div>
            </section>
            <ProfileBar/>
        </main>
    );
};

export default PurseInfo;