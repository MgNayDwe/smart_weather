import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentWeatherModel, DailyWeatherModel, HoulyWeatherModel, WeatherModel } from "../../models/weather.models";

const initialLocationState: WeatherModel = {
  selectForeCast: {
    temperature2m: 0,
    isDay: 0,
    rain: 0,
    showers: 0,
    snowfall: 0,
    cloudCover: 0,
    windSpeed10m: 0,
    windDirection10m: 0,
    time: "",
  },
  hourlyForeCast: [],
  dailyForeCast: [],
};
const weatherSlice = createSlice({
  name: "weather",
  initialState: initialLocationState,
  reducers: {
    setSelectedForeCast(state, action: PayloadAction<CurrentWeatherModel>) {
      state.selectForeCast = action.payload
    },
    setHourlyForeCast(state, action: PayloadAction<any>){
      state.hourlyForeCast = action.payload
    },
    setDailyForeCast(state, action:PayloadAction<any>){
      state.dailyForeCast = action.payload
    }
  },
});
export default weatherSlice;
