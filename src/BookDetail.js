import React, { Component } from 'react'

class BookDetail extends Component {
    render () {
        return (
            <div className="book-detail-back">
                <div className="book-detail-container">
                    <div className="close-button" onClick={this.props.closeBookDetail}>X</div>
                    <div className="book-detail-title">{this.props.bookDetailObject.title}</div>
                    <figure className="book-detail-cover">
                        <img  src={(this.props.bookDetailObject.imageLinks) ? this.props.bookDetailObject.imageLinks.thumbnail : 'images/no-thumbnail.png'} alt="Book Cover"/>
                    </figure>
                    <ul className="book-detail-list">
                        <li>
                            <div className="book-detail-category">author:</div>
                            {this.props.bookDetailObject.authors ? (this.props.bookDetailObject.authors.map((author) => (
                                <div key={author} className="book-detail-value">{author}</div>

                            ))) : <div className="book-detail-value">Unknown</div>
                        }

                        </li>
                        <li>
                            <div className="book-detail-category">Publisher:</div>
                            {this.props.bookDetailObject.publisher ?
                                <div className="book-detail-value">{this.props.bookDetailObject.publisher}</div>
                                :
                                <div className="book-detail-value">Unknown</div>
                            }
                        </li>
                        <li>
                            <div className="book-detail-category">Published Date:</div>
                            {this.props.bookDetailObject.publishedDate ?
                                <div className="book-detail-value">{this.props.bookDetailObject.publishedDate}</div>
                                :
                                <div className="book-detail-value">Unknown</div>
                            }
                        </li>
                    </ul>
                    {this.props.bookDetailObject.description ?
                        <div className="book-detail-description">{this.props.bookDetailObject.description}</div>
                        :
                        <div className="book-detail-description">No Description Available</div>

                    }

                </div>
            </div>

        )
    }
}

export default BookDetail
