import React, { Component } from "react";
import {
  Container,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
  Input,
  FormGroup,
} from "reactstrap";

class Posts extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((res) => res.json())
      .then((json) => this.setState({ posts: json }));
  }

  componentDidUpdate() {
    if (this.state.search === "chonky cat") {
      alert("You're not suppose to be in here");
    }

    if (this.state.posts.length === 0) {
      alert("Post not found");
    }
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
          <FormGroup className="my-3">
            <Input
              type="text"
              value={this.state.search}
              placeholder="Search Post"
              onChange={(e) => {
                this.setState({ search: e.target.value });
                console.log(e.target.value);
              }}
            />
          </FormGroup>
          <Button
            onClick={() => {
              this.setState({
                posts: [
                  ...this.state.posts.filter(
                    (post) => post.title === this.state.search
                  ),
                ],
              });
            }}
          >
            Search
          </Button>
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
