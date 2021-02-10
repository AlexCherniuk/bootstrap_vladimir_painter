import React from 'react';
import './App.css';
import Navibar from './components/Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Artworks from './components/Artworks';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
 <div>
    <Router>
         <Navibar />
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route path="/artworks" component={Artworks} />
          <Route path="/about" component={About} />
        </Switch>
    </Router>
    <Footer />
</div>
  );
}

export default App;
