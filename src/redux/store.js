import { legacy_createStore as createStore, combineReducers } from 'redux';
import { userReducer } from './Reducers/UserReducer';
import userReduce from './slices/userSlice';
const rootReducer = combineReducers({ user: userReduce, userReducer });
const store = createStore(rootReducer);

export default store;
