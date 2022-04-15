import React from "react";

import { Container } from "semantic-ui-react";
import NavBar from "../components/navbar/Navbar";
import ProgressCard from "../components/dashboard/ProgressCard";
// import DeadlineCard from "../components/dashboard/DeadlineCard";
import UniListCard from "../components/dashboard/UnilistCard";
import Calend from "../components/calendar/calend";
import { Grid } from "semantic-ui-react";

const StudentDash = (props) => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Grid columns={2} style={{ padding: "60px" }} align="center">
                    <Grid.Row>
                        <Grid.Column>
                            <ProgressCard />
                        </Grid.Column>
                        <Grid.Column>
                            <Calend />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Container style={{ padding: "20px" }} align="center">
                    <UniListCard />
                </Container>
            </main>
        </>
    );
};

export default StudentDash;
