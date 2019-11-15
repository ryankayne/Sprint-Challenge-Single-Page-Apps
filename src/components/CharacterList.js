import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setChar(response.data.results);
      console.log(response.data.results)
    })
    .catch(error => {
      console.log("There's an error", error);
    })
  }, []);

  return (
    
    <div className="character-list">
      {char.map(char => {

        return (
          <CharacterCard
            key={char.id}
            name={char.name}
            image={char.image} alt="character photo"
            gender={char.gender}
            species={char.species}
            />
          );
      })}
    </div>
  );
}
