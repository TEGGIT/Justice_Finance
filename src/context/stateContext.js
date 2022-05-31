import {createContext, useCallback, useContext, useEffect} from "react";
import {useState} from "react";

export const StateContext = createContext(null)

export const StateProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState('')
  const [currentUser, changeCurrentUser] = useState(isAuth)

  const onLogin = useCallback(() => {
    setIsAuth(true)
  }, [])

  const onLogout = useCallback(() => {
    setIsAuth(false)
  }, [])


  useEffect(() => {

  }, [currentUser])


  return (
    <StateContext.Provider value={{isAuth, onLogin, onLogout, currentUser, changeCurrentUser, setIsAuth}}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
