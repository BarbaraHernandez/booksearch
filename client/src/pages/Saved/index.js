import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';

class Saved extends Component {

  state = {
    books: [],
    title: '',
    authors: [],
    description: '',
    image: '',
    link: ''
  };

  componentDidMount() {
    this.loadBooks();
  };

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({
          books: res.data,
          title: '',
          authors: [],
          description: '',
          image: '',
          link: ''
        })
      )
      .catch(err =>
        console.log(err)
      );
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="saved-div">
        <h2>Saved Books</h2>
        <div id="saved-books" className="list-overflow-container">
          {this.state.books.length ? (
            <ul className="list-group">
              {this.state.books.map(book => (
                <li className="list-group-item">
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
                  src= {book.imageLinks.smallThumbnail}
                  />
                  <p classname="description">
                    {book.description}
                  </p>
                  <Link to={book.selfLink}>
                    <button
                      type="button"
                      className="btn btn-secondary"
                    >
                      view
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => this.deleteBook(book.id)}
                  >
                    delete
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

export default Saved;
