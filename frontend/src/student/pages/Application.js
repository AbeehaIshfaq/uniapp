import React from "react";
import { Container } from "semantic-ui-react";

import Navbar from "../components/navbar/Navbar";
import AppAccordion from "../components/application/AppAccordion";

const ApplicationPage = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Container style={{ marginTop: "2rem" }}>
                    <AppAccordion />
                </Container>
            </main>
        </>
    );
};

export default ApplicationPage;
