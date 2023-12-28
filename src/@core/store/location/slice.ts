import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Coords, LocationModel } from "../../models/location.models";

const initialLocationState: LocationModel = {
  currentLocation: {
    latitude: 0,
    longitude: 0,
  },
};
const locationSlice = createSlice({
  name: "location",
  initialState: initialLocationState,
  reducers: {
    setCurrentLocation(state, action: PayloadAction<Coords>) {
      state.currentLocation = action.payload;
    },
  },
});
export default locationSlice;
