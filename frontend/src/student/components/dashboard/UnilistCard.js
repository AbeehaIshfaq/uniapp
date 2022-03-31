import React from "react";
import { Card, Button } from "semantic-ui-react";

import UniCard from "./UniCard";

const UnilistCard = () => {
    return (
        <Card style={{ width: "50em" }}>
            <Card.Content>
                <Card.Header>My Universities</Card.Header>
            </Card.Content>

            <Card.Content>
                <Card.Group>
                    <UniCard />
                    <UniCard />
                    <UniCard />
                    <UniCard />
                </Card.Group>
            </Card.Content>
            <Button basic>View More</Button>
        </Card>
    );
};

export default UnilistCard;
