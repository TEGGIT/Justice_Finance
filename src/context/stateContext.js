import {createContext, useCallback, useContext, useEffect} from "react";
import {useState} from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const StateContext = createContext(null)

export const StateProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState('')
  const [userName , setUserName] = useState()
  const [walletsUser, setWalletsUser] = useState()
  const [transactionUser, setTransactionUser] = useState()
  const [login, setLogin] = useState(() => Cookies.get("TOKEN"))


  const onLogout = useCallback(() => {
    setLogin(false)
     Cookies.remove("TOKEN")

    }, [])
  const onLogin = useCallback(() => {
    setLogin(true)
  }, [])


  return (
    <StateContext.Provider value={{
      isAuth,
      onLogout,
      userName,
      login,
      setLogin,
      walletsUser,
      transactionUser,
      setUserName,
      setIsAuth,
      onLogin
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
