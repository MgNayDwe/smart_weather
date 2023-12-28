import { fetchWeatherApi } from "openmeteo";
import { Coords } from "../models/location.models";
const ApiUrl = "https://api.open-meteo.com/v1/forecast";

const retrieveWeatherData = async (location: Coords) => {
  const params = {
    latitude: location.latitude,
    longitude: location.longitude,
    current: [
      "temperature_2m",
      "is_day",
      "rain",
      "showers",
      "snowfall",
      "cloud_cover",
      "wind_speed_10m",
      "wind_direction_10m",
    ],
    hourly: [
      "temperature_2m",
      "rain",
      "showers",
      "snowfall",
      "snow_depth",
      "cloud_cover_low",
      "cloud_cover_mid",
      "cloud_cover_high",
      "visibility",
      "wind_speed_80m",
      "wind_direction_80m",
      "temperature_80m",
    ],
    daily: [
      "temperature_2m_max",
      "sunrise",
      "sunset",
      "daylight_duration",
      "sunshine_duration",
      "rain_sum",
      "showers_sum",
      "snowfall_sum",
    ],
    timezone: "auto",
  };
  return await fetchWeatherApi(ApiUrl, params);
};
export { retrieveWeatherData };
