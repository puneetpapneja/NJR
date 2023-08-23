import { configureStore } from '@reduxjs/toolkit'

import jobSlice  from './reducers/jobSlice'
import userSlice from './reducers/userSlice';


const store = configureStore({
    reducer: {
        job: jobSlice
    },
})

export default store;