import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

import { Card, Header } from "semantic-ui-react";
import { render } from "react-dom";
import server from "../../../server/server";

import "./calendar.css";

// var [value, onChange] = useState(new Date());

export default class App extends React.Component {
    state = { deadlines: [] };
    // deadlineDate() {
    //     let deadlines = [];

    //     for(var i = 0; i < this._deadlines.length; i++){
    //         deadlines[i] = new Date(this._deadlines[i]);
    //     }

    //     return deadlines[i];
    // }

    async componentDidMount() {
        // const skip = 0;
        try {
            const { data } = await server.get(`/student/Deadlines`);
            // this._deadlines = data;
            // console.log(data);

            let deadlines = data.map((date) => {
                const temp = new Date(date);
                return moment(temp).format("MMMM Do YYYY");
                // return new Date(
                //     temp.getFullYear(),
                //     temp.getMonth(),
                //     temp.getDate()
                // );
            });
            // console.log(deadlines);
            // var deadlines = [];

            // for (var i = 0; i < this._deadlines.length; i++) {
            //     deadlines.push(new Date(this._deadlines[i]));
            // }

            this.setState({ deadlines });

            // console.log(this._deadlines);
            // console.log(this._deadlines2);

            // console.log(this._deadlines2[0]);
            // console.log(this._deadlines2[0].getFullYear());
            // console.log(typeof this._deadlines2[0].getFullYear());
            // console.log(this.deadlines2[0].getFullYear)
            // console.log(this.deadlines2[0].getMonth)
            // console.log(this.deadlines2[0].getDate)
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        // const deadlines = deadlineDate()
        console.log(this.state.deadlines);
        return (
            <Card fluid align="center">
                <Card.Content>
                    <Header>
                        This calendar will display the deadlines of universities
                    </Header>
                </Card.Content>
                <Card.Content>
                    {/* <Calendar activeStartDate={new Date(2022, 0, 1)} /> */}
                    {this.state.deadlines.length > 0 ? (
                        <Calendar
                            tileClassName={({ date, view }) => {
                                date = moment(new Date(date)).format(
                                    "MMMM Do YYYY"
                                );
                                if (this.state.deadlines.includes(date)) {
                                    console.log("temp");
                                    return "highlight";
                                }
                            }}
                        />
                    ) : null}
                    {/* <Calendar
                        defaultValue={
                            new Date(
                                this.deadlines2[0].getFullYear(),
                                this.deadlines2[0].getMonth(),
                                this.deadlines2[0].getDate()
                            )
                        }
                    /> */}

                    {/* value={dateState} onChange={changeDate} /> */}
                    <br />
                    {/* <Card.Meta>
                        Current selected date is{" "}
                        <b>{moment(dateState).format("MMMM Do YYYY")}</b>
                    </Card.Meta> */}
                </Card.Content>
            </Card>
        );
    }
}
