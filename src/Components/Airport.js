import React from 'react'

const Airport = (props) => {
  return (
    <div className="airport-card">
      <h3>codeIataAirport</h3>
      <h4>nameAirport</h4>
      <p>nameCountry</p>
      <div className="favorites-bar">
        <p>timezone</p>
        <p>Favorite Icon</p>
      </div>
    </div>
  )
}

export default Airport