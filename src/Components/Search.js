import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearchLocation} from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import {useGlobalState} from '../GlobalState'

const Search = (props) => {

  const CityContext = useGlobalState()
  let currentCity = null

  const handleChange = (event) => {
    event.preventDefault()
    currentCity = event.target.value
    // console.log('change', currentCity)
  } 

  const handleSubmit = (event) => {
    event.preventDefault()
    // CityContext.setCity(event.target.value)
    // CityContext.globalCity.city = currentCity
    CityContext.setCity(currentCity)
    // console.log('set city complete', currentCity)
    CityContext.getCity()
    // console.log('event', event.target.value)
    // console.log('handlesubmit', CityContext.city)
    // console.log('handleSubmit', CityContext.city)
  }

  return (
    <form className="search">
      <input type="text" name="city" placeholder="Enter City Name" onChange={handleChange} value={CityContext.city}/>
      <FontAwesomeIcon icon={faSearchLocation} onClick={handleSubmit}/>
    </form>
  )
}

export default Search