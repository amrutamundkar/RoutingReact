import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const books = [{
            id: 0,
            name: "Book0"
        },
        {
            id: 1,
            name: "Book1"
        },
        {
            id: 2,
            name: "Book2"
        },
        {
            id: 3,
            name: "Book3"
        }
];

// const find = id => Books.find(p => p.id == id);

const BookList = ({ match }) => {
//   const book = find(match.params.id);

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Books Lists</h1>
      </header>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default BookList;
