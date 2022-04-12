import React from "react";
import { Form, Grid, Segment, Header, Button, Icon } from "semantic-ui-react";
import InputList from "../../shared/components/InputList";

export default class UniInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: { val: "", error: null, validators: [] },
            phoneNumber: { val: "", error: null, validators: [] },
            yearlyFees: { val: "", error: null, validators: [] },
            ranking: { val: "", error: null, validators: [] },
            programsOffered: { val: [], error: null, validators: [] },
        };
        this.inputListRef = React.createRef();
    }

    addProgram = () => {
        const inputList = this.inputListRef.current;
        if (!inputList.state.value) return;

        let { val, error, validators } = { ...this.state.programsOffered };
        const programs = [...val];
        validators = [...validators];
        programs.push(inputList.state.value);

        this.setState({
            programsOffered: {
                val: programs,
                error,
                validators,
            },
        });

        inputList.addItem();
    };

    removeProgram = (name) => {
        let { val, error, validators } = { ...this.state.programsOffered };
        const programs = val.filter((item) => item !== name);

        this.setState({
            programsOffered: {
                val: programs,
                error,
                validators,
            },
        });
    };

    componentDidMount = () => {};

    changeHandler = (e, { value, name }) => {
        this.setState({ value });
    };

    render() {
        return (
            <Grid
                textAlign="center"
                style={{ height: "100vh" }}
                verticalAlign="middle"
            >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Segment style={{ width: "100%" }} raised textAlign="left">
                        <Header as="h2">Additional Details</Header>
                        <Form>
                            <Form.Input
                                fluid
                                placeholder="Deadline"
                                name="deadline"
                                onChange={this.changeHandler}
                                className="required"
                                label="Deadline"
                            />
                            <Form.Input
                                fluid
                                placeholder="Phone Number"
                                name="phoneNumber"
                                onChange={this.changeHandler}
                                className="required"
                                label="Phone Number"
                            />
                            <Form.Input
                                fluid
                                placeholder="Yearly Fees"
                                name="fees"
                                onChange={this.changeHandler}
                                label="Yearly Fees"
                            />
                            <Form.Input
                                fluid
                                placeholder="Ranking"
                                name="ranking"
                                type="number"
                                onChange={this.changeHandler}
                                label="Ranking"
                            />
                            <Form.Input
                                fluid
                                placeholder="City"
                                name="city"
                                onChange={this.changeHandler}
                                label="City"
                                className="required"
                            />
                            <InputList
                                ref={this.inputListRef}
                                className="required"
                                label="Programs Offered"
                                onAdd={this.addProgram}
                                onRemove={this.removeProgram}
                            />
                            {/* {this.state.programsOffered.val.map(
                                (program, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            {program}
                                        </React.Fragment>
                                    );
                                }
                            )} */}
                            <Button
                                animated
                                primary
                                fluid
                                onClick={this.addProgram}
                            >
                                <Button.Content visible>Proceed</Button.Content>
                                <Button.Content hidden>
                                    <Icon name="right arrow" />
                                </Button.Content>
                            </Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}
