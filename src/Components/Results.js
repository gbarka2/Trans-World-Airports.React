import React from 'react'
import Airport from './Airport'
import {useGlobalState} from '../GlobalState'

const Results = (props) => {

  const CityContext = useGlobalState()
  

  return (
    <div className="results">Results Component
      <Airport />
    </div>

  )
}

export default Results
