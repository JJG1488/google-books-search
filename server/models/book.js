const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 4. At a minimum, books should have each of the following fields:

// * `title` - Title of the book from the Google Books API

// * `authors` - The books's author(s) as returned from the Google Books API

// * `description` - The book's description as returned from the Google Books API

// * `image` - The Book's thumbnail image as returned from the Google Books API

// * `link` - The Book's information link as returned from the Google Books API
// const author = new mongoose.Schema({
//   authorName: { type: String, required: true}
// })

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors:  {type: Array, required: false },
  synopsis: {type: String, required: false},
  link: { type: String, required: false},
  image: { type: String, required: false},
  date: { type: Date, default: Date.now }
  
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
