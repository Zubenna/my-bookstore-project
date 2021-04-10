import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = [
  {
    id: Math.floor(Math.random() * 50),
    title: 'Encarter Dictionary',
    category: 'Kids',
    currentChap: 'Chapter 1',
    author: 'Microsoft',
    percentComp: '54%',
  },
  {
    id: Math.floor(Math.random() * 50),
    title: 'Senior Secondary Physics',
    category: 'Learning',
    currentChap: 'Chapter 18',
    author: 'P.N Okeke',
    percentComp: '90%',
  },
  {
    id: Math.floor(Math.random() * 50),
    title: 'Things Fall Appart',
    category: 'History',
    currentChap: 'Chapter 10',
    author: 'Chinua Achebe',
    percentComp: '70%',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;
