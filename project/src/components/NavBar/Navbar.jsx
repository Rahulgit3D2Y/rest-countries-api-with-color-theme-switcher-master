import { CiDark } from "react-icons/ci";
import { useDarkMode } from "../../context/DarkModeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center justify-between bg-red-300 p-4 shadow-md dark:bg-gray-800">
      <div className="font-bold text-lg text-gray-900 dark:text-white">
        Where in the World?
      </div>
      <button
        onClick={toggleDarkMode}
        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md"
      >
        <CiDark />
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Navbar;
