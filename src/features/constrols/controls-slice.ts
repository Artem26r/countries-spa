import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Region } from "types";

type ControlSlice = {
  search: string
  region: Region | ''
}

const initialState: ControlSlice = {
  search: "",
  region: "",
};

const controlSlice = createSlice({
  name: "@@controls",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
        state.search = action.payload
    },
    setRegion: (state, action: PayloadAction<Region | ''>) => {
        state.region = action.payload
    },
    clearControls: () => initialState,
  },
});

export const {setSearch,setRegion,clearControls} = controlSlice.actions
export const controlsReducer = controlSlice.reducer


