import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login, logOut } from './store/authSlice'
import authentication from './services/auth'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './components'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authentication.getUserLocation()
      .then((data) => {
        if (data) {
          dispatch(login(data))
        } else {
          dispatch(logOut())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
 <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
       <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (null)

}

export default App;

