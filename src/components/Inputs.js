import React, { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const Inputs = ({ countriesData, handleChange, value }) => {
    const dark = useTheme().dark;
    const regions = [];
    countriesData.forEach(country => {
        if (regions.includes(country.region)) {
            return;
        }
        if (country.region === "") {
            return;
        }

        regions.push(country.region);
    });

    const classes = {
        wrapper: "pt-8 py-4 bg-lightgray",
        form: "max-w-7xl mx-auto flex justify-between",
        search: "relative text-darkgray",
        searchInput: "p-4 pl-16 shadow rounded-md w-96 bg-white",
        select: "w-56 text-darkgray",
        selectTop:
            "bg-white rounded-md shadow p-4 flex justify-between align-center w-full",
        icon: "transform translate-y-1 ",
        searchIcon: "absolute left-8 top-1/2 transform -translate-y-1/2",
        options:
            "flex flex-col absolute z-10 bg-white w-56 mt-2 py-2 rounded-md shadow",
        option: "appearance-none cursor-pointer",
        optionLabel: "cursor-pointer hover:bg-lightgray px-6 py-2",
    };
    const darkClasses = {
        wrapper: "pt-8 py-4 bg-darkbluebg",
        search: "relative text-white",
        searchInput: "p-4 pl-16 shadow rounded-md w-96 bg-darkblue",
        selectTop:
            "bg-darkblue rounded-md shadow p-4 flex justify-between align-center w-full text-white",
        options:
            "flex flex-col absolute z-10 bg-darkblue w-56 mt-2 py-2 rounded-md shadow text-white",
        optionLabel: "cursor-pointer hover:bg-darkbluebg px-6 py-2",
    };
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={dark ? darkClasses.wrapper : classes.wrapper}>
            <form className={classes.form}>
                <div className={dark ? darkClasses.search : classes.search}>
                    <input
                        type="text"
                        name="search"
                        className={
                            dark ? darkClasses.searchInput : classes.searchInput
                        }
                        placeholder="Search for a country..."
                        onChange={e => handleChange(e)}
                    />
                    <i className={classes.searchIcon}>
                        <FaSearch />
                    </i>
                </div>

                <div className={classes.select}>
                    <button
                        type="button"
                        className={
                            dark ? darkClasses.selectTop : classes.selectTop
                        }
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Filter by region
                        <i className={classes.icon}>
                            <FaChevronDown />
                        </i>
                    </button>
                    {isOpen && (
                        <div
                            className={
                                dark ? darkClasses.options : classes.options
                            }
                        >
                            {regions.map(region => (
                                <>
                                    <input
                                        type="radio"
                                        name="region"
                                        id={region}
                                        value={region}
                                        className={classes.option}
                                        onClick={e => {
                                            handleChange(e);
                                            setIsOpen(false);
                                        }}
                                    />
                                    <label
                                        className={
                                            dark
                                                ? darkClasses.optionLabel
                                                : classes.optionLabel
                                        }
                                        for={region}
                                    >
                                        {region}
                                    </label>
                                </>
                            ))}
                            <input
                                type="radio"
                                name="region"
                                id="all"
                                value="all"
                                className={classes.option}
                                onClick={e => {
                                    handleChange(e);
                                    setIsOpen(false);
                                }}
                            />
                            <label
                                className={
                                    dark
                                        ? darkClasses.optionLabel
                                        : classes.optionLabel
                                }
                                for="all"
                            >
                                All Countries
                            </label>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Inputs;
