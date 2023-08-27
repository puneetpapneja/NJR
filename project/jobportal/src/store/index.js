import {configureStore} from '@reduxjs/toolkit';
import jobSlice from './reducers/JobSlices';
import userSlice from './reducers/userregisterSlice';

export const store = configureStore({
    reducer: {
        job: jobSlice,
        user:userSlice
        
    }
})