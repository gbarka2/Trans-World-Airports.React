import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlaneDeparture} from "@fortawesome/free-solid-svg-icons"
import {faCity} from "@fortawesome/free-solid-svg-icons"
import {faFlag} from "@fortawesome/free-solid-svg-icons"
import {faClock} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import {useGlobalState} from '../GlobalState'

const Airport = ({airport}) => {

  // const CityContext = useGlobalState()
  console.log(airport)
  
      // return {
      //   key: index,
      //   iataAirport: airport.codeIataAirport,
      //   iataCity: airport.codeIataCity,
      //   name: airport.nameAirport,
      //   country: airport.nameCountry,
      //   timezone: airport.timezone
      // }

    return (
      <div>
        {
          airport ?
          <div className="airport-card">
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
                <FontAwesomeIcon icon={faHeart} id="heart"/>
              </div>
            </div>
          </div>
          : ""
        }
      </div>
    )
}

export default Airport