import React from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
    const dark = useTheme().dark;
    const changeTheme = useTheme().changeTheme;

    const classes = {
        wrapper: "text-darkbluetext p-4 shadow-md relative z-10",
        header: "flex justify-between max-w-7xl mx-auto",
        heading: "text-lg md:text-2xl font-extrabold",
        darkmodeButton: "flex gap-4 items-center px-4",
    };
    const darkClasses = {
        wrapper: "text-white bg-darkblue",
    };

    return (
        <div
            className={`${classes.wrapper} ${dark ? darkClasses.wrapper : ""}`}
        >
            <header className={classes.header}>
                <h1 className={classes.heading}>Where in the world?</h1>
                <button
                    type="button"
                    onClick={changeTheme}
                    className={classes.darkmodeButton}
                >
                    {dark ? <FaMoon /> : <FaRegMoon />}
                    {dark ? "Light Mode" : "Dark Mode"}
                </button>
            </header>
        </div>
    );
};

export default Header;
