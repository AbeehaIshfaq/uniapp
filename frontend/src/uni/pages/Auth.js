import React from "react";
import { Grid, Menu, Container } from "semantic-ui-react";

import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

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
                    <Container textAlign="left">
                        {activeItem === "login" ? <Login /> : <Signup />}
                    </Container>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Auth;
