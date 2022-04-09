import React from "react";
import { Form, Segment } from "semantic-ui-react";

import AuthContext from "../../../shared/context/AuthContext";

class Login extends React.Component {
    static contextType = AuthContext;

    submitHandler = (e) => {
        let value = this.context;
        value.login("student");
    };

    render() {
        return (
            <Form size="large" onSubmit={this.submitHandler}>
                <Segment stacked>
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="E-mail address"
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                    />

                    <Form.Button primary fluid size="large">
                        Login
                    </Form.Button>
                </Segment>
            </Form>
        );
    }
}

export default Login;
