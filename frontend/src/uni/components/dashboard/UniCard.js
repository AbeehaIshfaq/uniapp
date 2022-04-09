import React from "react";

import { Card, Placeholder } from "semantic-ui-react";
import { Link } from "react-router-dom";

const UniCard = () => {
    return (
        <Card as={Link} to="/student/university/uid" fluid>
            <Card.Content>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Placeholder>
            </Card.Content>
        </Card>
    );
};

export default UniCard;
