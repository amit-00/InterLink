import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Landing from './components/pages/Landing';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={ Landing } />
        <Switch>
          <Route exact path='/login' component={ Login } />
          <Route exact path='/register' component={ Register } />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
