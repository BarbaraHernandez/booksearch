import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Book Search
        </a>
        <a className="custom-link" href="/books">Search</a>
        <a className="custom-link" href="/books">Saved</a>
      </nav>
    );
  }
}

export default Navbar;
