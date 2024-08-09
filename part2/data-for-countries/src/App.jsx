import { useState, useEffect } from "react";
import countriesService from "./services/countries";
import Notification from "./components/Notification";
import SearchField from "./components/SearchField";
import CountryInfo from "./components/CountryInfo";

const Country = ({ countryName, handleShowInfo }) => {
  return (
    <div>
      {countryName}
      <button onClick={handleShowInfo}>show</button>
    </div>
  );
};

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

  const handleSearchInput = (event) => {
    const newInput = event.target.value;
    setSearchInput(newInput);

    const newCountriesToShow = countries.filter((c) =>
      c.toLowerCase().includes(newInput.toLowerCase())
    );
    setCountriesToShow(newCountriesToShow);
  };
  const handleShowInfo = (countryName) => {
    setCountriesToShow([countryName]);
  };

  useEffect(() => {
    countriesService.getCountries().then((data) => {
      const listOfCountries = data.map((country) => country.name.common);
      setCountries(listOfCountries);
    });
  }, []);

  const renderResult = () => {
    if (searchInput === "") {
      return null;
    }

    if (countriesToShow.length > 10) {
      return <Notification />;
    }

    if (countriesToShow.length === 1) {
      return <CountryInfo countryName={countriesToShow[0]} />;
    }

    return countriesToShow.map((c) => (
      <Country
        key={c}
        countryName={c}
        handleShowInfo={() => handleShowInfo(c)}
      />
    ));
  };

  return (
    <div>
      <SearchField
        handleSearchInput={handleSearchInput}
        searchInput={searchInput}
      />

      {renderResult()}
    </div>
  );
};

export default App;
