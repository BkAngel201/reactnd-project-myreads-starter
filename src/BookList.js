import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BookList extends Component {
    // object that store the relation between state and text state of shelf
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
                    {/* make three different section one for each shelf */}
                    {this.shelfStates.map((shelf) => (
                        <div key={shelf} className="bookshelf">
                            {/* Use the position 1 to show the text version of the shelf */}
                            <h2 className="bookshelf-title">{shelf[1]}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {/* look what of the elements have shelf like the one on the actual section */}
                                {this.props.booksObject.filter((book) => (book.shelf === shelf[0])).map((book, index) => (
                                    /* show all the info of each book in the actual shelf section */
                                    <li key={index}>
                                        <div className="book">
                                            <div className="book-top">
                                            <div onClick={() => (this.props.onClick(book))} className="book-cover" style={{ width: 128, height: 193, backgroundImage: (book.imageLinks) ? "url('" + book.imageLinks.thumbnail + "')" : "url('images/no-thumbnail.png')"  }}></div>
                                            <div className="book-shelf-changer">
                                                {/* on change it will update the shelf category of the actual book */}
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
                {/* this button will link to /search url */}
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
            </div>


        )
    }
}

export default BookList
