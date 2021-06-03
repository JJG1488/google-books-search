

import axios from "axios";

const API = {
    searchBook: (query) => {
        // return axios.get(`https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=AIzaSyAbm532tA8Ld-71ba8XRx6-aB2KXFiB8g0`);
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}:key="${process.env.api_keyT}"`);
    },
    // Gets all books
    getBooks: () => {
        // ============Problem is line below ===============
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: (id) => {
        return axios.put("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: (id) => {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook:  (data) => {
        return axios.post("/api/books", data);
    }
};



export default API;