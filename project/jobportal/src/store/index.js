import {configureStore} from '@reduxjs/toolkit';
import jobSlice from './reducers/jobslice';
import userSlice  from './reducers/userSlice';
import notificationSlice from './reducers/notificationslice';

export const store = configureStore({
    reducer:{
        job:jobSlice,
        user:userSlice,
        notification:notificationSlice
    }
})