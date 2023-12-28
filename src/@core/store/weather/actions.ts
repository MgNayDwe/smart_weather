import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { retrieveWeatherData } from "../../services/weather.services";
import { range } from "../../utilities/helper";
import weatherSlice from "./slice";
import moment from "moment";
import { appActions } from "../app/actions";

export const weatherActions = weatherSlice.actions;

export const syncWeather = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const location = getState().location.currentLocation;
    if (location.latitude !== 0 && location.longitude !== 0) {
      const responses = await retrieveWeatherData(location);
      const response = responses[0];

      // Attributes for timezone and location
      const utcOffsetSeconds = response.utcOffsetSeconds();
      const timezone = response.timezone();
      
      const timezoneAbbreviation = response.timezoneAbbreviation();
      const latitude = response.latitude();
      const longitude = response.longitude();

      const current = response.current()!;
      const hourly = response.hourly()!;
      const daily = response.daily()!;
      const date = new Date((Number(current.time()) + utcOffsetSeconds) * 1000);
      // Note: The order of weather variables in the URL query and the indices below need to match!
      const hourlyArray = [];
      const dailyArray = [];

      const selectForeCast = {
        time: moment(date).format("MM/DD/YYYY"),
        temperature2m: current.variables(0)!.value(),
        isDay: current.variables(1)!.value(),
        rain: current.variables(2)!.value(),
        showers: current.variables(3)!.value(),
        snowfall: current.variables(4)!.value(),
        cloudCover: current.variables(5)!.value(),
        windSpeed10m: current.variables(6)!.value(),
        windDirection10m: current.variables(7)!.value(),
        timezone: timezone
      };
      const hourlyHistories = {
        time: range(
          Number(hourly.time()),
          Number(hourly.timeEnd()),
          hourly.interval()
        ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        temperature2m: hourly.variables(0)!.valuesArray()!,
        rain: hourly.variables(1)!.valuesArray()!,
        showers: hourly.variables(2)!.valuesArray()!,
        snowfall: hourly.variables(3)!.valuesArray()!,
        snowDepth: hourly.variables(4)!.valuesArray()!,
        cloudCoverLow: hourly.variables(5)!.valuesArray()!,
        cloudCoverMid: hourly.variables(6)!.valuesArray()!,
        cloudCoverHigh: hourly.variables(7)!.valuesArray()!,
        visibility: hourly.variables(8)!.valuesArray()!,
        windSpeed80m: hourly.variables(9)!.valuesArray()!,
        windDirection80m: hourly.variables(10)!.valuesArray()!,
        temperature80m: hourly.variables(11)!.valuesArray()!,
      };
      const dailyHistories = {
        time: range(
          Number(daily.time()),
          Number(daily.timeEnd()),
          daily.interval()
        ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        temperature2mMax: daily.variables(0)!.valuesArray()!,
        sunrise: daily.variables(0)!.valuesArray()!,
        sunset: daily.variables(1)!.valuesArray()!,
        daylightDuration: daily.variables(2)!.valuesArray()!,
        sunshineDuration: daily.variables(3)!.valuesArray()!,
        rainSum: daily.variables(4)!.valuesArray()!,
        showersSum: daily.variables(5)!.valuesArray()!,
        snowfallSum: daily.variables(6)!.valuesArray()!,
      };
      for (let i = 0; i < dailyHistories.time.length; i++) {
        dailyArray.push({
          time: moment(dailyHistories.time[i]).format("ddd"),
          temperature2mMax:
            dailyHistories.temperature2mMax !== null
              ? dailyHistories.temperature2mMax[i]
              : dailyHistories.temperature2mMax,
          sunries:
            dailyHistories.sunrise !== null
              ? dailyHistories.sunrise[i]
              : dailyHistories.sunrise,
          sunset:
            dailyHistories.sunset !== null
              ? dailyHistories.sunset[i]
              : dailyHistories.sunset,
          daylightDuration:
            dailyHistories.daylightDuration !== null
              ? dailyHistories.daylightDuration[i]
              : dailyHistories.daylightDuration,
          sunshineDuration:
            dailyHistories.sunshineDuration !== null
              ? dailyHistories.sunshineDuration[i]
              : dailyHistories.sunshineDuration,
          rainSum:
            dailyHistories.rainSum !== null
              ? dailyHistories.rainSum[i]
              : dailyHistories.rainSum,
          showersSum:
            dailyHistories.showersSum !== null
              ? dailyHistories.showersSum[i]
              : dailyHistories.showersSum,
          snowfallSum:
            dailyHistories.snowfallSum !== null
              ? dailyHistories.snowfallSum[i]
              : dailyHistories.snowfallSum,
        });
      }
      dispatch(weatherActions.setDailyForeCast(dailyArray));
      dispatch(weatherActions.setSelectedForeCast(selectForeCast));
      dispatch(appActions.disableLoading(false));
    }
  };
};
