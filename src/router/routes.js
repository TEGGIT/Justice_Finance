import MainPage from "../components/MainPage";
import LogPage from "../components/LoginPage/LogPage";
import RegisterPage from "../components/RegisterPage/RegisterPage";
import ExchangeRatesPage from "../components/ExchangeRates/ExchangeRatesPage";
import Profile from "../components/Profile/Profile";
import CurrencyExchange from "../components/СurrencyExchange/СurrencyExchange";
import PursePage from "../components/PursePage/PursePage";
import TransactionsPage from "../components/TransactionsPage/TransactionsPage";
import PurseInfo from "../components/PursePage/PurseInfo/PurseInfo";

export const privateRoutes = [
  {path: '/', element: <MainPage/>, exact: true},
  {path: '/login-page', element: <LogPage/>, exact: true},
  {path: '/register-page', element: <RegisterPage/>, exact: true},
  {path: '/exchange-rates-page', element: <ExchangeRatesPage/>, exact: true},
  {path: '/profile-page', element: <Profile/>, exact: true},
  {path: '/currency-exchange', element: <CurrencyExchange/>, exact: true},
  {path: '/purse-page', element: <PursePage/>, exact: true},
  {path: '/transactions-page', element: <TransactionsPage/>, exact: true},
  {path: '/purse-info-page', element: <PurseInfo/>, exact: true}
]

export const publicRoutes = [
  {path: '/', element: <MainPage/>, exact: true},
  {path: '/login-page', element: <LogPage/>, exact: true},
  {path: '/register-page', element: <RegisterPage/>, exact: true},
]

