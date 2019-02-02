import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Book Search
        </a>
        <a href="/">
          Search
        </a>
        <a href="/Saved">
          Saved
        </a>
      </nav>
    );
  }
}

export default Navbar;
