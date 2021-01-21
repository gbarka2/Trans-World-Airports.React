import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons"
import {faHome} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
        <p id="twa">TWA</p>
      </Link>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} id="home"/>
      </Link>
      <Link to="/favorites">
        <FontAwesomeIcon icon={faHeart} id="favorites"/>
      </Link>
    </div>
  )
}

export default Nav
