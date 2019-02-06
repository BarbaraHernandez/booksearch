import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Book Search
        </a>
        <a href="/books">Saved</a>
      </nav>
    );
  }
}

export default Navbar;
