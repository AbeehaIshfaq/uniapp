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

import { Card, Header } from "semantic-ui-react";

export default function App() {
    const [dateState, setDateState] = useState(new Date());
    const changeDate = (e) => {
        setDateState(e);
    };
    return (
        <Card fluid align="center">
            <Card.Content>
                <Header>
                    This calendar will display the deadlines of universities
                </Header>
            </Card.Content>

            <Card.Content>
                <Calendar value={dateState} onChange={changeDate} />
                <br />
                <Card.Meta>
                    Current selected date is{" "}
                    <b>{moment(dateState).format("MMMM Do YYYY")}</b>
                </Card.Meta>
            </Card.Content>
        </Card>
    );
}
