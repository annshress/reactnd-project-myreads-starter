import React, {Component} from 'react';

class SearchBar extends Component {
    state = {
        query: ''
    };

    updateQuery = (query) => {
        this.setState({query});
        this.props.searchBooks(query);
    };

    render(){
        const {searchBooks} = this.props;

        return(
            <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
            </div>
        )
    }
}

export default SearchBar;