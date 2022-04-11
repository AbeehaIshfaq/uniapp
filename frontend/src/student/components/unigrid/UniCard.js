import React from "react";
import { Card, Item, Button, Icon } from "semantic-ui-react";

class UniCard extends React.Component {
    state = { loading: false };

    clickHandler = (e) => {
        this.setState({ loading: true });
        this.props.remove(this.props.uni._id);
    };

    render() {
        const { uni } = this.props;
        let { name, email, deadline, phoneNumber } = uni;
        const { loading } = this.state;

        let date = new Date(deadline);
        deadline = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        return (
            <>
                <Card raised centered>
                    <Card.Content textAlign="center">
                        <Card.Header content={name} />
                        <Card.Meta>{uni.address}</Card.Meta>
                    </Card.Content>
                    <Card.Content>
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Item.Header style={{ fontSize: "medium" }}>
                                        Application Deadline
                                    </Item.Header>
                                    <Item.Description>
                                        {deadline}
                                    </Item.Description>
                                </Item.Content>
                            </Item>

                            <Item>
                                <Item.Content verticalAlign="middle">
                                    <Item.Header style={{ fontSize: "medium" }}>
                                        Contact Information
                                    </Item.Header>
                                    <Item.Description>{email}</Item.Description>
                                    <Item.Description>
                                        {phoneNumber}
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Card.Content>
                    <Card.Content textAlign="center">
                        <Button
                            loading={loading}
                            fluid
                            negative
                            animated="fade"
                            onClick={this.clickHandler}
                        >
                            <Button.Content visible>Remove</Button.Content>
                            <Button.Content hidden>
                                <Icon name="remove" />
                            </Button.Content>
                        </Button>
                    </Card.Content>
                </Card>
            </>
        );
    }
}

export default UniCard;
