import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "../../MainPage";
import LogPage from "../../LoginPage/LogPage";
import RegisterPage from "../../RegisterPage/RegisterPage";
import ExchangeRatesPage from "../../ExchangeRates/ExchangeRatesPage";
import Profile from "../../Profile/Profile";
import CurrencyExchange from "../../СurrencyExchange/СurrencyExchange";
import PursePage from "../../PursePage/PursePage";
import TransactionsPage from "../../TransactionsPage/TransactionsPage";

const AppRouter = () => {
  return (
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='login-page' element={<LogPage/>}/>
        <Route path='register-page' element={<RegisterPage/>}/>
        <Route path='exchange-rates-page' element={<ExchangeRatesPage/>}/>
        <Route path='profile-page' element={<Profile/>}/>
        <Route path='currency-exchange' element={<CurrencyExchange/>}/>
        <Route path='purse-page' element={<PursePage/>}/>
        <Route path='transactions-page' element={<TransactionsPage/>}/>
        <Route
            path="*"
            element={<Navigate to="/" replace />}
        />
      </Routes>
  );
};

export default AppRouter;