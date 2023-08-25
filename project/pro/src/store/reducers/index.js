import {configureStore} from '@reduxjs/toolkit';
import jobSlice from './jobSlice';
import userSlice from './userSlice';

export const store = configureStore({
    reducer: {
        job: jobSlice,
        user:userSlice
        
    }
})