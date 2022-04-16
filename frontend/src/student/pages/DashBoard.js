import React from "react";
import { Container, Card } from "semantic-ui-react";

import NavBar from "../components/navbar/Navbar";
import ProgressCard from "../components/dashboard/ProgressCard";
// import DeadlineCard from "../components/dashboard/DeadlineCard";
import UniListCard from "../components/dashboard/UnilistCard";
import Calend from "../components/calendar/calend";

const StudentDash = (props) => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Container style={{ margin: "2.5rem" }}>
                    <Card.Group itemsPerRow={2} stackable>
                        <ProgressCard />
                        <Calend />
                    </Card.Group>
                </Container>
                <Container align="center" style={{ margin: "2.5rem" }}>
                    <UniListCard />
                </Container>
            </main>
        </>
    );
};

export default StudentDash;
