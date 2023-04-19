import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({allPokemon}) {
  
  return (
    <Card.Group itemsPerRow={6}>
      {allPokemon.map((pokemon) => {
        return <PokemonCard 
          key={pokemon.id}
          name={pokemon.name}
          hp={pokemon.hp}
          front_sprite={pokemon.sprites.front}
          back_sprite={pokemon.sprites.back} />})}
    </Card.Group>
  )
}

export default PokemonCollection;
