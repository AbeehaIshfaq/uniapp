import React from "react";
import { Form } from "semantic-ui-react";

import {
    validate,
    Required,
    Email,
    PhoneNumber,
    CNIC,
} from "../../../util/validate";

const maritalStatusOptions = [
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
        maritalStatus: { val: "", error: null, validators: [Required] },
        dateOfBirth: { val: "", error: null, validators: [Required] },
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
                        label="Middle Name"
                        placeholder="Middle Name"
                        name="middle"
                        value={state.middle.val}
                        onChange={this.changeHandler}
                        error={state.middle.error}
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
                </Form.Group>
                <Form.Input
                    label="Current Address"
                    placeholder="Current Address"
                    name="currentAddress"
                    value={state.currentAddress.val}
                    onChange={this.changeHandler}
                    error={state.currentAddress.error}
                    className="required"
                />
                <Form.Input
                    label="Permanent Address"
                    placeholder="Permanent Address"
                    name="permanentAddress"
                    value={state.permanentAddress.val}
                    onChange={this.changeHandler}
                    error={state.permanentAddress.error}
                    className="required"
                />
                <Form.Group grouped>
                    <Form.Field>
                        <label>Gender</label>
                        {/* <Message error header="some error" /> */}
                    </Form.Field>
                    <Form.Radio
                        label="Male"
                        value="male"
                        name="gender"
                        checked={state.gender.val === "male"}
                        onChange={this.changeHandler}
                    />
                    <Form.Radio
                        label="Female"
                        value="female"
                        name="gender"
                        checked={state.gender.val === "female"}
                        onChange={this.changeHandler}
                    />
                    <Form.Input
                        inline
                        placeholder="Other"
                        name="gender"
                        value={
                            state.gender.val === "male" ||
                            state.gender.val === "female"
                                ? ""
                                : state.gender.val
                        }
                        onChange={this.changeHandler}
                    />
                </Form.Group>

                
                <Form.Group>
                    <Form.Select
                        label="Marital Status"
                        placeholder="Marital Status"
                        options={maritalStatusOptions}
                        name="maritalStatus"
                        value={state.maritalStatus.val}
                        onChange={this.changeHandler}
                        className="required"
                        error={state.maritalStatus.error}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Input
                        label="Date of Birth"
                        type="date"
                        name="dateOfBirth"
                        value={state.dateOfBirth.val}
                        onChange={this.changeHandler}
                        error={state.dateOfBirth.error}
                        className="required"
                    />
                </Form.Group>
            </>
        );
    }
}
