import React from 'react'
import Airport from './Airport'
import {useGlobalState} from '../GlobalState'

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
