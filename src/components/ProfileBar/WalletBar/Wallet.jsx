import React from 'react';
import classes from './Wallet.module.scss'
import {countryCount} from '../../../mockdata/countryCount'
import {countryIconWallet} from '../../../mockdata/countryIconWallet'
const Wallet = ({country, countryName, count, countryCounter, onClick, pointer}) => {
  return (
      <div className={classes.wallet} onClick={onClick} style={pointer}>
        <div className={classes.wallet_top}>
          <p>{countryName}</p>
          <img src={countryIconWallet[`${country}`]} alt="Иконка страны"/>
        </div>
        <div className={classes.wallet_bottom}>
          <p>{count} {countryCount[`${countryCounter}`]}</p>
        </div>
      </div>
  );
};

export default Wallet;