import React, {useEffect, useState} from 'react';

import axios from "axios";
import Cookies from "js-cookie";

import NavBar from "../NavBar/NavBar";
import ProfileBar from "../ProfileBar/ProfileBar";
import Input from "../UI/Input/Input";
import Select from "../MUI/Select/Select";
import ButtonMui from "../MUI/Button/ButtonMui";

import classes from './СurrencyExchange.module.scss'

import exchange from '../../assets/image/exchange.svg'


const CurrencyExchange = () => {
  const [give, setGive] = React.useState('');
  const [get, setGet] = React.useState('');
  const [giveValue, setGiveValue] = useState('')
  const [getValue, setGetValue] = useState('')
  const [walletsUser, setWalletsUser] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [transaction, setTransaction] = useState('')
  const [exchangeRates, setExchangeRates] = useState('')
  const Data = new Date();
  const Hour = Data.getHours();
  const Minutes = Data.getMinutes();
  const addTransaction = () => {

    const refreshWalletSum = walletsUser.map(item => {
      if (item.currency === give) {
        return {
          ...item,
          sum: item.sum - giveValue
        }
      }
      if (item.currency === get) {
        return {
          ...item,
          sum: item.sum + +getValue
        }
      }
      return item
    })

    setIsDisabled(true)

    axios.patch('http://localhost:5000/api/wallets/update', {
      wallets: [
        ...refreshWalletSum
      ]
    }, {
      headers: {
        Authorization: Cookies.get("TOKEN")
      }
    },).then((res) => {
      console.log(res.data)
    })

    axios.patch('http://localhost:5000/api/transaction', {
      transaction: [
        ...transaction,
        {
          get,
          Hour,
          Minutes,
          give,
          giveValue,
          getValue
        }
      ]
    }, {
      headers: {Authorization: Cookies.get("TOKEN")}},).then(() => {})
  }

  useEffect(() => {
    axios.get('http://localhost:5000/api/wallets', {
      headers: {Authorization: Cookies.get("TOKEN")}}).then((responce) => {

      setWalletsUser(responce.data[0].wallets)
      setTransaction(responce.data[0].transaction)

    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:5000/api/exchangeRates').then((responce) => {

      setExchangeRates(responce.data[0].exchangeRates)

    })
  }, [])

  useEffect(() => {
    const walletGive = walletsUser && walletsUser.filter(wallet => wallet.currency === give && wallet)
    walletGive.length && (giveValue > walletGive[0].sum
    ||
    Boolean(!get)
    ||
    Boolean(!give)
    ||
    Boolean(!giveValue)
      ?
      setIsDisabled(true) : setIsDisabled(false))
    exchangeRates && exchangeRates.map((input) => {
      walletGive.length
      &&
      walletGive[0].currency === input.currencyName
      &&
      exchangeRates && exchangeRates.map(output => {
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
            {walletsUser ? (
              <Select handleChangeSelect={(e) => setGive(e.target.value)} selectValue={give} minWidth='21rem'
                      name='Выберите кошелек'
                      array={walletsUser}
              />
            ) : (
              <h1>LoAdInG...</h1>
            )}
          </div>
          <div className={classes.main__wrapper__content__exchange}>
            <Input placeholder='Получаю' type='number' styles={classes.main__wrapper__content__exchange__input}
                   onChange={(e) => setGetValue(e.target.value)}
                   value={getValue}
                   readOnly={true}
            />
            {walletsUser ? (
              <Select handleChangeSelect={(e) => setGet(e.target.value)} selectValue={get} minWidth='21rem'
                      name='Выберите валюту'
                      array={walletsUser}
              />
            ) : (
              <h1>LoAdInG...</h1>
            )}

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
                       onClick={addTransaction}
            />

          </div>

        </div>
      </section>
      <ProfileBar/>
    </main>
  );
};

export default CurrencyExchange;