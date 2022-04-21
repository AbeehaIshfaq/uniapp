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
import server from "../../../server/server";
import UniCard from "../unigrid/UniCard";

import UniGridCompact from "../unigrid/UniGridCompact";
import NoUni from "../unigrid/NoUni";
export default function Calend(props) 
{        
   //console.log(props.name,("calendar"))
  //  console.log(uni,"uni")
    const [dateState, setDateState] = useState(new Date());
 
    const changeDate = (e) => {
        setDateState(e);
  
    };
    console.log( props.name,"gygg")
    const mark = props.name;
    console.log(mark,"uni")

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
                 //  console.log(x=>moment(x).format("MMMM Do YYYY"),"MOMENT")
                    let compare=mark.find(x=>x===newdate);
                   console.log(mark.includes(newdate),"compare");
                    if (mark.includes(newdate))
                    {
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
