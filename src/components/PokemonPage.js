import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [allPokemon, setAllPokemon] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  function formSearchInput(input) {
    setSearchInput(input)
  }

  const filteredPokemon = allPokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchInput.toLowerCase());
  })


  useEffect(()=>{
    fetch("http://localhost:3001/pokemon")
    .then((res) => res.json())
    .then((data) => {
      setAllPokemon(data);
      console.log(data);
    })
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm searchInput={searchInput} formSearchInput={formSearchInput} setSearchInput={setSearchInput}/>
      <br />
      <Search searchInput={searchInput} formSearchInput={formSearchInput}/>
      <br />
      <PokemonCollection allPokemon={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
