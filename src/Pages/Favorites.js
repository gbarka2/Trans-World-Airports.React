import React from 'react'
import Airport from '../Components/Airport'
import {useGlobalState} from '../GlobalState'

const Favorites = () => {

  const CityContext = useGlobalState()
 
  return (
    <>
    <div className="favorite-section"> 
      <p>Search And Favorite Your Frequented Airports!</p>
      <div className="favorite-airport-cards">
      {
        CityContext.favorites !== undefined ?
        CityContext.favorites.map((airport, index) => (
        <Airport airport={airport} index={index} key={index}/>
        ))
        : ""
      }
      </div>
    </div>
    </>


  )
}

export default Favorites
