import { createSlice } from "@reduxjs/toolkit";

const businessSlice = createSlice({
  name: "business",
  initialState: {},
  reducers: {
    setAppConfig: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setAppConfig } = businessSlice.actions;

export default businessSlice.reducer;
