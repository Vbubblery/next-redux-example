import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
const initialState = {
  count:0,
};

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
};

// Reducers
const reducer = (state = initialState, action) => { // state include the current state value.
  switch (action.type) {
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {count:action.count})
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {count:action.count})
    case actionTypes.RESET:
      return Object.assign({}, state, {count:initialState.count})
    default: return state
  }
}

//Actions
export const incrementCount = (props) => dispatch => {
  return dispatch({ type: actionTypes.INCREMENT, count:props.count })
}
export const decrementCount = (props) => dispatch => {
  return dispatch({ type: actionTypes.DECREMENT, count:props.count })
}
export const resetCount = (props) => dispatch => {
  return dispatch({ type: actionTypes.RESET })
}

export const initializeStore = (initialState = initialState) => {
  return createStore(reducer, initialState,composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
