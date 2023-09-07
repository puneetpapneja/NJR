import {configureStore} from '@reduxjs/toolkit';
import jobSlice from './reducers/jobSlice';
import postJobSlice from "./reducers/postJobSlice";
import userRegisterSlice from "./reducers/userRegisterSlice";
import userValidationSlice from "./reducers/userValidationSlice";

export const store = configureStore({
    reducer: {
        job: jobSlice,
        postJob: postJobSlice,
        userRegistration: userRegisterSlice,
        userValidation: userValidationSlice,
    },
});