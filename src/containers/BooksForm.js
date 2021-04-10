import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import '../BookForm.css';

const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 500),
      title: '',
      category: 'Action',
      currentChap: '',
      author: '',
      percentComp: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'title') {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.name === 'category') {
      this.setState({
        category: e.target.value,
      });
    }
    this.setState({
      id: Math.floor(Math.random() * 500),
    });
  }

  handleSubmit(e) {
    const { title } = this.state;
    const { createBook } = this.props;
    e.preventDefault();
    if (title && document.getElementById('inputTitle').value !== '') {
      createBook(this.state);
    }
    document.getElementById('inputTitle').value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="panel">
        <h2 className="add-head">ADD NEW BOOK</h2>
        <div className="input-box">
          <input type="text" name="title" placeholder="Book Title" id="inputTitle" value={this.title} onChange={this.handleChange} />
          <select name="category" id="selectOpt" value={this.category} onChange={this.handleChange}>
            {CATEGORIES.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <button id="add-book" type="submit">ADD BOOK</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => {
    dispatch(createBook(book));
  },
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
