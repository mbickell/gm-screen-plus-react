import React, { Component } from "react";
import MonsterDetails from "./MonsterDetails/MonsterDetails";
import MonsterCombatInfo from "./MonsterCombatInfo/MonsterCombatInfo";
import MonsterStats from "./MonsterStats/MonsterStats";
import MonsterExtraInfo from "./MonsterExtraInfo/MonsterExtraInfo";
import styles from "./MonsterCard.module.scss";

class MonsterCard extends Component {
  state = {};

  render() {
    return (
      <div className={styles.monsterCard}>
        <MonsterDetails monsterData={this.props.monsterData} />
        <MonsterCombatInfo monsterData={this.props.monsterData} />
        <MonsterStats monsterData={this.props.monsterData} />
        <MonsterExtraInfo monsterData={this.props.monsterData} />
      </div>
    );
  }
}

export default MonsterCard;
