import React from 'react';
import { findByTestId, render } from '@testing-library/react';

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
    const { findByTestId } = renderCurrentWeatherComponent();

    expect(findByTestId('current-temperature')).toHaveTextContent('21°C');
  })

  it('should show current weather condition in image and condition text as alt', () => {
    const { findByTestId } = renderCurrentWeatherComponent();

    const currentCondition = findByTestId('current-temperature');

    expect(currentCondition).toHaveAttribute('src', 'https://cdn.weatherapi.com/weather/64x64/night/116.png');
    expect(currentCondition).toHaveAttribute('alt', 'rain');
  })

  it('should show the min and max temperature of the day', () => {
    const { findByTestId } = renderCurrentWeatherComponent();

    const minTemperature = findByTestId('min-temperature');
    const maxTemperature = findByTestId('max-temperature');

    expect(minTemperature).toHaveTextContent('15°');
    expect(maxTemperature).toHaveTextContent('22°');
  })
})