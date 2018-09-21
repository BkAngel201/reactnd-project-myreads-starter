import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import SearchBook from './SearchBook'


class BooksApp extends React.Component {
      state = {
          books: [],
      }

      updateBooks = () => {
          BooksAPI.getAll().then((response) => {
              this.setState({ books: response })
          })
      }

      componentDidMount() {
          this.updateBooks()
      }

      changeBookShelf = (book, newShelft) => {
          BooksAPI.update(book, newShelft).then(() => (
              this.updateBooks()
          ))

      }

      render() {
          return (
              <div className="app">
                  <Route exact path="/" render={() => (
                          <BookList booksObject={this.state.books} changeBookShelfFunction={this.changeBookShelf}/>
                  )}/>
                  <Route exact path="/search" render={() => (
                          <SearchBook/>
                  )}/>
              </div>
          )
    }
}

export default BooksApp
