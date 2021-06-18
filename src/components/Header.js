import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
    const dark = useTheme().dark;
    const changeTheme = useTheme().changeTheme;

    const lightClasses = {
        wrapper: "text-blue",
        heading: "text-lg",
    };
    const darkClasses = {
        wrapper: "text-white bg-darkbluebg",
        heading: "text-lg",
    };

    return (
        <header className={dark ? darkClasses.wrapper : lightClasses.wrapper}>
            <h1 className={dark ? darkClasses.heading : lightClasses.heading}>
                Where in the world?
            </h1>
            <button type="button" onClick={changeTheme}>
                Dark mode
            </button>
        </header>
    );
};

export default Header;
