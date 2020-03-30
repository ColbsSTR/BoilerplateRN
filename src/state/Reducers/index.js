import { combineReducers, createStore } from 'redux';
import addOne from './addOne';

const AppReducers = combineReducers({
    addOne
});

const store = createStore(AppReducers);

export default store;