import React from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../components/navbar/Navbar";
import ProgressCard from "../components/dashboard/ProgressCard";
import DeadlineCard from "../components/dashboard/DeadlineCard";
import UniListCard from "../components/dashboard/UnilistCard";

const UniDash = (props) => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>

                <Container style={{ padding: "150px" }}>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
                <h1>  <ProgressCard /> </h1>
                </div>
                </Container>
            </main>
        </>
    );
};

export default UniDash;
