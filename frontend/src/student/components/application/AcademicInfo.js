import React from "react";
import { Form } from "semantic-ui-react";

import {
    validate,
    Required,
    Email,
    PhoneNumber,
    CNIC,
} from "../../../util/validate";

const EducationTypeOptions = [
    { key: 0, text: "FSc", value: "FSc" },
    { key: 1, text: "A-levels", value: "A-levels" },
];
const StatusOptions = [
    { key: 0, text: "Complete", value: "Complete" },
    { key: 1, text: "Uncomplete", value: "Uncomplete" },
];

export default class AcademicInfo extends React.Component {
    state = {
        EducationType: { val: "", error: null, validators: [Required] },
        Status: { val: "", error: null, validators: [Required] },
        School: { val: "", error: null, validators: [Required] },
        OverallPercentage: { val: "", error: null, validators: [Required] },
        startDate: { val: "", error: null, validators: [Required] },
        endDate: { val: "", error: null, validators: [Required] },
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
                        placeholder="EducationType"
                        options={EducationTypeOptions}
                        name="EducationType"
                        value={state.EducationType.val}
                        onChange={this.changeHandler}
                        className="required"
                        error={state.EducationType.error}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Select
                        label="Status"
                        placeholder="Status"
                        options={StatusOptions}
                        name="Status"
                        value={state.Status.val}
                        onChange={this.changeHandler}
                        className="required"
                        error={state.Status.error}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Input
                        label="Start Date"
                        type="date"
                        name="startDate"
                        value={state.startDate.val}
                        onChange={this.changeHandler}
                        error={state.startDate.error}
                        className="required"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Input
                        label="End Date (expected if uncomplete)"
                        type="date"
                        name="endDate"
                        value={state.endDate.val}
                        onChange={this.changeHandler}
                        error={state.endDate.error}
                        className="required"
                    />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input
                        label="School/College Name"
                        placeholder="School"
                        name="School"
                        value={state.School.val}
                        onChange={this.changeHandler}
                        className="required"
                        error={state.School.error}
                    />
                    <Form.Input
                        label="Overall Percentage"
                        placeholder="Overall Percentage (in numbers)"
                        name="OverallPercentage"
                        value={state.OverallPercentage.val}
                        onChange={this.changeHandler}
                        className="required"
                        error={state.OverallPercentage.error}
                    />
                </Form.Group>
            </>
        );
    }
}
