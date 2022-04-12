import React from "react";
import { Container, Button, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NoUni = () => {
    return (
        <Container textAlign="center" style={{ padding: "20vh" }}>
            <Header as="h2" icon>
                <Icon name="dont" />
                <Header.Content>No Universities Selected</Header.Content>
            </Header>
            <p>
                You do not have any universities selected at the moment. Click
                the button below to select a university
            </p>
            <Button primary animated="fade" as={Link} to="/student/findUnis">
                <Button.Content visible>Select Universities</Button.Content>
                <Button.Content hidden>
                    <Icon name="right arrow" />
                </Button.Content>
            </Button>
        </Container>
    );
};

export default NoUni;
