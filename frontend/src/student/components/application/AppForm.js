import React from "react";
import { Form } from "semantic-ui-react";

const maritalStatusOptions = [
    { key: 0, text: "Married", value: "married" },
    { key: 1, text: "Single", value: "single" },
];

export default class AppForm extends React.Component {
    state = {
        first: "",
        middle: "",
        last: "",
        email: "",
        phoneNumber: "",
        cnic: "",
        passport: "",
        currentAddress: "",
        permanentAddress: "",
        gender: "",
        marritalStatus: "",
    };

    submitHandler = (e) => {
        console.log(this.state);
    };

    genderChangeHandler = (e, { value }) => this.setState({ gender: value });

    changeHandler = (e, { value, name }) => {
        const temp = { ...this.state };
        temp[name] = value;
        this.setState(temp);
    };

    personChangeHandler = (e, { value, name }) => {
        const { person } = this.state;
        person[name] = value;
        this.setState({ person });
    };

    render() {
        return (
            <Form onSubmit={this.submitHandler}>
                <Form.Group widths="equal">
                    <Form.Input
                        label="First Name"
                        placeholder="First Name"
                        name="first"
                        value={this.state.first}
                        onChange={this.changeHandler}
                    />
                    <Form.Input
                        label="Middle Name"
                        placeholder="Middle Name"
                        name="middle"
                        value={this.state.middle}
                        onChange={this.changeHandler}
                    />
                    <Form.Input
                        label="Last Name"
                        placeholder="Last Name"
                        value={this.state.last}
                        name="last"
                        onChange={this.changeHandler}
                    />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input
                        label="Email"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.changeHandler}
                    />
                    <Form.Input
                        label="Phone Number"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.changeHandler}
                    />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input
                        label="CNIC"
                        placeholder="CNIC"
                        name="cnic"
                        value={this.state.cnic}
                        onChange={this.changeHandler}
                    />
                    <Form.Input
                        label="Passport"
                        placeholder="Passport"
                        name="passport"
                        value={this.state.passport}
                        onChange={this.changeHandler}
                    />
                </Form.Group>
                <Form.Input
                    label="Current Address"
                    placeholder="Current Address"
                    name="currentAddress"
                    value={this.state.currentAddress}
                    onChange={this.changeHandler}
                />
                <Form.Input
                    label="Permanent Address"
                    placeholder="Permanent Address"
                    name="permanentAddress"
                    value={this.state.permanentAddress}
                    onChange={this.changeHandler}
                />
                <Form.Group inline>
                    <label>Gender</label>
                    <Form.Radio
                        label="Male"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.genderChangeHandler}
                    />
                    <Form.Radio
                        label="Female"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.genderChangeHandler}
                    />
                    <Form.Input
                        inline
                        placeholder="Other"
                        value={
                            this.state.gender === "male" ||
                            this.state.gender === "female"
                                ? ""
                                : this.state.gender
                        }
                        onChange={this.genderChangeHandler}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Select
                        label="Marital Status"
                        placeholder="Marital Status"
                        options={maritalStatusOptions}
                        name="maritalStatus"
                        value={this.state.maritalStatus}
                        onChange={this.changeHandler}
                    />
                </Form.Group>
                <Form.Button>Save</Form.Button>
            </Form>
        );
    }
}
