import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "./reducers/config";
import menuSlice from "./reducers/menu-content";
import basketSlice from "./reducers/basket";
import searchSlice from "./reducers/search";

const store = configureStore({
  reducer: {
    business: businessSlice,
    menu: menuSlice,
    basket: basketSlice,
    search: searchSlice,
  },
});

export default store;
