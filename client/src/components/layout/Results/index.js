import React from "react";

function Result(props) {

    return (
        <div>
            {props.books.map((book) => {
                return (
                    <div key={book.id}>
                        <div className='card'>
                            <div className='card-image'>
                                <img src={book.image} alt={book.title} />
                            </div>
                            <p>{book.title}</p>
                            <p>by: {book.authors}</p>
                            <div className='content'>{book.synopsis}</div>
                            <div> 
                            <button
                            type='button'
                            className="resultsbutton"
                            id={book.id}
                            onClick={event => props.saveBooks(event)}
                            >Save</button>
                            <a href={book.link} target="_blank" rel="noopener noreferrer">
                                <button type='button' className='resultsbutton'>More Info</button>
                            </a>
                            <a rel='noopener noreferrer' target='_blank' href={book.link}>
                                <button type='button' className='resultsbutton'>
                                    Book was read
                                </button>
                            </a>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>
    )



}


        






export default Result;