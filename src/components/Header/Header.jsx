import React, { Component } from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faDAndD } from "@fortawesome/free-brands-svg-icons";

class Header extends Component {
  state = { navOpen: false };

  // openNav = () => {
  //   const navOpen = this.props.navOpening(!this.state.navOpen);
  //   this.setState({ navOpen });
  // };

  render() {
    // const navVisibility = this.state.navOpen ? null : styles.hideNav;
    return (
      <header className={styles.navHeader}>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.bars}
          onClick={this.props.navOpening}
        />
        <FontAwesomeIcon icon={faDAndD} className={styles.dnd} />
      </header>
    );
  }
}

export default Header;
