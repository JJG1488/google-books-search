import React from 'react';
import API from '../../utils/API'
import Form from '../layout/Form';
import Results from '../layout/Results';




class Search extends React.Component {


    state = {
        query: '',
        books: []
    };

  

    handleChange = (event) => {
        const query = event.target.value;
        this.setState({ query })
    };

    saveBooks = event => {
        event.preventDefault();

        let data = this.state.books.filter(book => book.id === event.target.id)
        data = data[0];
        API.saveBook(data).then(alert("your book has been saved!")).catch(error => console.log(error));
    };

    readBooks = event => {
        event.preventDefault();

        let data = this.state.books.filter(book => book.id === event.target.id)
        data = data[0];
        API.saveBook(data).then(alert("You've read this book, It has been saved to the search page.")).catch(error => console.log(error));
    }

    handleSearch = event => {
        API.getBook(this.state.query).then(response => {
            let results = response.data.items;

            results = results.map(result => {
                result = {
                    id: result.id,
                    title: result.volumeInfo.title,
                    authors: result.volumeInfo.authors,
                    synopsis: result.volumeInfo.synopsis
                }
                return results;
            })
        })
    }

    render() {

        return (

            <div>

                <Form 
                handleChange={this.handleChange}
                    handleSearch={this.handleSearch} />



                {this.state.books.length ? (
                    <div>
                        <h3 className='searchsave'> Your Search Results</h3>
                        <Results books={this.state.books} saveBooks={this.saveBooks} />

                    </div>
                ) : (<h3 className='searchsave'>No Results to Display</h3>)}


            </div>
        )

    }


}

export default Search;
