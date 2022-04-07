import React from "react";
import { Form, Message } from "semantic-ui-react";

import PersonalInfo from "./PersonalInfo";

const temp = (f) =>
    new Promise((resolve, reject) => {
        resolve(setTimeout(f, 3000));
    });

export default class AppForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { success: false, error: false, loading: false };
        this.formRef = React.createRef();
    }

    submitHandler = async (e) => {
        this.setState({ loading: true });
        setTimeout(() => {
            console.log(this.formRef.current.state);
            this.setState({ loading: false, success: true });
        }, 3000);
    };

    render() {
        const { success, error, loading } = this.state;
        const { children } = this.props;

        const clonned = React.cloneElement(children, { ref: this.formRef });
        return (
            <Form
                onSubmit={this.submitHandler}
                loading={loading}
                success={success}
                error={error}
            >
                {clonned}
                <Message success content="Form Saved Successfully" />
                <Message error header="An error has occured!" />
                <Form.Button>Save</Form.Button>
            </Form>
        );
    }
}
