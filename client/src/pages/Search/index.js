import React, { Component } from 'react';
import API from '../../utils/API';
import './search.css';

class Search extends Component {

  state = {
    books:[],
    title: ''
  };

  componentDidMount(){
    this.setState({
      books:[],
      title:''
    });
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]:value
    });
  };

  searchBook = event => {
    event.preventDefault();
    API.search(this.state.title)
      .then(res =>
        this.setState({
          books: res.data.items,
          title:''
        })
      )
      .catch(err => console.log(err));
  };

  saveBook = book => {
    API.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.infoLink
    })
      .then (res=>
        this.setState({
          books:[],
          title:''
        }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div id="book-search">
          <h2>Book Search</h2>
          <form>
            <div className="form-group">
              <p> Search by Title </p>
              <input
                type="text"
                className="form-control"
                id="searchInput"
                aria-describedby="search"
                name="title"
                value={this.state.title}
                onChange={this.handleInputChange}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={this.searchBook}
            >
            Submit
            </button>
          </form>
        </div>
        <div id="search-results" className="list-overflow-container">
          <h2>Results</h2>
          {this.state.books.length ? (
            <ul className="list-group center">
              {this.state.books.map(book => (
                <li className="list-group-item book-box" key={book.id}>
                <div className="container">
                  <div className="row">
                    <h3>
                      {book.volumeInfo.title}
                    </h3>
                  </div>
                  <div className="row">
                    <p>
                      Written by: {book.volumeInfo.authors || "unknown"}
                    </p>
                  </div>
                  <div className="row justify-content-md-center">
                    <div className="col-md-3">
                      <img
                        className="book-image"
                        alt="thumbnail of book"
                        src= {book.volumeInfo.imageLinks.smallThumbnail}
                      />
                    </div>
                    <div className="col-md-9">
                      <p className="description">
                        {book.volumeInfo.description}
                      </p>
                    </div>
                  </div>
                    <button
                      type="button"
                      className="btn btn-dark custom-button"
                    >
                      <a href= {book.volumeInfo.infoLink} > view</a>
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark custom-button"
                      onClick={() => this.saveBook(book)}
                    >
                      save
                    </button>
                </div>
                </li>
              ))}
            </ul>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
