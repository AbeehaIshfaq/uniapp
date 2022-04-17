import React from "react";
import { Form, Message } from "semantic-ui-react";

import server from "../../../server/server";

export default class AppForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { success: false, error: null, loading: false };
        this.formRef = React.createRef();
    }

    submitHandler = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const child = this.formRef.current;

        if (child.validator()) {
            this.setState({ loading: false });
            return;
        }

        const data = {};
        Object.entries(child.state).forEach(
            ([key, value]) => (data[key] = value.val)
        );

        try {
            await server.patch("/student/application/personalInfo", data);
            this.setState({ success: true, loading: false });
        } catch (err) {
            console.log(err);
            this.setState({ error: err, loading: false });
        }
    
    };

    getData = async () => {
        let data;
        try {
            const response = await server.get(
                "/student/application/personalInfo"
            );
        
            data = response.data;
            const child = this.formRef.current;

            Object.keys(child.state).forEach((key) =>
                child.setState((oldState) => {
                    oldState[key].val = data[key] || "";
                    return oldState;
                })
            );

            this.setState({ loading: false });
        } catch (err) {
            console.log(err.response.data);
            this.setState({ loading: false, error: err });
        }
        try {
            const response = await server.get(
                "/student/application/FamilyInfo"
            );
        
            data = response.data;
            const child = this.formRef.current;

            Object.keys(child.state).forEach((key) =>
                child.setState((oldState) => {
                    oldState[key].val = data[key] || "";
                    return oldState;
                })
            );

            this.setState({ loading: false });
        } catch (err) {
            console.log(err.response.data);
            this.setState({ loading: false, error: err });
        }
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
                error={!!error}
            >
                {clonned}
                <Message success header="Form Saved Successfully" />
                <Message
                    error
                    header="An error has occured!"
                    content={error && error.toString()}
                />
                <Form.Button color='blue' class="ui button"><i class="save icon"></i> Save</Form.Button>

            </Form>
        );
    }
}
