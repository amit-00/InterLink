import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/Navbar/Navbar';
import Alert from './components/layout/Alert';

import Landing from './components/pages/Landing';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Fragment>
          <Alert />
          <Navbar />
          <Route exact path='/' component={ Landing } />
          <Switch>
            <Route exact path='/login' component={ Login } />
            <Route exact path='/register' component={ Register } />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
    
  );
}

export default App;
