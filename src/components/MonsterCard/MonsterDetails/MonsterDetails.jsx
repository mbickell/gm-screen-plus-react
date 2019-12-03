import React, { Component } from "react";
import styles from "./MonsterDetails.module.scss";

class MonsterDetails extends Component {
  state = {};
  render() {
    return (
      <section className={styles.details}>
        <h2>{this.props.monsterData.name}</h2>
        <p>
          {this.props.monsterData.size} {this.props.monsterData.type},{this.props.monsterData.alignment}
        </p>
      </section>
    );
  }
}

export default MonsterDetails;
