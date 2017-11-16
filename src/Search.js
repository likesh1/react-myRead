import React from 'react'
import {Link} from 'react-router-dom'
import SearchList from "./SearchList";


class Search extends React.Component {


    state = {
        query: ''
    }


    querying(event) {
        this.setState({query: event});
        this.props.SearchList(event, 20)
    }

    render() {
        return (

            <div className="search-books">

                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.state.query}
                               onChange={event => this.querying(event.target.value)}
                               placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <SearchList
                            books={this.props.searchBookList}
                            changeBookSelf={this.props.changeBookSelf}
                        />
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;