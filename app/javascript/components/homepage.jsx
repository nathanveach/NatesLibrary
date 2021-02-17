import React from "react";
import Books from "./books/book_index";
import Authors from "./authors/author_index";

export default () => (
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Nate's Library 📚</h1>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-around">
        <div className="col-4">
          <Books />
        </div>
        <div className="col-4">
          <Authors />
        </div>
      </div>
    </div>
  </div>
);
