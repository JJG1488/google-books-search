import React from "react";
import "./style.css";
import Search from "../Search";
import Saved from "../Saved";

function Jumbotron() {
    return (
        <div className="jumbotron text-center">
            <h1>Google Book Search</h1>
            <a target="_blank" rel="noopener noreferrer" href="http://www.google.com/about/api/">
                Powered by Google Book Searcher
      </a>
      <Search />
      <Saved />
        </div>
    );
}

export default Jumbotron;
