import React, { Component } from "react";
import styles from "./MonsterCombatInfo.module.scss";

class MonsterCombatInfo extends Component {
  state = {};

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
    const speeds = this.getSpeeds();
    return (
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
    );
  }
}

export default MonsterCombatInfo;
