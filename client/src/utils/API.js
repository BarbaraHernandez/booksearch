import axios from "axios";
// Google Books public search url
const googleURl = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  //Google API
   // Get all books that match the search
  search: function(title) {
    return axios.get(googleURl + title);
  },
  //DB routes
  // Get all books saved in database.
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Saves book to the database
  saveBook: function(book) {
    return axios.post("/api/books", book);
  },
  // Delete book by ID
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
