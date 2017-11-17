import React from 'react'

class SearchList extends React.Component {
    render() {
        const x = this.props.books;
        const m = this.props.changeBookSelf;
        if (x == undefined || !x.length) {
            return (<div> waiting for the search query</div>)
        } else
            return (
                <div className="books-div">
                    {
                        x.map((book) => (
                            <li key={book.title}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: `url(${book.imageLinks.thumbnail})`
                                        }}></div>
                                        <div className="book-shelf-changer">
                                            <select
                                                onChange={(event) => m(book, event.target.value)}
                                                defaultValue={book.shelf}>
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading
                                                </option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
                                </div>
                            </li>))}
                </div>
            )
    }
}

export default SearchList;