import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useTheme } from "../contexts/ThemeContext";

const Single = ({ singleCountry, setSingleCountry, countriesData }) => {
    const {
        name,
        borders,
        flag,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
    } = singleCountry;

    const dark = useTheme().dark;
    const classes = {
        wrapper: "max-w-7xl mx-auto",
        backButton: "shadow px-6 py-2 rounded-md flex gap-2 items-center",
        borderButton: "shadow px-4 py-1 rounded text-sm",
        borderList: "flex gap-4 flex-wrap",
        borderTitle: "font-bold mb-4",
        borders: "mt-12",
        name: "mt-8 md:mt-0 text-2xl md:text-3xl font-bold mb-6 col-start-2",
        flag: "col-span-full",
        defList: "md:grid grid-cols-2 col-start-2",
        def: "flex gap-2",
        defTerm: "font-bold",
        countryWrapper: "md:grid grid-cols-2 gap-12 items-center my-20",
    };
    const darkClasses = {
        backButton:
            "shadow px-6 py-2 rounded-md flex gap-2 items-center bg-darkblue",
        borderButton: "shadow px-4 py-1 rounded text-sm bg-darkblue",
    };

    const handleClick = country => {
        setSingleCountry(country);
    };

    return (
        <div className={classes.wrapper}>
            <div>
                <button
                    className={
                        dark
                            ? `${classes.backButton} ${darkClasses.backButton}`
                            : classes.backButton
                    }
                    type="button"
                    onClick={() => setSingleCountry()}
                >
                    <BsArrowLeft size={"1.25em"} />
                    Back
                </button>
            </div>
            <div className={classes.countryWrapper}>
                <img classList={classes.flag} src={flag} alt={`${name} flag`} />
                <div>
                    <h1 className={classes.name}>{name}</h1>
                    <dl className={classes.defList}>
                        <div className={classes.def}>
                            <dt className={classes.defTerm}>Native Name: </dt>
                            <dd className={classes.defDef}>{nativeName}</dd>
                        </div>
                        <div className={classes.def}>
                            <dt className={classes.defTerm}>Population: </dt>
                            <dd className={classes.defDef}>{population}</dd>
                        </div>
                        <div className={classes.def}>
                            <dt className={classes.defTerm}>Region: </dt>
                            <dd className={classes.defDef}>{region}</dd>
                        </div>
                        <div className={classes.def}>
                            <dt className={classes.defTerm}>Sub Region: </dt>
                            <dd className={classes.defDef}>{subregion}</dd>
                        </div>
                        <div className={classes.def}>
                            <dt className={classes.defTerm}>Capital</dt>
                            <dd className={classes.defDef}>{capital}</dd>
                        </div>
                        <div className={classes.def}>
                            <dt className={classes.defTerm}>
                                Top Level Domain:{" "}
                            </dt>
                            <dd className={classes.defDef}>
                                {topLevelDomain[0]}
                            </dd>
                        </div>
                        <div className={classes.def}>
                            <dt className={classes.defTerm}>Currencies: </dt>
                            <dd className={classes.defDef}>
                                {currencies.map((currency, i) =>
                                    i < currencies.length - 1
                                        ? `${currency.name}, `
                                        : currency.name
                                )}
                            </dd>
                        </div>
                        <div className={classes.def}>
                            <dt className={classes.defTerm}>Languages: </dt>
                            <dd className={classes.defDef}>
                                {languages.map((language, i) =>
                                    i < languages.length - 1
                                        ? `${language.name}, `
                                        : language.name
                                )}
                            </dd>
                        </div>
                    </dl>
                    <div className={classes.borders}>
                        <h2 className={classes.borderTitle}>
                            Border Countries:{" "}
                        </h2>
                        <ul className={classes.borderList}>
                            {borders.map(border => {
                                const borderCountry = countriesData.find(
                                    country => country.alpha3Code === border
                                );
                                return (
                                    <li>
                                        <button
                                            className={
                                                dark
                                                    ? `${classes.borderButton} ${darkClasses.borderButton}`
                                                    : classes.borderButton
                                            }
                                            type="button"
                                            onClick={() =>
                                                handleClick(borderCountry)
                                            }
                                        >
                                            {borderCountry?.name}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;
