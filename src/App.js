import './App.css';
import Nav from './Components/Nav'
import Main from './Pages/Main'
import Favorites from './Pages/Favorites';

function App() {



  

  return (
    <div className="app">
      <Main />
      <Favorites />
      <Nav />

      {/* switch
      routes and paths */}
    </div>
  );
}

export default App;
