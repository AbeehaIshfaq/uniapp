import React from "react";

import { Menu } from "semantic-ui-react";
import NavbarItem from "./NavbarItem";

const NavBar = () => {
    return (
        <div>
            <Menu secondary pointing>
                <Menu.Menu position="left">
                    <NavbarItem to="/uni">Dashboard</NavbarItem>
                    <NavbarItem to="/uni/application">Application</NavbarItem>
                </Menu.Menu>

                <Menu.Menu position="right">
                    <NavbarItem to="/">Logout</NavbarItem>
                </Menu.Menu>
            </Menu>
        </div>
    );
};

export default NavBar;
