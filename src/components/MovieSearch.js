import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Form,
  FormGroup,
  Input,
  Jumbotron,
  Label,
  Row,
  Col
} from "reactstrap";

const urlAPI = "http://www.omdbapi.com/?apikey=7d7dd851&";

class MovieSearch extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      title: "",
      year: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.title, this.state.year);

    fetch(`${urlAPI}s=${this.state.title}&y=${this.state.year}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ movies: json.Search });
      });
  };

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleChangeYear = (e) => {
    this.setState({
      year: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Jumbotron className="mt-3">
            <h1 className="display-3">Movie Search (OMDB)</h1>
          </Jumbotron>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>Title</Label>
              <Input
                onChange={this.handleChangeTitle}
                type="text"
                name="title"
                value={this.state.title}
              />
            </FormGroup>
            <FormGroup>
              <Label>Year</Label>
              <Input
                onChange={this.handleChangeYear}
                type="text"
                name="year"
                value={this.state.year}
              />
            </FormGroup>
            <Button color="primary">Search</Button>
          </Form>
          <Row>

          {this.state.movies.length !== 0
            ? this.state.movies.map((movie) => (
              <Col xs="6" sm="4" key={movie.imdbID}>
                <Card>
                  <CardImg src={movie.Poster} 
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <CardBody>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                  </CardBody>
                </Card>
              </Col>
              ))
            : ""}
          </Row>
        </Container>
      </div>
    );
  }
}

export default MovieSearch;
