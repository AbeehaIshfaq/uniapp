import React from "react";
import { Container, Button, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NoUni = () => {
  return (
    <Container textAlign="center" style={{ padding: "20vh" }}>
      <Header as="h2" icon>
        <Icon name="dont" />
        <Header.Content>No University found</Header.Content>
      </Header>
      <p>
        Your search didn't return any university. Check that the spellings
        you've entered are correct and try again!
      </p>
      {/* <Button primary animated="fade" as={Link} to="/student/findUnis">
        <Button.Content visible>Select Universities</Button.Content>
        <Button.Content hidden>
          <Icon name="right arrow" />
        </Button.Content>
      </Button> */}
    </Container>
  );
};

export default NoUni;
