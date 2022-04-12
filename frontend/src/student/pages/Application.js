import React from "react";
import { Container } from "semantic-ui-react";

import Navbar from "../components/navbar/Navbar";
import AppAccordion from "../components/application/AppAccordion";
import { Button, Image, List } from 'semantic-ui-react'

const ApplicationPage = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Container style={{ marginTop: "2rem" }}>
                    <AppAccordion />
                    <h1>    </h1>

                    <Button color='blue'>Submit</Button>
                </Container>
            </main>
        </>
    );
};

export default ApplicationPage;
