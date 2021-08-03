import React from "react";

import { IWeatherData } from "../services/unifyApiData";

export interface IProps {
  weatherData: IWeatherData;
}

export function NextHoursForecast(props : IProps) {
  const weatherData = props.weatherData;
  const today = weatherData.forecast[0];
  const todayDate = today.date;
  const next24HoursForecast = today.hour;

  function getWeekDayNameAndDay(todayDate : string) {
    const day = todayDate.slice(8, 10); // todayDate format: YYYY-MM-DD

    function getWeekDayNameByDayValue(dayValue : number) {
      const weekDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];

      const weekDayName = weekDays[dayValue];

      return weekDayName;
    }

    const todayDateFormat = new Date(todayDate);
    const dayValue = todayDateFormat.getDay();
    const weekDayName = getWeekDayNameByDayValue(dayValue);

    return `${weekDayName}, ${day}`;
  }
  
  function getHourForecastTime(rawTime : string) {
    // rawTime format: 'YYYY-MM-DD HH:MM'
    const hourForecastTime = rawTime.slice(11, 16); // return HH:MM

    return hourForecastTime;
  }

  return (
    <div className="next-hours-forecast">
      <p data-testid="week-day">{getWeekDayNameAndDay(todayDate)}</p>
      <ul data-testid="next-hours-forecast">
        {next24HoursForecast.map((hourForecast, index) => {
          return (
            <li key={index}>
              <p data-testid="hour-of-forecast">{getHourForecastTime(hourForecast.time)}</p>
              <img
                src={hourForecast.condition.icon}
                alt={hourForecast.condition.text}
                data-testid="hour-condition"
              />
              <p data-testid="hour-temperature">{`${hourForecast.temperatureInCelsius}°`}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
};