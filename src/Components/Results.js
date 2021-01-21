import React from 'react'
import {useGlobalState} from '../GlobalState'
import Airport from './Airport'

const Results = () => {

  const CityContext = useGlobalState()

  return (
    <div className="results">
      {
        CityContext.data !== undefined ?
        CityContext.data.airportsByCities.map((airport, index) => (
        <Airport airport={airport} key={index}/>
        ))
        : ""
      }
    </div>
  )
}

export default Results
