import React from "react";
import { Form, Segment, Message } from "semantic-ui-react";
import { Container, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AuthContext from "../../shared/context/AuthContext";
import server from "../../server/server";
import { validate, Required } from "../../util/validate";

class Forgetpass extends React.Component {
  static contextType = AuthContext;

  state = {
    email: { val: "", error: null, validators: [Required] },
    password: { val: "", error: null, validators: [Required] },
    loading: false,
    error: false,
  };

  submitHandler = async (e) => {
    this.setState({ loading: true });
    let auth = this.context;

    if (this.validator()) {
      this.setState({ loading: false });
      return;
    }

    const data = {
      email: this.state.email.val,
      password: this.state.password.val,
    };

    let res;
    try {
      res = await server.post("/student/login", data);
      this.setState({ loading: false });
      auth.login("student", res.data.token, res.data.student._id);
    } catch (err) {
      this.setState({
        loading: false,
        error: "Credentials do not match",
      });
    }
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
    // error = true;
    return error;
  };

  render() {
    return (
       // <Container style={{ margin: "2.5rem" } } align="center">
       <Container style={{ margin: "18.5rem" }} align="center">
       <h3>Enter Email</h3>

                   
      <Form
        size="small"
        onSubmit={this.submitHandler}
        error={!!this.state.error}
        style={{ maxWidth: 450 }}
      >
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

          <Form.Button primary fluid size="small" loading={this.state.loading}>
            Send Email
          </Form.Button>
      </Form>


      </Container>
      
    );
  }
}

export default Forgetpass;