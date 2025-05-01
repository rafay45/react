import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const createReact = React.createElement(
//   'a',
//   {href:'https://google.com', target:'_blank'},
//   'Google',
// )

createRoot(document.getElementById('root')).
  render(
    <App />
    // createReact
  )
// import ReactDOM from 'react-dom/client'