import React from 'react';
import NavBar from "../components/navbar/Navbar";
import TextField from '@material-ui/core/TextField';
import Calend from '../components/calendar/calend';
import { Form, Message } from "semantic-ui-react";
import { Progress, Card, Button } from "semantic-ui-react";

const App = () => {
  
  return (
    <>
         <header>
    <NavBar />
</header>
<main></main>
      <h1 Align="center"> Set the deadline for your application </h1>
      <Card Align="center">
                < Calend />
                hello
      </Card>

      </>

  );
}
  
export default App;