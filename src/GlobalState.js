import React, { createContext, useContext, useState } from 'react'

export const CityContext = createContext(null)
export const useGlobalState = () => {
  return useContext(CityContext)
}
const apiKey = "289810-c1b873"

export const GlobalState = (props) => {
  
  const [city, setCity] = useState("")
  const [data, setData] = useState()
  const [favorites, setFavorites] = useState([])
  const [color, setColor] = useState(false)
  // const [color, setColor] = useState('rgb(126, 126, 126)')
  // const [colorFavorite, setColorFavorite] = useState('rgb(174, 11, 11)')

  const url = `http://aviation-edge.com/v2/public/autocomplete?key=${apiKey}&city=${city}`
  const getCity = async () => {
    const response = await fetch(url)
    const data = await response.json()
    data.airportByCities = []
    setData(data)
  }

  
  return (
    <CityContext.Provider value={{data, city, setCity, getCity, favorites, setFavorites, color, setColor}}>
      {props.children}
    </CityContext.Provider>
  )
}
