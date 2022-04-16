import React from "react";
import { Card, Item, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class UniCard extends React.Component {
    state = { loading: false };

    clickHandler = (e) => {
        this.setState({ loading: true });

        if (this.props.uni.isAdded) {
            this.props.add();
        }
        this.props.remove(this.props.uni._id);
    };

    render() {
        const { uni } = this.props;
        let { name, email, deadline, phoneNumber, isAdded } = uni;
        const { loading } = this.state;

        let date = new Date(deadline);
        deadline = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        return (
            <>
                <Card>
                    <Card.Content
                        textAlign="center"
                        style={{ backgroundColor: "lightgrey" }}
                    >
                        <Card.Header as="h3" content={name} />
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
                            as={Link}
                            to={`/viewUniversity/${uni._id}`}
                            primary
                            animated
                        >
                            <Button.Content visible>Visit Page</Button.Content>
                            <Button.Content hidden>
                                <Icon name="right arrow" />
                            </Button.Content>
                        </Button>

                        {isAdded ? (
                            <Button
                                loading={loading}
                                negative
                                animated="fade"
                                onClick={this.clickHandler}
                            >
                                <Button.Content visible>Remove</Button.Content>
                                <Button.Content hidden>
                                    <Icon name="remove" />
                                </Button.Content>
                            </Button>
                        ) : (
                            <Button
                                loading={loading}
                                positive
                                animated="fade"
                                onClick={this.clickHandler}
                            >
                                <Button.Content visible>Add</Button.Content>
                                <Button.Content hidden>
                                    <Icon name="add" />
                                </Button.Content>
                            </Button>
                        )}
                    </Card.Content>
                </Card>
            </>
        );
    }
}

export default UniCard;
