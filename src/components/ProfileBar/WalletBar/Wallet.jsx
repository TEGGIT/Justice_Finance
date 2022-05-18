import React from 'react';
import classes from './Wallet.module.scss'
import {countryIcon} from "../../../mockdata/countryIcon";
const Wallet = ({country, countryName, count}) => {
  return (
      <div className={classes.wallet}>
        <div className={classes.wallet_top}>
          <p>{countryName}</p>
          <img src={countryIcon[`${country}`]}/>
        </div>
        <div className={classes.wallet_bottom}>
          <p>{count} ₽</p>
        </div>
      </div>
  );
};

export default Wallet;