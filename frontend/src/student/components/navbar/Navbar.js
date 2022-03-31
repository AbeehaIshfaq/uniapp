import React from "react";

import NavbarItem from "./NavbarItem";

const NavBar = () => {
    return (
        <div class="ui menu">
            <div className="left menu">
                <NavbarItem name="Dasboard" to="/student" />
                <NavbarItem name="Application" to="/student/application" />
                <NavbarItem name="Find Universities" to="/student/findUnis" />
                <NavbarItem name="My Universities" to="/student/myUnis" />
            </div>

            <div class="right menu">
                <div class="item">
                    <div class="ui primary button">Logout</div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
