import React, { useEffect, useState } from "react";
import Country from "./components/Country";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";

const fetchData = async url => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

function App() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchData("https://restcountries.eu/rest/v2/all").then(data => {
            setCountries(data);
            setLoading(false);
        });
    }, []);
    return (
        <ThemeProvider>
            <div className="App">
                <Header />
                <ul>
                    {countries.map(country => (
                        <Country country={country} />
                    ))}
                </ul>
            </div>
        </ThemeProvider>
    );
}

export default App;
