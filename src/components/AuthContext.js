import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    const login = (newToken) => {
        setToken(newToken);
        localStorage.setItem("token", newToken);
        console.log("abedage")
    };

    const logout = () => {
        setToken("");
        localStorage.removeItem("token");
    };
    const getToken=()=>
    {
        return token;
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};