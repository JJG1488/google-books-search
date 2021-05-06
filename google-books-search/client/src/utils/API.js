// import axios from "axios";

// // The getBooks method retrieves books from the server
// // It accepts a "query" or term to search the books api for
// export default {
//     getBooks: (query) => {
//         return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
//     }
// };


import axios from "axios";
const API = {
    searchBook: (query) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },
    // Gets all books
    getBooks: () => {
        return axios.get("/api/books/");
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};



export default API