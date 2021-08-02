/*
  simulate api response to use in tests
*/

import { IWeatherData } from './unifyApiData';

export const weatherData : IWeatherData = {
  now: {
    temperatureInCelsius: 21,
    condition: {
      text: 'rain',
      icon: 'https://cdn.weatherapi.com/weather/64x64/night/116.png',
    }
  },
  today: {
    minCelsiusTemperature: 18,
    maxCelsiusTemperature: 20,
  },
  forecast: Array(3).fill({
    date: '2021-08-01',
    maxCelsiusTemperature: 19,
    minCelsiusTemperature: 17,
    condition: {
      text: 'rain',
      icon: 'https://cdn.weatherapi.com/weather/64x64/night/116.png',
    },
    hour: Array(24).fill({
      time: '2021-08-01 00:00',
      temperatureInCelsius: 4,
      condition:{
        text: 'rain',
        icon: 'https://cdn.weatherapi.com/weather/64x64/night/116.png',
      }
    })
  })
}