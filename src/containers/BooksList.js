import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    <tbody>
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps, null)(BooksList);
