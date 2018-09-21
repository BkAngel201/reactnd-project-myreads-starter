import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import AnnounceGlobe from './AnnounceGlobe'

import SearchBook from './SearchBook'


class BooksApp extends React.Component {
      state = {
          books: [],
          announceGlobeShow: false
      }

      updateBooks = () => {
          BooksAPI.getAll().then((response) => {
              this.setState({ books: response })
          })
      }

      componentDidMount = () => {
          this.updateBooks()
      }

      changeBookShelf = (book, newShelf) => {
          BooksAPI.update(book, newShelf).then(() => (
              this.updateBooks()

          )).then(() => (
              this.showAnnounceGlobe()
          ))

      }

      showAnnounceGlobe = () => {
          this.setState({announceGlobeShow: true})
          setTimeout(() => (
              this.setState({announceGlobeShow: false})
          ), 4000)
      }

      render() {
          return (
              <div className="app">
                  {this.state.announceGlobeShow && (<AnnounceGlobe message="Book Moved Succesfully!"/>)}
                  <Route exact path="/" render={() => (
                          <BookList booksObject={this.state.books} changeBookShelfFunction={this.changeBookShelf} />
                  )}/>
                  <Route exact path="/search" render={() => (
                          <SearchBook actualBooksObject={this.state.books} changeBookShelfFunction={this.changeBookShelf}/>
                  )}/>
              </div>
          )
    }
}

export default BooksApp
