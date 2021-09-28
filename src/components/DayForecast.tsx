import React from "react";
import { IWeatherData } from "services/unifyApiData";

import '../styles/day-forecast.scss'

export interface IProps {
  weatherData: IWeatherData
};

export function DayForecast(props : IProps) {
  const forecast = props.weatherData.forecast;

  function getWeekDayName(date: string) {
    const dayDate = new Date(date);
    const weekDayName = String(dayDate).slice(0, 3);

    return weekDayName;
  }

  return (
    <div className="day-forecast">
      <ul>
        {forecast.map((dayForecast, index) => {
          return (
            <li key={index}>
              <p data-testid="abbreviation">{getWeekDayName(dayForecast.date)}</p>
              <img
                data-testid="day-condition"
                src={dayForecast.condition.icon}
                alt={dayForecast.condition.text}
              />
              <p data-testid="max-day-temperature">{dayForecast.maxCelsiusTemperature}°</p>
              <p data-testid="min-day-temperature">{dayForecast.minCelsiusTemperature}°</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}