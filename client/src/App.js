import React, { Component } from "react";
import { Route } from "react-router-dom";

import Nav from "./Movies/Nav";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieCreate from "./Movies/MovieCreate";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      movie: {
        id: "",
        title: "",
        director: "",
        metascore: "",
        stars: []
      }
    };
  }

  handleChanges = event => {
    event.persist();
    this.setState(prevState => {
      return {
        movie: {
          ...prevState.movie,
          [event.target.name]: event.target.value
        }
      };
    });
  };

  addToSavedList = movie => {
    console.log(this.state.savedList);
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <Nav />
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => {
            return <Movie {...props} addToSavedList={this.addToSavedList} />;
          }}
        />
        <Route
          path="/add"
          render={props => (
            <MovieCreate
              {...props}
              handleChanges={this.handleChanges}
              movie={this.state.movie}
            />
          )}
        />
      </div>
    );
  }
}
