import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [userpassword, setUserpassword] = useState(null)

    return(
        <UserContext.Provider value={{user, setUser, userpassword, setUserpassword}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;