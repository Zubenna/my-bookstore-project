import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, filterOurBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import login from '../images/login-icon.png';

const BooksList = (props) => {
  const { books, filter } = props;

  const handleRemoveBook = (book) => {
    const { removeBook } = props;
    removeBook(book);
  };

  const handleFilterChange = (category) => {
    const { filterBooks } = props;
    filterBooks(category);
  };

  const filteredBooks = filter === 'All' ? books : books.filter((book) => book.category === filter);

  return (
    <div>
      <div className="app-title">
        <span>Bookstore CMS</span>
        <p className="books">BOOKS</p>
        <p className="catego">CATEGORIES</p>
        <img src={login} alt="User Login Icon" />
      </div>
      {filteredBooks.map(
        (book) => <Book key={book.id} book={book} removeBtn={handleRemoveBook} />,
      )}
      <CategoryFilter handleFilter={handleFilterChange} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
  filterBooks: (category) => {
    dispatch(filterOurBook(category));
  },
});

BooksList.defaultProps = {
  filter: 'All',
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
  filterBooks: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
