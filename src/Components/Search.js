import React from 'react'

const Search = (props) => {
  return (
    <div className="search">
      <input type="text" name="city" placeholder="Enter City Name"/>
      <input type="submit"/>
    </div>
  )
}

export default Search