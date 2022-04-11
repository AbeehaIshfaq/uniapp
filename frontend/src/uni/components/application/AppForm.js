import React from "react";
import { Form, Message } from "semantic-ui-react";
import server from "../../../server/server";

export default class AppForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { success: false, error: false, loading: false };
        this.formRef = React.createRef();
    }

    submitHandler = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const child = this.formRef.current;

        const data = {};
        Object.entries(child.state).forEach(
            ([key, value]) => (data[key] = value.val)
        );

        try {
            await server.patch("/student/application/personalInfo", data);
            this.setState({ success: true, loading: false });
        } catch (err) {
            console.log(err);
            this.setState({ error: true, loading: false });
        }
    };

    getData = async () => {
        let data;
        try {
            const response = await server.get(
                "/student/application/personalInfo"
            );
            data = response.data;
        } catch (err) {
            this.setState({ loading: false, error: true });
            console.log(err);
        }

        const child = this.formRef.current;

        Object.keys(child.state).forEach((key) =>
            child.setState((oldState) => {
                oldState[key].val = data[key];
                return oldState;
            })
        );

        this.setState({ loading: false });
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
                error={error}
            >
                {clonned}
                <Message success header="Form Saved Successfully" />
                <Message
                    error
                    header="An error has occured!"
                    content="Please try again"
                />
                <Form.Button color="blue">Save</Form.Button>
            </Form>
        );
    }
}
