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
import Developers from './components/pages/Developers';
import Developer from './components/pages/Developer';
import Feed from './components/pages/Feed';
import Post from './components/post/Post';
import CreateProfile from './components/pages/CreateProfile';
import EditProfile from './components/pages/EditProfile';
import AddExperience from './components/pages/AddExperience';
import AddEducation from './components/pages/AddEducation';

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
            <Route exact path='/developers' component={ Developers } />
            <Route exact path='/developer/:id' component={ Developer } />
            <PrivateRoute exact path='/dashboard' component={ Dashboard } />
            <PrivateRoute exact path='/feed' component={ Feed } />
            <PrivateRoute exact path='/create-profile' component={ CreateProfile } />
            <PrivateRoute exact path='/edit-profile' component={ EditProfile } />
            <PrivateRoute exact path='/add-experience' component={ AddExperience } />
            <PrivateRoute exact path='/add-education' component={ AddEducation } />
            <PrivateRoute exact path='/posts/:id' component={ Post } />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
    
  );
}

export default App;
