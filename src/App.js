import './App.css';
import Header from './components/Header'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Pushkin from './components/Pushkin'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Router>
        <Switch>
            <Route exact path="/">
              <Cards />
            </Route>
            <Route path="/pushkin">
              <Pushkin />
            </Route>
        </Switch>
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;
