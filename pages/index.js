import React from 'react';
import Counter from '../components/counter';

class Index extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <Counter />
    )
  }
}

export default Index
