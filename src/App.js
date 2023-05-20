import { useEffect, useState } from "react";
import "./App.css";
import AllBook from "./Components/Books/AllBook";
import AddBook from "./Components/FormComponent/AddBook";

function App() {
  const [books, setBooks] = useState([]);
  const [edit, setEdit] = useState(false);

  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    isbn: "",
    published: "",
  });

  const formReset = () => {
    setBookDetails({
      title: "",
      author: "",
      isbn: "",
      published: "",
    });
  };
  const handleInput = (e) => {
    setBookDetails({ ...bookDetails, [e.target.name]: e.target.value });
  };

  function addBook(details) {
    if (edit) {
      const updatedBooks = books.map((book) =>
        book.id === details.id ? details : book
      );
      setBooks(updatedBooks);
      setEdit(false);
    } else {
      setBooks([
        ...books,
        {
          ...details,
          id: books.length !== 0 ? books[books.length - 1].id + 1 : 1,
        },
      ]);
    }
  }
  function editBook(id) {
    setEdit(true);
    const book = books.find((book) => book.id === id);
    if (book) {
      setBookDetails(book);
    }
  }

  function deleteABook(id) {
    const deleteBook = books.filter((book) => book.id !== id);
    setBooks(deleteBook);
    localStorage.setItem("books", JSON.stringify(deleteBook));
  }

  const localBooks = JSON.parse(localStorage.getItem("books"));
  useEffect(() => {
    if (localBooks) {
      setBooks(localBooks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="App">
      <header>
        <h1>Book Management</h1>
      </header>
      <div className="app-container">
        <AddBook {...{ addBook, edit, bookDetails, formReset, handleInput }} />
        <AllBook {...{ books, deleteABook, editBook }} />
      </div>
    </div>
  );
}

export default App;
