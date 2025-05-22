import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName , setUserName] = useState("")
    const [password , setPassword] = useState("")
    const {setUser} = useContext(UserContext)
    const submit = (e) =>{
        e.preventDefault()
        setUser({userName, password})
    }
  return (
    <div>
        <h2>You must Login This app and then will go on Profile</h2>
        <input type="text" placeholder='User Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
        {" "}
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        {" "}
        <button onClick={submit}>Submit</button>
    </div>
  )
}

export default Login