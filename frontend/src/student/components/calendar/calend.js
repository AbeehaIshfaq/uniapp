// import React, { useState } from 'react';
// import Calendar from 'react-calendar';

// function Calend() {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div>
//       <Calendar onChange={onChange} value={value} />
//     </div>
//   );
// }
// export default Calend;
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { Item, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Card, Header } from "semantic-ui-react";
import './c.css';
export default function App() 
{
    const [dateState, setDateState] = useState(new Date());
 
    const changeDate = (e) => {
        setDateState(e);
  
    };
    console.log( useState(new Date()))
    const mark = [
        'April 1st 2022'
    ]
    return (
        <Card fluid align="center">
            <Card.Content>
                <Header>
                    This calendar will display the deadlines of universities
                </Header>
            </Card.Content>
            <Card.Content>
                <Calendar 
                
                value={dateState} 
                onChange={changeDate}  
                tileClassName={({ date, view }) => {
                    let newdate=moment(date).format("MMMM Do YYYY");
                    console.log(newdate,"newdate");
                    let compare=mark.find(x=>moment(x).format("MMMM Do YYYY"));
                    console.log(compare,"compare");
                    if(compare===newdate){
                        console.log("MATCHED")
                     return  'highlight'
                    }
                  }}
                />
                <br />
                <Card.Meta>
                    Current selected date is{" "}
                    <b>{moment(dateState).format("MMMM Do YYYY")}</b>
                </Card.Meta>
            </Card.Content>
        </Card>
    );
}
