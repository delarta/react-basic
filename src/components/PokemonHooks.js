import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchPokemon from "./SearchPokemon";
import PokemonCard from "./PokemonCard";

import { connect } from "react-redux";

import { getPokemonData } from "../redux/actions/pokemon";

import { Container, Row, Col } from "reactstrap";

function PokemonHooks(props) {
  // componentDidMount
  useEffect(() => {
    props.getPokemonData();
  }, []);

  const getDetails = (id) => {
    console.log(id);
    props.history.push(`/pokemon-hooks/${id}`);
  };

  const getData = () => {
    props.getPokemonData();
  };

  return (
    <Container>
      <Row>
        {props.errorMessage && <div> {props.errorMessage} </div>}
        {props.pokemonData.length !== 0 &&
          props.pokemonData.map((item) => (
            <Col key={item.id} className="mb-3" lg="3" md="6">
              <PokemonCard key={item.id} data={item} getDetails={getDetails} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemonData: state.pokemonData,
    errorMessage: state.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemonData: () => dispatch(getPokemonData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonHooks);
