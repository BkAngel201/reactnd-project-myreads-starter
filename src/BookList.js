import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BookList extends Component {
    shelfStates = [
        ['currentlyReading', 'Currently Reading'],
        ['wantToRead','Want To Read'],
        ['read','Read']
    ]

    render () {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                    {this.shelfStates.map((shelf) => (
                        <div key={shelf} className="bookshelf">
                            <h2 className="bookshelf-title">{shelf[1]}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {this.props.booksObject.filter((book) => (book.shelf === shelf[0])).map((book, index) => (
                                    <li key={index}>
                                        <div className="book">
                                            <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: (book.imageLinks) ? "url('" + book.imageLinks.thumbnail + "')" : "url('images/no-thumbnail.png')"  }}></div>
                                            <div className="book-shelf-changer">
                                                <select value={shelf[0]} onChange={(e) => (this.props.changeBookShelfFunction(book, e.target.value))}>
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
                                            <div key={author} className="book-authors">{author}</div>
                                        )))}

                                      </div>
                                    </li>
                                ))}
                                </ol>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
            </div>


        )
    }
}

export default BookList
