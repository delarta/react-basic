import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  Jumbotron,
  Row,
} from "reactstrap";
import axios from "axios";

function TmdbHooks() {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const apiUrl = "https://api.themoviedb.org/3/";

  // Cara membuat state di Hooks
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const [currentGenre, setCurrentGenre] = useState(null);

  // like class component
  // const [state, setState] = useState({
  //   movies: [],
  //   genres: []
  // })

  // mimicking componentDidMount
  useEffect(() => {
    // your code
    axios
      .get(
        `${apiUrl}movie/popular?api_key=8508a0bd1efc493c4bfa095b6a37f250&language=en-US&page=1`
      )
      .then((res) => {
        setMovies(res.data.results);
      });

    axios
      .get(
        `${apiUrl}genre/movie/list?api_key=8508a0bd1efc493c4bfa095b6a37f250&language=en-US`
      )
      .then((res) => setGenres(res.data.genres));
  }, []);

  const getMoviesByGenre = (id) => {
    setCurrentGenre(id);
    axios
      .get(
        `${apiUrl}discover/movie?api_key=8508a0bd1efc493c4bfa095b6a37f250&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
      )
      .then((res) => setMovies(res.data.results));
  };

  return (
    <div>
      <Container>
        <Jumbotron>
          <h1 className="display-3">TMDB (HOOKS)</h1>
        </Jumbotron>

        <div>
          {genres.length !== 0 ? (
            genres.map((genre) => (
              <Button

                key={genre.id}
                onClick={() => getMoviesByGenre(genre.id)}
                className="mr-2 mb-2 rounded-pill"
                color={currentGenre === genre.id ? "primary" : "light"}
              >
                {genre.name}
              </Button>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>

        <Row>
          {movies.length !== 0 ? (
            movies.map((movie) => (
              <Col key={movie.id} md={3}>
                <Card
                  style={{
                    marginBottom: "16px",
                  }}
                >
                  <CardImg src={`${imgUrl}${movie.poster_path}`} />
                  <CardBody
                    style={{
                      minHeight: "200px",
                    }}
                  >
                    <h2>{movie.title}</h2>
                    <p>{movie.release_date}</p>
                  </CardBody>
                </Card>
              </Col>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default TmdbHooks;
