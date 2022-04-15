import React from "react";
import { Form, Button, Icon, Input, List } from "semantic-ui-react";

const Action = ({ onClick }) => {
    return (
        <Button icon primary onClick={onClick}>
            <Icon name="add" />
        </Button>
    );
};

export default class InputList extends React.Component {
    state = { value: "", list: [] };

    changeHandler = (e, { value }) => {
        this.setState({ value });
    };

    addItem = () => {
        const list = [...this.state.list];
        list.push(this.state.value);

        this.setState({ value: "", list });
    };

    removeItem = (e, { name }) => {
        const list = this.state.list.filter((item) => item !== name);
        console.log(this.state.list, list);
        this.setState({ list });

        const { onRemove } = this.props;
        onRemove && onRemove(name);
    };

    render() {
        const { className, label, onAdd, error } = this.props;

        const items = this.state.list.map((item, i) => (
            <React.Fragment key={i}>
                <List.Item>
                    <List.Content floated="right">
                        <Button
                            icon
                            inverted
                            color="red"
                            size="mini"
                            name={item}
                            onClick={this.removeItem}
                        >
                            <Icon name="remove" />
                        </Button>
                    </List.Content>
                    <List.Content>{item}</List.Content>
                </List.Item>
            </React.Fragment>
        ));

        return (
            <Form.Field className={className} error={!!error}>
                <label>{label}</label>
                <Input
                    onChange={this.changeHandler}
                    value={this.state.value}
                    action={<Action onClick={onAdd} />}
                />
                <List>{items}</List>
            </Form.Field>
        );
    }
}
