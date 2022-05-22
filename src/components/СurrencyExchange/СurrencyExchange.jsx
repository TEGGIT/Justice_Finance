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

const CurrencyExchange = () => {
  const [give, setGive] = React.useState('');
  const [get, setGet] = React.useState('');
  const [giveValue, setGiveValue] = useState('')
  const [getValue, setGetValue] = useState('')
  const {currentUser, changeCurrentUser} = useStateContext()

  const wallets = [...currentUser]

  const transaction = () => {

  }
  useEffect(() => {



     exchangeRates.map((item) => {
      if (item.currencyName === get){
        console.log(get)
        setGetValue(item.rubleRatio * giveValue)

      }
      wallets[0].wallets.find((sum) => {
         if (sum.currency === give){
           console.log(sum.sum - 61 )
         }
       })
    })
  }, [giveValue])
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
                   onChange={(e)=> setGiveValue(e.target.value)}
                   value={giveValue}
            />
            <Select handleChangeSelect={(e) => setGive(e.target.value)} selectValue={give} minWidth='21rem' name='Выберите кошелек'/>
          </div>
          <div className={classes.main__wrapper__content__exchange}>
            <Input placeholder='Получаю' type='number' styles={classes.main__wrapper__content__exchange__input}
                   onChange={(e)=> setGetValue(e.target.value)}
                   value={getValue}
                   readOnly={true}
            />
            <Select handleChangeSelect={(e) => setGet(e.target.value)} selectValue={get} minWidth='21rem' name='Выберите валюту'/>
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
                       flexDirection='row-reverse'
                       onClick={transaction}

            />

          </div>

        </div>
      </section>
      <ProfileBar/>
    </main>
  );
};

export default CurrencyExchange;