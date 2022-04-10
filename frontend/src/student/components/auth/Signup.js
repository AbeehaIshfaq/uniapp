import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import {
    Required,
    Email,
    MinLength,
    Match,
    validate,
} from "../../../util/validate";

class Login extends React.Component {
    state = {
        email: { val: "", error: null, validators: [Required, Email] },
        name: { val: "", error: null, validators: [Required] },
        password: {
            val: "",
            error: null,
            validators: [Required, MinLength(7)],
        },
        cpassword: {
            val: "",
            error: null,
            validators: [Required, MinLength(7)],
        },
        loading: false,
    };

    submitHandler = (e) => {
        e.preventDefault();
        console.log();
        this.setState({ loading: true });
        if (this.validator()) {
            this.setState({ loading: true });
            return;
        }
    };

    changeHander = (e, { value, name }) => {
        const temp = { ...this.state };
        if (name === "password") {
            temp.cpassword.validators = [
                Required,
                Match(value, "Passwords"),
                MinLength(7),
            ];
        }
        temp[name].val = value;
        this.setState(temp);
    };

    validator = () => {
        const temp = { ...this.state };
        delete temp.loading;

        this.setState(validate(temp));

        let error = false;
        Object.values(this.state).forEach((values) => {
            if (values.error) error = true;
        });
        return error;
    };

    render() {
        const state = this.state;

        return (
            <Form size="large" onSubmit={this.submitHandler}>
                <Segment stacked>
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        name="email"
                        placeholder="E-mail address"
                        onChange={this.changeHander}
                        error={state.email.error}
                    />
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        name="name"
                        placeholder="Name"
                        onChange={this.changeHander}
                        error={state.name.error}
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        name="password"
                        type="password"
                        onChange={this.changeHander}
                        error={state.password.error}
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Confirm Password"
                        name="cpassword"
                        type="password"
                        onChange={this.changeHander}
                        error={state.cpassword.error}
                    />

                    <Button primary fluid size="large" loading={state.loading}>
                        Signup
                    </Button>
                </Segment>
            </Form>
        );
    }
}

export default Login;
