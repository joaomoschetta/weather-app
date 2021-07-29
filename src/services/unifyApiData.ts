/*
  This functionality was made to get easier in the if
  future new alternative apis been add, this must put
  all apis in one pattern 
*/

import { AxiosResponse } from 'axios';


// Main weather data
interface IForecastCondition {
  text: string | any;
  icon: string | any;
}

interface IForecastHour {
  time: string;
  temperatureInCelsius: number;
  condition: IForecastCondition;
}

export interface IForecast {
  date: string;
  minCelsiusTemperature: number;
  maxCelsiusTemperature: number;
  condition: IForecastCondition;
  hour: IForecastHour[];
};

export interface IWeatherDataNow {
  temperatureInCelsius: number;
  condition: IForecastCondition;
}

export interface IWeatherDataToday {
  minCelsiusTemperature: number;
  maxCelsiusTemperature: number;
}

export interface IWeatherData {
  now: IWeatherDataNow;
  today: IWeatherDataToday;
  forecast: IForecast[];
};

// API: weatherApi
interface IWeatherApiDayForecastHour {
  time: string;
  temp_c: number;
  condition: IForecastCondition;
}

interface IWeatherApiDayForecast {
  date: string;
  day: {
    mintemp_c: number;
    maxtemp_c: number;
    condition: IForecastCondition;
  };
  hour: IWeatherApiDayForecastHour[];
}

function weatherApiUnify(rawData : AxiosResponse) {
  const data = rawData.data;
  const currentCondition = data.current.condition;
  const forecast = data.forecast;
  const todayForecast = forecast.forecastday[0].day;

  const dailyForecast = forecast.forecastday.map((value : IWeatherApiDayForecast) => {
    const dailyForecastHour = value.hour.map((value) : IForecastHour => {
      return {
        time: value.time,
        temperatureInCelsius: value.temp_c,
        condition: value.condition,
      } as IForecastHour
    });

    return {
      date: value.date,
      minCelsiusTemperature: value.day.mintemp_c,
      maxCelsiusTemperature: value.day.maxtemp_c,
      condition: value.day.condition,
      hour: dailyForecastHour,
    } as IForecast;
  })

  const weatherData : IWeatherData = {
    now: {
      temperatureInCelsius: Math.round(data.current.temp_c),
      condition: {
        text: currentCondition.text,
        icon: currentCondition.icon,
      }
    },
    today: {
      minCelsiusTemperature: Math.round(todayForecast.mintemp_c),
      maxCelsiusTemperature: Math.round(todayForecast.maxtemp_c),
    },
    forecast: dailyForecast
  };

  return weatherData;
}

function unifyApiData(rawData: AxiosResponse<object>) {
  const url = String(rawData.config.url);

  // if new alternative api been added, add new regex test and case for switch
  const weatherApiRegex = /weatherapi/;

  switch (true) {
    case weatherApiRegex.test(url):
      return weatherApiUnify(rawData);
  }
};

export { unifyApiData };