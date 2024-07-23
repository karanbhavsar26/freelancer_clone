import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./MainSlice"; // Assuming MainSlice exports a reducer function

const store = configureStore({
  reducer: mainReducer,
});

export default store;
