import React from 'react'
import {useGlobalState} from '../GlobalState'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearchLocation} from "@fortawesome/free-solid-svg-icons"

const Search = () => {

  const CityContext = useGlobalState()

  const handleChange = (event) => {
    event.preventDefault()
    CityContext.setCity(event.target.value)
  } 

  const handleSubmit = (event) => {
    if (CityContext.city !== "") {
      CityContext.getCity()
    }
  }

  return (
    <form className="search">
      <input type="text" name="city" placeholder="Enter City Name" onChange={handleChange} value={CityContext.city} />
      <FontAwesomeIcon icon={faSearchLocation} onClick={handleSubmit} id="search-icon"/>
    </form>
  )
}

export default Search