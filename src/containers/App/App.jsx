import React, { Component } from "react";
import { firestore } from "../../firebase";
import styles from "./App.module.scss";
import Header from "../../components/Header/Header";
import NavMenu from "../../components/NavMenu/NavMenu";
import StoryCards from "../StoryCards/StoryCards";

class App extends Component {
  state = { navOpen: false, storyCards: [], filteredStoryCards: [] };

  componentDidMount() {
    firestore
      .collection("story-beats")
      .get()
      .then(querySnapshot => {
        const storyCards = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id };
        });
        console.log(storyCards);
        this.setState({
          storyCards,
          filteredStoryCards: storyCards
        });
      });
  }

  updateState = isOpen => {
    this.setState({ navOpen: !this.state.navOpen });
  };

  render() {
    return (
      <>
        <Header navOpening={this.updateState} />
        <NavMenu isOpen={this.state.navOpen} />
        <main>
          <StoryCards storyData={this.state.filteredStoryCards} />
        </main>
      </>
    );
  }
}

export default App;
