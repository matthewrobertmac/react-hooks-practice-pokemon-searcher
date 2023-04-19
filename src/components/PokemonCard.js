import React, { useState } from "react";
import { Card } from "semantic-ui-react";


// function PokemonCard({name, hp, front_sprite, back_sprite}) {
//   const [clicked, setClicked] = useState(false)


//   return (
//     <Card>
//       <div>
//         <div className="image">
//           <img src={front_sprite} alt="oh no!" />
//         </div>
//         <div className="content">
//           <div className="header">{name}</div>
//         </div>
//         <div className="extra content">
//           <span>
//             <i className="icon heartbeat red" />
//             {hp}
//           </span>
//         </div>
//       </div>
//     </Card>
//   );
// }

function PokemonCard({name, hp, front_sprite, back_sprite}) {
  const [clicked, setClicked] = useState(false)

  function renderClick() {
    console.log("clicked!")
    setClicked(!clicked)
  }

  return (clicked ? (    <Card onClick={renderClick}>
    <div>
      <div className="image">
        <img src={back_sprite} alt="oh no!" />
      </div>
      <div className="content">
        <div className="header">{name}</div>
      </div>
      <div className="extra content">
        <span>
          <i className="icon heartbeat red" />
          {hp}
        </span>
      </div>
    </div>
  </Card>
) : (<Card onClick={renderClick}>
    <div>
      <div className="image">
        <img src={front_sprite} alt="oh no!" />
      </div>
      <div className="content">
        <div className="header">{name}</div>
      </div>
      <div className="extra content">
        <span>
          <i className="icon heartbeat red" />
          {hp}
        </span>
      </div>
    </div>
  </Card>
)
  )
}

export default PokemonCard;

/*


function PokemonCard({name, hp, front_sprite, back_sprite}) {
  const [clicked, setClicked] = useState(false)



  return (
    
    <Card>
      <div>
        <div className="image" onClick={() => {
          clicked ? (
            <img src={front_sprite} alt="oh no!"/>
          ) : (
            <img src={back_sprite} alt="oh no!" /> 
          ) 
        }} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
    </Card>
  );
}

*/