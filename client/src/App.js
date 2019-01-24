import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Nav from "./Movies/Nav";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieCreate from "./Movies/MovieCreate";

const BASE_HOST = "http://localhost:5000";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
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

  componentDidMount() {
    // fill me in with an HTTP Request to `localhost:5000/api/movies`
    axios
      .get(`${BASE_HOST}/api/movies`)
      .then(res => this.setState({ movies: res.data }))
      .catch(err => console.log(err));
  }

  handleChanges = event => {
    event.persist();
    if (event.target.name === "stars") {
      this.setState(prevState => {
        return {
          movie: {
            ...prevState.movie,
            stars: [].concat(event.target.value.split(","))
          }
        };
      });
    } else {
      this.setState(prevState => {
        return {
          movie: {
            ...prevState.movie,
            [event.target.name]: event.target.value
          }
        };
      });
    }
  };

  createMovie = e => {
    e.preventDefault();
    axios
      .post(`${BASE_HOST}/api/movies`, this.state.movie)
      .then(res => this.setState({ movies: res.data }))
      .catch(err => console.log(err));
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
        <Route
          exact
          path="/"
          render={props => <MovieList {...props} movies={this.state.movies} />}
        />
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
              createMovie={this.createMovie}
            />
          )}
        />
      </div>
    );
  }
}
