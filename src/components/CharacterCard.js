import React from "react";
import styled from "styled-components";

const DivStyle = styled.div`
  margin: 5px auto;
  width: 50%;
  text-align: center;
  background-color: slategrey;
  border: solid black 1px;
  border-radius: 10px;
`;

const TextStyle = styled.p`
  text-size: 2rem;
`;

const GreenH2 = styled.h2`
color: green;
`;

const CharacterCard = props => {
  // console.log(props);
  return (
    <DivStyle className="char-list">
      <GreenH2>{props.name}</GreenH2>
        <img src={props.image} />
        <TextStyle>Gender: {props.gender}</TextStyle>
        <TextStyle>Species: {props.species}</TextStyle>
    </DivStyle>
  )
}

export default CharacterCard;
