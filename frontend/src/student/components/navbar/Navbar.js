import React from "react";
<<<<<<< HEAD

import { Menu, Button } from "semantic-ui-react";
=======
import { Menu } from "semantic-ui-react";

import AuthContext from "../../../shared/context/AuthContext";

>>>>>>> 644eef57ed3958304c7d0e64fb1186a5264d6547
import NavbarItem from "./NavbarItem";
import { useAuth0 } from "@auth0/auth0-react";

<<<<<<< HEAD
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
=======
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
>>>>>>> 644eef57ed3958304c7d0e64fb1186a5264d6547

export default NavBar;
