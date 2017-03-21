import countreducer from '../reducer/countreducer'
import { createStore } from "redux";


let initialState = {
        result:0
   
};
const store = createStore(countreducer,initialState);

export default store;