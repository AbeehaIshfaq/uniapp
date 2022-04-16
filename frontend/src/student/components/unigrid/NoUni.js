import React from "react";
import { Container, Button, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NoUni = (props) => {
    const { redirect, content, header, button } = props;

    return (
        <Container textAlign="center" style={{ padding: "20vh" }}>
            <Header as="h2" icon>
                <Icon name="dont" />
                <Header.Content>{header}</Header.Content>
            </Header>
            <p>{content}</p>
            {button && (
                <Button primary animated as={Link} to={redirect}>
                    <Button.Content visible>{button}</Button.Content>
                    <Button.Content hidden>
                        <Icon name="right arrow" />
                    </Button.Content>
                </Button>
            )}
        </Container>
    );
};

export default NoUni;
