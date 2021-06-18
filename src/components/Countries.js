import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import Country from "./Country";

const Countries = ({ countries }) => {
    const dark = useTheme.dark;
    const classes = {
        wrapper: "bg-lightgray relative -z-1",
        list: "grid",
    };
    return (
        <div className={classes.wrapper}>
            <ul>
                {countries.map(country => (
                    <Country country={country} />
                ))}
            </ul>
        </div>
    );
};

export default Countries;
