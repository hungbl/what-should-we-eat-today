import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import ReducerSpin from './reducer-spin';

const rootReducer = combineReducers({
    routing: routerReducer,
    reducerSpin: ReducerSpin
});

export default rootReducer;