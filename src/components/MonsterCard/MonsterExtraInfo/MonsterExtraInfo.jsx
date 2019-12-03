import React, { Component } from "react";
import styles from "./MonsterExtraInfo.module.scss";

class MonsterExtraInfo extends Component {
  state = {};
  getSavingThrow = (stat, path) => {
    return this.props.monsterData.hasOwnProperty(stat) ? (
      <li>
        <span className={styles.bold}>{stat.substring(0, 3).toUpperCase()}:</span> {path}
      </li>
    ) : null;
  };

  getSavingThrows = () => {
    const savingThrows = [
      this.getSavingThrow("strength_save", this.props.monsterData.strength_save),
      this.getSavingThrow("constitution_save", this.props.monsterData.constitution_save),
      this.getSavingThrow("dexterity_save", this.props.monsterData.dexterity_save),
      this.getSavingThrow("intelligence_save", this.props.monsterData.intelligence_save),
      this.getSavingThrow("wisdom_save", this.props.monsterData.wisdom_save),
      this.getSavingThrow("charisma_save", this.props.monsterData.charisma_save)
    ];
    if (savingThrows.find(save => save !== null)) {
      return (
        <div className={styles.savingThrows}>
          <span className={styles.bold}>Saving Throws:</span> <ul>{savingThrows}</ul>
        </div>
      );
    }
  };

  getExtraInfo = () => {
    const savingThrows = this.getSavingThrows();
    return (
      <>
        {savingThrows}
        <p>
          <span className={styles.bold}>Senses:</span> {this.props.monsterData.senses}
        </p>
        <p>
          <span className={styles.bold}>Languages:</span> {this.props.monsterData.languages}
        </p>
        <p>
          <span className={styles.bold}>Challenge:</span> {this.props.monsterData.challenge_rating}
        </p>
      </>
    );
  };
  render() {
    const extraInfo = this.getExtraInfo();
    return <section className={styles.extraInfo}>{extraInfo}</section>;
  }
}

export default MonsterExtraInfo;
