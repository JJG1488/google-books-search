import React from 'react';
import Wrapper from '../layout/Wrapper';
import Save from '../layout/Save';
import API from '../../utils/API';


class Saved extends React.Component {
    

    state = {
        data: []
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        API.getBooks()
            .then((res) => this.setState({ data: res.data }))
            .catch((err) => console.error(err))
    }

    deleteBook = (id) => {
        API.deleteBook(id)
        .then((res) => this.loadBooks())
        .catch((err) => console.error(err))
    }


    render() {
        return (
            <Wrapper>

                {this.state.data.length ? (
                    <div>
                        <h1 className="searchsave">Saved Books</h1>
                        <Save data={this.state.data} deleteBook={this.deleteBook}/>
                    </div>
                ) : (<h2 className="searchsave">No Results to Display</h2>)}
            </Wrapper>


        )
    }
}

export default Saved;
