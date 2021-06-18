import React from "react";

const Country = ({ country }) => {
    return (
        <li>
            <h2>{country.name}</h2>
        </li>
    );
};

export default Country;
