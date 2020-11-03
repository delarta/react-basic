import React, { Component } from "react";
import {
  Container,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
} from "reactstrap";

class Posts extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((res) => res.json())
      .then((json) => this.setState({ posts: json }));
  }

  render() {
    return (
      <div>
        <Container>
          <div
            className="mt-4 "
            style={{
              backgroundImage:
                "url('https://64.media.tumblr.com/3834527babaf161a5e39b41e3057864c/tumblr_pk6hjpxWAh1uak9jy_540.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "50vh",
            }}
          >
            <h1 className="display-3 text-white">Posts</h1>
          </div>
          <Jumbotron
            className="mt-4 "
            style={{
              backgroundImage:
                "url('https://pbs.twimg.com/media/DyLF14DXgAYzWor.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <h1 className="display-3 text-white">See Other Stories</h1>
          </Jumbotron>
          <ListGroup>
            {this.state.posts.length !== 0 ? (
              this.state.posts.map((post) => (
                <ListGroupItem key={post.id}>
                  <ListGroupItemHeading>{post.title}</ListGroupItemHeading>
                  <ListGroupItemText>{post.body}</ListGroupItemText>
                </ListGroupItem>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </ListGroup>
        </Container>
      </div>
    );
  }
}

export default Posts;
