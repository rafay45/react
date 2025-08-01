import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/Theme'
import Toggle from './components/Toggle'
import Card from './components/Card'

function App() {
  const [theme , setTheme] = useState("light")
  const darkTheme = () => {
    setTheme("dark")
  }
  const lightTheme = () => {
    setTheme("light")
  }
 useEffect(() => {
   document.querySelector('html').classList.remove('light', 'dark')
   document.querySelector('html').classList.add(theme)
 }, [theme])
 
  return (
<ThemeProvider value={{theme, darkTheme, lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
         <Toggle />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>
  </ThemeProvider>
  )
}

export default App
