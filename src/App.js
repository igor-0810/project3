import React from 'react';
import './App.css';
import { Provider } from './Context/userContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SingleCard from './Components/SinglePage';
import useFetch from './hook/useFetch';
import About from './Components/About/About';
import Contact from './Components/About/Contact';


function App() {
  const mainData = useFetch("https://brainsterboxapi.herokuapp.com/games")
  return (
    <div>
      <Router>
        <Switch>
         {mainData && (
            <Provider mainData={mainData}>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/game:id" component={SingleCard} />
            <Route path="/about"  component={About}/>
            <Route path="/contact" component={Contact}/>
          </Provider>
         )}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
