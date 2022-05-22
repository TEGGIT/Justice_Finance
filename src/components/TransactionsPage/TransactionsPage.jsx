import React from 'react';
import classes from './TransactionsPage.module.scss'
import NavBar from "../NavBar/NavBar";
import ProfileBar from "../ProfileBar/ProfileBar";
import TransactionStatus from "./TransactionStatus/TransactionStatus";
import {useStateContext} from "../../context/stateContext";


const TransactionsPage = () => {

  const {currentUser} = useStateContext()
  const transaction = [...currentUser]

  const currentTransaction = transaction[0].transaction

  return (<main className={classes.main}>
    <NavBar/>
    <section className={classes.main__wrapper}>
      <div className={classes.main__wrapper__title}>
        <h1 className={classes.main__wrapper__title_text}>
          Транзакции
        </h1>
      </div>
      <div className={classes.main__wrapper__columns}>
        <p className={classes.main__wrapper__columns_title}>
          23 мая
        </p>
        <p className={classes.main__wrapper__columns_title}>
          Обменяно
        </p>
        <p className={classes.main__wrapper__columns_title}>
          Полученно
        </p>
        <p className={classes.main__wrapper__columns_title}>
          Статус
        </p>
      </div>
      {currentTransaction.map((transactionItem)=> (

          <TransactionStatus
              exchangeValue= {`${transactionItem.give} to ${transactionItem.get}`}
              time='10:00'
              changeValue={`-${transactionItem.giveValue}`}
              currency={`${transactionItem.give}`}
              plus={`${transactionItem.getValue}`}
              currencyPlus={`${transactionItem.get}`}
              styles={classes.main__wrapper__rows_info_status_text}
              status='Успешно'
          />

      ))}





    </section>
    <ProfileBar/>
  </main>);
};

export default TransactionsPage;