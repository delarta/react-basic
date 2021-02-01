import React, { useEffect } from "react";

import { connect } from "react-redux";

import { getMovies } from "../redux/actions/movie";

import CarouselHome from "../components/CarouselHome";

import { Container, Jumbotron } from "reactstrap";

const imgSrc = "https://image.tmdb.org/t/p/w500";

function HomePage(props) {
  useEffect(() => {
    props.getMovies();
  }, [props]);

  return (
    <div>
      
      <CarouselHome />
      <Container className="mt-5">
        <div className="movies-list">
          {props.movies.length !== 0
            ? props.movies.map((movie, index) => (
                <div onClick={() => props.history.push(`/detail/${movie.id}`)} className="movie-item" key={index}>
                  <img src={`${imgSrc}${movie.poster_path}`} alt={movie.name} />
                  <h4>{movie.title}</h4>
                  <p>{movie.release_date}</p>
                </div>
              ))
            : ""}
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => dispatch(getMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
