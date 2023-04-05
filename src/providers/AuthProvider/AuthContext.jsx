import React from "react"

export default React.createContext({
    isLogin: false,
    setIsLogin: (val) => { },
    token: null,
    setToken: (val) => { },
    user: null,
    setUser: (val) => { }
});