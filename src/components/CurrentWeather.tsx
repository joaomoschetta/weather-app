import { IWeatherDataNow, IWeatherDataToday} from '../services/unifyApiData';

import '../styles/current-weather.scss';

export interface IProps {
  now: IWeatherDataNow;
  today: IWeatherDataToday;
}

export function CurrentWeather(props : IProps) {
  const now = props.now;

  return (
    <div className="current-weather">
      <h1 data-testid="current-temperature">
        {`${props.now.temperatureInCelsius}°C`}
      </h1>
      <div className="down-row">
        <img 
          data-testid="current-condition"
          src={now.condition.icon}
          alt={now.condition.text}
        />

        <div className="vertical-bar"></div>

        <div className="day-min-max-temperature">
          <p data-testid="min-temperature">
            {`${props.today.maxCelsiusTemperature}°`}
          </p>
          <p data-testid="max-temperature">
            {`${props.today.minCelsiusTemperature}°`}
          </p>
        </div>
      </div>
    </div>
  )
}