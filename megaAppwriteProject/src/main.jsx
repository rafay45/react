import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Home, Login, Protect, Signup, AddPost, AllPosts, EditPost, Post  } from './components/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
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
        path: '/all-posts',
        element: (
          <Protect authentication>
            {" "}
           <AllPosts />
          </Protect>
        )
      },
      {
        path: '/add-post',
        element: (
          <Protect authentication>
            {" "}
            <AddPost />
          </Protect>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <Protect authentication>
            {" "}
            <EditPost />
          </Protect>
        )
      },
      {
        path: '/post',
        element: <Post />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
