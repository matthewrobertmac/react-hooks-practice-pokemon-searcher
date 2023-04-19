import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({formSearchInput, setSearchInput}) {

  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [frontUrl, setFrontUrl] = useState("")
  const [backUrl, setBackUrl] = useState("")


  function handlePokemonSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({    
        name: name,
        hp: hp,
        sprites: {
          front: frontUrl,
          back: backUrl
        }
    })
    })
    .then((res) => res.json())
    .then((data) => formSearchInput(data))
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handlePokemonSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={(e) => setName(e.target.value)} value={name} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={(e) => setHp(e.target.value)} value={hp} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input onChange={(e) => setFrontUrl(e.target.value)} value={frontUrl}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input onChange={(e) => setBackUrl(e.target.value)} value={backUrl}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

/*
Wire up the form to add a missing Pokemon (Bulbasaur is missing, and you can probably intuit the image links to use based on the data you have). Since there aren't any validations, you may have to manually remove additions from the db.json file if you make a mistake on a POST request, etc. When a new Pokemon is added, it should show on the page without having to refresh.


*/