import React from "react";

const CharacterCard = props => {
  console.log(props);
  return (
    <div className="char-list">
      <h2>{props.name}</h2>
        <p>Gender: {props.gender}</p>
        <p>Species: {props.species}</p>
    </div>
  )
}

export default CharacterCard;
