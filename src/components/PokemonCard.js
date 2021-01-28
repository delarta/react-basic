import React from "react";
import { connect } from "react-redux";
import { Card, CardImg, CardTitle, CardBody, Button } from "reactstrap";

const PokemonCard = (props) => {
  const { name, sprites, id, favourite } = props.data;
  return (
    <Card>
      <CardImg top width="100%" src={sprites} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <div className="d-flex justify-content-between">
          <Button color="primary" outline onClick={() => props.getDetails(id)}>Details</Button>
          <Button
            disabled={favourite}
            color="warning"
            onClick={() => props.setFavPokemon({ id, name, sprites })}
          >
            Like
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFavPokemon: (newData) =>
      dispatch({ type: "SET_FAV_POKEMON", payload: newData }),
  };
};

export default connect(null, mapDispatchToProps)(PokemonCard);
