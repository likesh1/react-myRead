import React from 'react'
import BookListDisplay from './BookListDisplay'


class DisplayBooks extends React.Component {

    render() {

        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    <BookListDisplay
                                        books={this.props.currentlyReading}
                                        changeBookSelf={this.props.changeBookSelf}
                                    />
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    <BookListDisplay
                                        books={this.props.wantToRead}
                                        changeBookSelf={this.props.changeBookSelf}
                                    />
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    <BookListDisplay
                                        books={this.props.readAlready}
                                        changeBookSelf={this.props.changeBookSelf}
                                    />
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        )
    }

}

export default DisplayBooks;