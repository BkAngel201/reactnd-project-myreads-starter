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
          // book object that will store all the books with currently reading, read or want to read shelf
          books: [],
          // this will trigger the globe announce when an action (book move to a new category) is triggered
          announceGlobeShow: false,
          // object that manage the book detail info will be show
          bookDetail: {
              bookDetailShow: false,
              bookDetailObject: {}
          }
      }
      // this retrieve all the books that has shelf setted
      updateBooks = () => {
          BooksAPI.getAll().then((response) => {
              // save the response of the call to our book object
              this.setState({ books: response })
          })
      }
      // this will update all the content of the page when all the DOM is mounted
      componentDidMount = () => {
          this.updateBooks()
      }
      // the shelf of a specific book will be changed
      changeBookShelf = (book, newShelf) => {
          BooksAPI.update(book, newShelf).then(() => (
              // when the book is updated retrieve the books and update it to refresh the view in the browser
              this.updateBooks()
          )).then(() => (
              // show the globe announce
              this.showAnnounceGlobe()
          ))

      }
      // set the announceGlobeShow to true to show the announce
      showAnnounceGlobe = () => {
          this.setState({announceGlobeShow: true})
          setTimeout(() => (
              // after 4s the globe will be turned off and will not in the DOM
              this.setState({announceGlobeShow: false})
          ), 4000)
      }
      // will provide all the info to the detail modal to show
      showBookDetail = (bookObject) => {
          this.setState({bookDetail: {
              // show it true
              bookDetailShow: true,
              // object that wil be showed
              bookDetailObject: bookObject
          }})
      }
      // rerender the book detail
      closeBookDetail = () => {
          this.setState({bookDetail: {
              // show is false
              bookDetailShow: false,
              // object is empty
              bookDetailObject: {}
          }})
      }

      render() {
          return (
              <div className="app">
                  // if this variables are false it will not be show
                  {this.state.bookDetail.bookDetailShow && (<BookDetail bookDetailObject={this.state.bookDetail.bookDetailObject} closeBookDetail={this.closeBookDetail}/>)}
                  {this.state.announceGlobeShow && (<AnnounceGlobe message="Book Moved Succesfully!"/>)}
                  // route will show the specific component depending on url "/" or "/search"
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
