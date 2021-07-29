import { IWeatherDataNow, IWeatherDataToday} from '../services/unifyApiData';

export interface IProps {
  now: IWeatherDataNow;
  today: IWeatherDataToday;
}

export function CurrentWeather(props : IProps) {
  return (
    <div></div>
  )
}