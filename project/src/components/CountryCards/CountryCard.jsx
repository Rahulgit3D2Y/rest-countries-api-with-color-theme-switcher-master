import { useDarkMode } from "../../context/DarkModeContext";
import { Link } from "react-router-dom";

const CountryCard = ({ countries }) => {
  const { darkMode } = useDarkMode();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 justify-countrys-center">
      {countries.map((country) => (
        <Link
          to={`/country/${encodeURIComponent(country.name)}`}
          key={country.name}
          className={`rounded-lg shadow-md overflow-hidden w-60 h-72 flex flex-col ${
            darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
          }`}
        >
          {/* Flag Section - 50% of the Card */}
          <div
            className="h-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${country.flag})` }}
          ></div>

          {/* Country Info Section - 50% of the Card */}
          <div className="h-1/2 p-4 flex flex-col justify-center">
            <h2 className="text-lg font-bold mb-2">{country.name}</h2>
            <p>
              <span className="font-semibold">Population:</span>{" "}
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p>
              <span className="font-semibold">Capital:</span> {country.capital}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountryCard;
