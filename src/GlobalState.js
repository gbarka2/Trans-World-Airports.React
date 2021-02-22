import React, {createContext, useContext, useState} from 'react'

export const CityContext = createContext(null)
export const useGlobalState = () => {
  return useContext(CityContext)
}

// const apiKey = "289810-c1b873"
// const {apiKey} = process.env

export const GlobalState = (props) => {
  
  const [city, setCity] = useState("")
  const [data, setData] = useState()
  const [favorites, setFavorites] = useState([])

  // const url = `https://aviation-edge.com/v2/public/autocomplete?key=${apiKey}&city=${city}`

  const url = `https://transworldairports.netlify.app/.netlify/functions/getAirports?city=${city}`

  // const {url} = process.env

  const getCity = async () => {
    const response = await fetch(url)
    const data = await response.json()
    data.airportByCities = []
    setData(data)
  }

  return (
    <CityContext.Provider value={{data, city, setCity, getCity, favorites, setFavorites}}>
      {props.children}
    </CityContext.Provider>
  )
}
