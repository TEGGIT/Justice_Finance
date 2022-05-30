import React, {useEffect, useState} from 'react';
import classes from './СurrencyExchange.module.scss'
import NavBar from "../NavBar/NavBar";
import ProfileBar from "../ProfileBar/ProfileBar";
import Input from "../UI/Input/Input";
import Select from "../MUI/Select/Select";
import ButtonMui from "../MUI/Button/ButtonMui";
import exchange from '../../assets/image/exchange.svg'
import {exchangeRates} from '../../mockdata/exchangeRates'
import {useStateContext} from "../../context/stateContext";
import wallet from "../ProfileBar/WalletBar/Wallet";

import {countryIcon} from "../../mockdata/countryIcon";


const CurrencyExchange = () => {
  const [give, setGive] = React.useState('');
  const [get, setGet] = React.useState('');
  const [giveValue, setGiveValue] = useState('')
  const [getValue, setGetValue] = useState('')
  const {isAuth: user} = useStateContext()
  const [isDisabled, setIsDisabled] = useState(true)

  const Data = new Date();
  const Hour = Data.getHours();
  const Minutes = Data.getMinutes();
  // const addTransaction = () => {
  //
  //   const refreshWalletSum = user.candidate.wallets.map(item => {
  //     if (item.currency === give) {
  //       return {
  //         ...item,
  //         sum: item.sum - giveValue
  //       }
  //     }
  //     if (item.currency === get) {
  //       return {
  //         ...item,
  //         sum: item.sum + +getValue
  //       }
  //     }
  //     return item
  //   })
  //
  //   const updateTransaction = {
  //     ...transaction,
  //     transaction: [...transaction.transaction, {get, Hour, Minutes, give, giveValue, getValue}],
  //     wallets: refreshWalletSum,
  //   }
  //   setIsDisabled(true)
  //   changeCurrentUser([updateTransaction])
  //
  // }

  useEffect(() => {
    const walletGive = user.candidate.wallets.filter(wallet => wallet.currency === give && wallet)
    walletGive.length && (giveValue > walletGive[0].sum
    ||
    Boolean(!get)
    ||
    Boolean(!give)
    ||
    Boolean(!giveValue)
      ?
      setIsDisabled(true) : setIsDisabled(false))
    exchangeRates.map((input) => {
      walletGive.length
      &&
      walletGive[0].currency === input.currencyName
      &&
      exchangeRates.map(output => {
        get === output.currencyName
        &&
        setGetValue(((input.rubleRatio * giveValue) / output.rubleRatio).toFixed(2))
      })
    })

  }, [giveValue, getValue, get, give, isDisabled])


  return (
    <main className={classes.main}>
      <NavBar/>
      <section className={classes.main__wrapper}>
        <div className={classes.main__wrapper__title}>
          <h1 className={classes.main__wrapper__title_text}>
            Обмен валют
          </h1>
        </div>
        <div className={classes.main__wrapper__content}>
          <div className={classes.main__wrapper__content__title__info}>
            <p>Укажите кошелек, сумму и валюту для обмена</p>
          </div>
          <div className={classes.main__wrapper__content__exchange}>
            <Input placeholder='Отдаю' type='number' styles={classes.main__wrapper__content__exchange__input}
                   onChange={(e) => setGiveValue(e.target.value)}
                   value={giveValue}

            />

            <Select handleChangeSelect={(e) => setGive(e.target.value)} selectValue={give} minWidth='21rem'
                    name='Выберите кошелек'
                    array={user.candidate.wallets}
            />
          </div>
          <div className={classes.main__wrapper__content__exchange}>
            <Input placeholder='Получаю' type='number' styles={classes.main__wrapper__content__exchange__input}
                   onChange={(e) => setGetValue(e.target.value)}
                   value={getValue}
                   readOnly={true}
            />
            <Select handleChangeSelect={(e) => setGet(e.target.value)} selectValue={get} minWidth='21rem'
                    name='Выберите валюту'
                    array={user.candidate.wallets}
            />
          </div>
          <div className={classes.main__wrapper__content__exchange}>
            <ButtonMui text="Обменять"
                       img={exchange}
                       background='#363636'
                       padding='16px'
                       gap='8px'
                       color='#FFFFFF'
                       fontWeight='600'
                       fontSize='16px'
                       hoverBackground='#363636'
                       disabled={isDisabled}
                       flexDirection='row-reverse'
                       // onClick={addTransaction}
            />

          </div>

        </div>
      </section>
      <ProfileBar/>
    </main>
  );
};

export default CurrencyExchange;