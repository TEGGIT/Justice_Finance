import React from 'react';
import classes from './СurrencyExchange.module.scss'
import NavBar from "../NavBar/NavBar";
import ProfileBar from "../ProfileBar/ProfileBar";
import Input from "../UI/Input/Input";
import Select from "../MUI/Select/Select";
import ButtonMui from "../MUI/Button/ButtonMui";
import exchange from '../../assets/image/exchange.svg'

const CurrencyExchange = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
            <Select handleChangeSelect={handleChange} selectValue={age} minWidth='21rem'/>
          </div>
          <div className={classes.main__wrapper__content__exchange}>
            <Input placeholder='Получаю' type='number' styles={classes.main__wrapper__content__exchange__input}/>
            <Select handleChangeSelect={handleChange} selectValue={age} minWidth='21rem'/>
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
            />

          </div>

        </div>
      </section>
      <ProfileBar/>
    </main>
  );
};

export default CurrencyExchange;