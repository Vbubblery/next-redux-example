import React from 'react';
import {incrementCount, decrementCount, resetCount} from '../store';
import {connect} from 'react-redux';

class Counter extends React.Component {
  constructor(props){
    super(props);
  }
  increment = () => {
    const {dispatch} = this.props
    dispatch(incrementCount({count:this.props.count+1}))
  }

  decrement = () => {
  const {dispatch} = this.props
  dispatch(decrementCount({count:this.props.count-1}))
  }

  reset = () => {
  const {dispatch} = this.props
  dispatch(resetCount())
  }
  render(){
    return (
      <div>
        <h1>Count: <span>{this.props.count}</span></h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const {counter} = state;
  return counter
}


export default connect(mapStateToProps)(Counter)
