import React from 'react';
import {incrementCount, decrementCount, resetCount} from '../store';
import {connect} from 'react-redux';

class Counter extends React.Component {
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
    console.log(this.props)
    return (
      <div>
        <h1>Count: </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const {count} = state;
  return {count}
}


export default connect(mapStateToProps)(Counter)
