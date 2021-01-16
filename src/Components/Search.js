import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearchLocation} from "@fortawesome/free-solid-svg-icons"
import React from 'react'

const Search = (props) => {
  return (
    <div className="search">
      <input type="text" name="city" placeholder="Enter City Name"/>
      <FontAwesomeIcon icon={faSearchLocation} />
    </div>
  )
}

export default Search