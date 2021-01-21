import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlaneDeparture} from "@fortawesome/free-solid-svg-icons"
import {faCity} from "@fortawesome/free-solid-svg-icons"
import {faFlag} from "@fortawesome/free-solid-svg-icons"
import {faClock} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import {useGlobalState} from '../GlobalState'

const Airport = ({airport, index}) => {

  const CityContext = useGlobalState()
  const color = CityContext.favorites.indexOf(airport) !== -1 ? 'red' : 'rgb(184, 180, 180)' 
  
  const handleFavorites = () => {
    const addFavorites = CityContext.favorites.slice()
    if (addFavorites.indexOf(airport) === -1) {
      airport.color = 'red'
      addFavorites.push(airport)
      CityContext.setFavorites(addFavorites)
    } else {
      const index = addFavorites.indexOf(airport)
      airport.color = 'rgb(184, 180, 180)'
      addFavorites.splice(index, 1)
      CityContext.setFavorites(addFavorites)
    }
  }

  return (
    <div>
      {
        airport ?
        <div className="airport-card" key={index}>
          <div className="card-row">
            <FontAwesomeIcon icon={faPlaneDeparture} className="airport-icon"/>
            <p>{airport.codeIataAirport}</p>
          </div>
          <div className="card-row">
            <p id="airport-name">{airport.nameAirport}</p>
          </div>
          <div className="card-row">
            <FontAwesomeIcon icon={faCity} className="airport-icon"/>
            <p>{airport.codeIataCity}</p>
          </div>
          <div className="card-row">
            <FontAwesomeIcon icon={faFlag} className="airport-icon" />
            <p>{airport.nameCountry}</p>
          </div>
          <div className="card-row" id="favorite-row">
            <div id="fave-row-1">
              <FontAwesomeIcon icon={faClock} className="airport-icon"/>
              <p>{airport.timezone}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faHeart} id="heart" onClick={handleFavorites} style={{color: airport.color}}/>
            </div>
          </div>
        </div>
        : ""
      }
    </div>
  )
}

export default Airport