import React, {useEffect, useState} from 'react';
import classes from './PursePage.module.scss'
import NavBar from "../NavBar/NavBar";
import ProfileBar from "../ProfileBar/ProfileBar";
import waller from '../../assets/image/wallet.svg'
import Input from "../UI/Input/Input";
import Select from "../MUI/Select/Select";
import ButtonMui from "../MUI/Button/ButtonMui";
import Wallet from "../ProfileBar/WalletBar/Wallet";

const PursePage = () => {
  const [storage, setStorage] = useState(() => JSON.parse(localStorage.getItem('USERS_DATA')))
  const [currency, setСurrency] = React.useState('');
  const [numberPurse, setNumberPurse] = useState('')
  const [isDisabledBtn, setIsDisabledBtn] = useState(true)
  const [currentUser] = useState(() => JSON.parse(localStorage.getItem('LOGIN_USER')))
  const wallets = storage.map((item) => item.wallets)
  const wallet = wallets[0]
  useEffect(() => {
    if (!numberPurse || !currency){
      setIsDisabledBtn(true)
    }else{
      setIsDisabledBtn(false)
    }
  }, [numberPurse, currency])

  useEffect(() => {
    localStorage.setItem('USERS_DATA', JSON.stringify(storage))
  }, [storage])

  const addPurse = () => {
    const isFindWallet = storage.some(user => user.wallets.length > 0 && user.wallets.some(wallet => wallet.currency === currency))

    if (isFindWallet){
      console.log('кошелёк с такой валютой уже существует')
    } else {
      const updateStorage = storage.map(user => {
        if (user.email === currentUser[0].email) {
          const updateUser = {
            ...user,
            wallets: [...user.wallets, {currency, numberPurse, sum:0}]
          }
          return updateUser
        } else {
          return user
        }
      })

      setStorage(updateStorage)
    }

  }

  const handleChange = (event) => {
    setСurrency(event.target.value);
  };

  return (
    <main className={classes.main}>
      <NavBar/>
      <section className={classes.main__wrapper}>
        <div className={classes.main__wrapper__title}>
          <h1 className={classes.main__wrapper__title_text}>
            Кошельки
          </h1>
        </div>
        {wallets.length ? (
            <div className={classes.main__wrapper__wallet_container__wallets}>
              {wallet.map((wallet) => {
                return <Wallet countryName={wallet.currency}
                               country={wallet.currency}
                               count={wallet.sum}
                />
              })}
            </div>
        ): (
            <div className={classes.main__wrapper__wallet_container}>
              <img src={waller} alt='Кошелек'/>
              <p className={classes.main__wrapper__title_wallet}>На данный момент у вас не созданно ни одного кошелька</p>
            </div>
        )}

        <div className={classes.main__wrapper__wallet_container__add}>
          <div className={classes.main__wrapper__wallet_container__add_title}>
            <p>Добавление кошелька</p>
          </div>
          <div className={classes.main__wrapper__wallet_container__add__select}>
            <Select handleChangeSelect={handleChange} selectValue={currency} minWidth='388px'/>
            <Input placeholder='# Номер кошелька' type='number'
                   styles={classes.main__wrapper__wallet_container__add__select_input}
                   value={numberPurse} onChange={(e) => {setNumberPurse(e.target.value) }}
            />
            <ButtonMui text='Добавить кошелек'
                       background ='#363636'
                        padding='15px 24px'
                       disabled={isDisabledBtn}
                       color='#EEEEEE'
                       fontSize='16px'
                       fontWeight='600'
                       hoverBackground='#363636'
                       onClick={addPurse}
            />
          </div>

        </div>
      </section>
      <ProfileBar/>
    </main>
  );
};

export default PursePage;