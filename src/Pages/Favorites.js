import React from 'react'
import Airport from '../Components/Airport'
import {useGlobalState} from '../GlobalState'

const Favorites = (props) => {

  const CityContext = useGlobalState()
  // console.log('favorites page airports', CityContext.favorites)
  return (

    <>
      {
        CityContext.favorites !== undefined ?
        CityContext.favorites.map((airport, index) => (
        <div className="test">

          <Airport airport={airport} index={index} key={index}/>
        </div>
        ))
        : ""
      }
    </>


  )
}

export default Favorites
