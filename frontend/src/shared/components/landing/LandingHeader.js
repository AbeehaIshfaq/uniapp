import React from "react";
import { Icon, Menu, Header, Button, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const LandingHeader = (props) => {
    // const { fixed } = props;
    // const fixed = false;
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
                        <Button as={Link} to="/student/login" basic secondary>
                            Login
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button as={Link} to="student/signup" basic secondary>
                            Sign up
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Segment>
    );
};

export default LandingHeader;
