import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MakeDuplicate from "../duplicator/make_duplicate";
import MakeReference from "../duplicator/make_reference";
import ChangeReference from "../duplicator/change_reference";

const Book = (props) => {
  const [book, setBook] = useState({});
  const [showDuplicator, setShowDuplicator] = useState(false);
  const [allReferences, setAllReferences] = useState([]);
  const [reference, setReference] = useState("");

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
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">{book && book.title}</h1>
          {book.isReference && (
            <div>
              {showDuplicator ? (
                <MakeDuplicate
                  book={book}
                  setBook={setBook}
                  bookHistory={props.history}
                  setAllReferences={setAllReferences}
                  setReference={setReference}
                  reference={reference}
                  allReferences={allReferences}
                  setShowDuplicator={setShowDuplicator}
                />
              ) : (
                <div className="form-check-inline">
                  <h6>This book is a reference.</h6>
                  <button
                    onClick={() => setShowDuplicator(!showDuplicator)}
                    className="btn btn-warning ml-2"
                  >
                    Change
                  </button>
                </div>
              )}
            </div>
          )}
          {!book.isReference && (
            <div>
              <h6>
                Is a duplicate of:
                <a
                  href={`${book.reference && book.reference.id}`}
                  className="ml-2"
                >
                  {book.reference && book.reference.title}
                </a>
              </h6>
              <MakeReference
                book={book}
                setBook={setBook}
                bookHistory={props.history}
              />
            </div>
          )}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <ul className="list-unstyled col">
            <h3>Authors:</h3>
            {book.authors &&
              book.authors.map((author, idx) => (
                <Link to={`/authors/${author.id}`} key={idx}>
                  <li>{author.fullName}</li>
                </Link>
              ))}
          </ul>
          {book.isReference ? (
            <ul className="list-unstyled col">
              <h3>Duplicates:</h3>
              {book.duplicates &&
                book.duplicates.map((dupe, idx) => (
                  <li key={idx}>
                    <a href={`${dupe.id}`}>{dupe.title}</a>
                  </li>
                ))}
            </ul>
          ) : (
            <div className="form-check-inline">
              <h3 className="mr-3">This book is a duplicate of:</h3>
              <ChangeReference
                book={book}
                setBook={setBook}
                bookHistory={props.history}
                allReferences={allReferences}
                setAllReferences={setAllReferences}
                reference={reference}
                setReference={setReference}
                setShowDuplicator={setShowDuplicator}
              />
            </div>
          )}
        </div>
        <div className="justify-content-center">
          <Link to={"/"}>Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
