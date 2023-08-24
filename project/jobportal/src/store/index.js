import {configureStore} from '@reduxjs/toolkit';
import userSlice from './reducers/userregisterSlice';

export const store = configureStore({
    reducer: {

        user:userSlice
        
    }
})