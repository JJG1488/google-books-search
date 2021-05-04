import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div className="jumbotron text-center">
            <h1>Google Book Search</h1>
            <a target="_blank" rel="noopener noreferrer" href="http://www.google.com/about/api/">
                Powered by Google Book Searcher
      </a>
        </div>
    );
}

export default Jumbotron;
