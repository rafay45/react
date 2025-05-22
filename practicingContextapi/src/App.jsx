import { useState } from 'react'
import './App.css'
import { ContextProvider } from './context/ContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
    <h1>Now I'm practicing Context Api...</h1>
    <Login/>
    <Profile/>
    </ContextProvider>
  )
}

export default App
