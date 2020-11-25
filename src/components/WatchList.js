import React, { useEffect, useState } from "react";
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  Button,
} from "reactstrap";
import { useHistory } from "react-router-dom";

const WatchList = () => {
  const history = useHistory();
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    // Check if there's value in watchlist localstorage
    if (localStorage.getItem("watchlist")) {
      // set movies state value to localstorage
      setMovies(JSON.parse(localStorage.getItem("watchlist")));
    }
  }, []);

  const handleDelete = (id) => {
    // get item from localstorage with watchlist key
    let watchlist = JSON.parse(localStorage.getItem("watchlist"));

    // filter movies that is NOT equal to id
    watchlist = [...watchlist.filter((movie) => movie.id !== id)];

    // Set new value to localstorage
    localStorage.setItem("watchlist", JSON.stringify(watchlist));

    // Set new watchlist value
    setMovies(watchlist);
  };

  const clearWatchlist = () => {
    localStorage.removeItem("watchlist"); //delete all localstorage item
    setMovies(null);
  };

  return (
    <div>
      <Container>
        <Jumbotron>
          <h1 className="display-3">Watchlist</h1>
          <Button color="danger" onClick={() => clearWatchlist()}>
            Clear Watchlist
          </Button>
        </Jumbotron>
        <div>
          {movies ? (
            <Row>
              {movies.map((movie) => (
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
                      <div>
                        <Button
                          block
                          color="primary"
                          onClick={() => {
                            history.push(`/movie-detail/${movie.id}`);
                          }}
                        >
                          View Details
                        </Button>
                        <Button
                          onClick={() => {
                            handleDelete(movie.id);
                          }}
                          block
                          color="danger"
                          outline
                        >
                          Remove from Watchlist
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <div>Empty Watchlist</div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default WatchList;
