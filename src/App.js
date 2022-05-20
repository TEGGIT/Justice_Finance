import {BrowserRouter} from "react-router-dom";
import {StateContext, StateProvider, useStateContext} from './context/stateContext'
import './App.css';
import AppRouter from "./components/UI/AppRouter/AppRouter";

function App() {
  return (
    <div className="App">
      <StateProvider>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </StateProvider>
    </div>
  );
}

export default App;
