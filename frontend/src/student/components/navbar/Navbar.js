import React from "react";
import { Menu, Segment } from "semantic-ui-react";
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
                inverted
                style={{
                    borderRadius: "0px",
                    padding: "10px",
                    backgroundColor: "darkblue",
                }}
            >
                <Menu
                    stackable
                    secondary
                    inverted
                    style={{ borderRadius: "0" }}
                >
                    <Menu.Menu position="left">
                        <NavbarItem to="/student">Dashboard</NavbarItem>
                        <NavbarItem to="/student/application">
                            Application
                        </NavbarItem>
                        <NavbarItem to="/student/findUnis">
                            Find Universities
                        </NavbarItem>
                        <NavbarItem to="/student/myUnis">
                            My Universities
                        </NavbarItem>
                        <NavbarItem to="/student/upload_documents">
                            Upload Documents
                        </NavbarItem>
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
