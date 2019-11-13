import React, { Component } from "react";
import styles from "./MonsterCard.module.scss";

class MonsterCard extends Component {
  state = {};

  render() {
    const strengthSave = this.props.monsterData.hasOwnProperty("strength_save")
      ? ` STR ${this.props.monsterData.strength_save}`
      : null;
    // const constitutionSave = this.props.monsterData.hasOwnProperty(
    //   "constitution_save"
    // )
    //   ? ` CON ${this.props.monsterData.constitution_save}`
    //   : ``;
    // const dexteritySave = this.props.monsterData.hasOwnProperty(
    //   "dexterity_save"
    // )
    //   ? `DEX ${this.props.monsterData.dexterity_save}`
    //   : ``;
    // const intelligenceSave = this.props.monsterData.hasOwnProperty(
    //   "intelligence_save"
    // )
    //   ? ` INT ${this.props.monsterData.intelligence_save}`
    //   : ``;
    // const wisdomSave = this.props.monsterData.hasOwnProperty("wisdom_save")
    //   ? ` WIS ${this.props.monsterData.wisdom_save}`
    //   : ``;
    // const charismaSave = this.props.monsterData.hasOwnProperty("charisma_save")
    //   ? ` CHA ${this.props.monsterData.charisma_save}`
    //   : ``;
    // let savingThrows = "";
    // if (
    //   strengthSave ||
    //   constitutionSave ||
    //   dexteritySave ||
    //   intelligenceSave ||
    //   wisdomSave ||
    //   charismaSave
    // ) {
    //   savingThrows = `<p><b>Saving Throws</b>${strengthSave}${constitutionSave}${dexteritySave}${intelligenceSave}${wisdomSave}${charismaSave}`;
    // }
    // // Saving throws, skills, damage vulnerabilities, damage resistances, damage immunities, condition immunities, sense, languages, challenge
    // const extraInfo = `
    // ${savingThrows}
    // <p><b>Senses</b> ${this.props.monsterData.senses}</p>
    // <p><b>Languages</b> ${this.props.monsterData.languages}</p>
    // <p><b>Challenge</b> ${this.props.monsterData.challenge_rating}</p>
    // `;
    const walkSpeed = this.props.monsterData.speed.walk
      ? `Walk Speed ${this.props.monsterData.speed.walk}`
      : null;
    const swimSpeed = this.props.monsterData.speed.swim
      ? `Swim Speed ${this.props.monsterData.speed.swim}`
      : null;
    const flySpeed = this.props.monsterData.speed.fly
      ? `Fly Speed ${this.props.monsterData.speed.fly}`
      : null;
    return (
      <div className="monster-card">
        <section className="details">
          <h3>{this.props.monsterData.name}</h3>
          <p>
            {this.props.monsterData.size} {this.props.monsterData.type},
            {this.props.monsterData.alignment}
          </p>
        </section>
        <section className="combat-info">
          <p>
            <b>Armor Class</b> {this.props.monsterData.armor_class}
          </p>
          <p>
            <b>Hit Points</b> {this.props.monsterData.hit_points} (
            {this.props.monsterData.hit_dice})
          </p>
          <p>{walkSpeed}</p>
          <p>{swimSpeed}</p>
          <p>{flySpeed}</p>
        </section>
        <section className="stats">
          <ul>
            <li>
              <b>STR</b> {this.props.monsterData.strength} (
              {Math.floor((this.props.monsterData.strength - 10) / 2)})
            </li>
            <li>
              <b>DEX</b> {this.props.monsterData.dexterity} (
              {Math.floor((this.props.monsterData.dexterity - 10) / 2)})
            </li>
            <li>
              <b>CON</b> {this.props.monsterData.constitution} (
              {Math.floor((this.props.monsterData.constitution - 10) / 2)})
            </li>
            <li>
              <b>INT</b> {this.props.monsterData.intelligence} (
              {Math.floor((this.props.monsterData.intelligence - 10) / 2)})
            </li>
            <li>
              <b>WIS</b> {this.props.monsterData.wisdom} (
              {Math.floor((this.props.monsterData.wisdom - 10) / 2)})
            </li>
            <li>
              <b>CHA</b> {this.props.monsterData.charisma} (
              {Math.floor((this.props.monsterData.charisma - 10) / 2)})
            </li>
          </ul>
        </section>
        {/* <section className="extra-info">{extraInfo}</section> */}
      </div>
    );
  }
}

export default MonsterCard;
