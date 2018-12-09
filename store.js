import { createStore, applyMiddleware } from 'redux';

const initialState = {
  count:0,
};

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
};

// Reducers
const reducer = (state = exampleInitialState, action) => {
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
const incrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.INCREMENT })
}
const decrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.DECREMENT })
}
const resetCount = () => dispatch => {
  return dispatch({ type: actionTypes.RESET })
}

const initializeStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState)
}

module.exports = {incrementCount,decrementCount,resetCount,initializeStore}
