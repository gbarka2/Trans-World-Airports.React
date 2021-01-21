import React from 'react'
import {useGlobalState} from '../GlobalState'
import Airport from '../Components/Airport'

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
