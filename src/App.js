import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import Search from './searchPage';
import Shelves from './shelves';


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
      key:0,
      showSearchPage: false,
      books: [],
      searchResults: [],
  };

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({books})
    })
  };

  showSearch = (value) => {
    this.setState((state) => ({
        showSearchPage: value
    }))
  };

  searchBooks = (search) => {
      BooksAPI.search(search, 20).then(searchResults => {
        if (Array.isArray(searchResults)){this.setState({searchResults})}
      })
  };

  updateShelf = (book, nextShelf) => {
    BooksAPI.update(book, nextShelf).then(() => {
      let books = this.state.books.filter((book_) => {return (book_.id !== book.id)});
      const book_updated = {...book, shelf: nextShelf};
      books = [...books, book_updated];
      this.setState({books})
    })
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
            <Search
                searchResults={this.state.searchResults}
                showSearch={this.showSearch}
                updateShelf={this.updateShelf}
                searchBooks={this.searchBooks}
            />
        ) : (
            <Shelves
                showSearch={this.showSearch}
                updateShelf={this.updateShelf}
                books={this.state.books}
            />
        )}
      </div>
    )
  }
}

export default BooksApp
