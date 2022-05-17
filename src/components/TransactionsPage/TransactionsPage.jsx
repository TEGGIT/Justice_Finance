import React from 'react';
import classes from './TransactionsPage.module.scss'
import NavBar from "../NavBar/NavBar";
import ProfileBar from "../ProfileBar/ProfileBar";
import TransactionStatus from "./TransactionStatus/TransactionStatus";

const TransactionsPage = () => {
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
          12 апреля
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
      <TransactionStatus
        exchangeValue='USD to RUB'
        time='04:00'
        changeValue='-123,02'
        currency='USD'
        plus='10 000'
        currencyPlus='RUB'
        styles={classes.main__wrapper__rows_info_status_text}
        status='В обработке'
      />
      <TransactionStatus
        exchangeValue='USD to RUB'
        time='08:42'
        changeValue='-123,02'
        currency='USD'
        plus='10 000'
        currencyPlus='RUB'
        styles={classes.main__wrapper__rows_info_status_text}
        status='В обработке'
      />
      <TransactionStatus
        exchangeValue='USD to RUB'
        time='04:00'
        changeValue='-123,02'
        currency='USD'
        plus='10 000'
        currencyPlus='RUB'
        styles={classes.main__wrapper__rows_info_status_text}
        status='В обработке'
      />
      <TransactionStatus
        exchangeValue='USD to RUB'
        time='04:00'
        changeValue='-123,02'
        currency='USD'
        plus='10 000'
        currencyPlus='RUB'
        styles={classes.main__wrapper__rows_info_status_text}
        status='В обработке'
      />
      <TransactionStatus
        exchangeValue='USD to RUB'
        time='04:00'
        changeValue='-123,02'
        currency='USD'
        plus='10 000'
        currencyPlus='RUB'
        styles={classes.main__wrapper__rows_info_status_text}
        status='В обработке'
      />




    </section>
    <ProfileBar/>
  </main>);
};

export default TransactionsPage;