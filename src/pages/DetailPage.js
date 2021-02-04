import React, { useEffect, useState } from "react";
import {
  Container,
  Jumbotron,
  Button,
  Spinner,
  Row,
  Col,
  FormGroup,
  Input,
} from "reactstrap";

import { connect } from "react-redux";

import { useParams } from "react-router-dom";

import ReactStars from "react-rating-stars-component";

import { getMovieDetails, getReviewsByMovieId, postReview } from "../redux/actions/movie";

import { IMG_SRC } from "../constants/constants";

function DetailPage(props) {
  const params = useParams();

  const [review, setReview] = useState({
    author: "Chonky",
    author_details: {
      avatar_path:
        "/https://static.boredpanda.com/blog/wp-content/uploads/2019/10/cinderblock-fat-cat-workout-fb.png",
    },
    content: "",
  });

  useEffect(() => {
    const getData = () => {
      props.getMovieDetails(params.id);
      props.getReviewsByMovieId(params.id);
    };

    getData();
  }, [props.getMovieDetails, params.id]);

  useEffect(() => {
    console.log(props.movieDetail);
  }, [props.movieDetail]);

  useEffect(() => {
    console.log(props.reviews);
  }, [props]);

  const renderImg = (img) => {
    let rendered =
      "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png";

    if (img) {
      if (img.substring(1, 5) === "http") {
        rendered = img.substring(1);
      } else {
        rendered = `${IMG_SRC}${img}`;
      }
    }

    return rendered;
  };

  const handleSubmit = () => {
    props.postReview(review)
  };

  return (
    <div>
      <Container className="py-5">
        {props.movieDetail ? (
          <>
            <Jumbotron
              style={{
                backgroundImage: `url('${IMG_SRC}${props.movieDetail.backdrop_path}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                color: "white",
              }}
            >
              <div>
                <h1>{props.movieDetail.title}</h1>
                <div className="ratings d-flex">
                  <div className="mr-3">
                    <ReactStars
                      size={18}
                      value={props.movieDetail.vote_average / 2}
                      edit={false}
                      isHalf={true}
                    />
                  </div>
                  <div>{props.movieDetail.vote_count} vote</div>
                </div>
                <p className="short-synopsis my-3">
                  {props.movieDetail.tagline}
                </p>
                <div>
                  <Button className="mr-3" color="primary">
                    Watch Trailer
                  </Button>
                  <Button color="primary" outline>
                    Add to Watchlist
                  </Button>
                </div>
              </div>
            </Jumbotron>
            <div className="movie-synopsis">
              <h2>Synopsis</h2>
              <p>{props.movieDetail.overview}</p>
            </div>
            <hr className="my-4" />
            <div className="movie-reviews">
              <h2>Reviews</h2>

              <Row>
                <Col md={2}>
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                    src={renderImg(review.author_details.avatar_path)}
                    alt="cat"
                  />
                </Col>
                <Col>
                  <div class="author">
                    <h4 className="mb-0">{review.author}</h4>
                  </div>
                  <div class="author-rating mb-1">
                    <ReactStars size={20} edit={true} isHalf={true} />
                  </div>
                  <div class="author-review">
                    <FormGroup>
                      <Input
                        type="textarea"
                        onChange={(e) => setReview({...review, content: e.target.value})}
                        value={review.content}
                      />
                    </FormGroup>
                    <Button onClick={handleSubmit} color="primary">
                      Submit Review
                    </Button>
                  </div>
                </Col>
              </Row>

              {props.reviews &&
                props.reviews.map((review, index) => (
                  <Row className="mt-4" key={index}>
                    <Col md={2}>
                      <img
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                        src={renderImg(review.author_details.avatar_path)}
                        alt="cat"
                      />
                    </Col>
                    <Col>
                      <div class="author">
                        <h4>{review.author}</h4>
                      </div>
                      <div class="author-review">
                        <p>{review.content.slice(0, 500)} ...</p>
                      </div>
                    </Col>
                  </Row>
                ))}
            </div>
          </>
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetail,
    reviews: state.reviews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetails: (id) => dispatch(getMovieDetails(id)),
    getReviewsByMovieId: (movieId) => dispatch(getReviewsByMovieId(movieId)),
    postReview: (data) => dispatch(postReview(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
