import React, { Component } from "react";
import styles from "./StoryCards.module.scss";
import StoryCard from "../../components/StoryCard/StoryCard";

class StoryCards extends Component {
  state = {};
  render() {
    return (
      <section className={styles.cardContainer}>
        {this.props.storyData.map((storyCard, key) => (
          <StoryCard storyData={storyCard} key={storyCard.docId} />
        ))}
      </section>
    );
  }
}

export default StoryCards;
