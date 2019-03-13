import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Navbar from './components/CustomNavbar';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/dashboard" component={Dashboard}/>
        </div>
      </Router> 
    );
  }
}

export default App;
