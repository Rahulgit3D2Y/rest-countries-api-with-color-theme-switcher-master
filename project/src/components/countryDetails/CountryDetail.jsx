import { useParams } from "react-router-dom";
import data from "../../data";

const CountryDetail = () => {
  const { countryName } = useParams();

  // Find the country data based on the route parameter
  const country = data.find(
    (item) => item.name.toLowerCase() === countryName.toLowerCase()
  );

  // If country is not found, display a message or navigate back
  if (!country) {
    return <p>Country not found</p>;
  }

  return (
    <div className="p-4 flex flex-col items-start">
      <button onClick={() => window.history.back()}>← Back</button>
      <div className="flex gap-6">
        <img
          src={country.flag}
          alt={country.name}
          className="w-1/2 rounded-lg"
        />
        <div>
          <h1 className="text-2xl font-bold">{country.name}</h1>
          <p>
            <strong>Native Name:</strong> {country.nativeName}
          </p>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Sub Region:</strong> {country.subregion}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
          <p>
            <strong>Top-Level Domain:</strong> {country.topLevelDomain}
          </p>
          <p>
            <strong>Currencies:</strong> {country.currencies.join(", ")}
          </p>
          <p>
            <strong>Languages:</strong> {country.languages.join(", ")}
          </p>
          <p>
            <strong>Border Countries:</strong>
          </p>
          <div className="flex gap-2"></div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
