import React from "react";
import { Form, Segment } from "semantic-ui-react";

import AuthContext from "../../../shared/context/AuthContext";

import { validate, Required } from "../../../util/validate";

class Login extends React.Component {
    static contextType = AuthContext;

    state = {
        email: { val: "", error: null, validators: [Required] },
        password: { val: "", error: null, validators: [Required] },
        loading: false,
        error: false,
    };

    submitHandler = (e) => {
        this.setState({ loading: true });
        let value = this.context;

        if (this.validator()) {
            this.setState({ loading: false });
            return;
        }

        value.login("student");
    };

    changeHandler = (e, { value, name }) => {
        const temp = { ...this.state };
        temp[name].val = value;
        this.setState(temp);
    };

    validator = () => {
        const temp = { ...this.state };
        delete temp.loading;
        delete temp.error;

        this.setState(validate(temp));

        let error = false;
        Object.values(this.state).forEach((values) => {
            if (values.error) error = true;
        });
        return error;
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
                        name="email"
                        value={this.state.email.val}
                        error={this.state.email.error}
                        onChange={this.changeHandler}
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={this.state.password.val}
                        error={this.state.password.error}
                        onChange={this.changeHandler}
                    />

                    <Form.Button
                        primary
                        fluid
                        size="large"
                        loading={this.state.loading}
                    >
                        Login
                    </Form.Button>
                </Segment>
            </Form>
        );
    }
}

export default Login;
