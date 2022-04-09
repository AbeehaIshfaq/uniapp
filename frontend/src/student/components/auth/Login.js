import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";

class Login extends React.Component {
    render() {
        return (
            <Form size="large">
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

                    <Button primary fluid size="large">
                        Login
                    </Button>
                </Segment>
            </Form>
        );
    }
}

export default Login;
