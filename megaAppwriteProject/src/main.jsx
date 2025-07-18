import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Home, Login, Protect, Signup } from './components/index.js'
import {AllPosts, AllPosts, EditPost} from './pages'
import { createBrowserRouter } from 'react-router-dom'

createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: (
          <Protect authentication={false}>
            <Login />
          </Protect>
        )
      }, 
      {
        path: '/signup',
        element: (
          <Protect authentication={false}>
            <Signup />
          </Protect>
        )
      }, 
      {
        path: '/all-post',
        element: (
          <Protect authentication>
           <AllPosts />
          </Protect>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
