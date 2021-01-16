import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <h2>Logo Goes Here</h2>
      </Link>
      <Link to="/">
        <h2>"Back To Main"</h2>
      </Link>
      <Link to="/favorites">
        <h2>Favorites</h2>
      </Link>
    </div>
  )
}

export default Nav
