import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const quote = ['quote 1', 'quote 2', 'quote 3', 'quote 4', 'quote 5', 'quote 6', 'quote 7', 'quote 8', 'quote 9'];

    let quotes = quote[Math.floor(Math.random() * quote.length)];




    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="booksoulhug">
                <p>{quotes}</p>
            </div>
            <div className="links">
                <h6>
                    <Link to="/search" className={window.location.pathname === '/search' ? 'nav-link active' : 'nav-link'}>
                        Search for a Book

              </Link>
                </h6>
                <h6>
                    <Link to="/saved" className={window.location.path === '/saved' ? 'nav-link active' : 'nav-link'}>
                        Your Saved Book
                    </Link>
                </h6>
            </div>
        </nav>
    );
}

export default Navbar;
