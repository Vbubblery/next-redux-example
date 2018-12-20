import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';

import * as T from './lib/actionTypes';

const initialState = {
  counter:{
    count:0,
    update:10,
  },
};

// Reducers
const countReducer = (state = initialState, action) => { // state include the current state value.
  switch (action.type) {
    case T.counterActionTypes.INCREMENT:
      return {...state, counter:{...state.counter,count:action.count}}
    case T.counterActionTypes.DECREMENT:
      return {...state, counter:{...state.counter,count:action.count}}
    case T.counterActionTypes.RESET:
      return {...state, counter:initialState.counter}
    default: return state
  }
}

const reducers = combineReducers({
  counter:countReducer, //the key mush be the same as the key of state's key.
});

//Actions
export const incrementCount = (props) => dispatch => {
  return dispatch({ type: T.counterActionTypes.INCREMENT, count:props.count })
}
export const decrementCount = (props) => dispatch => {
  return dispatch({ type: T.counterActionTypes.DECREMENT, count:props.count })
}
export const resetCount = (props) => dispatch => {
  return dispatch({ type: T.counterActionTypes.RESET })
}

export const initializeStore = (initialState = initialState) => {
  return createStore(countReducer, initialState,composeWithDevTools(applyMiddleware(promiseMiddleware)))
}
