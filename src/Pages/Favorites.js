import React from 'react'
import Airport from '../Components/Airport'
import {useGlobalState} from '../GlobalState'

const Favorites = () => {

  const CityContext = useGlobalState()
 
  return (
    <>
      {
        CityContext.favorites !== undefined ?
        CityContext.favorites.map((airport, index) => (
        <Airport airport={airport} index={index} key={index}/>
        ))
        : ""
      }
    </>


  )
}

export default Favorites
