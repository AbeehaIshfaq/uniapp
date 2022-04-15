import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";

import InputList from "../../../shared/components/InputList";
import {
    Required,
    Email,
    MinLength,
    Match,
    PhoneNumber,
    Positive,
    validate,
} from "../../../util/validate";
import AuthContext from "../../../shared/context/AuthContext";
import server from "../../../server/server";

class Signup extends React.Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            deadline: { val: "", error: null, validators: [Required] },
            phoneNumber: {
                val: "",
                error: null,
                validators: [Required, PhoneNumber],
            },
            fee: { val: "", error: null, validators: [Positive] },
            ranking: { val: "", error: null, validators: [Positive] },
            city: { val: "", error: null, validators: [Required] },
            programsOffered: { val: [], error: null, validators: [Required] },
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
        this.inputListRef = React.createRef();
    }

    addProgram = () => {
        const inputList = this.inputListRef.current;
        if (!inputList.state.value) return;

        let { val, error, validators } = { ...this.state.programsOffered };
        const programs = [...val];
        validators = [...validators];
        programs.push(inputList.state.value);

        this.setState({
            programsOffered: {
                val: programs,
                error,
                validators,
            },
        });
        inputList.addItem();
    };

    removeProgram = (name) => {
        let { val, error, validators } = { ...this.state.programsOffered };
        const programs = val.filter((item) => item !== name);

        this.setState({
            programsOffered: {
                val: programs,
                error,
                validators,
            },
        });
    };

    signupHandler = async (e) => {
        e.preventDefault();
        const auth = this.context;
        this.setState({ loading: true });
        if (this.validator()) {
            this.setState({ loading: false });
            return;
        }

        const data = {};
        Object.entries(this.state).forEach(([key, value]) => {
            if (key !== "loading") {
                data[key] = value.val;
            }
        });

        try {
            const res = await server.post("/uni/signup", data);
            this.setState({ loading: false });
            auth.login("uni", res.data.token, res.data.uni._id);
        } catch (err) {
            console.log(err);
        }
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

        return (
            <Form size="large">
                <Segment stacked>
                    <Form.Input
                        fluid
                        label="E-mail Address"
                        className="required"
                        name="email"
                        placeholder="E-mail address"
                        onChange={this.changeHandler}
                        error={state.email.error}
                    />
                    <Form.Input
                        fluid
                        label="Name"
                        className="required"
                        name="name"
                        placeholder="Name"
                        onChange={this.changeHandler}
                        error={state.name.error}
                    />
                    <Form.Input
                        fluid
                        label="Password"
                        className="required"
                        placeholder="Password"
                        icon="lock"
                        name="password"
                        type="password"
                        onChange={this.changeHandler}
                        error={state.password.error}
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        label="Confirm Password"
                        className="required"
                        placeholder="Confirm Password"
                        name="cpassword"
                        type="password"
                        onChange={this.changeHandler}
                        error={state.cpassword.error}
                    />
                    <Form.Input
                        fluid
                        placeholder="Deadline"
                        name="deadline"
                        onChange={this.changeHandler}
                        className="required"
                        label="Deadline"
                        type="date"
                        value={state.deadline.val}
                        error={state.deadline.error}
                    />
                    <Form.Input
                        fluid
                        placeholder="Phone Number"
                        name="phoneNumber"
                        onChange={this.changeHandler}
                        className="required"
                        label="Phone Number"
                        value={state.phoneNumber.val}
                        error={state.phoneNumber.error}
                    />
                    <Form.Input
                        fluid
                        placeholder="Yearly Fees"
                        name="fee"
                        onChange={this.changeHandler}
                        label="Yearly Fees"
                        value={state.fee.val}
                        type="number"
                        error={state.fee.error}
                    />
                    <Form.Input
                        fluid
                        placeholder="Ranking"
                        name="ranking"
                        type="number"
                        onChange={this.changeHandler}
                        label="Ranking in Pakistan"
                        value={state.ranking.val}
                        error={state.ranking.error}
                    />
                    <Form.Input
                        fluid
                        placeholder="City"
                        name="city"
                        onChange={this.changeHandler}
                        label="City"
                        className="required"
                        value={state.city.val}
                        error={state.city.error}
                    />
                    <InputList
                        ref={this.inputListRef}
                        className="required"
                        label="Programs Offered"
                        onAdd={this.addProgram}
                        onRemove={this.removeProgram}
                        error={state.programsOffered.error}
                    />
                    <Button
                        primary
                        fluid
                        size="large"
                        loading={state.loading}
                        onClick={this.signupHandler}
                    >
                        Signup
                    </Button>
                </Segment>
            </Form>
        );
    }
}

export default Signup;
