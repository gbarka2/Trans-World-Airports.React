import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearchLocation} from "@fortawesome/free-solid-svg-icons"
import React, {useState} from 'react'
import {useGlobalState} from '../GlobalState'

const Search = (props) => {

  const CityContext = useGlobalState()

  const handleChange = (event) => {
    event.preventDefault()
    CityContext.setCity(event.target.value)
  } 

  const handleSubmit = (event) => {
    CityContext.getCity()
    console.log('handlesubmit', CityContext.city)

  }

  return (
    <form className="search">
      <input type="text" name="city" placeholder="Enter City Name" onChange={handleChange} value={CityContext.city}/>
      <FontAwesomeIcon icon={faSearchLocation} onClick={handleSubmit}/>
    </form>
  )
}

export default Search