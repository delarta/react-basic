import React, { Component } from "react";
import { Container, Card, CardBody } from "reactstrap";
class PostDetails extends Component {
  constructor() {
    super();

    this.state = {
      post: "",
    };
  }

  componentDidMount() {
    console.log(this.props)
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((res) => res.json())
      .then((json) =>
        this.setState({
          post: json.find((data) => data.id == this.props.match.params.id),
        })
      );
  }

  render() {
    return (
      <Container>
        {this.state.post ? (
          <Card>
            <CardBody>
              <h1>{this.state.post.title}</h1>
              <p>{this.state.post.body}</p>
            </CardBody>
          </Card>
        ) : (
          "No Post Found!"
        )}
      </Container>
    );
  }
}
export default PostDetails;
