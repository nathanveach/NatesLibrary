import React, { useState, useEffect } from "react";

const MakeDuplicate = (props) => {
  console.log(props);
  useEffect(() => {
    const url = `/api/v1/references`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => props.setAllReferences(response))
      .catch(() => props.bookHistory.push("/"));
  }, []);

  const changeHandler = (event) => {
    props.setReference(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const url = `/api/v1/duplicator/create/${props.book.id}`;
    const formData = new FormData();
    formData.append("reference_id", props.reference);
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => props.setBook(response))
      .then(() => props.setShowDuplicator(false))
      .catch(() => props.bookHistory.push("/"));
  };

  const referenceList = props.allReferences.filter((ref) => {
    if (ref.id == props.book.id) {
      return false;
    }
    return true;
  });
  return (
    <div>
      <form onSubmit={submitHandler} className="form-inline">
        <select onChange={changeHandler} className="custom-select">
          <option>Choose a New Reference</option>
          {referenceList.map((ref, idx) => (
            <option key={idx} value={ref.id}>
              {ref.title}
            </option>
          ))}
        </select>
        <button type="submit" className="ml-2 btn btn-warning">
          Change
        </button>
      </form>
    </div>
  );
};

export default MakeDuplicate;
