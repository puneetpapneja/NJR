import {configureStore} from '@reduxjs/toolkit';
import jobSlice from './reducer/jobSlice';
import userSlice from './reducer/userSlice';

export const store = configureStore({
    reducer: {
        job: jobSlice,
        user:userSlice
        
    }
})