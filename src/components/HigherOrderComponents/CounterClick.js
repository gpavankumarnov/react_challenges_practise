import React, {useState} from 'react'
import UpdatedComponent from './components/withCounter'

const CounterClick = ({count, incrementCount}) => {


  return (

    <button onClick={incrementCount}>clicked {count} times</button>
  )
}

export default UpdatedComponent(CounterClick)