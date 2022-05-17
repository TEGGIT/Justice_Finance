import React from 'react';
import classes from './СurrencyExchange.module.scss'
import NavBar from "../NavBar/NavBar";
import ProfileBar from "../ProfileBar/ProfileBar";
import Input from "../UI/Input/Input";
const CurrencyExchange = () => {
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
           <Input placeholder='Отдаю' type='number' styles={classes.main__wrapper__content__exchange__input}/>
         </div>
       </div>
     </section>
      <ProfileBar/>
    </main>
  );
};

export default CurrencyExchange;