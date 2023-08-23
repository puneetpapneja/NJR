import {configureStore} from '@reduxjs/toolkit';
import jobSlice from './reducer/jobSlice';
import RegSlice from './reducer/RegSlice';
import userSlice from './reducer/getUser'

export const store = configureStore({
    reducer: {
        job: jobSlice,
        createReg:RegSlice,
        getuser:userSlice
        
    }
})