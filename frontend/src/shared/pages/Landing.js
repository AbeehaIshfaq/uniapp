import React from "react";
import { Container, Grid, Card } from "semantic-ui-react";

import LandingHeader from "../components/landing/LandingHeader";
import RouterCard from "../components/landing/RouterCard";

const LandingPage = () => {
    const uniMessage =
        "We are the lead university application platform to provide students all across pakistan a means to easily manage their college applications";
    const studMessage =
        "Join over X other students looking to apply to all their desired universities with a single Universal Application";

    return (
        <>
            <LandingHeader />
            <main>
                <Container style={{ margin: "2rem" }}>
                    <Card.Group stackable doubling>
                        <RouterCard
                            style={{ margin: "20px" }}
                            title="For Students"
                            to="student/auth"
                            buttonText="Sign up and Apply"
                            paragraph={studMessage}
                        />
                        <RouterCard
                            style={{ margin: "20px" }}
                            title="For Universities"
                            to="uni/auth"
                            buttonText="Register or Login"
                            paragraph={uniMessage}
                        />
                    </Card.Group>
                </Container>
            </main>
        </>
    );
};

export default LandingPage;

// <Grid stackable>
// <Grid.Row columns={2}>
//     <Grid.Column width="5">
//
//     </Grid.Column>
//     <Grid.Column width="5">
//         <RouterCard
//             title="For Universities"
//             to="uni/auth"
//             buttonText="Register or Login"
//             paragraph={uniMessage}
//         />
//     </Grid.Column>
// </Grid.Row>
// </Grid>
