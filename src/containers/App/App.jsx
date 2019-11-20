import React, { Component } from "react";
import { firestore } from "../../firebase";
// import styles from "./App.module.scss";
import Header from "../../components/Header/Header";
import NavMenu from "../../components/NavMenu/NavMenu";
import StoryCards from "../StoryCards/StoryCards";
import Footer from "../Footer/Footer";
import MonsterCards from "../MonsterCards/MonsterCards";

class App extends Component {
  state = {
    storyCards: [],
    filteredStoryCards: [],
    storyGroups: [],
    filter: ""
  };

  componentDidMount() {
    firestore
      .collection("story-beats")
      .get()
      .then(querySnapshot => {
        const storyCards = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id };
        });
        const storyGroups = storyCards.map(storyCard => {
          return storyCard.group;
        });
        console.log(storyCards);
        this.setState({
          storyCards,
          filteredStoryCards: storyCards,
          storyGroups: [...new Set(storyGroups)]
        });
      });
  }

  updateFilter = newFilter => {
    const filteredStoryCards = this.state.storyCards.filter(storyCard => {
      return newFilter === storyCard.group;
    });
    this.setState({
      filter: newFilter,
      filteredStoryCards
    });
  };

  updateState = isOpen => {
    this.setState({ navOpen: !this.state.navOpen });
  };

  render() {
    return (
      <>
        <Header navOpening={this.updateState} />
        <NavMenu isOpen={this.state.navOpen} />
        <main>
          <StoryCards path="/" storyData={this.state.filteredStoryCards} />
          <MonsterCards path="monster-manual" />
        </main>
        <Footer path="/" groups={this.state.storyGroups} filterAction={this.updateFilter} />
      </>
    );
  }
}

export default App;
