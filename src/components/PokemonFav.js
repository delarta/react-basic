import React from "react";
import PokemonCard from "./PokemonCard";

import { connect } from "react-redux";

import { Container, Row, Col } from "reactstrap";

const PokemonFav = (props) => {
  return (
    <Container>
      <Row>
        {props.pokemon.map((item) => (
          <Col key={item.id} lg="3" md="6">
            <PokemonCard
              key={item.id}
              data={item}
              getDetails={() => {
                props.history.push(`/pokemon-hooks/${item.id}`);
              }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemon: state.favPokemon,
  };
};

export default connect(mapStateToProps)(PokemonFav);
