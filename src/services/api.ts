import axios from 'axios';

import { unifyApiData } from './unifyApiData';

export default async function getWeatherData(lat: string, lon: string) {
  
  const weatherApiPath = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${lat},${lon}&days=3&aqi=no&alerts=no
  `;

  const apiData : any = await axios.get(weatherApiPath)
    .then(response => {
      if (response && response.status === 200) {
        return response;
      }
    })
    .catch(err => console.log(err))

  const weatherData = unifyApiData(apiData);
  
  return weatherData;
}

