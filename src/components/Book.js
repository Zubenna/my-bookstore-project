import React from 'react';
import PropTypes from 'prop-types';

const Books = props => {
  const { book, removeBtn } = props;
  return (
    <tbody>
      <tr key={book.id}>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
        <td>
          <button type="submit" onClick={() => removeBtn(book)}>Remove Book</button>
        </td>
      </tr>
    </tbody>
  );
};

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  removeBtn: PropTypes.func.isRequired,
};

export default Books;
