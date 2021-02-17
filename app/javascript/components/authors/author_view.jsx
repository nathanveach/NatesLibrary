import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Author = (props) => {
  const [author, setAuthor] = useState({});

  const {
    match: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    const url = `/api/v1/authors/${id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setAuthor(response))
      .catch(() => props.history.push("/"));
  }, []);

  return (
    <div>
      <h1>{author.fullName}</h1>
      <h3>
        has written:
        <ul>
          {author.books &&
            author.books.map((book, idx) => (
              <Link to={`/books/${book.id}`} key={idx}>
                <li>{book.isReference && book.title}</li>
              </Link>
            ))}
        </ul>
      </h3>
    </div>
  );
};

export default Author;
