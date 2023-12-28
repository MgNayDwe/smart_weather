import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import locationSlice from "./slice";
import { RootState } from "..";
import { Coords } from "../../models/location.models";

export const locationActions = locationSlice.actions;

export const fetchCurrentLocation = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        dispatch(locationActions.setCurrentLocation({ latitude, longitude }));
      });
    }
  };
};
