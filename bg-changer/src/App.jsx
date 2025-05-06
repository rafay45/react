import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("DarkCyan");

  return (
    <>
      <div className='w-full h-screen duration-200 mt-0' style={{ backgroundColor: color }}>
        <div id='change' className='flex flex-wrap gap-3 rounded-3xl inset-x-40 justify-around p-2 fixed bottom-10 px-2' style={{backgroundColor: color === "white" ? "black" : "white"}}>
          <button className='w-25 shadow-2xl cursor-pointer rounded-full text-white font-bold font-sans border-none p-2' style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>
          <button className='w-25 shadow-2xl cursor-pointer rounded-full text-white font-bold font-sans border-none p-2' style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>
          <button className='w-25 shadow-2xl cursor-pointer rounded-full text-white font-bold font-sans border-none p-2' style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
          <button className='w-25 shadow-2xl cursor-pointer rounded-full text-white font-bold font-sans border-none p-2' style={{ backgroundColor: "Deeppink" }} onClick={() => setColor("pink")}>Pink</button>
          <button className='w-25 shadow-2xl cursor-pointer rounded-full text-white font-bold font-sans border-none p-2' style={{ backgroundColor: "Gold" }} onClick={() => setColor("yellow")}>Yellow</button>
          <button className='w-25 shadow-2xl cursor-pointer rounded-full text-black font-bold font-sans border-none p-2 bg-blue-100' onClick={() => setColor("white")}>White</button>
          <button id='changeBlack' className='w-25 cursor-pointer rounded-full font-bold font-sans border-none p-2' style={{backgroundColor: color === "white" ? "white" : "black", color: color === "white" ? "black" : "white"}} onClick={() => setColor("black")}>Black</button>
        </div>
      </div>
    </>
  )
}

export default App;
