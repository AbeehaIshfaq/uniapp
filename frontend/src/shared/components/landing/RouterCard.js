import React from "react";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const RouterCard = (props) => {
    const { title, to, paragraph, buttonText, basic, inverted } = props;

    return (
        <Card style={{ boxShadow: "none" }}>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
            </Card.Content>
            <Card.Content>
                <Card.Description>{paragraph}</Card.Description>
            </Card.Content>
            <Card.Content>
                <Button
                    basic={basic}
                    inverted={inverted}
                    color="blue"
                    as={Link}
                    to={to}
                >
                    {buttonText}
                </Button>
            </Card.Content>
        </Card>
    );
};

export default RouterCard;
