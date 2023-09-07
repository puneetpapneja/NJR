import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./reducers/jobSlice";
import userSlice from "./reducers/usrSlice";

export const store = configureStore({
  reducer: {
    job: jobSlice,
    user: userSlice,
  },
});
