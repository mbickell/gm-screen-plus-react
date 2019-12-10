import React, { Component } from "react";
import styles from "./Footer.module.scss";

class Footer extends Component {
  state = { searchText: "" };
  render() {
    return (
      <footer className={styles.monsterCardFooter}>
        <input
          type="text"
          placeholder="Search for a monster..."
          onChange={event => this.props.updateFilter(event.target.value.toLowerCase())}
        />
      </footer>
    );
  }
}

export default Footer;
