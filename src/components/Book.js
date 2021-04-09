import React from 'react';
import PropTypes from 'prop-types';
import '../Book.css';
import progress from '../images/progress-icon.png';

const Books = (props) => {
  const { book, removeBtn } = props;
  return (
    <div className="book-holder">
      <div className="per-book-holder" key={book.id}>
        <span className="book-cat">{book.category}</span>
        <span className="book-title">{book.title}</span>
        <span className="book-author">{book.author}</span>
      </div>
      <div className="book-edit">
        <p className="comment">Comments</p>
        <button className="remov-btn" type="submit" onClick={() => removeBtn(book)}>Remove</button>
        <p className="edit">Edit</p>
      </div>
      <div className="perc-complt">
        <img src={progress} alt="Progress Indicator" />
        <div className="percent-box">
          <p className="percent">{book.percentComp}</p>
          <p className="comp-text">Completed</p>
        </div>
      </div>
      <div className="prog-button">
        <p className="chapter-head">CURRENT CHAPTER</p>
        <p className="cur-chapter">{book.currentChap}</p>
        <button className="upd-button" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    currentChap: PropTypes.string,
    percentComp: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  removeBtn: PropTypes.func.isRequired,
};

export default Books;
