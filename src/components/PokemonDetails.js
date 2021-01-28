import React, { useState, useEffect } from "react";

import {Container, Card, CardBody, CardImg, CardTitle} from "reactstrap"

import axios from "axios";

function PokemonDetails(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const pokemonId = props.match.params.id;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));

    return () => {
      setData(null)
    }
  }, []);

  return (
    <Container>
   
        {data !== null && (
          <Card>
            <CardImg src={data.sprites.front_default} alt={data.name}/>
            <CardBody>
              <CardTitle>{data.name}</CardTitle>
            </CardBody>
          </Card>
        )}
    </Container>
  );
}

export default PokemonDetails;
