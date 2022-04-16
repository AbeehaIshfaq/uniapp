import React from "react";
import { Icon, Menu, Header, Button, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const LandingHeader = (props) => {
    // const { fixed } = props;
    // const fixed = false;
    return (
        <Segment
            // color="grey"
            inverted color="blue"
            basic
            style={{
                padding: "60px 10%",
                border: "0",
            }}
            attached
        >
            <Menu stackable secondary inverted>
                <Menu.Menu position="left">
                    <Menu.Item>
                        <Icon name="braille" size="huge" />
                    </Menu.Item>
                    <Menu.Item>
                        <Header as="h1" inverted>
                            UniApp
                        </Header>
                    </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Button inverted as={Link} to="/student/auth">
                            Login
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button inverted as={Link} to="student/auth">
                            Sign up
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Segment>
    );
};

export default LandingHeader;
