import React, { useEffect } from "react";
import HistoricalWeather from "./@app/HistoricalWeather";
import WeatherForecast from "./@app/WeatherForecast";
import { useAppDispatch, useAppSelector } from "./@core/hooks";
import { fetchCurrentLocation } from "./@core/store/location/actions";
import { syncWeather } from "./@core/store/weather/actions";

const App = () => {
  const loadingStatus = useAppSelector((state) => state.app.isLoading);
  const currentForeCast = useAppSelector(
    (state) => state.weather.selectForeCast
  );
  const dailyHistories = useAppSelector(
    (state) => state.weather.dailyForeCast
  );
  const { latitude, longitude } = useAppSelector(
    (state) => state.location.currentLocation
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (loadingStatus) {
      dispatch(fetchCurrentLocation());
      if (latitude !== 0 && longitude !== 0) {
        dispatch(syncWeather());
      }
    }
  });
  return loadingStatus ? (
    <div className="flex h-screen w-100 items-center justify-center text-xl">
      Please allow location at browser to get weather data!
    </div>
  ) : (
    <div className="flex flex-row h-screen">
      <HistoricalWeather foreCastData={currentForeCast} dailyData={dailyHistories}/>
    </div>
  );
};
export default App;
