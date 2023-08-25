import {configureStore} from '@reduxjs/toolkit';
import jobSlice from './reducers/JobSlice';
import userSlice from './reducers/userregisterSlice';
import notificationSlice from './reducers/notificationSlices';
export const store = configureStore({
    reducer: {
        job: jobSlice,
        user:userSlice,
        notification: notificationSlice
        
    }
})