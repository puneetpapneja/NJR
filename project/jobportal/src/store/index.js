import {configureStore} from '@reduxjs/toolkit';
import jobSlice from '../store/reducers/jobSlice'
import userSlice  from './reducers/userSlice';
import notificationSlice from '../store/reducers/notificationSlice';

export const store = configureStore({
    reducer:{
        job:jobSlice,
        user:userSlice,
        notification:notificationSlice
    }
})