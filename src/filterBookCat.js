const validateForm = (title, category) => {
  const errors = [];
  if (title.length === 0) {
    errors.push('Book title cannot be blank!');
  }
  if (category.length === 0) {
    errors.push('Book category cannot be blank!');
  }
  return errors;
};

const filterBook = props => {
  const { books, filter } = props;
  if (books && filter === 'All') {
    return books;
  }
  return books.filter(book => book.category === filter);
};

export { validateForm, filterBook };
