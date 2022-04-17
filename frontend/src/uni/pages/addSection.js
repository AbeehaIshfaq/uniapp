import React from "react";
import { Container } from "semantic-ui-react";
import { Form } from "semantic-ui-react";

import Navbar from "../components/navbar/Navbar";
import AppAccordion from "../components/application/AppAccordion";

import AddFrom from "../components/application/addSec";

const AddSection = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Container style={{ marginTop: "2rem" }}>
          {/* <AppAccordion /> */}
          <AddFrom />
        </Container>
      </main>
    </>
  );
};

export default AddSection;
