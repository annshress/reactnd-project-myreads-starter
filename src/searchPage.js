import React, {Component} from 'react';
import propTypes from 'prop-types';

import SearchBar from './SearchBar';
import Book from "./book";

class Search extends Component {
    render() {
        const {searchResults, showSearch, updateShelf, searchBooks} = this.props;

        console.log(searchResults);

        return (
        <div className="search-books">
            <div className="search-books-bar">
                <a className="close-search" onClick={() => showSearch(false)}>Close</a>
                <SearchBar
                    searchBooks={searchBooks}
                />
            </div>
            <div className="search-books-results">
                {(searchResults)?(<ol className="books-grid">
                    {searchResults.map((book) => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                updateShelf={updateShelf}
                            />
                        </li>
                    ))}
                </ol>):(<div>Nuthing</div>)}
            </div>
        </div>
        )
    }
}

Search.propTypes = {
    books: propTypes.array,
    showSearch: propTypes.func.isRequired
};

export default Search;