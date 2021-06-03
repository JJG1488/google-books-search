import React, { useState } from "react";
import API from "../../utils/API";

function NewForm() {

    const [state, setState] = useState({ query: '', books: [] });


    const query = state.query;
    const allData = [];

    const searchedBook = () => {
        API.searchBook(query)
            .then((res) => {
                // console.log(res);
                let volume = res.data.items[0].volumeInfo;
                let title = res.data.items[0].volumeInfo.title;
                let author = res.data.items[0].volumeInfo.authors;
                let image = res.data.items[0].volumeInfo.imageLinks.thumbnail;
                let description = res.data.items[0].volumeInfo.description;
                console.log(volume)
                console.log("TITLE: =====> " + title);
                console.log("AUTHOR(S): =====> " + author);
                console.log("IMAGE: =====> " + image);
                console.log("DESCRIPTION: =====> " + description);
                // console.log(allData);

                let results = {
                    volume: volume,
                    title: title,
                    author: author,
                    image: image,
                    description: description
                };

                allData.push(results);
                console.log(allData[0].volume.title);


            }).catch((err) => {
                console.log(err)
            })
    }

    const handleChange = (e) => {

        const query = e.target.value;
        console.log("handle change");
        setState({ query });

    }


    const handleSearch = (e) => {
        e.preventDefault();
        console.log("handle search");
        searchedBook();
    }


    return (

        <div>

            <div>
            {allData.volume}
            </div>

            This is the new form

            <div>

                <form className="form">

                    <div>

                        <input
                            onChange={handleChange}
                            value={query}
                            type="text"
                            name="search"
                            className="input"
                            placeholder="Search"
                            id="search"

                        />

                        <button className="search-button" onClick={handleSearch}>Search</button>

                    </div>

                </form>

            </div>

        </div>

    )
}

export default NewForm;