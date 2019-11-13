import React, { Component } from "react";
import MonsterCard from "../../components/MonsterCard/MonsterCard";
import monsterData from "./monsterData.json";

class MonsterCards extends Component {
  state = { monsterCards: monsterData, filteredMonsterCards: monsterData };

  render() {
    return (
      <>
        {this.state.filteredMonsterCards.map(monsterCard => (
          <MonsterCard monsterData={monsterCard} />
        ))}
      </>
    );
  }
}

export default MonsterCards;
