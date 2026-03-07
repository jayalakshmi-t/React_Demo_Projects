/* import {createStore} from 'redux'; */

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';


/* const store = createStore(counterReducer); */

const store = configureStore({
    reducer : {
        counter: counterReducer,
    }
});

export default store;