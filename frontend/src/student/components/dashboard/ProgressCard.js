import React from "react";

import { Progress, Card, Button, Segment } from "semantic-ui-react";

const ProgressCard = () => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>Application Progress</Card.Header>
            </Card.Content>

            <Card.Content>
                <Progress percent="90" indicating progress label="Personal Info" />
                <Progress percent="20" indicating progress label="Family Info" />
                <Progress percent="60" indicating progress label="Academic Info" />
                <Progress percent="40" indicating progress label="Extracurricular Info" />
                <Progress percent="50" indicating progress label="Additional Form" />

                <Segment basic textAlign="center">
                    <Button basic>Fill Application</Button>
                </Segment>
            </Card.Content>
        </Card>
    );
};

export default ProgressCard;
