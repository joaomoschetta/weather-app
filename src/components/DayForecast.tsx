import React from "react";
import { IWeatherData } from "services/unifyApiData";

export interface IProps {
  weatherData: IWeatherData
};

export function DayForecast(props : IProps) {
  const forecast = props.weatherData.forecast;

  return (
    <div className="day-forecast">
      <ul>
        {forecast.map((dayForecast, index) => {
          return (
            <li key={index}>
              <p data-testid="abbreviation">{dayForecast.date.slice(0, 3)}</p>
              <img
                data-testid="day-condition"
                src={dayForecast.condition.icon}
                alt={dayForecast.condition.text}
              />
              <p data-testid="max-day-temperature">{dayForecast.maxCelsiusTemperature}</p>
              <p data-testid="min-day-temperature">{dayForecast.minCelsiusTemperature}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}