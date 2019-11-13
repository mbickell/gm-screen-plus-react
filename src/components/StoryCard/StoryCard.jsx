import React, { Component } from "react";
import styles from "./StoryCard.module.scss";

class StoryCard extends Component {
  state = {};
  render() {
    return (
      <section className={styles.storyCard}>
        <article>
          <h2>
            {this.props.storyData.title} - {this.props.storyData.group}
          </h2>
          <p>{this.props.storyData.content}</p>
        </article>
      </section>
    );
  }
}

export default StoryCard;
