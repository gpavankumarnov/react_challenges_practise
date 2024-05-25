import React, {useContext} from 'react'
import { ThemeContext } from './ThemeComp' 
const useTheme = () => {

const context = useContext(ThemeContext)
console.log("context is", context)
  return context
}

export default useTheme