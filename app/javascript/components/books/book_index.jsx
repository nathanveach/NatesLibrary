import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = "/api/v1/books/index";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setBooks(response))
      .catch(() => props.history.push("/"));
  }, []);

  return (
    <ul>
      {books &&
        books.map((book, key) => (
          <li key={key}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default Books;
