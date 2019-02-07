import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Saved from './pages/Saved';
import NoMatch from './NoMatch';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          <Router>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/saved" component={Saved} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Wrapper>
      </div>

    );
  }
}

export default App;
