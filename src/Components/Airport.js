import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlaneDeparture} from "@fortawesome/free-solid-svg-icons"
import {faCity} from "@fortawesome/free-solid-svg-icons"
import {faFlag} from "@fortawesome/free-solid-svg-icons"
import {faClock} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"

const Airport = (props) => {
  return (
    <div className="airport-card">
      <FontAwesomeIcon icon={faPlaneDeparture} />
      <h3>codeIataAirport</h3>
      <FontAwesomeIcon icon={faCity} />
      <h4>nameAirport - City</h4>
      <FontAwesomeIcon icon={faFlag} />
      <p>nameCountry</p>
      <div className="favorites-bar">
        <FontAwesomeIcon icon={faClock} />
        <p>timezone</p>
        <FontAwesomeIcon icon={faHeart} />
        <p>Favorite Icon</p>
      </div>
    </div>
  )
}

export default Airport