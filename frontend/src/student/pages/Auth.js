import React from "react";
import { Grid, Menu } from "semantic-ui-react";

import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import { Progress, Card, Button, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Auth extends React.Component {
    state = { activeItem: "login" };

    clickHandler = (e, { name }) => {
        this.setState({ activeItem: name });
    };

    render() {
        const { activeItem } = this.state;
        return (
            <Grid
                textAlign="center"
                style={{ height: "100vh" }}
                verticalAlign="middle"
            >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Menu widths={2} tabular>
                        <Menu.Item
                            active={activeItem === "login"}
                            name="login"
                            onClick={this.clickHandler}
                        />
                        <Menu.Item
                            active={activeItem === "signup"}
                            name="signup"
                            onClick={this.clickHandler}
                        />
                    </Menu>
                    {activeItem === "login" ? <Login /> : <Signup />}
                    <Button as={Link} to="/forgetpassword"  attached='bottom'>Forgot your password?</Button>

                </Grid.Column>
            </Grid>

        );
    }
}

export default Auth;
