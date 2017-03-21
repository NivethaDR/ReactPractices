import {combineReducers} from "redux";
import {countreducer} from "../reducer/countreducer";

const rootReducer = combineReducers({
        counter:countreducer
    });

export default rootReducer;