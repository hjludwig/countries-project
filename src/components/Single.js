import React from "react";

const Single = ({ singleCountry, setSingleCountry, countriesData }) => {
    const { name, borders } = singleCountry;
    return (
        <div>
            <button type="button" onClick={() => setSingleCountry()}>
                Back
            </button>
            <p>{name}</p>
            <h2>Border Countries: </h2>
            <ul>
                {borders.map(border => {
                    // console.log(border);
                    const borderCountry = countriesData.find(
                        country => country.cioc === border
                    );
                    console.log(borderCountry);
                    return <li>{borderCountry?.name}</li>;
                })}
            </ul>
        </div>
    );
};

export default Single;
