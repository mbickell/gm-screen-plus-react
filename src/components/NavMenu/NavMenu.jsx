import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "./NavMenu.module.scss";

class NavMenu extends Component {
  state = {};
  render() {
    const navVisibility = this.props.isOpen ? null : styles.hideNav;

    return (
      <nav className={navVisibility}>
        <Link to="/">Story Beats</Link>
        <Link to="monster-manual">Monster Manual</Link>
        <Link to="/spellbook">Spellbook</Link>
      </nav>
    );
  }
}

export default NavMenu;
