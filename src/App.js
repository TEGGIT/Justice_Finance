import {BrowserRouter, Routes, Route,} from "react-router-dom";


import MainPage from "./components/MainPage";
import LogPage from "./components/LoginPage/LogPage";
import './App.css';

function App() {
  return (
      <div className="App">

      <BrowserRouter>
         <Routes>
    <Route path='/' element={<MainPage/>}/>
             <Route path='login-page' element={<LogPage/>}/>
         </Routes>
 </BrowserRouter>
</div>

);
}

export default App;
