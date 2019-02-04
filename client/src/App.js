import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Saved from './pages/Saved';
import NoMatch from './NoMatch';
import Jumbotron from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
