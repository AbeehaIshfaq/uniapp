import React from "react";
import { Container } from "semantic-ui-react";
import Navbar from "../components/navbar/Navbar";

import server from "../../server/server";
import moment from "moment";

class Viewuni extends React.Component {
    state = { uni: null };

    async componentDidMount() {
        const url = window.location.href.split("/");
        const uniId = url[url.length - 1];

        try {
            const { data } = await server.get(`/student/viewuni/${uniId}`);
            this.setState({ uni: data.uni });
        } catch (e) {
            console.log(e);
        }
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <>
                <header>
                    <Navbar />
                </header>
                <main>
                    <h1> </h1>
                    <Container align="center" style={{ margin: "2.5rem" }}>
                        <h1> {this.state.uni?.name} </h1>

                        <div align="center" className="ui steps">
                            <div className="step">
                                <i className="clock outline icon"></i>
                                <div className="content">
                                    <div className="title">Duration</div>
                                    <div className="description">4 years</div>
                                </div>
                            </div>
                            <div className=" step">
                                <i className="dollar icon"></i>
                                <div className="content">
                                    <div className="title">Fee</div>
                                    <div className="description">
                                        {this.state.uni?.fee} /year
                                    </div>
                                </div>
                            </div>
                            <div className=" step">
                                <i className="globe icon"></i>
                                <div className="content">
                                    <div className="title">Location</div>
                                    <div className="description">
                                        {this.state.uni?.city}
                                    </div>
                                </div>
                            </div>
                            <div className=" step">
                                <i className="calendar alternate outline icon"></i>
                                <div className="content">
                                    <div className="title">Deadline</div>
                                    <div className="description">
                                        {moment(
                                            this.state.uni?.deadline
                                        ).format("MMMM Do YYYY")}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2> Programes Offered </h2>

                        <div className="ui list">
                            {this.state.uni?.programsOffered.map((item) => (
                                <div className="item" key={item}>
                                    <div className="header">{item}</div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </main>
            </>
        );
    }
}

export default Viewuni;
