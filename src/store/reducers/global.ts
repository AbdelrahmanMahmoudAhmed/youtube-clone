import { createSlice } from "@reduxjs/toolkit";

interface LoaderState {
  value: boolean;
}

const initialState = { value: false } as LoaderState;

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    turnOn(state) {
      state.value = true;
    },
    turnOff(state) {
      state.value = false;
    },
  },
});

export const { turnOn, turnOff } = globalSlice.actions;
export default globalSlice.reducer;
