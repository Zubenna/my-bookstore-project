import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = [
  {
    id: Math.floor(Math.random() * 50),
    title: 'Encarter Dictionary',
    category: 'Kids',
  },
  {
    id: Math.floor(Math.random() * 50),
    title: 'Senior Secondary Physics',
    category: 'Learning',
  },
  {
    id: Math.floor(Math.random() * 50),
    title: 'Things Fall Appart',
    category: 'History',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;
