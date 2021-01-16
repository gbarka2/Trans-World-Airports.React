import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import Nav from './Components/Nav'
import Favorites from './Pages/Favorites';
import Main from './Pages/Main'

function App() {



  

  return (
    <div className="App">
      <Nav />
      <Main />
      <Favorites />

      {/* switch
      routes and paths */}
    </div>
  );
}

export default App;
