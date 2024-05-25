import React from 'react'
import useTheme from './useTheme'
const YourComponent = () => {
 
  const {theme, toggleTheme} = useTheme()


  return (
    <button onClick={toggleTheme}>YourComponent</button>
  )
}

export default YourComponent