import {Route, Switch} from 'react-router-dom'
import Nav from './Components/Nav'
import Main from './Pages/Main'
import Favorites from './Pages/Favorites';
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {

  return (
    <div className="app">
      <div className="title">
      <FontAwesomeIcon icon={faPaperPlane} id="title-plane"/>
        <h2 id="title">TRANS-WORLD AIRPORTS</h2>
      </div>
      <p id="subtitle">Whenever you think "IATA know this..."</p>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/favorites">
          <Favorites/>
        </Route>
      </Switch>
      <Nav />
    </div>
  );
}

export default App;
