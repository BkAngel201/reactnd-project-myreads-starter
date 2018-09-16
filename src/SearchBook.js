import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBook extends Component {
    state = {
        books: []
    }

    updateQuery = (inputValue) => {
        if(inputValue !== '') {
            BooksAPI.search(inputValue).then((response) => {
                if(!response.error) {
                    this.setState({ books: response })
                } else {
                    this.setState({ books: response.items })
                }
                    console.log(response);
            })
        } else {
            this.setState({ books: [] })
        }

    }

    render() {
        return (
            <div className="search-books">
              <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input type="text" placeholder="Search by title or author" onChange={(e) => (this.updateQuery(e.target.value))}/>

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                {(this.state.books.length === 0)
                    ? ( <p>No Results to Show</p> )

                    : ( this.state.books.map((book, index) => (
                        <li key={index}>
                            <div className="book">
                                <div className="book-top">

                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: (book.imageLinks) ? "url('" + book.imageLinks.thumbnail + "')" : "url('images/no-thumbnail.png')"  }}></div>
                                    <div className="book-shelf-changer">
                                        <select>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                {book.authors && (book.authors.map((author) => (
                                    <div className="book-authors">{author}</div>
                                )))}
                            </div>
                        </li>
                        )
                    )
                )}

                </ol>
              </div>
            </div>
        )
    }
}

export default SearchBook
