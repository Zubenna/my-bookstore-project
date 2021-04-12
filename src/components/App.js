import '../App.css';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="App">
      <div className="App-box">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
