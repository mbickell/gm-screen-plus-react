import React, { Component } from "react";
import styles from "./MonsterCard.module.scss";

class MonsterCard extends Component {
  state = {};

  getSavingThrow = (stat, path) => {
    return this.props.monsterData.hasOwnProperty(stat) ? (
      <li>
        <b>{stat.substring(0, 3).toUpperCase()}:</b> {path}
      </li>
    ) : null;
  };

  getSavingThrows = () => {
    const savingThrows = [
      this.getSavingThrow(
        "strength_save",
        this.props.monsterData.strength_save
      ),
      this.getSavingThrow(
        "constitution_save",
        this.props.monsterData.constitution_save
      ),
      this.getSavingThrow(
        "dexterity_save",
        this.props.monsterData.dexterity_save
      ),
      this.getSavingThrow(
        "intelligence_save",
        this.props.monsterData.intelligence_save
      ),
      this.getSavingThrow("wisdom_save", this.props.monsterData.wisdom_save),
      this.getSavingThrow("charisma_save", this.props.monsterData.charisma_save)
    ];
    if (savingThrows.find(save => save !== null)) {
      return (
        <p className={styles.savingThrows}>
          <b>Saving Throws:</b> <ul>{savingThrows}</ul>
        </p>
      );
    }
  };

  getExtraInfo = () => {
    const savingThrows = this.getSavingThrows();
    return (
      <>
        {savingThrows}
        <p>
          <b>Senses:</b> {this.props.monsterData.senses}
        </p>
        <p>
          <b>Languages:</b> {this.props.monsterData.languages}
        </p>
        <p>
          <b>Challenge:</b> {this.props.monsterData.challenge_rating}
        </p>
      </>
    );
  };

  getSpeeds = () => {
    const walkSpeed = this.props.monsterData.speed.walk ? (
      <li>
        <b>Walk Speed:</b> {this.props.monsterData.speed.walk}
      </li>
    ) : null;
    const swimSpeed = this.props.monsterData.speed.swim ? (
      <li>
        <b>Swim Speed:</b> {this.props.monsterData.speed.swim}
      </li>
    ) : null;
    const flySpeed = this.props.monsterData.speed.fly ? (
      <li>
        <b>Fly Speed:</b> {this.props.monsterData.speed.fly}
      </li>
    ) : null;
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
            {this.props.monsterData.size} {this.props.monsterData.type},
            {this.props.monsterData.alignment}
          </p>
        </section>
        <section className={styles.combatInfo}>
          <p>
            <b>Armor Class:</b> {this.props.monsterData.armor_class}
          </p>
          <p>
            <b>Hit Points:</b> {this.props.monsterData.hit_points} (
            {this.props.monsterData.hit_dice})
          </p>
          {speeds}
        </section>
        <section className={styles.stats}>
          <ul>
            <li>
              <b>STR:</b> {this.props.monsterData.strength} (
              {Math.floor((this.props.monsterData.strength - 10) / 2)})
            </li>
            <li>
              <b>DEX:</b> {this.props.monsterData.dexterity} (
              {Math.floor((this.props.monsterData.dexterity - 10) / 2)})
            </li>
            <li>
              <b>CON:</b> {this.props.monsterData.constitution} (
              {Math.floor((this.props.monsterData.constitution - 10) / 2)})
            </li>
            <li>
              <b>INT:</b> {this.props.monsterData.intelligence} (
              {Math.floor((this.props.monsterData.intelligence - 10) / 2)})
            </li>
            <li>
              <b>WIS:</b> {this.props.monsterData.wisdom} (
              {Math.floor((this.props.monsterData.wisdom - 10) / 2)})
            </li>
            <li>
              <b>CHA:</b> {this.props.monsterData.charisma} (
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
