import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

const getCountries = () => {
  const request = axios.get(`${baseUrl}/all`);
  return request.then((response) => response.data);
};

const getCountry = (country) => {
  const request = axios.get(`${baseUrl}/name/${country.toLowerCase()}`);
  return request.then((response) => response.data);
};
const getWeather = (lat, lon) => {
  const api_key = import.meta.env.VITE_SOME_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
  const request = axios.get(url);
  return request.then((response) => response.data);
};

export default { getCountries, getCountry, getWeather };
