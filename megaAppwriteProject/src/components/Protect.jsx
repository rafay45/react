import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Protect({ children, authentication = true }) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const authStatus = useSelector((state) => state.authentication.status)
    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        } else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoading(false)
    }, [authStatus, authentication, navigate])
    return (
        <div>
            {loading ? <h1>Loading...</h1> : <>{children}</>}
        </div>
    )
}

export default Protect