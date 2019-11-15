import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";



export default function App() {
  return (
<main>
  <Header />
    <nav>
        <div className="nav-links">
          <Link className="home-link" to="/">Home</Link>
          <Link className="char-link" to="/character-list">Characters</Link>

          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/character-list" component={CharacterList} />
        </div>
        </nav>           
    </main>
  );
}
