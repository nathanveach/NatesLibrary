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
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">{author.fullName}</h1>
        </div>
      </div>
      <div className="container">
        <h3>Books Written:</h3>
        <div className="row">
          {author.books &&
            author.books.map((book, idx) => (
              <div className="col-md-4">
                <div className="card mb-4">
                  <Link to={`/books/${book.id}`} key={idx}>
                    <div className="card-body">
                      📘 {book.isReference && book.title}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <div className="text-center">
          <Link to={"/"}>Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Author;
