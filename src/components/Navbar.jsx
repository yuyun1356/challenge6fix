import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getProfile, logout } from "../redux/actions/auth";

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const { isLoggedIn,token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if(isLoggedIn && token) {
      dispatch(getProfile())
    }
  }, [dispatch, isLoggedIn, token])

  const searchFilm = ((keyword) => {
    navigate('/search', { state: { keyword } });
  });

  const { pathname } = useLocation();
  console.log(pathname)

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar__container">
        <div className="logo">
          <Link to='/' style={{textDecoration: 'none', color: '#1598C2'}}>WatchMovies</Link>
        </div>
        <form>
          <input 
            type="text" 
            placeholder='search movie...'
            onChange={(e) => searchFilm(e.target.value)}
          />
        </form>
        <div className="info">
          {isLoggedIn ? (
            <>
              <Link to={"/user/dashboard"}>
                <p>{user?.name}</p>
              </Link>
              <button onClick={() => dispatch(logout(navigate))}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button>Login</button>
              </Link>
              <Link to={"/register"}>
              <button>register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar