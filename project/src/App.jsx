import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryCard from "./components/countryCards/CountryCard";
import Navbar from "./components/NavBar/Navbar";
import Searchbar from "./components/SearchBar/Searchbar";
import { useDarkMode } from "./context/DarkModeContext";
import "./index.css";
import CountryDetail from "./components/countryDetails/CountryDetail";
import { useEffect, useState } from "react";
import data from "./data";

const App = () => {
  const { darkMode } = useDarkMode();
  const [filteredCountries, setFilteredCountries] = useState(data);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Filter function to be used in Searchbar
  const handleSearch = (searchTerm, region) => {
    const filtered = data.filter(
      (country) =>
        (country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          !searchTerm) &&
        (country.region === region || !region)
    );
    setFilteredCountries(filtered);
  };

  return (
    <Router>
      <Navbar />
      <div className="min-h-screen dark:bg-gray-900 bg-gray-100 text-gray-900 dark:text-white">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Searchbar onSearch={handleSearch} />
                <CountryCard countries={filteredCountries} />
              </>
            }
          />
          <Route path="/country/:countryName" element={<CountryDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
