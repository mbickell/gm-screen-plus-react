import React, { Component } from "react";
import MonsterCard from "../../components/MonsterCard/MonsterCard";
import Footer from "../Footer/Monster/Footer";
import monsterData from "./monsterData.json";

class MonsterCards extends Component {
  state = { monsterCards: monsterData, filteredMonsterCards: monsterData, searchText: "" };

  setSearchText = searchText => {
    this.setState({ searchText });
  };

  render() {
    const filteredCard = this.state.filteredMonsterCards.filter(
      monsterCard =>
        monsterCard.name.toLowerCase().includes(this.state.searchText) ||
        monsterCard.type.toLowerCase().includes(this.state.searchText)
    );
    return (
      <>
        {filteredCard.map(monsterCard => (
          <MonsterCard monsterData={monsterCard} key={monsterCard.index} />
        ))}
        <Footer updateFilter={this.setSearchText} />
      </>
    );
  }
}

export default MonsterCards;
