import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlaneDeparture} from "@fortawesome/free-solid-svg-icons"
import {faCity} from "@fortawesome/free-solid-svg-icons"
import {faFlag} from "@fortawesome/free-solid-svg-icons"
import {faClock} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import {useGlobalState} from '../GlobalState'

const Airport = ({airport, key}) => {

  const CityContext = useGlobalState()

  const colorChange = () => {
    // let background = document.getElementById(heart).style.backgroundColor
    // if (background == "rgb(0, 0, 0)") {

    // }
  }
  
  const handleFavorites = () => {
    const addFavorites = CityContext.favorites.slice()
    if (addFavorites.indexOf(airport) === -1) {
      addFavorites.push(airport)
      CityContext.setFavorites(addFavorites)
      // CityContext.setColor(true)
    } else {
      for (let i = 0; i < addFavorites.length; i++) {
        if (addFavorites[i] === airport) {
          addFavorites.splice(addFavorites[i])
          // CityContext.setColor(false)
        }
        CityContext.setFavorites(addFavorites)
      }
    }
  }

    return (
      <div>
        {
          airport ?
          <div className="airport-card" id={key}>
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
                {/* <FontAwesomeIcon icon={faHeart} onClick={handleFavorites} className={color ? "favorite-true" : "favorite-false"}/> */}
                <FontAwesomeIcon icon={faHeart} id="heart" onClick={handleFavorites}/>
              </div>
            </div>
          </div>
          : ""
        }
      </div>
    )
}

export default Airport