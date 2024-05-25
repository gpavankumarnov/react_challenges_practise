import React, {createContext} from 'react'

export const ThemeContext = createContext()

const ThemeComp = () => {

     const [theme, setTheme] = useState('light');

     const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
     }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        <YourComponent/>
    </ThemeContext.Provider>
  )
}

export default ThemeComp