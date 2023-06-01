import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__row">
        <div className="footer__logo">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <h1>WatchMovies</h1>
          </Link>
          <p>
            Checking out the latest releases on our movie website? With a
            variety of genres ranging from horror to romance, we've got you
            covered! Whether you're looking for a classic flick or a new
            blockbuster, you're sure to find something to suit your movie-loving
            needs.
          </p>
        </div>
        <div className="footer__sosmed">
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
      <hr size="1" />
      <p id="footer__rights">
        <strong>@2023 </strong>WatchMovies Inc. All rights reversed
      </p>
    </div>
  )
}

export default Footer