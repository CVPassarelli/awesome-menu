import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    changeBasket: (state, { payload }) => {
      const removeExistingItem = state.filter((item) => item.id !== payload.id);
      if (payload.amount === 0) {
        state = [...removeExistingItem];
        return state;
      }
      if (state.some((item) => item.id === payload.id)) {
        const updatedAmount = state.map((item) => {
          if (item.id === payload.id) {
            return { ...item, amount: payload.amount };
          }
          return item;
        });
        state = [...updatedAmount];
        return state;
      }
      state = [...state, payload];
      return state;
    },
    cleanBasket: (state, { payload }) => {
      state = [];
      return state;
    },
  },
});

export const { changeBasket, cleanBasket } = basketSlice.actions;

export default basketSlice.reducer;
