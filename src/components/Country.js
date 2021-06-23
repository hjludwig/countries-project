import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Country = ({ country, setSingleCountry }) => {
    const classes = {
        country:
            "w-64 rounded-md overflow-hidden shadow cursor-pointer hover:shadow-lg",
        flagwrapper: "h-36 overflow-hidden relative",
        flag: "w-full h-full object-cover object-center",
        text: "bg-white p-6 text-sm",
        name: "text-lg font-bold leading-5 mb-4",
    };
    const darkClasses = {
        text: "bg-darkblue p-6 text-sm",
    };
    const dark = useTheme().dark;

    const { name, population, region, capital, flag } = country;
    return (
        <li
            className={classes.country}
            onClick={() => setSingleCountry(country)}
        >
            <div className={classes.flagwrapper}>
                <img
                    className={classes.flag}
                    src={flag}
                    alt={`Flag of ${name}`}
                />
            </div>
            <div className={`${dark ? darkClasses.text : classes.text}`}>
                <h2 className={classes.name}>{name}</h2>
                <p>
                    <strong>Population:</strong> {population.toLocaleString()}
                </p>
                <p>
                    <strong>Region:</strong> {region}
                </p>
                <p>
                    <strong>Capital:</strong> {capital}
                </p>
            </div>
        </li>
    );
};

export default Country;
