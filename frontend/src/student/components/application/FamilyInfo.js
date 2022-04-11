import React from "react";
import { Form } from "semantic-ui-react";

import {
    validate,
    Required,
    Email,
    PhoneNumber,
    CNIC,
} from "../../../util/validate";

const relationOptions = [
    { key: 0, text: "Married", value: "married" },
    { key: 1, text: "Single", value: "single" },
];

export default class PersonalInfo extends React.Component {
    state = {
        first: { val: "", error: null, validators: [Required] },
        middle: { val: "", error: null, validators: [] },
        last: { val: "", error: null, validators: [Required] },
        email: { val: "", error: null, validators: [Required, Email] },
        phoneNumber: {
            val: "",
            error: null,
            validators: [Required, PhoneNumber],
        },
        cnic: { val: "", error: null, validators: [Required, CNIC] },
        currentAddress: { val: "", error: null, validators: [Required] },
        permanentAddress: { val: "", error: null, validators: [Required] },
        gender: { val: "", error: null, validators: [Required] },
        relation: { val: "", error: null, validators: [Required] },
        occupation: { val: "", error: null, validators: [Required] },
    };

    changeHandler = (e, { value, name }) => {
        const temp = { ...this.state };
        temp[name].val = value;
        this.setState(temp);
    };

    validator = () => {
        this.setState(validate(this.state));
        let error = false;
        Object.values(this.state).forEach((values) => {
            if (values.error) error = true;
        });
        return error;
    };

    render() {
        const state = this.state;
        return (
            <>
                <Form.Group widths="equal">
                    <Form.Input
                        label="First Name"
                        placeholder="First Name"
                        name="first"
                        value={state.first.val}
                        onChange={this.changeHandler}
                        className="required"
                        error={state.first.error}
                    />
                    <Form.Input
                        label="Last Name"
                        placeholder="Last Name"
                        value={state.last.val}
                        name="last"
                        onChange={this.changeHandler}
                        className="required"
                        error={state.last.error}
                    />
                    <Form.Input
                        label="Occupation"
                        placeholder="Occupation"
                        name="occupation"
                        value={state.occupation.val}
                        onChange={this.changeHandler}
                        className="required"
                        error={state.occupation.error}
                    />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input
                        label="Email"
                        placeholder="Email"
                        name="email"
                        value={state.email.val}
                        onChange={this.changeHandler}
                        error={state.email.error}
                        className="required"
                    />
                    <Form.Input
                        label="Phone Number"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={state.phoneNumber.val}
                        onChange={this.changeHandler}
                        error={state.phoneNumber.error}
                        className="required"
                    />
                    <Form.Input
                        label="CNIC"
                        placeholder="CNIC"
                        name="cnic"
                        value={state.cnic.val}
                        onChange={this.changeHandler}
                        error={state.cnic.error}
                        className="required"
                    />
                <Form.Input
                    label="Relation"
                    placeholder="Relation"
                    name="relation"
                    value={state.relation.val}
                    onChange={this.changeHandler}
                    error={state.relation.error}
                    className="required"
                />
                </Form.Group>
      
 
            </>
        );
    }
}
