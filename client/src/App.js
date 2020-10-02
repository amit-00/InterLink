import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <h1 className="text-primary">Hello World</h1>

      </Fragment>
    </Router>
  );
}

export default App;
