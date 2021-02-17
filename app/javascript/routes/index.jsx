import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/homepage";
import Book from "../components/books/book_view";
import Author from "../components/authors/author_view";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/books/:id" exact component={Book} />
      <Route path="/authors/:id" exact component={Author} />
    </Switch>
  </Router>
);
