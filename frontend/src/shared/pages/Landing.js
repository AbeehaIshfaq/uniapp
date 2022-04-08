import React from "react";
import { Container, Grid } from "semantic-ui-react";

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
                <Container>
                    <Grid stackable>
                        <Grid.Row columns={2}>
                            <Grid.Column width="5">
                                <RouterCard
                                    title="For Students"
                                    to="student/signup"
                                    buttonText="Sign up and Apply"
                                    paragraph={studMessage}
                                />
                            </Grid.Column>
                            <Grid.Column width="5">
                                <RouterCard
                                    title="For Universities"
                                    to="uni/signup"
                                    buttonText="Register Now"
                                    paragraph={uniMessage}
                                    basic
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </main>
        </>
    );
};

export default LandingPage;
