import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import {
  getMovies,
  getGenres,
  getMoviesByGenreId,
} from "../redux/actions/movie";

import CarouselHome from "../components/CarouselHome";

import { Container, Jumbotron, Button } from "reactstrap";

const imgSrc = "https://image.tmdb.org/t/p/w500";

function HomePage(props) {
  const [page, setPage] = useState(1);
  const [genreId, setGenreId] = useState(0);

  useEffect(() => {
    props.getMovies();
    props.getGenres();
  }, [props.getMovies]);

  const handleChangePage = (pg) => {
    setPage(pg);
    props.getMovies(pg);
  };

  const handleGetMovieByGenre = (id) => {
    setGenreId(id);
    props.getMoviesByGenreId(id);
  };

  useEffect(() => {
    if(!props.token){
      props.history.push("login")
    }
  }, [props])

  return (
    <div>
      <CarouselHome />

      <Container className="mt-5">
        <div className="my-3">
          <Button
            color={genreId === 0 ? "primary" : "light"}
            className="mr-2 mt-2"
            onClick={() => {
              setGenreId(0);
              props.getMovies();
            }}
          >
            All
          </Button>
          {props.genres.length !== 0 &&
            props.genres.map((genre, index) => (
              <Button
                color={genreId === genre.id ? "primary" : "light"}
                className="mr-2 mt-2"
                key={index}
                onClick={() => handleGetMovieByGenre(genre.id)}
              >
                {genre.name}
              </Button>
            ))}
        </div>
        <div className="movies-list">
          {props.movies.length !== 0
            ? props.movies.map((movie, index) => (
                <div
                  onClick={() => props.history.push(`/detail/${movie.id}`)}
                  className="movie-item"
                  key={index}
                >
                  <img src={`${imgSrc}${movie.poster_path}`} alt={movie.name} />
                  <h4>{movie.title}</h4>
                  <p>{movie.release_date}</p>
                </div>
              ))
            : ""}
        </div>

        <div className="home-pagination my-4 d-flex justify-content-center">
          {page !== 1 && (
            <Button
              onClick={() => handleChangePage(page - 1)}
              color="link"
              className="rounded-circle mr-2"
            >
              Previous
            </Button>
          )}
          <Button
            onClick={() => handleChangePage(1)}
            color={page === 1 ? "primary" : "light"}
            className="rounded-circle mr-2"
          >
            1
          </Button>
          <Button
            onClick={() => handleChangePage(2)}
            color={page === 2 ? "primary" : "light"}
            className="rounded-circle mr-2"
          >
            2
          </Button>
          <Button
            onClick={() => handleChangePage(3)}
            color={page === 3 ? "primary" : "light"}
            className="rounded-circle mr-2"
          >
            3
          </Button>
          <Button
            onClick={() => handleChangePage(4)}
            color={page === 4 ? "primary" : "light"}
            className="rounded-circle mr-2"
          >
            4
          </Button>
          <Button
            onClick={() => handleChangePage(5)}
            color={page === 5 ? "primary" : "light"}
            className="rounded-circle mr-2"
          >
            5
          </Button>
          <Button
            onClick={() => handleChangePage(page + 1)}
            color="link"
            className="rounded-circle mr-2"
          >
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres,
    token: state.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (page) => dispatch(getMovies(page)),
    getGenres: () => dispatch(getGenres()),
    getMoviesByGenreId: (id) => dispatch(getMoviesByGenreId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
