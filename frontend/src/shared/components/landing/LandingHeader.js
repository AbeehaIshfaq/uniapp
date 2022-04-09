import React from "react";
import { Icon, Menu, Header, Button, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const LandingHeader = (props) => {
    // const { fixed } = props;
    // const fixed = false;
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { isAuthenticated } = useAuth0();
    return (
        <Segment basic style={{ padding: "60px 10%", border: "0" }} attached>
            <Menu secondary>
                <Menu.Menu position="left">
                    <Menu.Item>
                        <Icon name="braille" fitted size="big" />
                    </Menu.Item>
                    <Menu.Item>
                        <Header as="h1">UniApp</Header>
                    </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Button
                            onClick={() => loginWithRedirect()}
                            // as={Link}
                            // to="/student/login"
                            // basic
                            // secondary
                        >
                            Login
                        </Button>
                    </Menu.Item>
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
                    <Menu.Item>
                        <Button
                            onClick={() =>
                                loginWithRedirect({ screen_hint: "signup" })
                            }
                            // as={Link}
                            // to="student/signup"
                            basic
                            secondary
                        >
                            Sign up
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Segment>
    );
};

export default LandingHeader;
