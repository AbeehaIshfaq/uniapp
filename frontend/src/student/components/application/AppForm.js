import React from "react";
import { Form, Message } from "semantic-ui-react";

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
        setTimeout(() => {
            console.log(child.state);
            child.validator();
            this.setState({ loading: false });
        }, 500);
    };

    componentDidMount() {
        this.setState({ loading: true });
        this.setState({ loading: false });
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
                <Form.Button>Save</Form.Button>
            </Form>
        );
    }
}
