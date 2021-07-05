import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";
import axios from "axios";



export default function App() {

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
<main>
  <Header />
    <nav>
        <div className="nav-links">
          <Link className="home-link" to="/">Home</Link>
          <Link className="char-link" to="/character-list">Characters</Link>
          <Link className="search-link" to="/search-form">Search</Link>

          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/character-list" component={CharacterList} />
          <Route exact path="/search-form" render={(props) => <SearchForm {...props} character={char} isAuthed={true} />} />
        </div>
        </nav>           
    </main>
  );
}
