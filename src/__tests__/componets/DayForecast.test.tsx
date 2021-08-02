import React from "react";
import { render, getByTestId, getAllByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { DayForecast, IProps } from '../../components/DayForecast';
import { weatherData } from '../../services/fakeWeatherData';

function renderDayForecastComponent(props : Partial<IProps> = {}) {
  const defaultProps = {
    weatherData,
  }

  return render(<DayForecast {...defaultProps} {...props} />);
}

describe('Forecast of the next days', () => {
  it('should show 3 days forecast', () => {
    const { getAllByTestId } = renderDayForecastComponent();

    const forecast = getAllByTestId('abbreviation');

    expect(forecast.length).toBe(3);
  });

  it('should show week day abbreviation', () => {
    const { getAllByTestId } = renderDayForecastComponent();

    const abbreviation = getAllByTestId('abbreviation');

    expect(abbreviation[0].textContent).toBe('Sat');
  });

  it('should show condition image with alt text', () => {
    const { getAllByTestId } = renderDayForecastComponent();

    const dayCondition = getAllByTestId('day-condition');

    expect(dayCondition[0].getAttribute('src')).toBe('https://cdn.weatherapi.com/weather/64x64/night/116.png');
    expect(dayCondition[0].getAttribute('alt')).toBe('rain')
  });

  it('should show max and min day temperature', () => {
    const { getAllByTestId } = renderDayForecastComponent();

    const maxDayTemperature = getAllByTestId('max-day-temperature');
    const minDayTemperature = getAllByTestId('min-day-temperature');

    expect(maxDayTemperature[0].textContent).toBe('19');
    expect(minDayTemperature[0].textContent).toBe('17');
  });
})