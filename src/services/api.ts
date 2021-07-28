import axios from 'axios';

import { unifyApiData } from './unifyApiData';

export default async function getWeatherData(lat: string, lon: string) {
  
  const weatherApiPath = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${lat},${lon}&days=3&aqi=no&alerts=no
  `;
  
  const tomorrowIoPath = `https://api.tomorrow.io/v4/timelines?location=${lat},${lon}&fields=temperature,weatherCode&timesteps=1h&units=metric&apikey=${process.env.REACT_APP_TOMORROW_IO_KEY}`;

  // If cant reach first api, will try to use de second one
  const apiData : any = await axios.get(weatherApiPath)
    .then(response => {
      if (response && response.status === 200) {
        return response;
      }
    })
    .catch(err => console.log(err))
    ||
    await axios.get(tomorrowIoPath)
      .then(response => {
        if(response && response.status === 200) {
          return response;
        }
      })
      .catch(err => console.log(err));

  const weatherData = unifyApiData(apiData);
  console.log(weatherData); // TEMP
  
  return weatherData;
}

getWeatherData('-26.7851281','-51.0184181') // TEMP

