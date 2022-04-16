import React from "react";
import { Progress, Card, Button, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ProgressCard = (props) => {
    return (
        <Card align="left" fluid>
            <Card.Content textAlign="center">
                <Header as="h1">Application Progress</Header>
            </Card.Content>

            <Card.Content>
                <Progress
                    percent="90"
                    indicating
                    progress
                    label="Personal Info"
                />
                <Progress
                    percent="20"
                    indicating
                    progress
                    label="Family Info"
                />
                <Progress
                    percent="60"
                    indicating
                    progress
                    label="Academic Info"
                />
            </Card.Content>
            <Card.Content align="center">
                <Button as={Link} to="/student/application" primary animated>
                    <Button.Content visible>
                        Complete Application
                    </Button.Content>
                    <Button.Content hidden>
                        <Icon name="right arrow" />
                    </Button.Content>
                </Button>
            </Card.Content>
        </Card>
    );
};

export default ProgressCard;
