import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { getMovies } from "../redux/actions/movie";

import CarouselHome from "../components/CarouselHome";

import { Container, Jumbotron, Button } from "reactstrap";

const imgSrc = "https://image.tmdb.org/t/p/w500";

function HomePage(props) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    props.getMovies();
  }, [props.getMovies]);

  const handleChangePage = (pg) => {
    setPage(pg);

    props.getMovies(pg);
  };

  const pagination = (totalPages) => {
    let buttons = new Array(totalPages);

    console.log(buttons.length);

    return buttons.map((item, i) => (
      <Button
        onClick={() => handleChangePage(i + 1)}
        color={page === i + 1 ? "primary" : "light"}
        className="rounded-circle mr-2"
      >
        {i + 1}
      </Button>
    ));
  };

  return (
    <div>
      <CarouselHome />
      <Container className="mt-5">
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (page) => dispatch(getMovies(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
