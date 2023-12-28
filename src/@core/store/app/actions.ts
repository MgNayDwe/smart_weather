import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import AppSlice from "./slice";
export const appActions = AppSlice.actions

export const isDarkMode = ():ThunkAction<void,RootState,unknown,AnyAction> => {
    return async(dispatch,getState)=>{
        const state = getState();
    }
}