import {configureStore} from '@reduxjs/toolkit';
import jobSlice from './reducers/jobSlice';
import userSlice from './reducers/userSlice';
import notificationSlice from './reducers/notificationSlice';

export const store = configureStore({
    reducer: {
        job: jobSlice,
        user:userSlice,
        notification: notificationSlice        
    }
})