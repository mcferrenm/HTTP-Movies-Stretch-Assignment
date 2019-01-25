import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails
          key={movie.id}
          movie={movie}
          deleteMovie={props.deleteMovie}
          editMovie={props.editMovie}
          updateMovie={props.updateMovie}
        />
      ))}
    </div>
  );
}

function MovieDetails({ movie, deleteMovie, editMovie, updateMovie }) {
  return (
    <MovieCard
      movie={movie}
      deleteMovie={deleteMovie}
      editMovie={editMovie}
      updateMovie={updateMovie}
    />
  );
}
