import React from "react";
import { Container } from "semantic-ui-react";
import { Form, Message } from "semantic-ui-react";

import Navbar from "../components/navbar/Navbar";
import AppAccordion from "../components/application/AppAccordion";
import { Button, Image, List } from 'semantic-ui-react'

const Viewuni = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                    <h1>    </h1>
 <Container align="center" style={{ margin: "2.5rem" }}>
 <h1>  University Name  </h1>

<div align="center" class="ui steps">
  <a class=" step">
    <i class="clock outline icon"></i>
    <div class="content">
      <div class="title">Duration</div>
      <div class="description">4 years</div>
    </div>
  </a>
  <a class=" step">
  <i class="dollar icon"></i>
    <div class="content">
      <div class="title">Fee</div>
      <div class="description">800000 /year</div>
    </div>
  </a>
  <a class=" step">
  <i class="globe icon"></i>
    <div class="content">
      <div class="title">Location</div>
      <div class="description">Lahore</div>
    </div>
  </a>
  <a class=" step">
  <i class="calendar alternate outline icon"></i>
    <div class="content">
      <div class="title">Deadline</div>
      <div class="description">4th October</div>
    </div>
  </a>

</div>
<h3>  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,   </h3>
<h2>  Programes Offered  </h2>

<div class="ui list">
  <div class="item">
    <div class="header">Computer Science</div>
  </div>
  <div class="item">
    <div class="header">Maths</div>
  </div>
  <div class="item">
    <div class="header"> Physics</div>
  </div>
  <div class="item">
    <div class="header">Biology</div>
  </div>
</div>
</Container>

            </main>
        </>
    );
};

export default Viewuni;