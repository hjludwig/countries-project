import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);
    const changeTheme = () => {
        setDark(!dark);
    };
    const value = {
        dark,
        changeTheme,
    };
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
