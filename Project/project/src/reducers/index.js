import { combineReducers } from 'redux';
import jobReducer from './jobReducer';

const rootReducer = combineReducers({
    job: jobReducer
});

export default rootReducer;