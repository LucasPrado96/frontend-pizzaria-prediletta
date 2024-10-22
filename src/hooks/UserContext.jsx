import { useState, useContext, createContext, useEffect } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext({})

export function UserProvider({ children }) {
    const [userInfo, setUserInfo] = useState({})
    


    function putUserData(userInfo) {
        setUserInfo(userInfo)
        localStorage.setItem('prediletta:UserData', JSON.stringify(userInfo))
    }


    function Logout() {
        setUserInfo({})
        localStorage.removeItem('prediletta:UserData');

    }

    useEffect(() => {
        const localStorageUserData = localStorage.getItem('prediletta:UserData')

        if (localStorageUserData) {
            setUserInfo(JSON.parse(localStorageUserData))
           
        }
    }, []);


    return (
        <UserContext.Provider value={{ userInfo, putUserData, Logout }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used with UserContext')
    }
    return context
}




UserProvider.propTypes = {
    children: PropTypes.node
}