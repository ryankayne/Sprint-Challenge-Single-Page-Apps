import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {

const [searchTerm, setSearchTerm] = useState("");

const [searchResults, setSearchResults] = useState([]);

// useEffect(() => {
//   axios
//   .get('https://rickandmortyapi.com/api/character/')
//   .then(response => {
//     setSearchResults(response.data.results);
//     console.log(response.data.results);
//   })
//   .catch(error => {
//     console.log("There's an error", error);
//   })
// }, []);

useEffect(() => {
  const output = props.character.filter(character => {
  // const results = searchResults.filter(character => {
    return character.name.toLowerCase().includes(searchTerm.toLowerCase());
  
    // character.name.toLowerCase().includes(searchTerm.toLowerCase())
  });
    setSearchResults(output);
}, [searchTerm]);

const handleChange = e => {
  setSearchTerm(e.target.value);
};

  return (
    <section className="search-form">
     <form>
       <label htmlFor="name">Search:</label>
       <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />     
        </form>
        
        <div className="results-list">
          <ul>
            {searchResults.map(character =>  (
              <CharacterCard name={character.name} image={character.image} gender={character.gender} species={character.species}/>
            ))}
          </ul>
        </div>
    </section>
  );
}
