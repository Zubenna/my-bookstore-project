import PropTypes from 'prop-types';

const CategoryFilter = props => {
  const CATEGORIES = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const { handleFilter } = props;

  const handleClick = event => {
    const { value } = event.target;
    handleFilter(value);
  };

  return (
    <div>
      Filter By Category:
      <select name="category" id="select" onChange={handleClick}>
        {CATEGORIES.map(category => <option value={category} key={category}>{category}</option>)}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
