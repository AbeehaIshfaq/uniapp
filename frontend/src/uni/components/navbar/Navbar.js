import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";

import AuthContext from "../../../shared/context/AuthContext";

export default class MenuExampleInverted extends Component {
  static contextType = AuthContext;

  logoutHandler = () => {
    const auth = this.context;
    auth.logout();
  };

  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu color={"blue"} inverted position="left" widths={5}>
        <Menu.Item
          as={Link}
          to="/uni"
          basic
          name="Dashboard"
          active={activeItem === "Dashboard"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/uni/application"
          basic
          name="Application"
          active={activeItem === "Application"}
          onClick={this.handleItemClick}
        />

        <Menu.Item
          as={Link}
          to="/uni/addsec"
          basic
          name="Add Section"
          active={activeItem === "Add Section"}
          onClick={this.handleItemClick}
        />

        <Menu.Item
          position="right"
          basic
          name="Log Out"
          active={activeItem === "Log Out"}
          onClick={this.logoutHandler}
        />
      </Menu>
    );
  }
}
