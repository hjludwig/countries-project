import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import Country from "./Country";

const Countries = ({ countries }) => {
    const dark = useTheme().dark;
    const classes = {
        wrapper: "bg-lightgray p-10",
        countries: "max-w-7xl m-auto",
        list: "flex flex-wrap justify-around gap-x-8 gap-y-20",
    };
    const darkClasses = {
        wrapper: "bg-darkbluebg text-white p-10",
    };
    return (
        <div className={dark ? darkClasses.wrapper : classes.wrapper}>
            <div className={classes.countries}>
                <ul className={classes.list}>
                    {countries.map(country => (
                        <Country country={country} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Countries;
