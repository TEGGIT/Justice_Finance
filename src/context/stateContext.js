import {createContext, useCallback, useContext, useEffect} from "react";
import {useState} from "react";

export const StateContext = createContext(null)

export const StateProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(() => JSON.parse(localStorage.getItem('AUTH')) ?? false)
  const [currentUser, changeCurrentUser] = useState(() => JSON.parse(localStorage.getItem('LOGIN_USER')) ?? null)
  const [userData, changeUserData] = useState(() => JSON.parse(localStorage.getItem('USERS_DATA')) ?? [])

  const onLogin = useCallback(() => {
    setIsAuth(true)
  }, [])

  const onLogout = useCallback(() => {
    setIsAuth(false)
  }, [])


  useEffect(() => {
    localStorage.setItem('AUTH', JSON.stringify(isAuth))
  }, [isAuth])

  useEffect(() => {
    console.log('Я отработал',currentUser)
    localStorage.setItem('LOGIN_USER', JSON.stringify(currentUser))

    const updateUserData = userData.map((user) => {
      if (user === currentUser) {
        return currentUser
      } else {
        return user
      }
    })

    changeUserData(updateUserData)
    localStorage.setItem('USERS_DATA', JSON.stringify(currentUser))
  }, [currentUser])


  return (
    <StateContext.Provider value={{isAuth, onLogin, onLogout, currentUser, changeCurrentUser}}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
