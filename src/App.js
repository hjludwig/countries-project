import React, { useEffect, useState } from "react";
import Countries from "./components/Countries";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Inputs from "./components/Inputs";

const fetchData = async url => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

function App() {
    const [countries, setCountries] = useState([]);
    const [countriesData, setCountriesData] = useState();
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState("");
    const [singleCountry, setSingleCountry] = useState();

    useEffect(() => {
        setLoading(true);
        fetchData("https://restcountries.eu/rest/v2/all").then(data => {
            setCountriesData(data);
            setCountries(data);
            setLoading(false);
        });
    }, []);

    const handleChange = e => {
        console.log(e.target);
        if (e.target.name === "region") {
            const selected = e.target.value;
            if (selected === "all") {
                setCountries(countriesData);
                return;
            }
            setCountries(
                countriesData.filter(country => country.region === selected)
            );
        }
        if (e.target.name === "search") {
            setValue(e.target.value);
            setCountries(
                countriesData.filter(country => {
                    const name = country.name.toLowerCase();
                    const term = value.toLowerCase();
                    return name.includes(term);
                })
            );
        }
    };
    return (
        <ThemeProvider>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="min-h-screen">
                    <Header />
                    {!singleCountry && (
                        <Inputs
                            countriesData={countriesData}
                            handleChange={handleChange}
                            value={value}
                        />
                    )}
                    <Countries
                        countriesData={countriesData}
                        countries={countries}
                        singleCountry={singleCountry}
                        setSingleCountry={setSingleCountry}
                    />
                </div>
            )}
        </ThemeProvider>
    );
}

export default App;
