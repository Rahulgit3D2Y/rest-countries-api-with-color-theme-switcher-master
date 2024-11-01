import { useEffect } from "react";
import CountryCard from "./components/countryCards/CountryCard";
import Navbar from "./components/NavBar/Navbar";
import Searchbar from "./components/SearchBar/Searchbar";
import { useDarkMode } from "./context/DarkModeContext";
import "./index.css";

const App = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <>
      <Navbar />
      <div className="min-h-screen dark:bg-gray-900 bg-gray-100 text-gray-900 dark:text-white">
        <Searchbar />
        <CountryCard />
      </div>
    </>
  );
};

export default App;
