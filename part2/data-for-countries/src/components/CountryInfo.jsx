import countriesService from "../services/countries";
import { useState, useEffect } from "react";

const CountryInfo = ({ countryName }) => {
  const [countryInfo, setCountryInfo] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    countriesService.getCountry(countryName).then((data) => {
      setCountryInfo(data);
      countriesService
        .getWeather(data.capitalInfo.latlng[0], data.capitalInfo.latlng[1])
        .then((weatherData) => {
          setWeatherInfo(weatherData);
          setIcon(weatherData.weather[0].icon);
        });
    });
  }, [countryName]);

  if (!countryInfo) {
    return null;
  }

  return (
    <div>
      <h1>{countryInfo.name.common}</h1>
      <div>capital {countryInfo.capital}</div>
      <div>area {countryInfo.area}</div>
      <h3>languages:</h3>
      <ul>
        {Object.values(countryInfo.languages).map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      <img
        src={countryInfo.flags.png}
        width={150}
        alt={`Flag of ${countryInfo.name.common}`}
      />
      {weatherInfo && (
        <>
          <h2>Weather in {countryInfo.capital}</h2>
          <div>temperature {weatherInfo.main.temp} Celcius</div>
          {icon && (
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="Weather icon"
            />
          )}
          <div>wind {weatherInfo.wind.speed} m/s</div>
        </>
      )}
    </div>
  );
};

export default CountryInfo;
