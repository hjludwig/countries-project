import React from "react";

const Country = ({ country }) => {
    const classes = {
        country: "w-64 rounded-md overflow-hidden shadow",
        flagwrapper: "h-36 overflow-hidden relative",
        flag: "w-full h-full object-cover object-center",
        text: "bg-white p-6",
    };

    const { name, population, region, capital, flag } = country;
    return (
        <li className={classes.country}>
            <div className={classes.flagwrapper}>
                <img
                    className={classes.flag}
                    src={flag}
                    alt={`Flag of ${name}`}
                />
            </div>
            <div className={classes.text}>
                <h2>{name}</h2>
                <p>
                    <strong>Population:</strong> {population}
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
