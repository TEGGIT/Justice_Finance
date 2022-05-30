import React from 'react';
import classes from './TransactionsPage.module.scss'
import NavBar from "../NavBar/NavBar";
import ProfileBar from "../ProfileBar/ProfileBar";
import TransactionStatus from "./TransactionStatus/TransactionStatus";
import {useStateContext} from "../../context/stateContext";


const TransactionsPage = () => {

  const {isAuth: user} = useStateContext()
  return (<main className={classes.main}>
    <NavBar/>
    <section className={classes.main__wrapper}>
      <div className={classes.main__wrapper__title}>
        <h1 className={classes.main__wrapper__title_text}>
          Транзакции
        </h1>
      </div>
      <div className={classes.main__wrapper__columns}>
        <p className={classes.main__wrapper__columns_title_data}>
          23 мая
        </p>

        <p className={classes.main__wrapper__columns_title_give}>
          Обменяно
        </p>
        <p className={classes.main__wrapper__columns_title_get}>
          Полученно
        </p>
        <p className={classes.main__wrapper__columns_title_status}>
          Статус
        </p>
      </div>
      {user.candidate.transaction.map((transactionItem) => (

        <TransactionStatus
          exchangeValue={`${transactionItem.give} to ${transactionItem.get}`}
          time={`${transactionItem.Hour}:${transactionItem.Minutes}`}
          changeValue={`-${transactionItem.giveValue}`}
          currency={`${transactionItem.give}`}
          plus={`${transactionItem.getValue}`}
          currencyPlus={`${transactionItem.get}`}
          styles={classes.main__wrapper__rows_info_status_text}
          status='Успешно'
        />

      )).reverse()}


    </section>
    <ProfileBar/>
  </main>);
};

export default TransactionsPage;