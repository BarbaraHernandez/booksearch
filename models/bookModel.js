var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String },
  authors: { type: String },
  description: { type: String },
  image: { type: String },
  link: { type: String },
  date: { type: Date, default: Date.now }
});

var Book = mongoose.model("Book", BookSchema);

module.exports = Book;
