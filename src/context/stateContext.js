import {useState} from "react";

import {createContext, useCallback, useContext} from "react";

import Cookies from "js-cookie";

export const StateContext = createContext(null)

export const StateProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState('')
  const [userName, setUserName] = useState()
  const [walletsUser, setWalletsUser] = useState([])
  const [transactionUser, setTransactionUser] = useState([])
  const [login, setLogin] = useState(() => Cookies.get("TOKEN"))


  const onLogout = useCallback(() => {
    setLogin(false)
    Cookies.remove("TOKEN")

  }, [])
  const onLogin = useCallback(() => {
    setLogin(true)
  }, [])
  console.log(walletsUser)



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
      onLogin,
      setWalletsUser,
      setTransactionUser
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
