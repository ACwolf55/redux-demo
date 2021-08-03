import { combineReducers,createStore,applyMiddleware } from "redux";
import  promiseMiddleware from 'redux-promise-middleware'
import NameReducer from './NameReducer'

const rootReducer = combineReducers({
    name: NameReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))