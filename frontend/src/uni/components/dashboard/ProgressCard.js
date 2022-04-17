import React from "react";
import { Progress, Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Grid, Image } from 'semantic-ui-react';


const ProgressCard = () => {
    return (
        <Card>

<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}>
   <h1> UNIAPP </h1>
</div>
            <Button as={Link} to="/uni/setdeadline" basic>
            <Button color='blue'>Change Deadline</Button>
            </Button>
            <Button as={Link} to="/student/application" basic>
            <Button color='blue'>Download All Applications</Button>
            </Button>
        </Card>
    );
};

export default ProgressCard;
