import React, { Component } from 'react';
import API from '../../utils/API';

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
        console.log("data:" + res.data)
        // this.setState({
        //   books: res.data,
        //   title: '',
        //   authors: [],
        //   description: '',
        //   image: '',
        //   link: ''
        // })
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
                <li className="list-group-item" key={book._id}>
                  <div className="container">
                  <div className="row">
                    <h3>
                      {book.title}
                    </h3>
                  </div>
                  <div className="row">
                    <p>
                      Written by: {book.authors || "unknown"}
                    </p>
                  </div>
                  <div className="row justify-content-md-center">
                    <div className="col-md-3">
                      <img
                        className="book-image"
                        alt="thumbnail of book"
                        src= {book.image}
                      />
                    </div>
                    <div className="col-md-9">
                      <p className="description">
                        {book.description}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-dark custom-button"
                  >
                    <a href= {book.link} > view</a>
                  </button>
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
