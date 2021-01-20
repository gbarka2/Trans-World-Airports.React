import React from 'react'
import Airport from './Airport'
import {useGlobalState} from '../GlobalState'


const Results = (props) => {

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
      {/* {
        CityContext.data === undefined ?
        <div>
          <h1>Unable to retrieve city...</h1>
          <p>Please check spelling of city.</p>
        </div>
        : ""
      } */}
    </div>


  )
}

export default Results
