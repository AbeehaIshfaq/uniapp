import React from 'react';
import NavBar from "../components/navbar/Navbar";
import TextField from '@material-ui/core/TextField';
import Calend from '../components/calendar/calend';
import { Form, Message } from "semantic-ui-react";
import { Progress, Card, Button } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

const App = () => {
  
  return (
    <>
               <header>
                <NavBar />
            </header>
            <h1 align= "center"> Set the deadline for your application </h1>

            <main>
                <Container align='center'>
                <h1>  </h1>
                <div style={{align:'center',  justifyContent:'center', alignItems:'center', height: '50vh'}}>

                <Calend />
                <Button color='blue'>Set Deadline</Button>

                
                </div>
                </Container>
            </main>


      </>

  );
}
  
export default App;