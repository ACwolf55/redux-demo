import { combineReducers,createStore,applyMiddleware } from "redux";
import  promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import NameReducer from './NameReducer'

//Notice that we have the store & the root reducer in the same file here.

const rootReducer = combineReducers({
    NameReducer:NameReducer
})

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(promiseMiddleware))
  )