import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  Jumbotron,
  Row,
} from "reactstrap";
import axios from "axios";

const imgUrl = "https://image.tmdb.org/t/p/w500";
const apiUrl = "https://api.themoviedb.org/3/";

class Tmdb extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `${apiUrl}movie/popular?api_key=8508a0bd1efc493c4bfa095b6a37f250&language=en-US&page=1`
      )
      .then((res) =>
        this.setState({
          movies: res.data.results,
        })
      );
  }

  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <h1 className="display-3">TMDB (CLASS)</h1>
          </Jumbotron>

          <Row>
            {this.state.movies.length !== 0 ? (
              this.state.movies.map((movie) => (
                <Col md={3} key={movie.id}>
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
}

export default Tmdb;
