import React, { useEffect } from "react";
import { Container, Jumbotron, Button, Spinner } from "reactstrap";

import { connect } from "react-redux";

import { useParams } from "react-router-dom";

import ReactStars from "react-rating-stars-component";

import { getMovieDetails } from "../redux/actions/movie";

import { IMG_SRC } from "../constants/constants";

function DetailPage(props) {
  const params = useParams();

  useEffect(() => {
    const getData = () => {
      props.getMovieDetails(params.id);
    };

    getData();
    console.log(params.id);
  }, [props.getMovieDetails, params.id]);

  useEffect(() => {
    console.log(props.movieDetail);
  }, [props.movieDetail]);

  return (
    <div>
      <Container>
        {props.movieDetail ? (
          <>
            {" "}
            <Jumbotron
              style={{
                backgroundImage: `url('${IMG_SRC}${props.movieDetail.backdrop_path}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                color: "white",
              }}
              className="my-4"
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
            <div className="movie-info">
              <h2>Movie Information</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                unde ratione laborum, sint necessitatibus facilis dolores nisi
                quaerat tenetur, repellat perspiciatis corrupti tempore tempora!
                Consequuntur odit, aliquid repellat voluptas laborum blanditiis
                aliquam necessitatibus at eveniet minus veniam error qui vero
                officia culpa possimus fugit sunt provident commodi porro.
                Assumenda, tempora.
              </p>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetails: (id) => dispatch(getMovieDetails(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
