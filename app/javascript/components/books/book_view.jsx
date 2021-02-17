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
        <h5>
          This book is a reference.
          <button onClick={() => setShowDuplicator(!showDuplicator)}>
            change
          </button>
        </h5>
      ) : (
        <div>
          <p>this book is a duplicate of summ</p>
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
          <MakeReference
            book={book}
            setBook={setBook}
            bookHistory={props.history}
          />
        </div>
      )}
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
      ) : null}
      <ul>
        {book.duplicates &&
          book.duplicates.map((dupe, idx) => <li key={idx}>{dupe.title}</li>)}
      </ul>
    </div>
  );
};

export default Book;
