import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function RedirectifProtected({children}) {
    const navigate = useNavigate()

    const { user, isLoggedIn} = useSelector((state) => state.auth)

    useEffect(() => {
        if (isLoggedIn || user){
            navigate('/')
        }
    }, [isLoggedIn, navigate, user])
  return children
}

export default RedirectifProtected