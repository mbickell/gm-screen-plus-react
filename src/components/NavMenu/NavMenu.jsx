import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "./NavMenu.module.scss";

class NavMenu extends Component {
  state = {};
  render() {
    const navVisibility = this.props.isOpen ? null : styles.hideNav;

    return (
      <nav className={navVisibility}>
        <Link to="/" onClick={this.props.navOpening}>
          Story Beats
        </Link>
        <Link to="monster-manual" onClick={this.props.navOpening}>
          Monster Manual
        </Link>
        <Link to="/spellbook" onClick={this.props.navOpening}>
          Spellbook
        </Link>
      </nav>
    );
  }
}

export default NavMenu;
