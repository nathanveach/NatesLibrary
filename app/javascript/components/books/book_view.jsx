import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  const [book, setBook] = useState({});

  const {
    match: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    const url = `/api/v1/books/${id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setBook(response))
      .catch(() => props.history.push("/"));
  }, []);

  return (
    <div>
      <h1>{book.title}</h1>
      <h3>
        written by:
        <ul>
          {book.authors &&
            book.authors.map((author, idx) => (
              <Link to={`/authors/${author.id}`} key={idx}>
                <li>{author.fullName}</li>
              </Link>
            ))}
        </ul>
      </h3>
      {book.isReference ? (
        <h5>This book is a reference.</h5>
      ) : (
        <p>this book is a duplicate of summ</p>
      )}
      <ul>
        {book.duplicates &&
          book.duplicates.map((dupe, idx) => <li key={idx}>{dupe.title}</li>)}
      </ul>
    </div>
  );
};

export default Book;
