import React, { Component } from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDungeon } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  state = {};

  render() {
    return (
      <header className={styles.navHeader}>
        <FontAwesomeIcon icon={faBars} className={styles.bars} onClick={this.props.navOpening} />
        <FontAwesomeIcon icon={faDungeon} className={styles.dnd} />
      </header>
    );
  }
}

export default Header;
