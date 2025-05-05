import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Script'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className= "bg-green-900 p-4 rounded-xl fixed top-10 left-100">
      <h1>Welcome to Vite + React</h1>
      </div>
      <Card tittle = "GYM" firstUser = "Rafay" secondUser = "Wasay" thirdUser = "Sahiban" secondtittle = "Bike" />
    </>
  )
}

export default App
