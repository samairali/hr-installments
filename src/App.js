import React from 'react';
import './App.css';
import Dashboard from './Components/Auth/Dashboard'
import UserDetails from './Components/Users/UserDetails'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    	<div className="App">
	      <Switch>
	      	<Route exact path='/' component={Dashboard} />
	      	<Route path='/userdetails/:userid' component={UserDetails} />
	      </Switch>
	    </div>
    </BrowserRouter>
  );
}

export default App;
