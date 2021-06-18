import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import Country from "./Country";

const Countries = ({ countries }) => {
    const dark = useTheme().dark;
    const classes = {
        wrapper: "bg-lightgray relative",
        list: "grid grid-flow-row grid-cols-4 gap-4",
    };
    const darkClasses = {
        wrapper: "bg-darkbluebg text-white",
    };
    return (
        <div className={dark ? darkClasses.wrapper : classes.wrapper}>
            <ul className={classes.list}>
                {countries.map(country => (
                    <Country country={country} />
                ))}
            </ul>
        </div>
    );
};

export default Countries;
