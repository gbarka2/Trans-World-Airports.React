import React from 'react'
import Search from '../Components/Search'
import Results from '../Components/Results'

const Main = (props) => {
  return (
      <div className="main">
        <Search />
        <Results />
      </div>
  )
}

export default Main