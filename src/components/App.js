import React from 'react';
import login from './Login';
import Nav from './Nav';
import '../index.css'

import home from './Home';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Nav />
        
        <Switch>
          <Route path='/' exact component={home} />
          <Route path='/login' component={login} />
           
        </Switch>
      </Router>
    </>
  );
}

export default App;
