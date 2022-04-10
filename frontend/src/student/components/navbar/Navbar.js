import React from "react";

import { Menu } from "semantic-ui-react";
import NavbarItem from "./NavbarItem";

const NavBar = () => {
    return (
        <div>
            <Menu color={'blue'} inverted secondary pointing>
                <Menu.Menu position="left" color={'blue'}>
                    <NavbarItem color={'blue'} to="/student">Dashboard</NavbarItem>
                    <NavbarItem to="/student/application">Application</NavbarItem>
                    <NavbarItem to="/student/findUnis">Find Universities</NavbarItem>
                    <NavbarItem to="/student/myUnis">My Universities</NavbarItem>
                    <NavbarItem to="/student/upload_documents">Upload Documents</NavbarItem>

                </Menu.Menu >

                <Menu.Menu position="right" color={'blue'}>
                    <NavbarItem to="/">Logout</NavbarItem>
                </Menu.Menu>
                
            </Menu >
        </div>
    );
};

export default NavBar;
