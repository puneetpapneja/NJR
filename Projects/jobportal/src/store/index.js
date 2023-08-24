import {configureStore} from '@reduxjs/toolkit';
import jobSlice from './reducers/jobSlice';

const store = configureStore({
    reducer: {
        job: jobSlice
    }
})
export default store