import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    handleSearchTerm: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { handleSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
