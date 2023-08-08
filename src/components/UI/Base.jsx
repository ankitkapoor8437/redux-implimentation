import React from 'react'
import Child from './Child'
import { useSelector } from 'react-redux'

const Base = () => {
  const count = useSelector((c) => c.counter.value);
  return (
    <div>
      <h2>{count}</h2>
      <Child />
    </div>
  )
}

export default Base