import {Route, Switch} from 'react-router-dom'
import Nav from './Components/Nav'
import Main from './Pages/Main'
import Favorites from './Pages/Favorites';


function App() {

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/favorites">
          <Favorites/>
        </Route>
      </Switch>
      <Nav />

      {/* switch
      routes and paths */}
    </div>
  );
}

export default App;
