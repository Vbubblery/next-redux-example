import React from 'react';
import Counter from '../components/counter';
import Link from 'next/link'
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
      <>
      <Link href="/"><a>index</a></Link>
      <Counter />
      </>
    )
  }
}

export default Index
