export interface WeatherModel {
  selectForeCast: CurrentWeatherModel;
  hourlyForeCast: HoulyWeatherModel[];
  dailyForeCast:[];
}
export interface CurrentWeatherModel {
  time: String;
  temperature2m: Number;
  isDay: Number;
  rain: Number;
  showers: Number;
  snowfall: Number;
  cloudCover: Number;
  windSpeed10m: Number;
  windDirection10m: Number;
  timezone: String | null;
}
export interface HoulyWeatherModel {
  temperature_2m: Number;
  rain: Number;
  showers: Number;
  snowfall: Number;
  snow_depth: Number;
  cloud_cover_low: Number;
  cloud_cover_mid: Number;
  cloud_cover_high: Number;
  visibility: Number;
  wind_speed_80m: Number;
  wind_direction_80m: Number;
  temperature_80m: Number;
  time: String;
}
export interface DailyWeatherModel {
  time: string;
  sunries: number;
  sunset: number;
  daylightDuration: number;
  sunshineDuration: number;
  rainSum: number;
  showersSum: number;
  snowfallSum: number;
}
