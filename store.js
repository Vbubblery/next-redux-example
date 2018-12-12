import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
const initialState = {
  count:0,
};

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
};

// Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {count:state.count + 1})
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {count:state.count - 1})
    case actionTypes.RESET:
      return Object.assign({}, state, {count: initialState.count})
    default: return state
  }
}

//Actions
export const incrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.INCREMENT })
}
export const decrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.DECREMENT })
}
export const resetCount = () => dispatch => {
  return dispatch({ type: actionTypes.RESET })
}

export const initializeStore = (initialState = initialState) => {
  return createStore(reducer, initialState,applyMiddleware(thunkMiddleware))
}
