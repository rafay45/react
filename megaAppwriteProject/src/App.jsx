import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login, logOut } from './store/authSlice'
import authentication from './services/auth'
import './App.css'

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
    <div>Loading...</div>
  ) : (null)


}

export default App;

