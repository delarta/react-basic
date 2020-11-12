import React from "react";
import { Button, Container, Jumbotron } from "reactstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const MovieDetail = () => {
  const imgUrl = "https://image.tmdb.org/t/p/original";

  const params = useParams();

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=8508a0bd1efc493c4bfa095b6a37f250&language=en-US`
      )
      .then((res) => {
        setMovieDetails(res.data);
      });
  }, []);

  return (
    <Container>
      {movieDetails ? (
        <div>
          <Jumbotron
            style={{
              backgroundImage: `url(${imgUrl}/${movieDetails.backdrop_path})`,
              color: "white",
            }}
          >
            <h1 className="title-details">{movieDetails.title}</h1>
            <p>Rating: {movieDetails.vote_average}</p>
            <p>{movieDetails.tagline}</p>

            <div>
              <Button className="mr-3" color="primary">
                Watch Trailer
              </Button>
              <Button color="primary" outline>
                Add to Watchlist
              </Button>
            </div>
          </Jumbotron>
          <div>
            <div>
              <Button className="mr-2 mb-2 rounded-pill" color="primary">
                Overview
              </Button>
              <Button className="mr-2 mb-2 rounded-pill" color="light">
                Character
              </Button>
              <Button className="mr-2 mb-2 rounded-pill" color="light">
                Review
              </Button>
            </div>
            <div>
              <h2>Synopsys</h2>
              <p>{movieDetails.overview}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
};

export default MovieDetail;
