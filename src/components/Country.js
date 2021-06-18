import React from "react";

const Country = ({ country }) => {
    const { name, population, region, capital, flag } = country;
    return (
        <li>
            <img src={flag} alt={`Flag of ${name}`} />
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
        </li>
    );
};

export default Country;
