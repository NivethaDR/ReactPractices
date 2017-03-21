import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import updatereducer from './updatereducer';

const rootReducer = combineReducers({
        updatereducer,
        routing: routerReducer
    });

export default rootReducer;