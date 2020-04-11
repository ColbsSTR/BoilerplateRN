import { combineReducers, createStore } from 'redux';
import addOne from './addOne';

const AppReducers = combineReducers({
    addOne
});

const appStore = createStore(AppReducers);

export default appStore;