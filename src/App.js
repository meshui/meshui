import React, { Component } from 'react';
import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';


import Homepage from './views/Homepage/Homepage'
import LogIn from './views/LogInView/LogInView'
import SignUp from './views/SignUpView/SignUpView'
import error from './views/Error/Error'

class App extends Component {
  render() {
    return (
      <Router>
				<Switch>
					<Route path="/" exact component={Homepage} />
					<Route path="/api" component={Homepage} />
					<Route path="/login" component={LogIn} />
					<Route path="/signup" component={SignUp} />
          <Route path={`/error`} component={error} />
          <Redirect to="/error" />
				</Switch>
			</Router>
    );
    
    // return (
    //   <div className="App">
    //     <Homepage />
    //   </div>
    // );
  }
}

export default App;