import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from "../redux/actions/auth";
import './register.scss'

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password, name };

    if (password !== confirmPassword) {
      toast.error("Confirm password must be same with password");
      return;
    }

    dispatch(register(data, navigate));
  };

  return (
    <div className="register">
      <div className="register__container">
        {''}
          <form onSubmit={onSubmit}>
            <div className="username">
              <label>Username</label>
              <input 
                type="text"
                placeholder="Masukkan username Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="email">
              <label>Alamat email</label>
              <input 
                type="email"
                placeholder="Masukkan alamat email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p>We'll never share your email with anyone else.</p>
            </div>

            <div className="sandi">
              <label>Kata sandi</label>
              <input 
                type="password"
                placeholder="Masukkan kata sandi Anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className="confirm">
              <label>Konfirmasi kata sandi</label>
              <input 
                type="password"
                placeholder="Konfirmasi kata sandi"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type='submit'>submit</button>
          </form>
      </div>
    </div>
  )
}

export default Register