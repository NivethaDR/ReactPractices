// import {createStore } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';

// import { browserHistory } from 'react-router'


// import rootReducer from '../reducer/';


// const store = createStore(rootReducer);
// export const history = syncHistoryWithStore(browserHistory, store);


// export default store;



import { createStore } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";


import rootReducer from '../reducer/';

const store = createStore(rootReducer);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;