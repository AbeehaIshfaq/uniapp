import React from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../components/navbar/Navbar";
import ProgressCard from "../components/dashboard/ProgressCard";
// import DeadlineCard from "../components/dashboard/DeadlineCard";
import { Button, Image, List } from 'semantic-ui-react'


const UploadDoc = (props) => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
        <List divided verticalAlign='middle'  style={{ padding: "60px" }} >
        <h1>   Upload Your Documents Here </h1>
        <List.Item >
          <List.Content floated='right'>
          <Button color='blue'>Upload</Button>
          </List.Content>
          <List.Content>CNIC</List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button color='blue'>Upload</Button>
          </List.Content>
          <List.Content>Fathers CNIC</List.Content>
        </List.Item>

        <List.Item>
          <List.Content floated='right'>
            <Button color='blue'>Upload</Button>
          </List.Content>
          <List.Content>O level Result Card</List.Content>
        </List.Item>

        <List.Item>
          <List.Content floated='right'>
            <Button color='blue'>Upload</Button>
          </List.Content>
          <List.Content>A level Result Card</List.Content>
        </List.Item>


        <List.Item>
          <List.Content floated='right'>
            <Button color='blue'>Upload</Button>
          </List.Content>
          <List.Content>Passport</List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button color='blue'>Upload</Button>
          </List.Content>
          <List.Content>Character Certificate</List.Content>
        </List.Item>
      </List>
      


      </main>
      </>
    );
};

export default UploadDoc;