import data from "../../data";
import { CiSearch } from "react-icons/ci";
import { useDarkMode } from "../../context/DarkModeContext";

const Searchbar = () => {
  const { darkMode } = useDarkMode();

  // Get unique regions for the dropdown
  const uniqueRegions = [...new Set(data.map((item) => item.region))];

  return (
    <div
      className={`  flex justify-between items-center p-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Search Input */}
      <label
        htmlFor="country"
        className={`inline-flex items-center p-3 w-2/6 rounded-lg shadow-md ${
          darkMode ? "bg-gray-700" : "bg-white"
        }`}
      >
        <CiSearch
          className={`mx-1 ${darkMode ? "text-gray-300" : "text-gray-500"}`}
        />
        <input
          className="ml-3 w-full bg-transparent outline-none placeholder-gray-500"
          type="search"
          name="country"
          id="country"
          placeholder="Search for a country..."
        />
      </label>

      {/* Region Filter Dropdown */}
      <div>
        <select
          className={`p-3 rounded-lg shadow-md outline-none ${
            darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
          }`}
          name="region"
          id="region"
        >
          <option value="" disabled selected>
            Filter by Region
          </option>
          {uniqueRegions.map((region) => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Searchbar;
