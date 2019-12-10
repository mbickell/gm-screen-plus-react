import React, { Component } from "react";
import styles from "./StoryCards.module.scss";
import StoryCard from "../../components/StoryCard/StoryCard";
import Footer from "../Footer/Story/Footer";

class StoryCards extends Component {
  state = {};
  render() {
    return (
      <>
        <section className={styles.cardContainer}>
          {this.props.storyData.map((storyCard, key) => (
            <StoryCard storyData={storyCard} key={storyCard.docId} />
          ))}
        </section>
        <Footer groups={this.props.groups} filterAction={this.props.filterAction} />
      </>
    );
  }
}

export default StoryCards;
