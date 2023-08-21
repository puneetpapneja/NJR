import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./reducers/jobSlice";

export const store = configureStore({
  reducer: {
    job: jobSlice,
  },
});
