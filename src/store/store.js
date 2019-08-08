import {createStore,applyMiddleware} from 'redux'
import {combineReducers} from 'redux-immutable'
import thunk from 'redux-thunk'
import * as rootReducers from './reducers'
const reducers = combineReducers(rootReducers)
export default createStore(reducers,applyMiddleware(thunk))