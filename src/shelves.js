import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import BookShelf from './bookshelf';

class Shelves extends Component {
    render() {
        const {showSearch, updateShelf, books} = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            title='Currently Reading'
                            books={books.filter((book) => {return book.shelf === "currentlyReading"})}
                            updateShelf={updateShelf}
                        />
                        <BookShelf
                            title="Want to Read"
                            books={books.filter((book) => {return book.shelf === "wantToRead"})}
                            updateShelf={updateShelf}
                        />
                        <BookShelf
                            title="Read"
                            books={books.filter((book) => {return book.shelf === "read"})}
                            updateShelf={updateShelf}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Shelves;
