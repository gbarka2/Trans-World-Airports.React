import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'

function App() {

  const apiKey = "289810-c1b873"

  
  // const url = `https://wordsapiv1.p.rapidapi.com/words/water/rhymes`
  // const url = `https://api.edamam.com/api/nutrition-details`
  // const url = `https://api.edamam.com/api/nutrition-details`
  const url = `http://aviation-edge.com/v2/public/autocomplete?key=${apiKey}&city=new_york`

  
  const [airports, setAirports] = useState()
  const getAirports = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setAirports(data)
    
  }
  
  useEffect(() => {
    getAirports()
  }, [])


  const loaded = () => {
    //aiports in search area
    // console.log('airports in area', airports.airportsByCities)

    //aiport code
    // console.log('airport code', airports.airportsByCities[0].codeIataAirport)
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  

  return (
    <div className="App">
      {airports ? loaded() : loading()}
    </div>
  );
}

export default App;
