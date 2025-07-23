import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import AllPosts from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import { Protect } from './components/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'

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
            <SignUp />
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
  <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  </StrictMode>,
)
