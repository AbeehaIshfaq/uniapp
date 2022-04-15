import React from "react";
import { Form } from "semantic-ui-react";

import {
    validate,
    Required,
    Email,
    PhoneNumber,
    CNIC,
} from "../../../util/validate";


const EducationTypesOptions = [
    { key: 0, text: "FSc", value: "FSc" },
    { key: 1, text: "A-levels", value: "A-levels" },
];
const StatusOptions = [
    { key: 0, text: "Complete", value: "Complete" },
    { key: 1, text: "Uncomplete", value: "Uncomplete" },
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
        permanentAddress: { val: "", error: null, validators: [Required] },
        gender: { val: "", error: null, validators: [Required] },
        relation: { val: "", error: null, validators: [Required] },
        occupation: { val: "", error: null, validators: [Required] },

        EducationTypes: { val: "", error: null, validators: [Required] },
        Status: { val: "", error: null, validators: [Required] },
        School: { val: "", error: null, validators: [Required] },
        OverallPercentage: { val: "", error: null, validators: [Required] },
        startDate: { val: "", error: null, validators: [Required] },
        endDate: { val: "", error: null, validators: [Required] }

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
                    <Form.Group>
                    <Form.Select
                        label="Education Type"
                        placeholder="Education Type"
                        options={EducationTypesOptions}
                        name="EducationTypes"
                        value={state.EducationTypes.val}
                        className="required"
                        error={state.EducationTypes.error}
                        setvalue="" 

                    />
                </Form.Group>
                <Form.Group>
                    <Form.Select
                        label="Status"
                        placeholder="Status"
                        options={StatusOptions}
                        name="Status"
                        value={state.Status.val}
                        className="required"
                        error={state.Status.error}
                        setvalue="" 

                    />
                </Form.Group>
                <Form.Group>
                    <Form.Input
                        label="Start Date"
                        type="date"
                        name="startDate"
                        value={state.startDate.val}
                        error={state.startDate.error}
                        className="required"
                        setvalue="" 

                    />
                </Form.Group>
                <Form.Group>
                    <Form.Input
                        label="End Date (expected if uncomplete)"
                        type="date"
                        name="endDate"
                        value={state.endDate.val}
                        error={state.endDate.error}
                        className="required"
                        setvalue="" 

                    />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input
                        label="School/College Name"
                        placeholder="School/College Name"
                        name="School"
                        value={state.School.val}
                        className="required"
                        error={state.School.error}
                        setvalue="" 

                    />
                    <Form.Input
                        label="Overall Percentage"
                        placeholder="Overall Percentage (in numbers)"
                        name="OverallPercentage"
                        value={state.OverallPercentage.val}
                        className="required"
                        error={state.OverallPercentage.error}
                        setvalue="" 

                    />

                </Form.Group>
       </>
        );
    }
}
