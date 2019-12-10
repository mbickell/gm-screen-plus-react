import React, { Component } from "react";
import styles from "./Footer.module.scss";
import FooterCard from "../../../components/FooterCard/FooterCard";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className={styles.storyBeatFooter}>
        {this.props.groups.map(group => (
          <FooterCard group={group} key={group} filterAction={this.props.filterAction} />
        ))}
      </footer>
    );
  }
}

export default Footer;
