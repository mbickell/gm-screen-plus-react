import React, { Component } from "react";
import styles from "./MonsterCard.module.scss";

class MonsterCard extends Component {
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

  getSpeed = (data, name) => {
    return data ? (
      <li>
        <span className={styles.bold}>{name}:</span> {data}
      </li>
    ) : null;
  };

  getSpeeds = () => {
    const walkSpeed = this.getSpeed(this.props.monsterData.speed.walk, "Walk");
    console.log(walkSpeed);
    const swimSpeed = this.getSpeed(this.props.monsterData.speed.swim, "Swim");
    const flySpeed = this.getSpeed(this.props.monsterData.speed.fly, "Fly");
    return (
      <ul className={styles.speeds}>
        {walkSpeed}
        {swimSpeed}
        {flySpeed}
      </ul>
    );
  };

  render() {
    const extraInfo = this.getExtraInfo();
    const speeds = this.getSpeeds();
    return (
      <div className={styles.monsterCard}>
        <section className={styles.details}>
          <h2>{this.props.monsterData.name}</h2>
          <p>
            {this.props.monsterData.size} {this.props.monsterData.type},{this.props.monsterData.alignment}
          </p>
        </section>
        <section className={styles.combatInfo}>
          <p>
            <span className={styles.bold}>Armor Class:</span> {this.props.monsterData.armor_class}
          </p>
          <p>
            <span className={styles.bold}>Hit Points:</span> {this.props.monsterData.hit_points} (
            {this.props.monsterData.hit_dice})
          </p>
          {speeds}
        </section>
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
        <section className={styles.extraInfo}>{extraInfo}</section>
      </div>
    );
  }
}

export default MonsterCard;
