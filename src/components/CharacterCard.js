import React from "react";
import styled from "styled-components";

const TextStyle = styled.p`
  text-size: 2rem;
`;

const GreenH2 = styled.h2`
color: green;
`;

const CharacterCard = props => {
  // console.log(props);
  return (
    <div className="char-list">
      <GreenH2>{props.name}</GreenH2>
        <TextStyle>Gender: {props.gender}</TextStyle>
        <p>Species: {props.species}</p>
    </div>
  )
}

export default CharacterCard;
