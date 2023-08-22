import {configureStore} from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice';
import jobSlice from './reducers/jobSlice';

export const store = configureStore({
    reducer: {
        job: jobSlice,
        user:userSlice
        
    }
})