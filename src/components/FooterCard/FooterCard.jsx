import React, { Component } from "react";
import styles from "./FooterCard.module.scss";

class FooterCard extends Component {
  state = {};
  render() {
    return (
      <div
        className={styles.footerCard}
        onClick={() => this.props.filterAction(this.props.group)}
      >
        <section>
          <h3>Group - {this.props.group}</h3>
        </section>
      </div>
    );
  }
}

export default FooterCard;
