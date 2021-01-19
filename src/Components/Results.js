import React from 'react'
import Airport from './Airport'
import {useGlobalState} from '../GlobalState'


const Results = (props) => {

  const CityContext = useGlobalState()

  return (

    <>
      {
        CityContext.data !== undefined ?
        CityContext.data.airportsByCities.map((airport, index) => (
        <Airport airport={airport} key={index}/>
        ))
        : ""
      }
    </>


  )
}

export default Results
