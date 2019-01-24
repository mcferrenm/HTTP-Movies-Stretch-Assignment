import React from "react";

export default function MovieCreate(props) {
  return (
    <div className="add-wrapper">
      <form>
        <input type="text" placeholder="Enter title" name="title" />
        <div className="baseline" />
        <input type="text" placeholder="Enter director" name="director" />
        <div className="baseline" />
        <input type="number" placeholder="Enter metascore" name="metascore" />
        <div className="baseline" />
        <input
          type="text"
          placeholder="Enter stars separated by ',' "
          name="stars"
        />
        <div className="baseline" />
        <button className="md-button" style={{ marginTop: "15px" }}>
          Add Movie
        </button>
      </form>
    </div>
  );
}
