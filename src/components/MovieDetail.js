import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import "../assets/css/MovieDetail.css"
const MovieDetail = () => {
  return (
    <Container>
      <Jumbotron>
        <h1 className="title-details">Movie Details</h1>
      </Jumbotron>
    </Container>
  );
}

export default MovieDetail;
