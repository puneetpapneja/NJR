import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "../store/Reducer/jobSlice";
import postJobSlice from "../store/Reducer/postJobSlice";
import userRegisterSlice from "../store/Reducer/userRegisterSlice";

export const store = configureStore({
  reducer: {
    job: jobSlice,
    postJob: postJobSlice,
    userRegistration: userRegisterSlice,
  },
});