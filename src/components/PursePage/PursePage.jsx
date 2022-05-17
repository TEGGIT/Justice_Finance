import React from 'react';
import classes from './PursePage.module.scss'
import NavBar from "../NavBar/NavBar";
import ProfileBar from "../ProfileBar/ProfileBar";
import waller from '../../assets/image/wallet.svg'
import Input from "../UI/Input/Input";
import Select from "../MUI/Select/Select";
import ButtonMui from "../MUI/Button/ButtonMui";

const PursePage = () => {
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
            Кошельки
          </h1>
        </div>
        <div className={classes.main__wrapper__wallet_container}>
          <img src={waller} alt='Кошелек'/>
          <p className={classes.main__wrapper__title_wallet}>На данный момент у вас не созданно ни одного кошелька</p>
        </div>
        <div className={classes.main__wrapper__wallet_container__add}>
          <div className={classes.main__wrapper__wallet_container__add_title}>
            <p>Добавление кошелька</p>
          </div>
          <div className={classes.main__wrapper__wallet_container__add__select}>
            <Select handleChangeSelect={handleChange} selectValue={age} minWidth='388px'/>
            <Input placeholder='# Номер кошелька' type='number'
                   styles={classes.main__wrapper__wallet_container__add__select_input}/>
            <ButtonMui text='Добавить кошелек'
                       background='#EDEDED'
                       padding='15px 24px'
                       color='#8C8C8C'
                       fontSize='16px'
                       fontWeight='600'
                       hoverBackground='#EDEDED'

            />
          </div>

        </div>
      </section>
      <ProfileBar/>
    </main>
  );
};

export default PursePage;