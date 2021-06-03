import React from "react";
import "./style.css"

function Form(props) {

    return (
        <div>
            <form className="form">
                <div>
                    <input 
                    onChange={props.handleChange} 
                    value={props.search}
                    type="text" 
                    name="search" 
                    className="input" 
                    placeholder="Search"
                    id="search"   

                    />
                    <button className="search-button" onClick={props.handleSearch}>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Form;


