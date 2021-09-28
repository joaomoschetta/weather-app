import React, { useState, useEffect } from "react";

import { CurrentWeather } from "components/CurrentWeather";
import { DayForecast } from "components/DayForecast";
import { NextHoursForecast } from "components/NextHoursForecast";
import { Footer } from "components/Footer";

import getWeatherData from '../services/api';

import '../styles/landing-page.scss';

import { IWeatherData } from '../services/unifyApiData';

export function LandingPage() {
  const [weatherData, setWeatherData] = useState<IWeatherData>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async position => {
        const coordinates = position.coords;
        const latitude = String(coordinates.latitude);
        const longitude = String(coordinates.longitude);

        setWeatherData(await getWeatherData(latitude, longitude));
      },
      error => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="landing-page">
      {weatherData ? (
        <>
          <main>
            <div className="top-main-content">
              <CurrentWeather
                now={weatherData.now}
                today={weatherData.today}
              />
              <DayForecast
                weatherData={weatherData}
              />
            </div>
            <NextHoursForecast
              weatherData={weatherData}
            />
          </main>
          <Footer />
        </>
      ) : (
        // If don't return data, load.
        <div className="loader-allow-location">
          <div className="loader"></div>
          <h2>Allow location</h2>
        </div>
      )}
    </div>
  )
}