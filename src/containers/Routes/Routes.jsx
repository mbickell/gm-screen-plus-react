import React, { Component } from "react";
import StoryCards from "../StoryCards/StoryCards";
import MonsterCards from "../MonsterCards/MonsterCards";
import { Router } from "@reach/router";

class Routes extends Component {
  state = {};
  render() {
    return (
      <Router>
        <StoryCards path="/" />
        <MonsterCards path="monster" />
      </Router>
    );
  }
}

export default Routes;
