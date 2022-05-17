import {BrowserRouter, Routes, Route,} from "react-router-dom";


import MainPage from "./components/MainPage";
import LogPage from "./components/LoginPage/LogPage";
import './App.css';
import RegisterPage from "./components/RegisterPage/RegisterPage";
import ExchangeRatesPage from "./components/ExchangeRates/ExchangeRatesPage";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='login-page' element={<LogPage/>}/>
          <Route path='register-page' element={<RegisterPage/>}/>
          <Route path='exchange-rates-page' element={<ExchangeRatesPage/>}/>
          <Route path='profile-page' element={<Profile/>}/>

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
