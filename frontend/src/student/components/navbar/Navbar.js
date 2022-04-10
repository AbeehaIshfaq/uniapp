import React from "react";
import { Menu } from "semantic-ui-react";

import AuthContext from "../../../shared/context/AuthContext";

import NavbarItem from "./NavbarItem";
import { useAuth0 } from "@auth0/auth0-react";

class NavBar extends React.Component {
    static contextType = AuthContext;

    logoutHandler = () => {
        const auth = this.context;
        auth.logout();
    };

    render() {
        return (
            <div>
                <Menu secondary pointing>
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
                    </Menu.Menu>

                    <Menu.Menu position="right">
                        <Menu.Item onClick={this.logoutHandler}>
                            Logout
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}

export default NavBar;
