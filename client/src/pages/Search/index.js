import React, { Component } from 'react';
import API from '../../utils/API';

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
            <ul className="list-group">
              {this.state.books.map(book => (
                <li className="list-group-item" key={book.id}>
                <div>
                  <h3>
                    {book.volumeInfo.title}
                  </h3>
                  <p>
                    Written by: {book.volumeInfo.authors || "unknown"}
                  </p>
                  <img
                  className="book-image"
                  alt="thumbnail of book"
                  src= {book.volumeInfo.imageLinks.smallThumbnail}
                  />
                  <p className="description">
                    {book.volumeInfo.description}
                  </p>
                  <button
                    type="button"
                    className="btn btn-dark"
                  >
                    <a href= {book.volumeInfo.infoLink} > view</a>
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark"
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
