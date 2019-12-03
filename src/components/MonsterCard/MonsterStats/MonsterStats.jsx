import React, { Component } from "react";
import styles from "./MonsterStats.module.scss";

class MonsterStats extends Component {
  state = {};
  render() {
    return (
      <section className={styles.stats}>
        <ul>
          <li>
            <span className={styles.bold}>STR:</span> {this.props.monsterData.strength} (
            {Math.floor((this.props.monsterData.strength - 10) / 2)})
          </li>
          <li>
            <span className={styles.bold}>DEX:</span> {this.props.monsterData.dexterity} (
            {Math.floor((this.props.monsterData.dexterity - 10) / 2)})
          </li>
          <li>
            <span className={styles.bold}>CON:</span> {this.props.monsterData.constitution} (
            {Math.floor((this.props.monsterData.constitution - 10) / 2)})
          </li>
          <li>
            <span className={styles.bold}>INT:</span> {this.props.monsterData.intelligence} (
            {Math.floor((this.props.monsterData.intelligence - 10) / 2)})
          </li>
          <li>
            <span className={styles.bold}>WIS:</span> {this.props.monsterData.wisdom} (
            {Math.floor((this.props.monsterData.wisdom - 10) / 2)})
          </li>
          <li>
            <span className={styles.bold}>CHA:</span> {this.props.monsterData.charisma} (
            {Math.floor((this.props.monsterData.charisma - 10) / 2)})
          </li>
        </ul>
      </section>
    );
  }
}

export default MonsterStats;
