import React from 'react';
import "./style.css";



class Search extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick = function () {
        console.log("Search button clicked");
    }

    handleChange = function () {
        console.log("changed handled");
    }

    render() {

        return (

            <div>
                <form>
                    <input
                        onChange={this.handleChange}
                        value={this.search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search For Book/ Author"
                        id="search"
                    />
                </form>
                <button onClick={this.handleClick} className="search-button">Search Button</button>
            </div>
        )

    }


}

export default Search;