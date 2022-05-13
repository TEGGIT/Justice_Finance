import {BrowserRouter, Routes, Route,} from "react-router-dom";


import MainPage from "./components/MainPage";

import './App.css';


function App() {
  return (
      <div className="App">

      <BrowserRouter>
         <Routes>
    <Route path='/' element={<MainPage/>}/>

         </Routes>
 </BrowserRouter>
</div>

);
}

export default App;
