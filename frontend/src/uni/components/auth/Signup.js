import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";

import {
    Required,
    Email,
    MinLength,
    Match,
    validate,
} from "../../../util/validate";
import AuthContext from "../../../shared/context/AuthContext";

class Login extends React.Component {
    static contextType = AuthContext;

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

    submitHandler = async (e) => {
        e.preventDefault();

        console.log("Submit handler");
        // const auth = this.context;

        // this.setState({ loading: true });
        // if (this.validator()) {
        //     this.setState({ loading: false });
        //     return;
        // }

        // const data = {
        //     email: this.state.email.val,
        //     name: this.state.email.val,
        //     password: this.state.password.val,
        // };

        // try {
        //     const res = await server.post("/student/signup", data);
        //     this.setState({ loading: false });
        //     auth.login("student", res.data.token, res.data.student._id);
        // } catch (err) {
        //     console.log(err);
        // }
    };

    changeHandler = (e, { value, name }) => {
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

        const form = state.continue ? <h1>Hello</h1> : <></>;

        return (
            <Form size="large" onSubmit={this.submitHandler}>
                <Segment stacked>
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        name="email"
                        placeholder="E-mail address"
                        onChange={this.changeHandler}
                        error={state.email.error}
                    />
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        name="name"
                        placeholder="Name"
                        onChange={this.changeHandler}
                        error={state.name.error}
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        name="password"
                        type="password"
                        onChange={this.changeHandler}
                        error={state.password.error}
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Confirm Password"
                        name="cpassword"
                        type="password"
                        onChange={this.changeHandler}
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
