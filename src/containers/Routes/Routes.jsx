import React, { Component } from "react";
import StoryCards from "../StoryCards/StoryCards";
import MonsterCards from "../MonsterCards/MonsterCards";
import { Router } from "@reach/router";

class Routes extends Component {
  state = {};
  render() {
    return (
      <Router>
        <StoryCards path="/" storyData={this.props.storyData} />
        <MonsterCards path="monster-manual" />
      </Router>
    );
  }
}

export default Routes;
