import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appSlice from './app/slice';
import locationSlice from './location/slice';
import weatherSlice from './weather/slice';

export const store = configureStore({
  reducer: {
    app:appSlice.reducer,
    location:locationSlice.reducer,
    weather:weatherSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
