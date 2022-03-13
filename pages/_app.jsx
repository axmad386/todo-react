import { useState, useEffect } from 'react';
import ErrorContext from '../context/ErrorContext';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const [errors, setErrors] = useState({})

    // on mounted
    useEffect(()=>{
        const theme = JSON.parse(localStorage.getItem("theme")||{
            dark: false
        }) 
        setDarkMode(theme.dark)
    }, [])


    // saat ada perubahan state dark
    useEffect(()=>{
        localStorage.setItem("theme", JSON.stringify({
            dark: darkMode
        }))
    }, [darkMode])

  return(

  <ThemeContext.Provider value={{dark: darkMode, setDark: setDarkMode}}>
    <ErrorContext.Provider value={{errors, setErrors}}>
      <Component {...pageProps} />
    </ErrorContext.Provider>
  </ThemeContext.Provider>

  ) 

}

export default MyApp
