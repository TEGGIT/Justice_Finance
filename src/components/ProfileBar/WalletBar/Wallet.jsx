import React from 'react';
import classes from './Wallet.module.scss'
import {countryIcon} from "../../../mockdata/countryIcon";
import {countryCount} from '../../../mockdata/countryCount'
const Wallet = ({country, countryName, count, countryCounter}) => {
  return (
      <div className={classes.wallet}>
        <div className={classes.wallet_top}>
          <p>{countryName}</p>
          <img src={countryIcon[`${country}`]} alt="Иконка страны"/>
        </div>
        <div className={classes.wallet_bottom}>
          <p>{count} {countryCount[`${countryCounter}`]}</p>
        </div>
      </div>
  );
};

export default Wallet;