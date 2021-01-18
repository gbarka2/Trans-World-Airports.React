// import React, {useState} from 'react'

// const apiKey = 'dee2e63c-30fb-4a07-a20e-d379ef2fac67'

// const url = `http://airlabs.co/api/v6/airports?api_key=${apiKey}&code=CDG`

// const [airport, setAirport] = useState()
// const getAirport = async () => {
//   const response = await fetch(url)
//   const data = await response.json()
//   setAirport(data)
//   console.log(airport)
// }

// getAirport()

// const loaded = () => {
  //aiports in search area
  // console.log('airports in area', airports.airportsByCities)

  //aiport code
  // console.log('airport code', airports.airportsByCities[0].codeIataAirport)
// }

// const loading = () => {
//   return <h1>Loading...</h1>
// }

// {airports ? loaded() : loading()