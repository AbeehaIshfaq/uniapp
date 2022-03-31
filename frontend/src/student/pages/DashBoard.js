import React from "react";

import { Container } from "semantic-ui-react";
import NavBar from "../components/navbar/Navbar";
import ProgressCard from "../components/dashboard/ProgressCard";
// import DeadlineCard from "../components/dashboard/DeadlineCard";
import UniListCard from "../components/dashboard/UnilistCard";

const StudentDash = ({ props }) => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Container style={{ padding: "20px" }}>
                    <ProgressCard />
                    <UniListCard />
                </Container>
            </main>
        </>
    );
};

export default StudentDash;
