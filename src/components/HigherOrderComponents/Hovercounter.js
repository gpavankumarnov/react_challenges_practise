import React, {useState} from 'react'
import UpdatedComponent from './components/withCounter';

const Hovercounter = ({count, incrementCount}) => {

  return (
    <h2 onMouseOver={incrementCount}>Hovered {count} times </h2>
  )
}

export default UpdatedComponent(Hovercounter)