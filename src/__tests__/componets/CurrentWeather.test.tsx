import React from 'react';
import { findByTestId, render, screen } from '@testing-library/react';

import { CurrentWeather, IProps } from '../../components/CurrentWeather';

function renderCurrentWeatherComponent( props : Partial<IProps> = {} ) {
  const defaultProps : IProps = {
    now: {
      temperatureInCelsius: 21,
      condition: {
        text: 'rain',
        icon: 'https://cdn.weatherapi.com/weather/64x64/night/116.png',
      }
    },
    today: {
      minCelsiusTemperature: 15,
      maxCelsiusTemperature: 22,
    }
  };

  return render(<CurrentWeather {...defaultProps} {...props} />)
}

describe('current weather component', () => {

  it('should show the current temperature', () => {
    const { getByTestId } = renderCurrentWeatherComponent();

    const currentTemperature = getByTestId('current-temperature');

    expect(currentTemperature.textContent).toBe('21°C');
  })

  it('should show current weather condition in image and condition text as alt', () => {
    const { getByTestId } = renderCurrentWeatherComponent();

    const currentCondition = getByTestId('current-condition');

    expect(currentCondition).toHaveAttribute('src', 'https://cdn.weatherapi.com/weather/64x64/night/116.png');
    expect(currentCondition).toHaveAttribute('alt', 'rain');
  })

  it('should show the min and max temperature of the day', () => {
    const { getByTestId } = renderCurrentWeatherComponent();

    const minTemperature = getByTestId('max-temperature');
    const maxTemperature = getByTestId('min-temperature');

    expect(minTemperature.textContent).toBe('15°');
    expect(maxTemperature.textContent).toBe('22°');
  })
})