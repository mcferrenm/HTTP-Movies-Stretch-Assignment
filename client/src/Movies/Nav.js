import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <NavLink exact to="/" className="md-button">
        MovieList
      </NavLink>
      <NavLink to="/add" className="md-button">
        Add Movie
      </NavLink>
    </div>
  );
}
