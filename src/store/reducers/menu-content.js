import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {},
  reducers: {
    setMenuContent: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setMenuContent } = menuSlice.actions;

export default menuSlice.reducer;
