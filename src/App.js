import {BrowserRouter, Routes, Route,} from "react-router-dom";


import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage/LoginPage";
import './App.css';

function App() {
  return (
      <div className="App">

      <BrowserRouter>
         <Routes>
    <Route path='/' element={<MainPage/>}/>
             <Route path='login-page' element={<LoginPage/>}/>
         </Routes>
 </BrowserRouter>
</div>

);
}

export default App;
