import {configureStore} from '@reduxjs/toolkit';
import jobSlice from './reducer/jobSlice';
import userSlice from './reducer/userSlice';
const store = configureStore({
    reducer: {
        job: jobSlice,
       user: userSlice
    }
})
export default store;