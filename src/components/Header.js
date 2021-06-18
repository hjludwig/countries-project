import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
    const dark = useTheme().dark;
    const changeTheme = useTheme().changeTheme;

    const classes = {
        wrapper: "text-darkbluetext flex justify-between p-4 shadow-md",
        heading: "text-2xl font-extrabold",
    };
    const darkClasses = {
        wrapper: "text-white bg-darkblue",
    };

    return (
        <header
            className={`${classes.wrapper} ${dark ? darkClasses.wrapper : ""}`}
        >
            <h1 className={classes.heading}>Where in the world?</h1>
            <button type="button" onClick={changeTheme}>
                {dark ? "Light Mode" : "Dark Mode"}
            </button>
        </header>
    );
};

export default Header;
