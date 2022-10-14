import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { postReducer } from "./reducers/post"

const reducer = combineReducers({
  post: postReducer
})

export default createStore(reducer, applyMiddleware(thunk))
