import React from "react";
import './App.css';

const books = [{
            id: 0,
            name: "C",
            author: "AM"
        },
        {
            id: 1,
            name: "Java",
            author: "PM"
        },
        {
            id: 2,
            name: "Python",
            author: "PK"
        },
        {
            id: 3,
            name: "React",
            author: "AK"
        }
];

const find = id => books.find(p => p.id == id);

const BookDetails = ({ match }) => {
  const book = find(match.params.id);

  return (
    <div>
      <header>
        <h1 className="App-title">Book Details</h1>
      </header>
      <h3>Books Details</h3>
      <p> Book Name {book && book.name}</p>
      <p> Book Author {book && book.author}</p>
    </div>
  );
};


export default BookDetails;
