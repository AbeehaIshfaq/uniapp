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
        const { title } = this.props;
        this.setState({ loading: true });
        const child = this.formRef.current; // something is wrong here

        if (child.validator()) {
            this.setState({ loading: false });
            return;
        }
        const data = {};
        Object.entries(child.state).forEach(
            ([key, value]) => (data[key] = value.val)
        );
        try {
            await server.patch(`/student/application/${title}`, data);
            this.setState({ success: true, loading: false });

        } catch (err) {
            console.log(err);
            this.setState({ error: err, loading: false });
        }
    };

    getData = async () => {
        let data;
        const { title } = this.props;
        console.log(title,"title")
        try {
         const response = await server.get(`/student/application/${title}`);

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

    componentDidMount() {
        this.setState({ loading: true });
        this.getData();
    }

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
                <Form.Button>Save</Form.Button>
            </Form>
        );
    }
}
