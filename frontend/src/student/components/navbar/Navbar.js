import React from "react";

import { Menu } from "semantic-ui-react";
import NavbarItem from "./NavbarItem";

const NavBar = () => {
    return (
        <div>
            <Menu secondary pointing>
                <Menu.Menu position="left">
                    <NavbarItem to="/student">Dashboard</NavbarItem>
                    <NavbarItem to="/student/application">Application</NavbarItem>
                    <NavbarItem to="/student/findUnis">Find Universities</NavbarItem>
                    <NavbarItem to="/student/myUnis">My Universities</NavbarItem>
                </Menu.Menu>

                <Menu.Menu position="right">
                    <NavbarItem to="/">Logout</NavbarItem>
                </Menu.Menu>
            </Menu>
        </div>
    );
};

export default NavBar;
