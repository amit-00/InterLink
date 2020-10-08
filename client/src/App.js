import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import Navbar from './components/Navbar/Navbar';
import Alert from './components/layout/Alert';
import PrivateRoute from './components/routing/PrivateRoute';

import Landing from './components/pages/Landing';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import Dashboard from './components/pages/Dashboard';
import CreateProfile from './components/pages/CreateProfile';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

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
            <PrivateRoute exact path='/dashboard' component={ Dashboard } />
            <PrivateRoute exact path='/create-profile' component={ CreateProfile } />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
    
  );
}

export default App;
