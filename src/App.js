import _ from 'lodash'
import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import DisplayBooks from './DisplayBooks'
import {Link} from 'react-router-dom'

class BooksApp extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        books: [],
        searchBook: {}
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
    }


    changeBookSelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then(
                response => {
                    book.shelf = shelf;
                    let updatedShelfBook = this.state.books.filter(books => books.title !== book.title);
                    updatedShelfBook.push(book);
                    this.setState({books: updatedShelfBook});
                }
            )
    }

    changeBookShelf = (books) => {
        let all_Books = this.state.books
        for (let book of books) {
            book.shelf = "none"
        }

        for (let book of books) {
            for (let b of all_Books) {
                if (b.id === book.id) {
                    book.shelf = b.shelf
                }
            }
        }
        return books
    }

    searchList = (query, maxResults) => {
        BooksAPI.search(query, maxResults)
            .then((books) => {
                    books = this.changeBookShelf(books)
                    console.log(books)
                    this.setState({searchBook: books});
                }
            );
    }

    render() {
        const searchListQuery = _.debounce((query, maxResults) => {
            this.searchList(query, maxResults)
        }, 300);
        const currentlyReading = this.state.books.filter(book => book.shelf === 'currentlyReading');
        const wantToRead = this.state.books.filter((book) => book.shelf === 'wantToRead')
        const readAlready = this.state.books.filter((book) => book.shelf === 'read')
        return (<div className="app">
                <Route exact path='/' render={() => (
                    <div>
                        <DisplayBooks
                            currentlyReading={currentlyReading}
                            wantToRead={wantToRead}
                            readAlready={readAlready}
                            changeBookSelf={this.changeBookSelf}
                        />
                        <div className="open-search">
                            <Link to='/search'>{this.state.searchBook = []}Add a book</Link>
                        </div>
                    </div>

                )}
                />
                <Route path='/search' render={() => (
                    <Search
                        SearchList={searchListQuery}
                        searchBookList={this.state.searchBook}
                        changeBookSelf={this.changeBookSelf}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp
