import React, { createContext, useContext, useState } from 'react'

const initialState = {
  name: null
}

export const CityContext = createContext(null)
export const useGlobalState = () => {
  return useContext(CityContext)
}
const apiKey = "289810-c1b873"

export const GlobalState = (props) => {
  const globalCity = {
    city: ''
  }
  
  const [city, setCity] = useState()
  const [data, setData] = useState()
  const [favorites, setFavorites] = useState({
    // ...favorites
  })

  const url = `http://aviation-edge.com/v2/public/autocomplete?key=${apiKey}&city=${city}`
  const getCity = async () => {
    const response = await fetch(url)
    const data = await response.json()
    // console.log('global city', city)
    // console.log('data', data)
    setData(data)
  }

  
  return (
    <CityContext.Provider value={{data, city, setCity, getCity, setFavorites, favorites}}>
      {props.children}
    </CityContext.Provider>
  )






}
