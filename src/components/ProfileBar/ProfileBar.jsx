import React from 'react';
import classes from './ProfileBar.module.scss'
import avatar from '../../assets/image/Avatar.svg'
import plus from '../../assets/image/Plus.svg'
import transactions from '../../assets/image/transaction.svg'
import ButtonMui from "../MUI/Button/ButtonMui";
import {NavLink , useNavigate} from "react-router-dom";
import Wallet from "./WalletBar/Wallet";
import {useStateContext} from "../../context/stateContext";
import greenEllipse from '../../assets/image/GreenElipse.svg'
import left from '../../assets/image/arrowProfileLeft.svg'
import right from '../../assets/image/arrowProfileRight.svg'
import {useState} from "react";
const ProfileBar = () => {
  const navigate = useNavigate()
  const {currentUser} = useStateContext()
  const wallets = [...currentUser]
  const currentWallet = wallets[0].wallets
  const [x, setX] = useState(0)
  const moveBlockLeft = () => {
    setX(x + 20)
    if (x === 0) setX(0)
  }
  const moveBlockRight = () => {
    setX(x - 20)
    if (x === -80) setX(0)
  }
  console.log(x)

  const walletLink = (wallet) => {
    navigate(`/purse-info-page/#${wallet.currency}`, {replace: true});
  }
  const transaction = currentUser[0].transaction

  return (

      <div className={classes.profile}>
        <div className={classes.profile_wrapper}>
          <div className={classes.profile_wrapper__avatar}>
            <img src={avatar} alt='аватар'/>

            <p className={classes.profile_wrapper__avatar_name}>{currentUser[0].name}</p>

          </div>
          <div className={classes.profile_wrapper__balance}>
            <div className={classes.profile_wrapper__balance_arrows}>
            <p>Мой баланс</p>
            <div className={classes.profile_wrapper__balance_arrows_arrow}>
              <img src={left} onClick={moveBlockLeft}/>
              <img src={right} onClick={moveBlockRight}/>
            </div>
          </div>

            {currentWallet.length ? (
                <div className={classes.slider}>
                  <div style={{transform: `translateX(${x}%)`, display:'flex', transition:'0.5s', gap:'10px'}}>


                  {currentWallet.map((wallet) => (
                     <Wallet
                        pointer={{cursor:'pointer'}}
                        key={wallet.currency}
                        countryName={wallet.currency}
                        country={wallet.currency}
                        count={wallet.sum}
                        countryCounter={wallet.currency}
                        onClick={() => walletLink(wallet)}

                    />
                  ))}
                  </div>
                </div>

            ) : (

                <div className={classes.profile_wrapper__balance__purse}>
                  <p>Добавьте кошелек</p>
                  <NavLink to='/purse-page'><ButtonMui img={plus} background='#363636'
                                                       hoverBackground='#363636' borderRadius='30px '
                                                       padding='12px' height='60px'/></NavLink>
                </div>

            )}

          </div>
          <div className={classes.profile_wrapper__transactions}>
            <p>Последние транзацкции </p>
            {!transaction.length ? (

                <div className={classes.profile_wrapper__transactions__history}>
                <img src={transactions} alt="Транзакции"/>
              <p>Вы не совершили не одной транзакции</p>
              </div>

            ): (
                <div className={classes.profile_wrapper__transactions__history_actual}>
                  {transaction.map((item)=> (
                      <div className={classes.profile_wrapper__transactions__history_actual_content}>
                     <p>{`-${item.giveValue}${item.give} / +${item.getValue} ${item.get}`}</p>
                        <img src={greenEllipse} alt='Успешно'/>
                      </div>
                  )).reverse()}
                </div>

            )}

          </div>
        </div>
      </div>
  );
};

export default ProfileBar;