import React, { Component } from "react";

import axios from "axios";

import "../assets/css/Posts.css";

class Posts extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ posts: data }))
    //   .catch((err) => console.log(err));

    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => this.setState({ posts: response.data }))
    //   .catch((err) => console.log(err));

    try {
      let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      this.setState({ posts: response.data.slice(0, 10) });
    } catch (err) {
      console.log(err);
    }
    // try {
    //   let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //   let data = await response.json();
    //   this.setState({ posts: data.slice(0, 10) });
    // } catch (err) {
    //   console.log(err);
    // }
  }

  getPostsData = async () => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState({ posts: data });
    //   })
    //   .catch((err) => console.log(err));

    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      this.setState({ posts: data.slice(0, 10) });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="post-container">
        {/* <button onClick={this.getPostsData}>Get Posts Data</button> */}
        {/* <div className="post-item">
          <h2>Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, odio. Sapiente vel fuga quia veniam earum accusantium similique, quam tempora voluptatem. Sit dolorem optio quia consequatur ad error nobis veniam nisi ex totam, quibusdam deserunt beatae, eaque aspernatur! Repellendus laborum unde odit temporibus. Commodi, tempora amet ipsam numquam beatae eaque.</p>
        </div> */}

        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
