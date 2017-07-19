import React, {Component} from 'react';

class Book extends Component {
    render(){
        const {book, updateShelf} = this.props;

        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193,
                        backgroundImage: 'url("http://books.google.com/books/content?id='+ book.id + '&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(event) => updateShelf(book, event.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="none">None</option>
                            <option value="currentlyReading" >Reading</option>
                            <option value="wantToRead" >Want to Read</option>
                            <option value="read" >Read</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors?
                    <div className="book-authors">{book.authors.map((author) => {
                        return <span>{author}<br/></span>
                    })}</div>
                    :<div className="book-authors">No Authors</div>}
            </div>
        )
    }
}

export default Book;