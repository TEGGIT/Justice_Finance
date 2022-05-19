import {BrowserRouter} from "react-router-dom";
import {AuthContext} from './context'
import './App.css';
import AppRouter from "./components/UI/AppRouter/AppRouter";

function App() {
    const aut = () => {
        JSON.parse(localStorage.getItem('LOGIN_USER'))
    }
  return (
    <div className="App">
     <AuthContext.Provider value={{
       aut
     }}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
    </div>

  );
}

export default App;
