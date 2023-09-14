import {combineReducers, configureStore} from '@reduxjs/toolkit';
import jobSlice from './Reducers/jobSlice';
import userSlice from './Reducers/userSlice';
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist';
const persistConfig={
    key: "root",
    version:1,
    storage
}
const reducer=combineReducers({
    job: jobSlice,
    user: userSlice
})
const persistedReducer=persistReducer(persistConfig,reducer);
const store = configureStore({
    reducer: persistedReducer
})
export default store;