import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import withRouter from "../../../router/withRouter";

import AuthContext from "../../../shared/context/AuthContext";
import NavbarItem from "./NavbarItem";

class NavBar extends React.Component {
    static contextType = AuthContext;

    logoutHandler = () => {
        const auth = this.context;
        auth.logout();
        this.props.navigate("/");
    };

    render() {
        return (
            <Segment
                inverted color='blue'
                style={{
                    borderRadius: "0px",
                    padding: "10px"
                }}
            >
                <Menu
                    stackable
                    secondary
                    inverted
                    style={{ borderRadius: "0" }}
                >
                    <Menu.Menu position="left">
                        <NavbarItem to="/uni">Dashboard</NavbarItem>
                        <NavbarItem to="/uni/application">Application</NavbarItem>
                    </Menu.Menu>
                    <Menu.Menu position="right">
                        <Menu.Item onClick={this.logoutHandler}>
                            Logout
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Segment>
        );
    }
}

export default withRouter(NavBar);
