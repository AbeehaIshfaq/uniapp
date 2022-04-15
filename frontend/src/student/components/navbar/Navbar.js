import React from "react";
import { Menu } from "semantic-ui-react";
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
            </div>
        );
    }
}

export default withRouter(NavBar);
