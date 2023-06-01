import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/actions/auth'
import GoogleLogin from '../components/GoogleLogin'
import './login.scss'

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    const data = { email, password }

    dispatch(login(data, navigate))
  }

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__form">
          {''}
          <form onSubmit={onSubmit}>
            <div className="email">
              <label>Email Address</label>
              <input 
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p> We'll never share your email with anyone else.</p>
            </div>

            <div className="password">
              <label>Password</label>
              <input 
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type='submit'>submit</button>
          </form>
        </div>
        <hr />
        <div className="login__google">
          <p>atau login dengan</p>
          <div className="google_container">
            <GoogleLogin buttonText={"Login with Google"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login