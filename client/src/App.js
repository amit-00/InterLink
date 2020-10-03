import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Home from './components/pages/Home';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Home />

      </Fragment>
    </Router>
  );
}

export default App;
