import React, { Fragment } from "react";

export default function MovieCreate(props) {
  return (
    <div className="add-wrapper">
      <form>
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          onChange={props.handleChanges}
          value={props.movie.title}
          autoComplete="off"
        />
        <div className="baseline" />
        <input
          type="text"
          placeholder="Enter director"
          name="director"
          onChange={props.handleChanges}
          value={props.movie.director}
          autoComplete="off"
        />
        <div className="baseline" />
        <input
          type="number"
          placeholder="Enter metascore"
          name="metascore"
          onChange={props.handleChanges}
          value={props.movie.metascore}
          autoComplete="off"
        />
        <div className="baseline" />
        <input
          type="text"
          placeholder="Enter stars separated by ',' "
          name="stars"
          onChange={props.handleChanges}
          value={props.movie.stars}
          autoComplete="off"
        />
        <div className="baseline" />
        {props.isUpdating ? (
          <Fragment>
            <button
              className="md-button"
              style={{ marginTop: "15px" }}
              onClick={props.updateMovie}
            >
              Update Movie
            </button>
            <button
              className="md-button"
              style={{ marginTop: "15px" }}
              onClick={props.cancelUpdate}
            >
              Cancel
            </button>
          </Fragment>
        ) : (
          <button
            className="md-button"
            style={{ marginTop: "15px" }}
            onClick={props.addMovie}
          >
            Add Movie
          </button>
        )}
      </form>
    </div>
  );
}
