import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">(React) Google Books Search</h1>
          <p className="lead">Search and Save your Favorites</p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
