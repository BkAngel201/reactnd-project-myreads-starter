import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import AnnounceGlobe from './AnnounceGlobe'
import BookDetail from './BookDetail'

import SearchBook from './SearchBook'


class BooksApp extends React.Component {
      state = {
          books: [],
          announceGlobeShow: false,
          bookDetail: {
              bookDetailShow: false,
              bookDetailObject: {}
          }
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

      showBookDetail = (bookObject) => {
          this.setState({bookDetail: {
              bookDetailShow: true,
              bookDetailObject: bookObject
          }})
      }

      closeBookDetail = () => {
          this.setState({bookDetail: {
              bookDetailShow: false,
              bookDetailObject: {}
          }})
      }

      render() {
          return (
              <div className="app">
                  {this.state.bookDetail.bookDetailShow && (<BookDetail bookDetailObject={this.state.bookDetail.bookDetailObject} closeBookDetail={this.closeBookDetail}/>)}
                  {this.state.announceGlobeShow && (<AnnounceGlobe message="Book Moved Succesfully!"/>)}
                  <Route exact path="/" render={() => (
                          <BookList booksObject={this.state.books} changeBookShelfFunction={this.changeBookShelf} onClick={this.showBookDetail}/>
                  )}/>
                  <Route exact path="/search" render={() => (
                          <SearchBook actualBooksObject={this.state.books} changeBookShelfFunction={this.changeBookShelf} onClick={this.showBookDetail}/>
                  )}/>
              </div>
          )
    }
}

export default BooksApp
