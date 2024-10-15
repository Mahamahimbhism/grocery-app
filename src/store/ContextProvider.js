import React, { useEffect, useState } from 'react';
import AppContext from './app-context';

const ContextProvider = ({ children }) => {

    // Initialize state from localStorage to prevent delay in rendering
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem("loggedIn") === "1";
    });

    // Set login function
    const setLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem("loggedIn", "1");
    };

    // Set logout function
    const setLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("loggedIn");
    };

    const appContextValue = {
        isLoggedIn,
        setLogin,
        setLogout,
    };

    return (
        <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>
    );
}

export default ContextProvider;
