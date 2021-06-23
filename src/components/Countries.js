import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import Country from "./Country";
import Single from "./Single";

const Countries = ({
    countries,
    singleCountry,
    setSingleCountry,
    countriesData,
}) => {
    const dark = useTheme().dark;
    const classes = {
        wrapper: "bg-lightgray px-4 md:px-10 py-10 md:py-20 min-h-screen",
        countries: "max-w-7xl m-auto",
        list: "flex flex-wrap lg:justify-between justify-around gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-20",
    };
    const darkClasses = {
        wrapper:
            "bg-darkbluebg text-white px-4 md:px-10 py-10 md:py-20 min-h-screen",
    };
    return (
        <div className={dark ? darkClasses.wrapper : classes.wrapper}>
            {singleCountry ? (
                <Single
                    singleCountry={singleCountry}
                    setSingleCountry={setSingleCountry}
                    countriesData={countriesData}
                />
            ) : (
                <div className={classes.countries}>
                    {/* TODO: if list < a certain number, don't do space between */}
                    <ul className={classes.list}>
                        {countries.map(country => (
                            <Country
                                country={country}
                                setSingleCountry={setSingleCountry}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Countries;
