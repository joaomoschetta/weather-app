import React from "react";
import { render, getByTestId, getAllByTestId } from '@testing-library/react';

import { DayForecast, IProps } from '../../components/DayForecast';

function renderDayForecastComponent(props : Partial<IProps> = {}) {
  const defaultProps : IProps = {
    day: 'Fri',
    condition: {
      text: 'rain',
      icon: 'https://cdn.weatherapi.com/weather/64x64/night/116.png',
    },
    maxCelsiusTemperature: 21,
    minCelsiusTemperature: 17,
  }

  return render(<DayForecast {...Array(3).fill(defaultProps)} {...props} />);
}

describe('Forecast of the next days', () => {
  it('should show 3 days forecast', () => {
    const { getAllByTestId } = renderDayForecastComponent();

    const forecast = getAllByTestId('abbreviation');

    expect(forecast.length).toBe(3);
  });

  it('should show week day abbreviation', () => {
    const { getByTestId } = renderDayForecastComponent();

    const abbreviation = getByTestId('abbreviation');

    expect(abbreviation.textContent).toBe('Fri');
  });

  it('should show condition image with alt text', () => {
    const { getByTestId } = renderDayForecastComponent();

    const dayCondition = getByTestId('day-condition');

    expect(dayCondition).toHaveAttribute('src', 'https://cdn.weatherapi.com/weather/64x64/night/116.png');
    expect(dayCondition).toHaveAttribute('alt', 'rain');
  });

  it('should show max and min day temperature', () => {
    const { getByTestId } = renderDayForecastComponent();

    const maxDayTemperature = getByTestId('max-day-temperature');
    const minDayTemperature = getByTestId('min-day-temperature');

    expect(maxDayTemperature.textContent).toBe('17');
    expect(minDayTemperature.textContent).toBe('17');
  })
})