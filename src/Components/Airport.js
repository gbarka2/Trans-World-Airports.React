import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlaneDeparture} from "@fortawesome/free-solid-svg-icons"
import {faCity} from "@fortawesome/free-solid-svg-icons"
import {faFlag} from "@fortawesome/free-solid-svg-icons"
import {faClock} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import {useGlobalState} from '../GlobalState'

const Airport = (props) => {

  const CityContext = useGlobalState()
  
  const loaded = () => {
    const cityMapped = CityContext.data.airportsByCities.map((airport, index) => {
      console.log('airport data', CityContext.city)

      return (
          <div className="airport-card" key={index}>
            <div className="card-row">
              <FontAwesomeIcon icon={faPlaneDeparture} className="airport-icon"/>
              <p>{airport.codeIataAirport}</p>
            </div>
            <div className="card-row">
              <p>{airport.nameAirport}</p>
            </div>
            <div className="card-row">
              <FontAwesomeIcon icon={faCity} className="airport-icon"/>
              <p>{airport.codeIataCity} - {CityContext.city}</p>
            </div>
            <div className="card-row">
              <FontAwesomeIcon icon={faFlag} className="airport-icon" />
              <p>{airport.nameCountry}</p>
            </div>
            <div className="card-row">
              <FontAwesomeIcon icon={faClock} className="airport-icon"/>
              <p>{airport.timezone}</p>
              <FontAwesomeIcon icon={faHeart}/>
            </div>
          </div>
      )
  
      // return {
      //   key: index,
      //   iataAirport: airport.codeIataAirport,
      //   iataCity: airport.codeIataCity,
      //   name: airport.nameAirport,
      //   country: airport.nameCountry,
      //   timezone: airport.timezone
      // }
    })
    return (
      <div>
        {cityMapped}
      </div>
    )
    // console.log(airport.key)
   
  }


  const loading = () => {
    return <div>Loading...</div>
  }


  return (
    <div>
      {CityContext.data ? loaded() : loading()}
    </div>
  )
}

export default Airport