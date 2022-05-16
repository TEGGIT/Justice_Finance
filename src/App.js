import {BrowserRouter, Routes, Route,} from "react-router-dom";


import MainPage from "./components/MainPage";
import LogPage from "./components/LoginPage/LogPage";
import './App.css';
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='login-page' element={<LogPage/>}/>
                    <Route path='register-page' element={<RegisterPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;
