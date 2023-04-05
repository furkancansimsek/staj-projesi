import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import users from '../../utils/data/users.json'

export const useAuth = () => React.useContext(AuthContext);

const AuthProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        let apiToken = localStorage.getItem("token");
        if (apiToken && !isLogin) {
            let apiUser = users.find((item) => item.token === apiToken)
            setToken(apiToken);
            setIsLogin(true);
            setUser(apiUser);
        }
    }, [isLogin]);

    return (
        <>
            <AuthContext.Provider value={
                {
                    isLogin,
                    setIsLogin,
                    token,
                    setToken,
                    user,
                    setUser
                }
            }>{children}</AuthContext.Provider>
        </>
    )
}

export default AuthProvider