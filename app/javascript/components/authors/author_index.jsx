import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Authors = (props) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const url = "/api/v1/authors/index";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setAuthors(response))
      .catch(() => props.history.push("/"));
  }, []);

  return (
    <ul className="list-group-flush">
      <h1 className="text-center">Authors</h1>
      {authors &&
        authors.map((author, key) => (
          <li key={key} className="list-group-item">
            <Link to={`/authors/${author.id}`}>{author.fullName}</Link>
          </li>
        ))}
    </ul>
  );
};

export default Authors;
