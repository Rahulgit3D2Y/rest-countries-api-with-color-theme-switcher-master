import { CiSearch } from "react-icons/ci";
import { useDarkMode } from "../../context/DarkModeContext";
import { useState } from "react";
import data from "../../data";

const Searchbar = ({ onSearch }) => {
  const { darkMode } = useDarkMode();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  // Get unique regions for the dropdown
  const uniqueRegions = [...new Set(data.map((item) => item.region))];

  // Handle input change for search term
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value, selectedRegion); // Call the onSearch function from App
  };

  // Handle change for region selection
  const handleRegionChange = (event) => {
    const value = event.target.value;
    setSelectedRegion(value);
    onSearch(searchTerm, value); // Call the onSearch function from App
  };

  return (
    <div
      className={`flex justify-between items-center p-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
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
          value={searchTerm}
          onChange={handleInputChange} // Listen for changes
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
          value={selectedRegion}
          onChange={handleRegionChange} // Listen for region changes
        >
          <option value="">Filter by Region</option>
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
