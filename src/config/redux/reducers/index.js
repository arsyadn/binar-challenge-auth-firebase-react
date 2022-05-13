import { combineReducers } from "redux";
import authReducer from './authReducer';
// import { persistStore, persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    authReducer,
})


export default rootReducer;