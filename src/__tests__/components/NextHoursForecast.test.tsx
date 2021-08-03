import React from 'react';
import { render, getByTestId, getAllByAltText, getAllByRole} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { NextHoursForecast, IProps} from '../../components/NextHoursForecast';
import { weatherData } from '../../services/fakeWeatherData';

function renderNextHoursForecastComponent(props : Partial<IProps> = {}) {
  const defaultProps = {
    weatherData,
  }
  
  return render(<NextHoursForecast {...defaultProps} {...props} />);
}

describe('Forecast of the next 24 hours', () => {
  it('should show the week day name + day', () => {
    const { getByTestId } = renderNextHoursForecastComponent();

    const weekDay = getByTestId('week-day');

    expect(weekDay.textContent).toBe('Saturday, 01');
  });

  it('should show forecast of the next 24 hours', () => {
    const { getByTestId } = renderNextHoursForecastComponent();

    const nextHoursForecast = getByTestId('next-hours-forecast');

    expect(nextHoursForecast.children).toHaveLength(24);
  });

  it('should show the hour of the forecast', () => {
    const { getAllByTestId } = renderNextHoursForecastComponent();

    const hourOfForecast = getAllByTestId('hour-of-forecast');

    expect(hourOfForecast[0].textContent).toBe('00:00');
  });
  
  it('should show the condition image and alt text of the forecast', () => {
    const { getAllByTestId } = renderNextHoursForecastComponent();

    const hourCondition = getAllByTestId('hour-condition');

    expect(hourCondition[0]).toHaveAttribute('src', 'https://cdn.weatherapi.com/weather/64x64/night/116.png');
    expect(hourCondition[0]).toHaveAttribute('alt', 'rain');
  });

  it('should show the temperature of the forecast', () => {
    const { getAllByTestId } = renderNextHoursForecastComponent();

    const hourTemperature = getAllByTestId('hour-temperature');

    expect(hourTemperature[0].textContent).toBe('4°');
  });
})