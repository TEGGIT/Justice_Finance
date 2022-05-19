import {BrowserRouter} from "react-router-dom";
import {Context} from './context'
import './App.css';
import AppRouter from "./components/UI/AppRouter/AppRouter";

function App() {
  const aut = () => {
    JSON.parse(localStorage.getItem('LOGIN_USER'))
  }
  return (
    <div className="App">
     <Context.Provider value={{
       aut
     }}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </Context.Provider>
    </div>

  );
}

export default App;
