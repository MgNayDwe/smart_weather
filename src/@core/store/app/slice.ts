import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppModel } from "../../models/app.models";

const initialAppState:AppModel={
    darkMode:false,
    isLoading: true,
}
const appSlice=createSlice({
    name:'app',
    initialState:initialAppState,
    reducers:{
        setDarkMode(state,action:PayloadAction<AppModel>){
            state.darkMode=action.payload.darkMode;
        },
        disableLoading(state, action:PayloadAction<boolean>){
            state.isLoading = action.payload;
        }
    }
})
export default appSlice;