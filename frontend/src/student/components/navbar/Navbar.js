import React from "react";

import NavbarItem from "./NavbarItem";

const NavBar = () => {
    return (
        <div className="ui">
            <div className="ui large secondary pointing menu">
                <div className="left menu">
                    <NavbarItem to="/student">Dashboard</NavbarItem>
                    <NavbarItem to="/student/application">Application</NavbarItem>
                    <NavbarItem to="/student/findUnis">Find Universities</NavbarItem>
                    <NavbarItem to="/student/myUnis">My Universities</NavbarItem>
                </div>

                <div className="right menu">
                    <NavbarItem to="/">Logout</NavbarItem>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
