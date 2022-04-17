import React from "react";
import { Form, Button } from "semantic-ui-react";

import server from "../../../server/server";

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

export default class AddForm extends React.Component {
  state = {
    val: "",
    error: null,
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

  submitHandler = async (e) => {
    // let skip = 0;
    const { data } = await server.get(`/uni/addsec?input=${this.state.val}`);
  };

  render() {
    const state = this.state;
    return (
      <>
        <Form.Group onSubmit={this.submitHandler}>
          <Form.Input
            style={{ width: "1100px", height: "90px", textAlign: "top" }}
            label="Additional question"
            placeholder="Additional question for the new section"
            name="School"
            value={state.val}
            className="required"
            error={state.error}
            setvalue=""
            onChange={(event) => this.setState({ val: event.target.value })}
          />
          <Button
            onClick={this.submitHandler}
            style={{
              position: "absolute",
              left: "0px",
              top: "127px",
              z: "2px",
            }}
          >
            Save
          </Button>
        </Form.Group>
      </>
    );
  }
}
