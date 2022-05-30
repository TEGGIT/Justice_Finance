import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import {useNavigate} from "react-router-dom";
import {useStateContext} from "../../context/stateContext";

import Input from "../UI/Input/Input";
import Select from "../MUI/Select/Select";
import ButtonMui from "../MUI/Button/ButtonMui";
import Wallet from "../ProfileBar/WalletBar/Wallet";
import NavBar from "../NavBar/NavBar";
import ProfileBar from "../ProfileBar/ProfileBar";

import {countryIcon} from "../../mockdata/countryIcon";

import classes from './PursePage.module.scss'

import wallet from '../../assets/image/wallet.svg'
import walletIcon from '../../assets/image/WalletIcon.svg'
import close from '../../assets/image/Close.svg'
import axios from "axios";

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '3',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
};

const PursePage = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalErrorIsOpen, setModalErrorIsOpen] = React.useState(false)
  const [currency, setСurrency] = React.useState('');
  const {isAuth: user} = useStateContext()
  const [numberPurse, setNumberPurse] = useState('')
  const [isDisabledBtn, setIsDisabledBtn] = useState(true)
  const [post, setPost] = React.useState();
  const navigate = useNavigate()

  useEffect(() => {
    if (!numberPurse || !currency) {
      setIsDisabledBtn(true)
    } else {
      setIsDisabledBtn(false)
    }
  }, [numberPurse, currency])

 useEffect(() => {
   const test = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvbG1hY2hldi56aGVueWEwNEBnbWFpbC5jb20iLCJ1c2VySWQiOiI2Mjk0OWJiMzY4NTNiOGRkZWJkNjk0M2EiLCJpYXQiOjE2NTM5MDY1NTcsImV4cCI6MTY1MzkxMDE1N30.ydd0rKgYj0bO0wvWyCicVI7nuIITYTx24fJzYDkOnFk"
   axios.get('http://localhost:5000/api/wallets/', {headers: {
     'Authorization': test
     }}).then((responce) => {
     setPost(responce.data)
     console.log(responce.data)
   })
 },[])






  // const isFindWallet = user.candidate.wallets.some(user => user.wallets.length > 0 && user.wallets.some(wallet => wallet.currency === currency))

  // const addPurse = () => {
  //   if (isFindWallet) {
  //     setModalErrorIsOpen(true)
  //   } else {
  //     setIsOpen(true)
  //     const wallets = currentUser[0]
  //
  //     const updateWallets = {
  //       ...wallets,
  //       wallets: [...wallets.wallets, {currency: currency, numberPurse: numberPurse, sum: 0}]
  //     }
  //
  //     changeCurrentUser([updateWallets])
  //
  //   }
  // }
  useEffect(() => {
    if (modalIsOpen) {
      setTimeout(() => {
        setIsOpen(false)
      }, 3000)
    }
  }, [modalIsOpen])

  useEffect(() => {
    if (modalErrorIsOpen) {
      setTimeout(() => {
        setModalErrorIsOpen(false)
      }, 3000)
    }
  })

  const handleChange = (event) => {
    setСurrency(event.target.value);
  };

  const walletLink = (wallet) => {
    navigate(`/purse-info-page/#${wallet.currency}`, {replace: true});
  }

  return (
    <main className={classes.main}>
      <NavBar/>
      <section className={classes.main__wrapper}>
        <div className={classes.main__wrapper__title}>
          <h1 className={classes.main__wrapper__title_text}>
            Кошельки
          </h1>
        </div>
        {!modalErrorIsOpen ? (
          <Modal
            style={customStyles}
            isOpen={modalIsOpen}
          >
            <img src={close} alt='закрыть' className={classes.img} onClick={() => setIsOpen(false)}/>
            <div className={classes.modal_wrapper}>
              <div className={classes.modal_wrapper__content}>
                <img src={walletIcon} alt='Иконка кошелька'/>
                <p className={classes.modal_wrapper__content_text_main}>
                  Кошелек успешно добавлен
                </p>
                <p className={classes.modal_wrapper__content_text_bottom}>Теперь вы можете совершать
                  любые
                  операции.</p>
              </div>
            </div>
          </Modal>

        ) : (
          <Modal style={customStyles}
                 isOpen={modalErrorIsOpen}
          >
            <img src={close} alt='закрыть' className={classes.img}
                 onClick={() => setModalErrorIsOpen(false)}/>
            <div className={classes.modal_wrapper}>
              <div className={classes.modal_wrapper__content}>
                <p className={classes.modal_wrapper__content_text_main}>
                  Кошелек с такой валютой уже существует
                </p>
              </div>
            </div>
          </Modal>
        )}

        {user.candidate.wallets.length ? (
          <div className={classes.main__wrapper__wallet_container__wallets}>
            {user.candidate.wallets.map((wallet) => (
              <Wallet
                pointer={{cursor: 'pointer'}}
                key={wallet.currency}
                countryName={wallet.currency}
                country={wallet.currency}
                count={wallet.sum.toFixed(2)}
                countryCount={wallet.currency}
                countryCounter={wallet.currency}
                onClick={() => walletLink(wallet)}
              />
            ))}
          </div>
        ) : (
          <div className={classes.main__wrapper__wallet_container}>
            <img src={wallet} alt='Кошелек'/>
            <p className={classes.main__wrapper__title_wallet}>На данный момент у вас не созданно ни одного
              кошелька</p>
          </div>
        )}

        <div className={classes.main__wrapper__wallet_container__add}>
          <div className={classes.main__wrapper__wallet_container__add_title}>
            <p>Добавление кошелька</p>
          </div>
          <div className={classes.main__wrapper__wallet_container__add__select}>
            <div className={classes.desktop_button}>
              <Select handleChangeSelect={handleChange} selectValue={currency} minWidth='388px' name='Выберите кошелек'
                      array={countryIcon}/>
            </div>
            <div className={classes.mobile_button}>
              <Select handleChangeSelect={handleChange} selectValue={currency} minWidth='250px' name='Выберите кошелек'
                      array={countryIcon}/>
            </div>
            <Input placeholder='# Номер кошелька' type='number'
                   styles={classes.main__wrapper__wallet_container__add__select_input}
                   value={numberPurse} onChange={(e) => {
              setNumberPurse(e.target.value)
            }}
            />
            <ButtonMui text='Добавить кошелек'
                       background='#363636'
                       padding='15px 24px'
                       disabled={isDisabledBtn}
                       color='#EEEEEE'
                       fontSize='16px'
                       fontWeight='600'
                       hoverBackground='#363636'
                       // onClick={addPurse}
            />
          </div>

        </div>
      </section>
      <ProfileBar/>
    </main>
  );
};
export default PursePage;