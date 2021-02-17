import React, { useState, useEffect } from "react";

const MakeReference = (props) => {
  const clickHandler = () => {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const url = `/api/v1/duplicator/destroy/${props.book.id}`;
    fetch(url, {
      method: "Delete",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => props.setBook(response))
      .catch(() => props.bookHistory.push("/"));
  };

  return (
    <div>
      <button onClick={clickHandler}>Make this book a reference</button>
    </div>
  );
};

export default MakeReference;
