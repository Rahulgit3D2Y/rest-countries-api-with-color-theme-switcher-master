import { useDarkMode } from "../../context/DarkModeContext";
import data from "../../data";

const CountryCard = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 justify-items-center">
      {data.map((item) => (
        <div
          key={item.name}
          className={`rounded-lg shadow-md overflow-hidden w-60 h-72 flex flex-col ${
            darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
          }`}
        >
          {/* Flag Section - 50% of the Card */}
          <div
            className="h-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.flag})` }}
          ></div>

          {/* Country Info Section - 50% of the Card */}
          <div className="h-1/2 p-4 flex flex-col justify-center">
            <h2 className="text-lg font-bold mb-2">{item.name}</h2>
            <p>
              <span className="font-semibold">Population:</span>{" "}
              {item.population.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Region:</span> {item.region}
            </p>
            <p>
              <span className="font-semibold">Capital:</span> {item.capital}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryCard;
