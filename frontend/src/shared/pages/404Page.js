import React from "react";
import { Container, Segment, Header, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <Container textAlign="center">
            <Segment padded="very" basic>
                <Header as="h1" icon>
                    <Icon name="bomb" />
                    404
                </Header>
                <Header.Subheader as="h3">Page not Found!</Header.Subheader>
                <Button as={Link} to="/" secondary basic>
                    Back to Home
                </Button>
            </Segment>
        </Container>
    );
};

export default Page404;
