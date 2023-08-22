import {configureStore} from '@reduxjs/toolkit';
import jobSlice from './reducers/jobslice';

export const store = configureStore({
    reducer: {
        job: jobSlice
    }
})