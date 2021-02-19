import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MakeDuplicate from "../duplicator/make_duplicate";
import MakeReference from "../duplicator/make_reference";
import ChangeReference from "../duplicator/change_reference";

const Book = (props) => {
  const [book, setBook] = useState({});
  const [showDuplicator, setShowDuplicator] = useState(false);
  const [showReferencer, setShowReferencer] = useState(false);
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
          {book && book.isReference && <h4>Is a Reference</h4>}
          {/* If book has no reference show MakeDuplicate component */}
          {book && book.reference == undefined && (
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
                  <h6>This book has no references</h6>
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
          {/* If book is NOT a reference AND showReferencer == false AND book has a reference 
          - show button to load referencer */}
          {book &&
            !book.isReference &&
            !showReferencer &&
            book.reference != undefined && (
              <div>
                <div className="form-check-inline">
                  <h6>
                    Is a duplicate of:
                    <a
                      href={`${book.reference && book.reference.id}`}
                      className="ml-2"
                    >
                      {book.reference && book.reference.title}
                    </a>
                  </h6>
                  <button
                    className="btn btn-warning ml-2"
                    onClick={() => setShowReferencer(!showReferencer)}
                  >
                    Change
                  </button>
                </div>
              </div>
            )}
          {/* If book is not a reference and showReferencer button was pushed show ChangeReference component */}
          {book && !book.isReference && showReferencer && (
            <div className="form-check-inline">
              <h3 className="mr-3">Make this book is a duplicate of:</h3>
              <ChangeReference
                book={book}
                setBook={setBook}
                bookHistory={props.history}
                allReferences={allReferences}
                setAllReferences={setAllReferences}
                reference={reference}
                setReference={setReference}
                setShowReferencer={setShowReferencer}
              />
            </div>
          )}
          {/* If book is not a reference show MakeReference component */}
          {book && !book.isReference && (
            <MakeReference
              book={book}
              setBook={setBook}
              bookHistory={props.history}
            />
          )}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <ul className="list-unstyled col">
            <h3>Authors:</h3>
            {book &&
              book.authors &&
              book.authors.map((author, idx) => (
                <Link to={`/authors/${author.id}`} key={idx}>
                  <li>{author.fullName}</li>
                </Link>
              ))}
          </ul>
          {/* If book has duplicates list em out */}
          {book && book.isReference && (
            <ul className="list-unstyled col">
              <h3>Duplicates:</h3>
              {book.duplicates &&
                book.duplicates.map((dupe, idx) => (
                  <li key={idx}>
                    <a href={`${dupe.id}`}>{dupe.title}</a>
                  </li>
                ))}
            </ul>
          )}
        </div>
        <div className="text-center">
          <Link to={"/"}>Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
