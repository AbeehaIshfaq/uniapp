import React from "react";

import { Menu, Button } from "semantic-ui-react";
import NavbarItem from "./NavbarItem";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
    const { logout } = useAuth0();
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
                    <Menu.Item>
                        <Button
                            onClick={() =>
                                logout({ returnTo: window.location.origin })
                            }
                            // as={Link}
                            // to="/student/login"
                            // basic
                            // secondary
                        >
                            Logout
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    );
};

export default NavBar;
